import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { company, sector, teamSize, tools, bottlenecks, name } = body;

    const apiKey = process.env.NVIDIA_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "AI engine not configured" }, { status: 503 });
    }

    const bottleneckList = Array.isArray(bottlenecks) && bottlenecks.length ? bottlenecks.join(", ") : "not specified";
    const toolsList = tools && tools.length ? tools : "not specified";

    const systemPrompt =
      "You are a senior AI automation consultant at UYWNIX, an AI agency. " +
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

    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-70b-instruct",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        max_tokens: 1200,
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("NVIDIA audit call failed:", response.status, errText.slice(0, 300));
      return NextResponse.json({ ok: false, error: "AI engine error" }, { status: 502 });
    }

    const data = await response.json();
    const report = data?.choices?.[0]?.message?.content || "";

    return NextResponse.json({ ok: true, report });
  } catch (error: any) {
    console.error("Audit endpoint error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
