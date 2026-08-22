import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { generateWRJAResponse } from "./ai.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Health check

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "WRJA AI server is running",
  });
});

// Gemini test

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        error: "A message is required.",
      });
    }

    const answer = await generateWRJAResponse(
      message.trim()
    );

    res.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("Gemini error:", error);

    res.status(500).json({
      success: false,
      error: "Gemini could not generate a response.",
    });
  }
});

// Start server

app.listen(PORT, () => {
  console.log(
    `WRJA AI server running at http://localhost:${PORT}`
  );
});