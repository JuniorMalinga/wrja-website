import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log("=========================================");
console.log("Starting WRJA Assistant with Gemini AI...");
console.log("=========================================");
console.log("Current directory:", __dirname);

// CORS configuration
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

app.use(express.json());

// Check Knowledge folder
console.log("\nChecking Knowledge folder...");
const knowledgePath = join(__dirname, 'Knowledge');
if (fs.existsSync(knowledgePath)) {
  console.log("✅ Knowledge folder exists!");
  const files = fs.readdirSync(knowledgePath);
  console.log("📁 Files in Knowledge folder:", files);
} else {
  console.log("❌ Knowledge folder NOT found!");
}

// Initialize Gemini AI
console.log("\nInitializing Gemini AI...");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-3.6-flash"
});
console.log("✅ Gemini AI initialized");

// Load knowledge base from the Knowledge folder
let knowledgeBase = { 
  programs: [], 
  faqs: [], 
  clubs: [], 
  events: [], 
  instructors: [] 
};

console.log("\nLoading knowledge base...");

try {
  const programsPath = join(__dirname, 'Knowledge', 'programs.json');
  const faqsPath = join(__dirname, 'Knowledge', 'faq.json');
  const clubsPath = join(__dirname, 'Knowledge', 'clubs.json');
  const eventsPath = join(__dirname, 'Knowledge', 'events.json');
  const instructorsPath = join(__dirname, 'Knowledge', 'instructors.json');
  
  console.log("Looking for files:");
  console.log("  - programs.json:", fs.existsSync(programsPath) ? "✅" : "❌");
  console.log("  - faq.json:", fs.existsSync(faqsPath) ? "✅" : "❌");
  console.log("  - clubs.json:", fs.existsSync(clubsPath) ? "✅" : "❌");
  console.log("  - events.json:", fs.existsSync(eventsPath) ? "✅" : "❌");
  console.log("  - instructors.json:", fs.existsSync(instructorsPath) ? "✅" : "❌");
  
  if (fs.existsSync(programsPath)) {
    const content = fs.readFileSync(programsPath, 'utf8');
    knowledgeBase.programs = JSON.parse(content);
    console.log("✅ Loaded programs.json -", knowledgeBase.programs.length, "entries");
  } else {
    console.log("⚠️ programs.json not found");
  }
  
  if (fs.existsSync(faqsPath)) {
    const content = fs.readFileSync(faqsPath, 'utf8');
    knowledgeBase.faqs = JSON.parse(content);
    console.log("✅ Loaded faq.json -", knowledgeBase.faqs.length, "entries");
  } else {
    console.log("⚠️ faq.json not found");
  }
  
  if (fs.existsSync(clubsPath)) {
    const content = fs.readFileSync(clubsPath, 'utf8');
    knowledgeBase.clubs = JSON.parse(content);
    console.log("✅ Loaded clubs.json -", knowledgeBase.clubs.length, "entries");
  } else {
    console.log("⚠️ clubs.json not found");
  }
  
  if (fs.existsSync(eventsPath)) {
    const content = fs.readFileSync(eventsPath, 'utf8');
    knowledgeBase.events = JSON.parse(content);
    console.log("✅ Loaded events.json -", knowledgeBase.events.length, "entries");
  } else {
    console.log("⚠️ events.json not found");
  }
  
  if (fs.existsSync(instructorsPath)) {
    const content = fs.readFileSync(instructorsPath, 'utf8');
    knowledgeBase.instructors = JSON.parse(content);
    console.log("✅ Loaded instructors.json -", knowledgeBase.instructors.length, "entries");
  } else {
    console.log("⚠️ instructors.json not found");
  }
  
  const totalEntries = knowledgeBase.programs.length + 
                       knowledgeBase.faqs.length + 
                       knowledgeBase.clubs.length +
                       knowledgeBase.events.length +
                       knowledgeBase.instructors.length;
  
  console.log("\n📚 Total knowledge entries:", totalEntries);
  
} catch (error) {
  console.error("❌ Error loading knowledge base:", error);
}
function searchKnowledgeBase(query) {
  const allKnowledge = [
    ...knowledgeBase.programs,
    ...knowledgeBase.faqs,
    ...knowledgeBase.clubs,
    ...knowledgeBase.events,
    ...knowledgeBase.instructors
  ];
  
  if (allKnowledge.length === 0) {
    return "No knowledge base loaded.";
  }
  
  const queryLower = query.toLowerCase();
  
  // Handle common typos
  let searchQuery = queryLower;
  searchQuery = searchQuery.replace('wjra', 'wrja');
  searchQuery = searchQuery.replace('west rand judo', 'wrja');
  
  // Split query into individual words for better matching
  const queryWords = searchQuery.split(/\s+/).filter(word => word.length > 2);
  
  const matches = allKnowledge.filter(item => {
    // Check if item has "wrja" or "wjra" in keywords
    const hasWrja = item.keywords.some(k => 
      k.toLowerCase().includes('wrja') || k.toLowerCase().includes('wjra')
    );
    
    // Check all keywords
    const keywordMatch = item.keywords.some(keyword => 
      searchQuery.includes(keyword.toLowerCase())
    );
    
    // Check title
    const titleMatch = searchQuery.includes(item.title.toLowerCase());
    
    // Check if any query word matches any keyword
    const wordMatch = queryWords.some(word =>
      item.keywords.some(keyword => 
        keyword.toLowerCase().includes(word) || word.includes(keyword.toLowerCase())
      )
    );
    
    // Check content for partial matches
    const contentLower = item.content.toLowerCase();
    const contentMatch = queryWords.some(word =>
      contentLower.includes(word)
    );
    
    // If query contains "wrja" or "wjra", match items that have these keywords
    const wrjaMatch = (searchQuery.includes('wrja') || searchQuery.includes('wjra')) && hasWrja;
    
    return keywordMatch || titleMatch || wordMatch || contentMatch || wrjaMatch;
  });
  
  if (matches.length === 0) {
    return "No specific information found in the knowledge base.";
  }
  
  return matches.map(m => m.content).join("\n\n");
}