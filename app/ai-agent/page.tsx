"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, ArrowUp, Sparkles, Zap, MessageSquare, Workflow, ShieldCheck } from "lucide-react";

const suggestions = [
  "Automate my lead follow-ups",
  "Write a customer support reply",
  "What can AI agents automate in my business?",
  "Build me a demo chatbot",
];

const capabilities = [
  { icon: MessageSquare, title: "Sales & Support Agents", desc: "Agents that qualify leads, answer customers, and work 24/7." },
  { icon: Workflow, title: "Workflow Automation", desc: "Connect your tools — CRM, email, WhatsApp — into one pipeline." },
  { icon: Sparkles, title: "Content Generation", desc: "Emails, posts, product copy — generated in your brand voice." },
  { icon: ShieldCheck, title: "Enterprise Safety", desc: "Guardrails, logging, and human handoff built in." },
];

export default function AiAgentPage() {
  const [messages, setMessages] = useState<{ role: "user" | "agent"; content: string }[]>([
    { role: "agent", content: "Hello! I am the UYWNIX Business Agent. Ask me anything about automating your workflows — or tap a suggestion below. 🤖" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [siteName, setSiteName] = useState("");
  const [siteDesc, setSiteDesc] = useState("");
  const [genStatus, setGenStatus] = useState<"" | "busy" | "done" | "error">("");
  const [siteHtml, setSiteHtml] = useState("");

  const handleSend = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setInput("");
    setIsTyping(true);

    try {
      const history = messages.map((m) => ({
        role: m.role === "agent" ? "assistant" : "user",
        content: m.content,
      }));
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, messages: history }),
      });
      if (!response.ok) throw new Error("API Error");
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "agent", content: data.reply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: "agent", content: "I am experiencing high traffic. Please try again later — or book a free audit and a human will get back to you within 24 hours." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const generateSite = async () => {
    if (!siteName.trim()) return;
    setGenStatus("busy");
    try {
      const r = await fetch("/api/generate-site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ business: siteName, description: siteDesc }),
      });
      const d = await r.json();
      if (d.ok && d.html) {
        setSiteHtml(d.html);
        setGenStatus("done");
      } else {
        setGenStatus("error");
      }
    } catch {
      setGenStatus("error");
    }
  };

  const downloadSite = () => {
    const blob = new Blob([siteHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(siteName || "website").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white">
            UYWNIX
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white">
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="py-12 md:py-20 container mx-auto px-4 relative overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Bot className="w-4 h-4" /> AI Business Agent
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Your business, <span className="gradient-text">working 24/7.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Try the demo agent below — this is the same technology we deploy for clients: sales agents, support agents, and full workflow automation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Chat window */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">UYWNIX Auto-Agent</p>
                <p className="text-xs text-green-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4 h-[380px] overflow-y-auto">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-white text-slate-900 rounded-br-md"
                        : "bg-blue-500/10 border border-blue-400/20 text-slate-200 rounded-bl-md"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl bg-blue-500/10 border border-blue-400/20 rounded-bl-md text-sm text-slate-400">
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 py-4 border-t border-white/10 bg-slate-950/50">
              <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about automation..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400/50"
                />
                <button
                  onClick={() => handleSend()}
                  className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100 transition shrink-0"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* AI Website Builder */}
          <div className="mt-8 bg-white/[0.04] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Free AI Website Builder</p>
                <p className="text-xs text-slate-400">Generate a complete single-file website in seconds — download it, host it anywhere.</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <input
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="Business name (e.g. Al Noor Bakery)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400/50"
              />
              <textarea
                value={siteDesc}
                onChange={(e) => setSiteDesc(e.target.value)}
                placeholder="What does the business do? (e.g. bakery in Dubai selling fresh bread and cakes)"
                rows={2}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400/50 resize-none"
              />
              <div className="flex items-center gap-3">
                <button
                  onClick={generateSite}
                  disabled={genStatus === "busy" || !siteName.trim()}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-sm font-bold transition shrink-0"
                >
                  {genStatus === "busy" ? "Generating..." : "Generate Website"}
                </button>
                {genStatus === "done" && (
                  <button
                    onClick={downloadSite}
                    className="px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-sm font-bold transition shrink-0"
                  >
                    Download .HTML
                  </button>
                )}
                {genStatus === "error" && (
                  <span className="text-xs text-red-400">Generation failed — try again.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              That demo is one agent. We deploy whole teams of them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {capabilities.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{c.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/audit" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition">
              <Zap className="w-4 h-4" /> Get Your Free Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
