"use client";

import { motion } from "framer-motion";
import { Star, Shield, Zap, Globe, Award, TrendingUp } from "lucide-react";

const logos = [
  { name: "AI Workflows", icon: Zap },
  { name: "Automation", icon: TrendingUp },
  { name: "Chatbots", icon: Star },
  { name: "Integrations", icon: Globe },
  { name: "24/7 Operations", icon: Shield },
  { name: "Voice AI", icon: Award },
  { name: "Data Pipelines", icon: Zap },
  { name: "Custom Agents", icon: TrendingUp },
];

const stats = [
  { value: "24/7", label: "Autonomous Operation" },
  { value: "50+", label: "Languages" },
  { value: "<5 min", label: "Time to Deploy" },
];

export default function TrustBar() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg-subtle opacity-30" />
      
      {/* Stats */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black gradient-text">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Text */}
      <div className="text-center mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-slate-400 uppercase tracking-widest"
        >
          Trusted by teams that run on automation
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Logos */}
        <div className="flex animate-marquee whitespace-nowrap items-center gap-16 py-4">
          {[...logos, ...logos].map((logo, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/50 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <logo.icon className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-bold text-slate-600 tracking-wide">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-wrap justify-center gap-6">
          {["Privacy-first", "Security-first", "GDPR-aligned", "Encrypted by default"].map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold"
            >
              <Shield className="w-3 h-3 text-green-500" />
              {cert}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
