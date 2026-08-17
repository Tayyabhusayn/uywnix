"use client";

import { useState } from "react";

export default function PerformanceMetrics() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 border-t border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="text-center animate-slide-up delay-100">
          <h4 className="text-3xl md:text-5xl font-black mb-1 md:mb-2">99.9%</h4>
          <p className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">Uptime SLA</p>
        </div>
        <div className="text-center animate-slide-up delay-200">
          <h4 className="text-3xl md:text-5xl font-black mb-1 md:mb-2">&lt;200ms</h4>
          <p className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">Latency</p>
        </div>
        <div className="text-center animate-slide-up delay-300">
          <h4 className="text-3xl md:text-5xl font-black mb-1 md:mb-2">24/7</h4>
          <p className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">AI Ops</p>
        </div>
        <div className="text-center animate-slide-up delay-400">
          <h4 className="text-3xl md:text-5xl font-black mb-1 md:mb-2">50+</h4>
          <p className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">Languages</p>
        </div>
      </div>
    </div>
  );
}
