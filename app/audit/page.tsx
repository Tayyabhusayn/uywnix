"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuditPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    hours: "",
    department: "",
    name: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleNext = () => setStep(step + 1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnalyzing(true);
    
    // Simulate AI Analysis
    setTimeout(() => {
      setAnalyzing(false);
      setSubmitted(true);
      // In a real app, we would also trigger the email here
    }, 2000);
  };

  if (analyzing) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-bold animate-pulse">Analyzing your workflows...</h2>
        <p className="text-muted-foreground mt-2">Our AI is calculating your potential savings.</p>
      </div>
    );
  }

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

      <section className="py-24 container mx-auto px-4 max-w-2xl">
        {!submitted ? (
          <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
            <div className="mb-8">
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">Free Business Audit</span>
              <h1 className="text-3xl font-bold mb-4">Can Your Business Be Automated?</h1>
              <p className="text-muted-foreground">Answer 3 questions to find out how much time & money an AI Agent can save you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-sm font-medium">How many hours per week does your team spend on repetitive tasks?</label>
                  <select className="w-full p-3 rounded-lg border border-input bg-background" onChange={(e) => setFormData({...formData, hours: e.target.value})}>
                    <option value="">Select an option</option>
                    <option value="10">1-10 hours</option>
                    <option value="25">10-40 hours</option>
                    <option value="50">40+ hours (Urgent)</option>
                  </select>
                  <button type="button" onClick={handleNext} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold mt-4">Next Question →</button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-sm font-medium">Which department is the biggest bottleneck?</label>
                  <select className="w-full p-3 rounded-lg border border-input bg-background" onChange={(e) => setFormData({...formData, department: e.target.value})}>
                    <option value="">Select Department</option>
                    <option value="Support">Customer Support</option>
                    <option value="Sales">Sales / Lead Gen</option>
                    <option value="Ops">Operations / Data Entry</option>
                  </select>
                  <button type="button" onClick={handleNext} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold mt-4">Next Question →</button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-sm font-medium">Where should we send your report?</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg border border-input bg-background mb-2"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder="name@company.com" 
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold mt-4 hover:bg-green-700 transition-colors">
                    Generate My Audit Report
                  </button>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">A+</div>
              <h2 className="text-3xl font-bold mb-2">High Automation Potential</h2>
              <p className="text-muted-foreground">Based on your input, your business is a perfect candidate for AI.</p>
            </div>

            <div className="grid gap-4 mb-8">
              <div className="bg-secondary/50 p-4 rounded-xl flex justify-between items-center">
                <span>Potential Savings:</span>
                <span className="font-bold text-green-600 text-xl">$15,000 / year</span>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl flex justify-between items-center">
                <span>Hours Saved:</span>
                <span className="font-bold text-blue-600 text-xl">20+ Hours / week</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-blue-900 mb-2">Recommended Strategy:</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Deploy an <strong>AI {formData.department} Agent</strong> immediately. It will handle the manual workload so your team can focus on growth.
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-sm font-medium">Ready to implement this?</p>
              <a 
                href={`mailto:contact@uywnix.com?subject=I want to implement my Audit Plan&body=Hi, I just completed the audit. My name is ${formData.name} and I want to save $15k/year.`}
                className="block w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                Book Implementation Call
              </a>
              <p className="text-xs text-muted-foreground">Free 15-min strategy session.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
