"use client";

import { useState, useEffect } from "react";

const statuses = [
  { label: "AI Sales Engine", detail: "Optimizing conversions...", color: "bg-green-500" },
  { label: "Voice Processing", detail: "Latency <150ms", color: "bg-blue-500" },
  { label: "Lead Qualification", detail: "Active in NYC Hub", color: "bg-blue-500" },
  { label: "Secure Handshake", detail: "End-to-end active", color: "bg-amber-500" }
];

export default function LiveOperations() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-4 z-10 animate-fade-in delay-300">
      {statuses.map((s, i) => (
        <div 
          key={i} 
          className={`p-4 rounded-2xl border transition-all duration-500 w-64 ${
            active === i 
              ? "bg-white border-black/10 shadow-2xl translate-x-0 scale-105 opacity-100" 
              : "bg-gray-50 border-transparent opacity-40 translate-x-10 scale-95"
          }`}
        >
          <div className="flex items-center gap-3 mb-1">
            <span className={`w-2 h-2 rounded-full ${s.color} ${active === i ? "animate-pulse" : ""}`}></span>
            <span className="text-xs font-black uppercase tracking-widest">{s.label}</span>
          </div>
          <p className="text-sm text-gray-500">{s.detail}</p>
        </div>
      ))}
    </div>
  );
}
