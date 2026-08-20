"use client";

import { motion } from "framer-motion";
import { Megaphone, Code2, Boxes, Brain, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Megaphone,
    title: "Marketing Automation",
    desc: "AI-powered campaigns that nurture, qualify, and convert leads on autopilot — email, WhatsApp, and ads in one system.",
    features: ["Lead nurturing flows", "AI content & copywriting", "Multi-channel campaigns"],
  },
  {
    icon: Brain,
    title: "AI Model Training & Fine-Tuning",
    desc: "Custom AI models trained and fine-tuned on your own data — for small companies and enterprises alike.",
    features: ["LLM fine-tuning on your data", "Custom model training", "Enterprise deployment"],
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    desc: "Autonomous agents and intelligent chatbots that handle support, sales, and operations around the clock.",
    features: ["Autonomous AI workforces", "24/7 support chatbots", "Workflow automation"],
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom web and mobile software, built fast with AI-augmented engineering — and maintained properly after launch.",
    features: ["Custom SaaS builds", "APIs & integrations", "AI features embedded"],
  },
  {
    icon: Boxes,
    title: "Prototype Building",
    desc: "Turn your idea into a clickable prototype in days — test it with real users before spending on a full build.",
    features: ["Clickable MVPs", "UI/UX design", "Demo-ready builds"],
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[760px] h-[420px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[320px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-bg-subtle opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-blue-300 uppercase tracking-widest mb-6">
            What we build
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            One team. <span className="gradient-text">Every build.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            From a clickable prototype to a full AI-powered product — we take ideas to launch
            and keep them growing.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/0 group-hover:bg-blue-500/20 blur-3xl rounded-full transition-all duration-500" />

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/25">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-blue-200 transition-colors"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
