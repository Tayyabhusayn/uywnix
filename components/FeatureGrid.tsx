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
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Automate campaigns, personalize content, and scale your reach with AI-powered marketing workflows.",
    href: "/services",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
  },
  {
    icon: TrendingUp,
    title: "Sales",
    desc: "Qualify leads 24/7 with intelligent agents that never miss an opportunity.",
    href: "/ai-agent",
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
  },
  {
    icon: Settings,
    title: "Operations",
    desc: "Streamline workflows, reduce costs, and boost efficiency across your organization.",
    href: "/services",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Headphones,
    title: "Customer Experience",
    desc: "Deploy AI support agents that resolve issues instantly, any time of day.",
    href: "/contact",
    gradient: "from-blue-500 to-blue-500",
    bg: "bg-gradient-to-br from-blue-500/10 to-blue-500/10"
  },
  {
    icon: Wallet,
    title: "Finance",
    desc: "Automate invoice processing, reconciliation, and financial reporting with precision.",
    href: "/services",
    gradient: "from-yellow-500 to-orange-500",
    bg: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
  },
  {
    icon: Monitor,
    title: "MVP Hub",
    desc: "From idea to MVP in weeks. Rapid product development powered by AI.",
    href: "/services",
    gradient: "from-cyan-500 to-teal-500",
    bg: "bg-gradient-to-br from-cyan-500/10 to-teal-500/10"
  },
  {
    icon: Users,
    title: "HR & People",
    desc: "Transform onboarding, employee support, and talent management with AI.",
    href: "/services",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-gradient-to-br from-pink-500/10 to-rose-500/10"
  },
  {
    icon: Zap,
    title: "Productivity",
    desc: "Personal AI assistants that handle the busy work so you can focus on what matters.",
    href: "/services",
    gradient: "from-indigo-500 to-blue-500",
    bg: "bg-gradient-to-br from-indigo-500/10 to-blue-500/10"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function FeatureGrid() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg-subtle opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            Enterprise Solutions
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-white mb-6"
          >
            AI That Works Across
            <br />
            <span className="gradient-text">Every Department</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Deploy intelligent agents tailored to your industry. 
            From marketing to operations, transform every team with AI.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Link 
                href={feature.href} 
                className="group relative block p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500 h-full overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.bg}`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {feature.desc}
                  </p>
                  
                  {/* Learn more */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-0.5"
          >
            Explore All Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
