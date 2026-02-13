"use client";

import { useState } from "react";

export default function PerformanceMetrics() {
  return (
    <div className="container mx-auto px-4 py-16 border-t border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center animate-slide-up delay-100">
          <h4 className="text-4xl md:text-5xl font-black mb-2">99.9%</h4>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Uptime</p>
        </div>
        <div className="text-center animate-slide-up delay-200">
          <h4 className="text-4xl md:text-5xl font-black mb-2">&lt;200ms</h4>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Latency</p>
        </div>
        <div className="text-center animate-slide-up delay-300">
          <h4 className="text-4xl md:text-5xl font-black mb-2">24/7</h4>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">AI Ops</p>
        </div>
        <div className="text-center animate-slide-up delay-400">
          <h4 className="text-4xl md:text-5xl font-black mb-2">60%</h4>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Cost Savings</p>
        </div>
      </div>
    </div>
  );
}
