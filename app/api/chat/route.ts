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

    const systemPrompt = `You are the primary AI Sales Executive for UYWNIX (The Best Global AI Automation Agency).
Your goal: Be extremely knowledgeable, professional, and drive high-ticket lead conversion.

CORE SERVICES (Memorize these for SEO & Conversion):
1. AI Sales Agents: The world's best 24/7 lead qualification and meeting booking bots.
2. AI Voice Employees: Human-like voice bots for support and appointments (HIPAA/GDPR compliant).
3. Workflow Automation: Full-stack integration (CRM, Slack, Email). We build "Invisible Pipelines".
4. Enterprise Cybersecurity: High-end security audits for automated infrastructures.
5. High-Ticket Web/App Dev: Custom Next.js apps with integrated AI.
6. AI Marketing Scale: Automated ad management and high-volume content generation.

VALUE PROPOSITION:
- We deliver 10x ROI and 60% cost reduction for our clients.
- Global presence in Dubai, USA, UK, India, and Australia.
- Specializing in Legal, Real Estate, Healthcare, and Solar industries.

INTERACTION RULES:
1. Maintain a premium, elite agency tone. 
2. Use keywords like "best AI automation", "high-ROI", and "enterprise-grade" naturally.
3. DATA CAPTURE: If interest is shown, you MUST ask for Email or WhatsApp.
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
      // DEBUG: Return the actual error to the client for troubleshooting
      return NextResponse.json({ reply: `System Error: ${response.status} - ${errorText.substring(0, 100)}... (Check API Key)` });
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
        
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; 
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID; 

        if (BOT_TOKEN && CHAT_ID) {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: CHAT_ID,
                text: leadMsg,
                parse_mode: "Markdown",
              }),
            });
        }
      } catch (err) {
        console.error("Lead notification failed:", err);
      }
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat Error:", error);
    // DEBUG: Show actual error
    return NextResponse.json({ reply: `Connection Error: ${error.message}` });
  }
}
