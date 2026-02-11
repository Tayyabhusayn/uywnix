"use client";

import { useState, useEffect } from "react";

export default function RoiCalculator() {
  const [tickets, setTickets] = useState(500);
  const [salary, setSalary] = useState(4000);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Logic: Assuming AI handles 80% of tickets at 10% of the cost
    // Human Cost = Tickets * ($Salary / 2000 tickets capacity) ?? Simplified:
    // Let's assume Human Agent Capacity = 1000 tickets/mo
    // Cost per ticket = Salary / 1000
    
    const costPerTicketHuman = salary / 1000;
    const humanCostTotal = tickets * costPerTicketHuman;
    
    // AI Cost = 10% of human cost (approx)
    const aiCostTotal = humanCostTotal * 0.10;
    
    const monthlySavings = humanCostTotal - aiCostTotal;
    setSavings(monthlySavings);
  }, [tickets, salary]);

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-black text-white rounded-3xl shadow-2xl border border-gray-800 my-16">
      <div className="text-center mb-10">
        <span className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">ROI Calculator</span>
        <h2 className="text-3xl font-bold mt-4">How much is manual work costing you?</h2>
        <p className="text-gray-400 mt-2">Calculate your savings with UYWNIX AI Agents.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Support Tickets: <span className="text-white font-bold">{tickets}</span></label>
            <input 
              type="range" min="100" max="10000" step="100" 
              value={tickets} 
              onChange={(e) => setTickets(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Avg. Support Agent Salary: <span className="text-white font-bold">${salary}/mo</span></label>
            <input 
              type="range" min="1000" max="10000" step="500" 
              value={salary} 
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">You could save</p>
          <h3 className="text-5xl font-black text-green-400 mt-2">${savings.toLocaleString()}</h3>
          <p className="text-gray-500 text-sm mt-1">per month</p>
          
          <a href="/audit" className="mt-6 w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition text-center">
            Automate Now →
          </a>
        </div>
      </div>
    </div>
  );
}
