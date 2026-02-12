"use client";

import { useState, useEffect, useRef } from "react";

export default function RoiCalculator() {
  const [tickets, setTickets] = useState(500);
  const [salary, setSalary] = useState(4000);
  const [savings, setSavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  
  // Animation state
  const [displaySavings, setDisplaySavings] = useState(0);

  useEffect(() => {
    const costPerTicketHuman = salary / 1000;
    const humanCostTotal = tickets * costPerTicketHuman;
    const aiCostTotal = humanCostTotal * 0.10;
    
    const monthlySavings = Math.floor(humanCostTotal - aiCostTotal);
    setSavings(monthlySavings);
    setAnnualSavings(monthlySavings * 12);
  }, [tickets, salary]);

  // Count up animation effect
  useEffect(() => {
    let start = displaySavings;
    const end = savings;
    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4);
      
      const current = start + (end - start) * ease;
      setDisplaySavings(Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [savings]);

  return (
    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 bg-black text-white rounded-3xl shadow-2xl border border-gray-800 my-16">
      <div className="text-center mb-12">
        <span className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Interactive ROI Demo</span>
        <h2 className="text-4xl md:text-5xl font-black mt-6 tracking-tight">Stop burning cash.</h2>
        <p className="text-gray-400 mt-4 text-lg">See exactly how much profit you are losing to manual work.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Monthly Support Tickets</label>
              <span className="text-white font-bold text-xl">{tickets}</span>
            </div>
            <input 
              type="range" min="100" max="5000" step="100" 
              value={tickets} 
              onChange={(e) => setTickets(Number(e.target.value))}
              className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all"
            />
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Avg. Employee Salary</label>
              <span className="text-white font-bold text-xl">${salary}/mo</span>
            </div>
            <input 
              type="range" min="2000" max="10000" step="500" 
              value={salary} 
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all"
            />
          </div>

          <div className="pt-6">
             <p className="text-sm text-gray-500 mb-2">Cost Comparison</p>
             <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden flex">
               <div className="bg-red-500 h-full" style={{ width: '90%' }}></div>
               <div className="bg-green-500 h-full" style={{ width: '10%' }}></div>
             </div>
             <div className="flex justify-between text-xs mt-2 font-bold">
               <span className="text-red-500">Human Cost (90%)</span>
               <span className="text-green-500">AI Cost (10%)</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-900 rounded-3xl p-10 border border-gray-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
          
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Monthly Savings</p>
          <h3 className="text-6xl md:text-7xl font-black text-green-400 mb-2 tracking-tighter">
            ${displaySavings.toLocaleString()}
          </h3>
          
          <div className="w-full h-px bg-gray-800 my-6"></div>

          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Yearly Savings</p>
          <h4 className="text-3xl font-bold text-white mb-8">
            ${annualSavings.toLocaleString()}
          </h4>
          
          <a href="/audit" className="w-full py-4 bg-white text-black font-black text-lg rounded-xl hover:scale-[1.02] hover:bg-gray-100 transition-all text-center shadow-lg">
            Claim These Savings →
          </a>
        </div>
      </div>
    </div>
  );
}
