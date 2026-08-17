import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, company, sector, bottlenecks, source } = body;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const lines = [
      `🚨 *New Lead — ${source || "Website"}*`,
      "",
      `👤 Name: ${name || "—"}`,
      `📧 Email: ${email || "—"}`,
      company ? `🏢 Company: ${company}` : null,
      sector ? `🏭 Sector: ${sector}` : null,
      bottlenecks && bottlenecks.length ? `🔧 Bottlenecks: ${bottlenecks.join(", ")}` : null,
      message ? `💬 Message: ${message}` : null,
    ].filter(Boolean);

    let notified = false;
    if (BOT_TOKEN && CHAT_ID) {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: lines.join("\n"),
          parse_mode: "Markdown",
        }),
      });
      notified = res.ok;
      if (!res.ok) console.error("Telegram lead send failed:", await res.text());
    }

    console.log("[LEAD]", JSON.stringify({ name, email, message, company, sector, bottlenecks, source }));

    return NextResponse.json({ ok: true, notified });
  } catch (error: any) {
    console.error("Lead endpoint error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
