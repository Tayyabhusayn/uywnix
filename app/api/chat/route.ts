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

    const systemPrompt = `You are the primary AI Sales Executive for UYWNIX (Global AI Automation Agency).
Your goal: Be extremely knowledgeable, professional, and drive high-ticket lead conversion.

CORE SERVICES (Memorize these):
1. AI Sales Agents: 24/7 lead qualification, booking meetings, and automated follow-ups.
2. AI Voice Employees: Human-like voice bots for phone support and appointment scheduling (HIPAA/GDPR compliant).
3. Workflow Automation: Full-stack integration (CRM, Slack, Email, ERP). We build "Invisible Pipelines".
4. Enterprise Cybersecurity: Comprehensive security audits and AI-driven threat detection for automated infra.
5. High-Ticket Web/App Dev: Custom Next.js & React Native apps with integrated AI backends.
6. AI Marketing Scale: Automated data-driven ad management and high-volume content generation.

CRITICAL PRICING & OPS:
- Setup Fees: Typically start at $5,000 for basic AI Employee deployment.
- High-Ticket Focus: We focus on 10x ROI for clients.
- Global Presence: India, UAE (Dubai), USA, UK, Australia.
- Clients: Lawyers, Real Estate Brokers, Dental Clinics, CPAs, and Enterprise Solar.

INTERACTION RULES:
1. Always maintain a premium, elite agency tone. 
2. If a user asks about services, explain how we provide 10x ROI and 60% cost reduction.
3. DATA CAPTURE: If the user shows ANY interest, you MUST ask for their Email or WhatsApp so a "Human Strategic Advisor" can follow up.
4. Keep responses high-impact but concise (max 3-4 sentences).`;

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

    // Lead Capture Logic
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const phoneRegex = /(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4,6}/g;
    
    const emails = message.match(emailRegex) || [];
    const phones = message.match(phoneRegex) || [];

    if (emails.length > 0 || phones.length > 0) {
      console.log(`[LEAD CAPTURED] Emails: ${emails.join(", ")}, Phones: ${phones.join(", ")}`);
      
      // Proactive notification via Telegram
      try {
        const leadMsg = `🚨 *New Lead Captured from Chatbot!*\n\n📧 Emails: ${emails.length > 0 ? emails.join(", ") : "None"}\n📱 Phones: ${phones.length > 0 ? phones.join(", ") : "None"}\n\n💬 Message: ${message}`;
        
        // Telegram Bot API integration
        // Replace BOT_TOKEN and CHAT_ID with your actual credentials
        const BOT_TOKEN = "8538411059:AAGXQ_AWvxj5kxH_N-r4skDHulXSOFrEM38"; 
        const CHAT_ID = "6318300713"; 
        
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: leadMsg,
            parse_mode: "Markdown",
          }),
        });
      } catch (err) {
        console.error("Lead notification failed:", err);
      }
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat Error:", error);
    return NextResponse.json({ reply: "I am currently experiencing high traffic. Please try again or book a demo directly." });
  }
}
