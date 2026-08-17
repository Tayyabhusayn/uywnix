"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Bot, Zap, Globe, TrendingUp, Mail, PhoneCall } from "lucide-react";

const stats = [
  { value: "<5 min", label: "Time to Deploy" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Languages" },
  { value: "24/7", label: "Global Support" },
];

const workflow = [
  { icon: Mail, label: "Lead capture", status: "1,240 today", color: "text-violet-400 bg-violet-500/10" },
  { icon: Bot, label: "AI qualification", status: "Active · 98%", color: "text-cyan-400 bg-cyan-500/10" },
  { icon: PhoneCall, label: "Follow-up calls", status: "86 booked", color: "text-emerald-400 bg-emerald-500/10" },
  { icon: TrendingUp, label: "Pipeline growth", status: "+34% this week", color: "text-amber-400 bg-amber-500/10" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-violet-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[480px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 grid-bg-subtle opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                AI Automation Agency · Dubai · USA · India · UK
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display text-white mb-6"
            >
              Your business,
              <br />
              <span className="gradient-text">running itself.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg"
            >
              AI agents that capture, qualify, and close — plus websites, software,
              and prototypes built to scale. One team, every build.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Link
                href="/audit"
                className="group inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-0.5"
              >
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-lg text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                Talk to Sales
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: product dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl p-6 shadow-2xl">
              {/* Window header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Live Agent Console
                </span>
              </div>

              {/* Workflow rows */}
              <div className="space-y-3">
                {workflow.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                          initial={{ width: "20%" }}
                          animate={{ width: `${55 + i * 10}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-300 whitespace-nowrap">{item.status}</span>
                  </motion.div>
                ))}
              </div>

              {/* Footer row of the card */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  All systems operational
                </div>
                <Globe className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
