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
      temperature: 0.4,
      max_tokens: 1500,
      chat_template_kwargs: { enable_thinking: false },
    }),
  });
  if (!res.ok) throw new Error(`NVIDIA ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { company, sector, teamSize, tools, bottlenecks, name } = body;

    const bottleneckList = Array.isArray(bottlenecks) && bottlenecks.length ? bottlenecks.join(", ") : "not specified";
    const toolsList = tools && tools.length ? tools : "not specified";

    const systemPrompt =
      "You are a senior AI automation consultant at UYWNIX, an AI automation company. " +
      "You produce concise, concrete, business-grade AI audit reports. " +
      "Answer with a markdown report containing exactly these sections: " +
      "**AI Quick Wins** (3-5 specific automations with estimated time saved), " +
      "**Recommended Tools & Stack** (concrete products/services), " +
      "**Roadmap** (30/60/90 days), and " +
      "**Estimated Impact** (time/cost saved per week). " +
      "Keep it tight, specific to the company and industry given, and actionable.";

    const userPrompt =
      `Company: ${company || "Not provided"}\n` +
      `Industry: ${sector || "Not provided"}\n` +
      `Team size: ${teamSize || "Not provided"}\n` +
      `Tools currently used: ${toolsList}\n` +
      `Pain points / bottlenecks: ${bottleneckList}\n` +
      `Founder/contact name: ${name || "Not provided"}`;

    let report = "";
    for (const key of NVIDIA_KEYS) {
      for (const model of MODELS) {
        try {
          report = await callNvidia(model, key, [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ]);
          if (report) break;
        } catch {}
      }
      if (report) break;
    }

    if (!report) {
      return NextResponse.json({ ok: false, error: "AI engine unavailable" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, report });
  } catch (error: any) {
    console.error("Audit Error:", error);
    return NextResponse.json({ ok: false, error: "Audit failed" }, { status: 500 });
  }
}
