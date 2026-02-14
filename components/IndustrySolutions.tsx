"use client";

import { useState } from "react";

const industries = [
  { name: "Legal", icon: "⚖️", pitch: "AI Paralegals for 24/7 client intake and document sorting." },
  { name: "Real Estate", icon: "🏠", pitch: "AI Listing Agents to handle property inquiries and book viewings." },
  { name: "Healthcare", icon: "🩺", pitch: "HIPAA-compliant AI for appointment scheduling and patient follow-up." },
  { name: "Finance", icon: "💰", pitch: "Automated invoice processing and AI-driven fraud detection." },
  { name: "Retail", icon: "🛍️", pitch: "Intelligent inventory forecasting and customer support bots." },
  { name: "Solar", icon: "☀️", pitch: "Lead qualification bots for residential and commercial solar pitches." }
];

export default function IndustrySolutions() {
  return (
    <section className="bg-black py-20 md:py-32 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-12 md:mb-16 max-w-3xl">
          Intelligence for <span className="text-gray-500">every sector.</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/5 transition group cursor-default">
              <div className="text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">{ind.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{ind.name}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{ind.pitch}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
