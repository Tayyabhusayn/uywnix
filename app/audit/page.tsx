"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuditPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    employees: "",
    supportVolume: "",
    manualTasks: [] as string[]
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep(step + 1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send this data to an API
    console.log("Lead captured:", formData);
    
    // Simulate "Calculation"
    setTimeout(() => {
      setSubmitted(true);
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
                  <label className="block text-sm font-medium">How many hours per week does your team spend on repetitive tasks (Email, Data Entry, Support)?</label>
                  <select className="w-full p-3 rounded-lg border border-input bg-background" onChange={(e) => setFormData({...formData, supportVolume: e.target.value})}>
                    <option value="">Select an option</option>
                    <option value="low">1-10 hours</option>
                    <option value="medium">10-40 hours</option>
                    <option value="high">40+ hours (Urgent Automation Needed)</option>
                  </select>
                  <button type="button" onClick={handleNext} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold mt-4">Next Question →</button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-sm font-medium">Which departments are slowing you down?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Customer Support", "Sales / Leads", "Data Entry", "HR / Onboarding"].map((task) => (
                      <label key={task} className="flex items-center space-x-2 p-3 border border-border rounded-lg cursor-pointer hover:bg-secondary">
                        <input type="checkbox" value={task} className="rounded" onChange={(e) => {
                          if (e.target.checked) setFormData({...formData, manualTasks: [...formData.manualTasks, task]});
                          else setFormData({...formData, manualTasks: formData.manualTasks.filter(t => t !== task)});
                        }} />
                        <span>{task}</span>
                      </label>
                    ))}
                  </div>
                  <button type="button" onClick={handleNext} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold mt-4">Next Question →</button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-sm font-medium">Where should we send your Automation Report?</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@company.com" 
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold mt-4 hover:bg-green-700 transition-colors">
                    Get My Free Report
                  </button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    We will also send you a demo of our AI Agent.
                  </p>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
            <h2 className="text-3xl font-bold mb-4">You Qualify for Automation!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based on your answers, an AI Agent could save your business approximately <strong>25-40 hours per week</strong>.
            </p>
            <div className="bg-secondary/50 p-6 rounded-xl mb-8 text-left">
              <h3 className="font-bold mb-2">Recommended Strategy:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Deploy a <strong>Customer Support Agent</strong> to handle inquiries.</li>
                <li>Automate <strong>Lead Qualification</strong> to filter sales calls.</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              We have sent the detailed report to <strong>{formData.email}</strong>.
            </p>
            <Link href="/ai-agent" className="block w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90">
              Try the AI Agent Demo Now
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
