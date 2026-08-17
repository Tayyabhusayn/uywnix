"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, Sparkles, ChevronDown, Bot, Zap, Globe, Presentation, Palette, Gamepad2, Plus } from "lucide-react";
import { useState } from "react";

const suggestions = [
  { icon: Globe, label: "Build website", href: "/services" },
  { icon: Presentation, label: "Create slides", href: "/services" },
  { icon: Palette, label: "Design", href: "/services" },
  { icon: Gamepad2, label: "Create games", href: "/ai-agent" },
  { icon: Plus, label: "More", href: "/contact" },
];

const stats = [
  { value: "<5 min", label: "Time to Deploy" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Languages" },
  { value: "24/7", label: "Global Support" },
];

export default function Hero() {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-violet-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[480px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 grid-bg-subtle opacity-20" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[22%] right-[14%] text-white/10"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bot className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute top-[45%] left-[8%] text-white/10"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Zap className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32 max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            UYWNIX — AI-first global tech solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-display text-white text-center mb-6"
        >
          What can I do <span className="gradient-text">for you?</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-slate-400 mb-10 text-center leading-relaxed"
        >
          Tell UYWNIX what you need — a website, app, prototype, or automation —
          and we'll build it for you.
        </motion.p>

        {/* ChatGPT-style input */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = prompt.trim()
                ? `/audit?goal=${encodeURIComponent(prompt.trim())}`
                : "/audit";
            }}
            className="flex items-center gap-3 rounded-3xl bg-white/[0.06] border border-white/15 focus-within:border-violet-400/60 focus-within:bg-white/[0.08] transition-all duration-300 p-2.5 pl-6 shadow-2xl shadow-violet-500/5"
          >
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Message UYWNIX… e.g. “Build me a landing page”"
              className="flex-1 bg-transparent text-white placeholder:text-slate-500 text-base outline-none py-2"
            />
            <button
              type="submit"
              aria-label="Send"
              className="shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center hover:opacity-90 active:scale-95 transition-all"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </form>
        </motion.div>

        {/* Suggestion chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {suggestions.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 hover:border-violet-400/50 hover:bg-white/[0.09] text-sm font-medium text-slate-300 hover:text-white transition-all duration-300"
            >
              <s.icon className="w-4 h-4 text-violet-400" />
              {s.label}
            </Link>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
