"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, ArrowRight } from "lucide-react";

export default function ProductStrip() {
  return (
    <section className="relative py-20 bg-slate-950 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-violet-600/10 blur-[110px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-3xl bg-white/[0.04] border border-white/10"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25 shrink-0">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-300 uppercase tracking-widest">Our Product</span>
              <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
                UYWNI — one app for everything
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-lg">
                Social feed, encrypted chat, video calls & a freelance marketplace. Live on iOS & Android.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/products/uywni"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-100 transition"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.uywni.uywni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              Get the App
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
