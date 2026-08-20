import { NextResponse } from "next/server";

const NVIDIA_BASE = "https://integrate.api.nvidia.com/v1";

// Key rotation: 3 NVIDIA keys, tried in order until one responds
const NVIDIA_KEYS = [
  process.env.NVIDIA_API_KEY_1,
  process.env.NVIDIA_API_KEY_2,
  process.env.NVIDIA_API_KEY_3,
  process.env.NVIDIA_API_KEY,
].filter(Boolean) as string[];

// Model fallback chain: proven working first
const MODELS = [
  "nvidia/nemotron-3.5-lightning-30b-a3b",
  "minimaxai/minimax-m3",
  "meta/llama-3.3-70b-instruct",
];

const SYSTEM_PROMPT = `You are the AI Assistant for UYWNIX (uywnix.com), a global AI automation company. You are professional, sharp, and focused on helping visitors understand and buy our services.

CORE SERVICES (use these, never invent others):
1. AI Agents & Chatbots: custom AI sales agents and support chatbots that qualify leads, answer customers, and work 24/7.
2. AI Model Training & Fine-Tuning (flagship): we train and fine-tune custom AI models on a client's own data, for small companies and enterprises, including secure on-premise deployment.
3. Marketing Automation: automated email, WhatsApp, and CRM pipelines that capture and convert leads.
4. Software Development: custom Next.js apps, websites, and integrated AI.
5. Prototypes: clickable prototypes and MVPs shipped fast.

VALUE PROPOSITION:
- We help small teams operate like large enterprises with ROI-driven AI.
- Serving businesses worldwide: London, New York, Dubai, Singapore, Toronto, Sydney, and 50+ cities.
- Pricing: AI Sales Agent from $999/month; Growth plans $2,499/month; websites from $499.

INTERACTION RULES:
1. Maintain a premium, confident tone. Never say "agency" — we are a company.
2. Keep answers high-impact and concise (max 4-5 sentences unless asked for details).
3. DATA CAPTURE: if the visitor shows interest (asks about services, pricing, or a project), ask for their email or phone number to book a free consultation at https://calendly.com/razintayyabr/new-meeting-1.
4. Be honest: if asked about features that are not built yet (like live call translation), say it is on the roadmap and in development.`;

async function callNvidia(model: string, apiKey: string, messages: any[]) {
  const res = await fetch(`${NVIDIA_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.6,
      max_tokens: 700,
      chat_template_kwargs: { enable_thinking: false },
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`NVIDIA ${res.status}: ${err.substring(0, 120)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message || !message.trim()) {
      return NextResponse.json({ reply: "Please type a message." });
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: message },
    ];

    // Try every key, then every model — first success wins
    let reply = "";
    let lastError = "";
    for (const key of NVIDIA_KEYS) {
      for (const model of MODELS) {
        try {
          reply = await callNvidia(model, key, messages);
          if (reply) break;
        } catch (e: any) {
          lastError = e.message;
        }
      }
      if (reply) break;
    }

    if (!reply) {
      return NextResponse.json({
        reply: `I'm temporarily unavailable (${lastError.substring(0, 80)}). Please email contact@uywnix.com — we reply fast.`,
      });
    }

    // Lead capture: email / phone in the visitor's message → notify
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const phoneRegex = /(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4,6}/g;
    const emails = message.match(emailRegex) || [];
    const phones = message.match(phoneRegex) || [];

    if (emails.length > 0 || phones.length > 0) {
      console.log(`[LEAD CAPTURED] Emails: ${emails.join(", ")}, Phones: ${phones.join(", ")}`);
      const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
      const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
      if (BOT_TOKEN && CHAT_ID) {
        const leadMsg = `🚨 *New Lead from AI Chatbot!*\n\n📧 ${emails.length ? emails.join(", ") : "None"}\n📱 ${phones.length ? phones.join(", ") : "None"}\n\n💬 ${message.substring(0, 400)}`;
        try {
          await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, text: leadMsg, parse_mode: "Markdown" }),
          });
        } catch {}
      }
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat Error:", error);
    return NextResponse.json({ reply: `Connection error: ${error.message}` });
  }
}
