import { NextResponse } from "next/server";

const NVIDIA_BASE = "https://integrate.api.nvidia.com/v1";

const NVIDIA_KEYS = [
  process.env.NVIDIA_API_KEY_1,
  process.env.NVIDIA_API_KEY_2,
  process.env.NVIDIA_API_KEY_3,
  process.env.NVIDIA_API_KEY,
].filter(Boolean) as string[];

const MODELS = [
  "nvidia/nemotron-3.5-lightning-30b-a3b",
  "minimaxai/minimax-m3",
  "meta/llama-3.3-70b-instruct",
];

const SYSTEM_PROMPT = `You are an expert web designer. Create a complete, beautiful, single-file HTML landing page for a small business.
Requirements:
- Output ONLY the raw HTML code. No markdown fences, no explanations, no backticks.
- A complete valid HTML document with inline CSS inside <style>.
- Modern, professional design: hero section with business name and tagline, services/products section, about, contact section with a contact form (non-functional, just UI), footer.
- Use a clean color scheme (deep blue #3363D5 accents), good typography (system font stack), responsive layout with flexbox/grid, subtle shadows and rounded corners.
- Include the business name and details the user provides.
- No JavaScript required (keep it simple), but a tiny bit for smooth scroll is fine.
- Keep the total file under 15KB.`;

async function callNvidia(model: string, apiKey: string, userPrompt: string) {
  const res = await fetch(`${NVIDIA_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.5,
      max_tokens: 4000,
      chat_template_kwargs: { enable_thinking: false },
    }),
  });
  if (!res.ok) throw new Error(`NVIDIA ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

function cleanHtml(raw: string): string {
  let html = raw.trim();
  // strip markdown fences if the model ignored instructions
  html = html.replace(/^```html/i, "").replace(/^```/m, "").replace(/```$/m, "").trim();
  if (!html.toLowerCase().startsWith("<!doctype") && !html.toLowerCase().startsWith("<html")) {
    const start = html.indexOf("<html");
    if (start >= 0) html = html.slice(start);
  }
  return html;
}

export async function POST(req: Request) {
  try {
    const { business, description } = await req.json();
    if (!business || !business.trim()) {
      return NextResponse.json({ ok: false, error: "Business name is required" }, { status: 400 });
    }

    const userPrompt =
      `Business name: ${business}\n` +
      `What they do: ${description || "Please describe a professional business in a way that makes sense for the name."}\n` +
      `Build the complete single-file HTML landing page now.`;

    let html = "";
    for (const key of NVIDIA_KEYS) {
      for (const model of MODELS) {
        try {
          html = cleanHtml(await callNvidia(model, key, userPrompt));
          if (html.length > 500) break;
        } catch {}
      }
      if (html.length > 500) break;
    }

    if (html.length <= 500) {
      return NextResponse.json({ ok: false, error: "AI engine could not generate the site" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, html });
  } catch (error: any) {
    console.error("Generate-site Error:", error);
    return NextResponse.json({ ok: false, error: "Generation failed" }, { status: 500 });
  }
}
