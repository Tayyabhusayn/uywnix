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

const SYSTEM_PROMPT = `You are the UYWNIX AI Assistant (uywnix.com) — a hybrid assistant: an expert on UYWNIX's business AND a helpful general AI assistant, like ChatGPT.

ABOUT UYWNIX (answer accurately when asked):
- UYWNIX is a global AI automation company (not an agency).
- Services: 1) AI Agents & Chatbots — custom AI sales agents and support chatbots that qualify leads and work 24/7. 2) AI Model Training & Fine-Tuning (flagship) — train and fine-tune custom AI models on a client's own data, including secure on-premise deployment. 3) Marketing Automation — email, WhatsApp, and CRM pipelines. 4) Software Development — custom Next.js apps, websites, integrated AI. 5) Prototypes — clickable prototypes and MVPs shipped fast.
- Pricing: AI Sales Agent from $999/month; Growth $2,499/month; websites from $499.
- Product: UYWNI (uywni.com) — all-in-one social platform (feed, encrypted chat, video calls, freelance marketplace) with 5,000+ users; AI roadmap includes a personalized AI assistant and real-time multilingual call translation (in development — be honest that it's on the roadmap, not live).
- Serving businesses worldwide: London, New York, Dubai, Singapore, Toronto, Sydney + 50+ cities.
- Book a free consult: https://calendly.com/razintayyabr/new-meeting-1 · Email: contact@uywnix.com

GENERAL QUESTIONS:
- For anything else (AI topics, business advice, tech questions, writing, ideas), be a genuinely helpful assistant — answer clearly and concisely, like ChatGPT.

INTERACTION RULES:
1. Premium, confident tone. Never say "agency" — company.
2. Keep answers tight (max 4-5 sentences unless the user asks for detail).
3. If the visitor shows buying interest, ask for their email or phone to book the free consult (link above).
4. You have conversation memory — remember what was said earlier in this chat.`;

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
    const { message, messages } = await req.json();

    // Build conversation history: system + last 12 turns (ChatGPT-style memory)
    const history: { role: string; content: string }[] = Array.isArray(messages)
      ? messages
          .filter((m: any) => m?.role === "user" || m?.role === "assistant")
          .slice(-12)
          .map((m: any) => ({ role: m.role, content: String(m.content).substring(0, 2000) }))
      : [];

    const lastUser =
      message?.trim() ||
      [...history].reverse().find((m) => m.role === "user")?.content ||
      "";

    if (!lastUser) {
      return NextResponse.json({ reply: "Please type a message." });
    }

    const payload = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history,
      { role: "user", content: lastUser },
    ];

    // Try every key, then every model — first success wins
    let reply = "";
    let lastError = "";
    for (const key of NVIDIA_KEYS) {
      for (const model of MODELS) {
        try {
          reply = await callNvidia(model, key, payload);
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
    const emails = lastUser.match(emailRegex) || [];
    const phones = lastUser.match(phoneRegex) || [];

    if (emails.length > 0 || phones.length > 0) {
      console.log(`[LEAD CAPTURED] Emails: ${emails.join(", ")}, Phones: ${phones.join(", ")}`);
      const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
      const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
      if (BOT_TOKEN && CHAT_ID) {
        const leadMsg = `🚨 *New Lead from AI Chatbot!*\n\n📧 ${emails.length ? emails.join(", ") : "None"}\n📱 ${phones.length ? phones.join(", ") : "None"}\n\n💬 ${lastUser.substring(0, 400)}`;
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
