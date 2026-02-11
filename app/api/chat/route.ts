import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      You are the official AI Sales Representative for UYWNIX (a Global AI Automation Agency).
      Your goal is to be helpful, professional, and persuade the user to book a demo or audit.
      
      Company Info:
      - We build AI Employees for Support, Sales, and Ops.
      - We save businesses 60% on costs.
      - We operate in India, UAE, USA, Australia.
      
      User Message: "${message}"
      
      Reply as the agent (keep it under 3 sentences):
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({ reply: "I am currently experiencing high traffic. Please try again or book a demo directly." });
  }
}
