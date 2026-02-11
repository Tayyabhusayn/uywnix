"use client";

import { useState } from "react";
import Link from "next/link";

export default function AiAgentPage() {
  const [messages, setMessages] = useState<{ role: "user" | "agent"; content: string }[]>([
    { role: "agent", content: "Hello! I am the UYWNIX Business Agent. How can I help automate your workflows today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Advanced Sales Logic
    setTimeout(() => {
      let response = "I can help with that. Could you tell me a bit more about your business?";
      const lowerMsg = userMsg.toLowerCase();

      // 1. Identification & Need Analysis
      if (lowerMsg.includes("support") || lowerMsg.includes("service")) {
        response = "Great. Our Support Agents can resolve 80% of inquiries instantly. How many support tickets do you get per week roughly?";
      } else if (lowerMsg.includes("sale") || lowerMsg.includes("lead")) {
        response = "Understood. Our Sales Agents are designed to capture and qualify leads 24/7. What is your average deal size?";
      } 
      // 2. Qualification
      else if (/\d/.test(lowerMsg) && (lowerMsg.includes("ticket") || lowerMsg.includes("week"))) {
        response = "Got it. At that volume, automation could save you ~20 hours/week. Do you currently use a CRM like HubSpot or Salesforce?";
      }
      // 3. Pricing / Objections
      else if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("expensive")) {
        response = "We offer custom packages starting from $500/month, which is 90% cheaper than hiring a human agent. Would you like to see a breakdown?";
      }
      // 4. Closing / Booking
      else if (lowerMsg.includes("yes") || lowerMsg.includes("book") || lowerMsg.includes("demo")) {
        response = "Excellent. You can book a priority demo with our founder here: https://calendly.com/uywnix/demo (This link will open your calendar).";
      }
      // 5. Contact Info
      else if (lowerMsg.includes("@") || lowerMsg.includes(".com")) {
        response = "Thanks! I've logged your email. A senior automation expert will reach out within 2 hours.";
      }

      setMessages((prev) => [...prev, { role: "agent", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            UYWNIX
          </Link>
          <Link href="/" className="text-sm font-medium hover:text-primary/80">Back to Home</Link>
        </div>
      </nav>

      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Customer Agent for Business</h1>
          <p className="text-xl text-muted-foreground">
            Experience the power of autonomous business automation. Try our demo agent below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Interactive Chat Demo */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-xl min-h-[500px] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="border-b border-border pb-4 mb-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-semibold text-sm">UYWNIX Auto-Agent (Demo)</span>
            </div>
            
            <div className="flex-1 space-y-4 overflow-y-auto mb-4 pr-2 max-h-[400px]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                  <div className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                    msg.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-tr-none" 
                      : "bg-secondary text-secondary-foreground rounded-tl-none"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="bg-secondary p-3 rounded-2xl rounded-tl-none text-sm w-16 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-auto pt-4 border-t border-border flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about automation..."
                className="flex-1 bg-secondary/50 border-0 rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
              />
              <button 
                onClick={handleSend}
                className="bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="p-6 bg-secondary/20 rounded-xl border border-border/50">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span>🚀</span> Total Business Automation
              </h3>
              <p className="text-muted-foreground text-sm">
                We don't just build chatbots. We build full-stack agents that integrate with your database, CRM, and ERP to perform complex tasks autonomously.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border rounded-xl">
                <h4 className="font-bold text-lg mb-1">24/7</h4>
                <p className="text-xs text-muted-foreground">Active Uptime</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl">
                <h4 className="font-bold text-lg mb-1">0.1s</h4>
                <p className="text-xs text-muted-foreground">Response Time</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl">
                <h4 className="font-bold text-lg mb-1">100+</h4>
                <p className="text-xs text-muted-foreground">Integrations</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl">
                <h4 className="font-bold text-lg mb-1">60%</h4>
                <p className="text-xs text-muted-foreground">Cost Reduction</p>
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform">
              Deploy Your Agent Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
