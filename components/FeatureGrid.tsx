"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Megaphone, 
  TrendingUp, 
  Settings, 
  Headphones, 
  Wallet, 
  Monitor, 
  Users, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Automate campaigns & content.",
    href: "/services",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    icon: TrendingUp,
    title: "Sales",
    desc: "Qualify leads 24/7.",
    href: "/ai-agent",
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    icon: Settings,
    title: "Operations",
    desc: "Streamline internal workflows.",
    href: "/services",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: Headphones,
    title: "Customer Exp.",
    desc: "Instant AI support agents.",
    href: "/contact",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    icon: Wallet,
    title: "Finance",
    desc: "Invoice processing & OCR.",
    href: "/services",
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    icon: Monitor,
    title: "IT",
    desc: "System integrations.",
    href: "/services",
    color: "text-cyan-500",
    bg: "bg-cyan-50"
  },
  {
    icon: Users,
    title: "HR",
    desc: "Onboarding automation.",
    href: "/services",
    color: "text-pink-500",
    bg: "bg-pink-50"
  },
  {
    icon: Zap,
    title: "Productivity",
    desc: "Personal AI assistants.",
    href: "/services",
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function FeatureGrid() {
  return (
    <section className="container mx-auto px-4 pb-32">
      <div className="flex flex-col items-center mb-16">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Ecosystem</span>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Solutions Across Your Business</h2>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {features.map((feature, i) => (
          <motion.div key={i} variants={item}>
            <Link 
              href={feature.href} 
              className="group block p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-lg hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-black transition">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
