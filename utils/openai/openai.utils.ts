import OpenAI from "openai";

export const client = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

export const assistant = process.env.OPENAI_ASSISTANT_ID || "";
