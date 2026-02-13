import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // NVIDIA NIM Configuration
    const apiKey = process.env.NVIDIA_API_KEY;
    const baseURL = "https://integrate.api.nvidia.com/v1";
    
    if (!apiKey) {
      throw new Error("NVIDIA_API_KEY is not set");
    }

    const systemPrompt = `You are the official AI Sales Representative for UYWNIX (a Global AI Automation Agency).
Your goal is to be helpful, professional, and persuade the user to book a demo or audit.

Company Info:
- We build AI Employees for Support, Sales, and Ops.
- We save businesses 60% on costs.
- We operate in India, UAE, USA, Australia.

Keep your response concise (under 3 sentences).`;

    const response = await fetch(`${baseURL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-70b-instruct",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.5,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("NVIDIA API Error:", errorText);
      throw new Error(`NVIDIA API Error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat Error:", error);
    return NextResponse.json({ reply: "I am currently experiencing high traffic. Please try again or book a demo directly." });
  }
}
