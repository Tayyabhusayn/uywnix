import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, company, sector, bottlenecks, source } = body;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

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

    const text = lines.join("\n");

    // Channel 1: Telegram (if configured)
    let notified = false;
    if (BOT_TOKEN && CHAT_ID) {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
      });
      notified = res.ok;
      if (!res.ok) console.error("Telegram lead send failed:", await res.text());
    }

    // Channel 2: Email (via Gmail SMTP app password)
    let emailed = false;
    if (SMTP_USER && SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });
        await transporter.sendMail({
          from: `"UYWNIX Leads" <${SMTP_USER}>`,
          to: SMTP_USER,
          subject: `🚨 New Lead — ${source || "Website"}`,
          text: text.replace(/\*/g, ""),
        });
        emailed = true;
      } catch (err: any) {
        console.error("Email lead send failed:", err.message);
      }
    }

    console.log("[LEAD]", JSON.stringify({ name, email, message, company, sector, bottlenecks, source }));

    return NextResponse.json({ ok: true, notified, emailed });
  } catch (error: any) {
    console.error("Lead endpoint error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
