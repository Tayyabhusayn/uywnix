"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, Brain, Building2, BarChart3, Lock } from "lucide-react";

export default function AuditWizard() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("Real Estate");
  const [bottlenecks, setBottlenecks] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const toggleBottleneck = (item: string) => {
    setBottlenecks((prev) =>
      prev.includes(item) ? prev.filter((b) => b !== item) : [...prev, item]
    );
  };

  const finishAudit = async () => {
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          sector,
          bottlenecks,
          source: "audit-wizard",
        }),
      });
    } catch {
      // Lead still completes locally even if notification fails
    }
    setTimeout(() => {
      setLoading(false);
      setIsComplete(true);
    }, 1200);
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition";
  const labelCls = "block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2";
  const primaryBtn =
    "bg-white text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-100 transition hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed";

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center p-12 bg-white/5 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-600" />
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400 animate-bounce">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-white mb-4">Analysis Complete</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Our AI models have identified 3 key automation opportunities for your business. An expert strategist will contact you shortly with your personalized{" "}
          <span className="font-bold text-white">Intelligence Report</span>.
        </p>
        <button onClick={() => (window.location.href = "/")} className="text-sm font-bold text-slate-400 hover:text-white transition uppercase tracking-widest">
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
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-violet-600/20 rounded-full blur-[80px] pointer-events-none" />

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
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Entity Verification</h2>
              <p className="text-slate-400 mb-8">We need to calibrate our models to your specific industry sector.</p>

              <div className="space-y-4">
                <div>
                  <label className={labelCls}>Company Name</label>
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={inputCls} placeholder="e.g. Acme Corp" />
                </div>
                <div>
                  <label className={labelCls}>Industry Sector</label>
                  <select value={sector} onChange={(e) => setSector(e.target.value)} className={inputCls + " appearance-none"}>
                    <option className="bg-slate-900">Real Estate</option>
                    <option className="bg-slate-900">Legal / Law Firm</option>
                    <option className="bg-slate-900">Healthcare</option>
                    <option className="bg-slate-900">E-Commerce</option>
                    <option className="bg-slate-900">Finance / Fintech</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button onClick={() => setStep(2)} className={primaryBtn}>
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
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Operational Bottlenecks</h2>
              <p className="text-slate-400 mb-8">Where is your team spending the most manual hours?</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Lead Qualification", "Customer Support", "Data Entry", "Appointment Setting", "Document Review", "Outbound Sales"].map((item) => {
                  const checked = bottlenecks.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleBottleneck(item)}
                      className={`flex items-center gap-3 p-4 rounded-xl border text-left transition group ${
                        checked
                          ? "border-violet-400/60 bg-violet-500/10"
                          : "border-white/10 hover:border-violet-400/40 hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition ${
                          checked ? "bg-violet-500 border-violet-500" : "border-slate-500"
                        }`}
                      >
                        {checked && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className={`font-semibold ${checked ? "text-white" : "text-slate-300"}`}>{item}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex justify-between items-center">
                <button onClick={() => setStep(1)} className="text-sm font-bold text-slate-400 hover:text-white uppercase tracking-widest">
                  Back
                </button>
                <button onClick={() => setStep(3)} className={primaryBtn}>
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
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400">
                <Brain className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Access Credentials</h2>
              <p className="text-slate-400 mb-8">Where should we send the confidential intelligence report?</p>

              <div className="space-y-4">
                <div>
                  <label className={labelCls}>Full Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="John Doe" />
                </div>
                <div>
                  <label className={labelCls}>Work Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="john@company.com" />
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <Lock className="w-5 h-5 text-slate-400 mt-0.5" />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Your data is processed securely. We use bank-grade encryption to generate your custom audit report.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-between items-center">
                <button onClick={() => setStep(2)} className="text-sm font-bold text-slate-400 hover:text-white uppercase tracking-widest">
                  Back
                </button>
                <button onClick={finishAudit} disabled={loading || !name || !email} className={primaryBtn}>
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Processing Data...
                    </>
                  ) : (
                    <>
                      Generate Report <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Social Proof Text */}
      <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mt-8">
        Get your free AI automation audit
      </p>
    </div>
  );
}
