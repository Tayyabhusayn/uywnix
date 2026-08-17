"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  ChevronDown,
  Globe,
  Presentation,
  Palette,
  Gamepad2,
  Plus,
  Bot,
  Zap,
} from "lucide-react";

const tasks = [
  { icon: Globe, label: "Build website", href: "/services", gradient: "from-violet-500 to-indigo-600" },
  { icon: Presentation, label: "Create slides", href: "/services", gradient: "from-cyan-500 to-blue-600" },
  { icon: Palette, label: "Design", href: "/services", gradient: "from-pink-500 to-rose-600" },
  { icon: Gamepad2, label: "Create games", href: "/ai-agent", gradient: "from-amber-500 to-orange-600" },
  { icon: Plus, label: "More", href: "/contact", gradient: "from-slate-500 to-slate-700" },
];

const stats = [
  { value: "<5 min", label: "Time to Deploy" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Languages" },
  { value: "24/7", label: "Global Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-violet-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[480px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[400px] bg-indigo-600/10 blur-[110px] rounded-full" />
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

      <div className="container mx-auto px-6 relative z-10 py-32">
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
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto text-center leading-relaxed"
        >
          Autonomous AI agents, marketing automation, and full builds — websites,
          software, prototypes, and games. Tell us the goal, we ship it.
        </motion.p>

        {/* Task cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-16"
        >
          {tasks.map((task, i) => (
            <motion.div key={task.label} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Link
                href={task.href}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-violet-400/50 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${task.gradient} flex items-center justify-center shadow-lg`}>
                  <task.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {task.label}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/audit"
            className="group inline-flex items-center gap-2 bg-white text-slate-900 h-13 px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-0.5"
          >
            Start Building
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/ai-agent"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-lg text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
          >
            <Play className="w-5 h-5 text-violet-400" />
            Watch Demo
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 max-w-4xl mx-auto"
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
