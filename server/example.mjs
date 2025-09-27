import OpenAI from "openai";
import dotenv from "dotenv";
const openaiApiKey = process.env.OPENAI_API_KEY;
dotenv.config();
const client = new OpenAI({
  apiKey: openaiApiKey,
});

const response = await client.responses.create({
  model: "gpt-5-nano",
  input: "Write a one-sentence bedtime story.",
});

console.log(response.output_text);
