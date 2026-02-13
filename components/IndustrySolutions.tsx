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
    <section className="bg-black py-32 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-16 max-w-3xl">
          Intelligence for <span className="text-gray-500">every sector.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition group cursor-default">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{ind.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{ind.name}</h3>
              <p className="text-gray-400 leading-relaxed">{ind.pitch}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
