"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, source: "contact-form" }),
      });
      const data = await res.json();
      setStatus(data.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-slate-400">
          We'll get back to you within 24 hours. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div>
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Name</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Work Email</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="john@company.com" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Message</label>
        <textarea rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} className={inputCls} placeholder="Tell us about your business challenge..." />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-100 transition shadow-lg hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Request <Send className="w-4 h-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Email us directly at contact@uywnix.com
        </p>
      )}
    </form>
  );
}
