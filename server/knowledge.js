import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knowledgeDirectory = path.join(
  __dirname,
  "knowledge"
);

// --------------------------------------------------
// Load JSON knowledge files
// --------------------------------------------------

function loadKnowledgeBase() {
  const files = fs
    .readdirSync(knowledgeDirectory)
    .filter((file) => file.endsWith(".json"));

  let documents = [];

  for (const file of files) {
    const filePath = path.join(
      knowledgeDirectory,
      file
    );

    try {
      const data = JSON.parse(
        fs.readFileSync(filePath, "utf8")
      );

      if (Array.isArray(data)) {
        documents = documents.concat(data);
      } else {
        console.warn(
          `Skipping ${file}: expected an array`
        );
      }
    } catch (error) {
      console.error(
        `Could not load ${file}:`,
        error
      );
    }
  }

  return documents;
}

const knowledgeBase = loadKnowledgeBase();

console.log(
  `Loaded ${knowledgeBase.length} WRJA knowledge documents.`
);

// --------------------------------------------------
// Convert text into searchable words
// --------------------------------------------------

function tokenize(text = "") {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
}

// --------------------------------------------------
// Search WRJA knowledge
// --------------------------------------------------

export function searchKnowledgeBase(
  query,
  limit = 5
) {
  const queryWords = tokenize(query);

  if (queryWords.length === 0) {
    return [];
  }

  const results = knowledgeBase.map((document) => {
    const searchableText = [
      document.title,
      document.name,
      document.category,
      ...(document.keywords || []),
      document.content
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const documentWords = tokenize(searchableText);

    let score = 0;

    for (const word of queryWords) {

      // General word match
      if (documentWords.includes(word)) {
        score += 1;
      }

      // Keyword match gets additional weight
      if (
        document.keywords?.some(
          (keyword) =>
            keyword.toLowerCase() === word
        )
      ) {
        score += 3;
      }

      // Title match gets additional weight
      if (
        document.title
          ?.toLowerCase()
          .includes(word)
      ) {
        score += 2;
      }
    }

    return {
      ...document,
      score
    };
  });

  return results
    .filter(
      (document) => document.score > 0
    )
    .sort(
      (a, b) => b.score - a.score
    )
    .slice(0, limit);
}