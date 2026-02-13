"use client";

import { useEffect, useState } from "react";

const logos = [
  "NEXT GEN", "AI INFRA", "QUANTUM", "CYBER OPS", "GLOBAL TECH", "AUTOMATE"
];

export default function TrustBar() {
  return (
    <div className="w-full py-10 overflow-hidden bg-white/50 border-y border-gray-100 relative group">
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
        {[...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className="text-sm font-black text-gray-300 uppercase tracking-[0.3em] hover:text-black transition-colors cursor-default"
          >
            {logo}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
