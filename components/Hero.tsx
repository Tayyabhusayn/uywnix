"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, ChevronDown, Bot, Zap, Cpu, Shield, Globe, TrendingUp } from "lucide-react";
import { useRef, useState } from "react";

// Animated background shapes
const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay }}
    className={className}
  />
);

// Stat counter component
const StatItem = ({ value, label, suffix = "", delay = 0 }: { value: string; label: string; suffix?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <div className="text-4xl md:text-5xl font-black tracking-tight">
      <span className="gradient-text">{value}</span>
      <span className="text-slate-300">{suffix}</span>
    </div>
    <div className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">{label}</div>
  </motion.div>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-white">
      {/* Premium Grid Background */}
      <div className="absolute inset-0 grid-bg-subtle opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary orb */}
        <FloatingShape 
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-violet-200/40 via-purple-200/30 to-transparent blur-3xl animate-blob"
          delay={0.2}
        />
        <FloatingShape 
          className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-200/40 via-cyan-200/20 to-transparent blur-3xl animate-blob animation-delay-2000"
          delay={0.4}
        />
        <FloatingShape 
          className="absolute bottom-[-20%] left-[30%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-pink-200/30 via-rose-100/20 to-transparent blur-3xl animate-blob animation-delay-4000"
          delay={0.6}
        />
        
        {/* Accent glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbiting dots */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 shadow-lg shadow-violet-400/50" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50" />
        </motion.div>
        
        {/* Floating icons */}
        <motion.div 
          className="absolute top-[20%] right-[15%] text-slate-200"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bot className="w-12 h-12" />
        </motion.div>
        <motion.div 
          className="absolute top-[40%] left-[10%] text-slate-200"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Zap className="w-10 h-10" />
        </motion.div>
        <motion.div 
          className="absolute bottom-[30%] right-[20%] text-slate-200"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Cpu className="w-8 h-8" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-sm font-semibold text-violet-700">
                Deploy autonomous AI in minutes
              </span>
              <Sparkles className="w-4 h-4 text-violet-500" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-display text-slate-900 mb-8"
            >
              The Future of
              <br />
              <span className="relative">
                <span className="gradient-text">AI Intelligence</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Build autonomous AI workforces that operate 24/7. 
              <span className="text-slate-700 font-medium"> Deploy in minutes, scale infinitely.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link
                href="/audit"
                className="group relative inline-flex items-center gap-2 bg-slate-900 text-white h-14 px-8 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Start Building</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link
                href="/ai-agent"
                className="group inline-flex items-center gap-2 h-14 px-8 rounded-full font-semibold text-lg text-slate-600 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
              >
                <Play className="w-5 h-5 text-violet-500" />
                Watch Demo
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-100"
            >
              <StatItem value="<5 min" label="Time to Deploy" delay={0.5} />
              <StatItem value="99.9%" label="Uptime SLA" delay={0.6} />
              <StatItem value="50+" label="Languages" delay={0.7} />
              <StatItem value="24/7" label="Global Support" delay={0.8} />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
