"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, Brain, Building2, BarChart3, Lock } from "lucide-react";

export default function AuditWizard() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const finishAudit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsComplete(true);
    }, 2000);
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center p-12 bg-white rounded-3xl border border-slate-100 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-600" />
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 animate-bounce">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Analysis Complete</h2>
        <p className="text-slate-500 mb-8 text-lg">
          Our AI models have identified 3 key automation opportunities for your business. An expert strategist will contact you shortly with your personalized <span className="font-bold text-slate-900">Intelligence Report</span>.
        </p>
        <button onClick={() => window.location.href = '/'} className="text-sm font-bold text-slate-400 hover:text-slate-900 transition uppercase tracking-widest">
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          <span>System Scan</span>
          <span>Step {step} of 3</span>
        </div>
        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-slate-900"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-indigo-50 rounded-full blur-[80px] opacity-50 mix-blend-multiply pointer-events-none" />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Entity Verification</h2>
              <p className="text-slate-500 mb-8">We need to calibrate our models to your specific industry sector.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Company Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition" placeholder="e.g. Acme Corp" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Industry Sector</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition appearance-none">
                    <option>Real Estate</option>
                    <option>Legal / Law Firm</option>
                    <option>Healthcare</option>
                    <option>E-Commerce</option>
                    <option>Finance / Fintech</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button onClick={nextStep} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition hover:shadow-lg transform hover:-translate-y-0.5">
                  Continue Analysis <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Operational Bottlenecks</h2>
              <p className="text-slate-500 mb-8">Where is your team spending the most manual hours?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Lead Qualification', 'Customer Support', 'Data Entry', 'Appointment Setting', 'Document Review', 'Outbound Sales'].map((item) => (
                  <label key={item} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 cursor-pointer hover:border-slate-900 hover:bg-slate-50 transition group">
                    <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-slate-900">
                      <input type="checkbox" className="hidden" />
                      <div className="w-3 h-3 bg-slate-900 rounded-sm opacity-0 check-indicator transition-opacity" />
                    </div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </label>
                ))}
              </div>

              <div className="mt-10 flex justify-between items-center">
                <button onClick={() => setStep(1)} className="text-sm font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest">Back</button>
                <button onClick={nextStep} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition hover:shadow-lg transform hover:-translate-y-0.5">
                  Next Sector <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                <Brain className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Access Credentials</h2>
              <p className="text-slate-500 mb-8">Where should we send the confidential intelligence report?</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Work Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition" placeholder="john@company.com" />
                </div>
                 <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <Lock className="w-5 h-5 text-slate-400 mt-0.5" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Your data is processed securely. We use bank-grade encryption to generate your custom audit report.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-between items-center">
                <button onClick={() => setStep(2)} className="text-sm font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest">Back</button>
                <button 
                  onClick={finishAudit} 
                  disabled={loading}
                  className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Processing Data...</>
                  ) : (
                    <>Generate Report <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Social Proof Text */}
      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mt-8">
        Get your free AI automation audit
      </p>
    </div>
  );
}
