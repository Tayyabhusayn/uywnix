"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does an AI automation agency do?",
    a: "An AI automation agency builds AI agents, chatbots, and automated workflows that handle sales, support, marketing, and operations for businesses — so teams focus on work that matters. UYWNIX designs, builds, and maintains these systems end to end.",
  },
  {
    q: "How much do AI automation services cost?",
    a: "Our automation plans start at $999/month for a managed AI sales agent with CRM integration and up to 1,000 leads per month. Growth plans at $2,499/month include three AI agents (text and voice), custom workflows, and priority support. Website projects start at $499 with our launch offer.",
  },
  {
    q: "Can you train or fine-tune AI models on our data?",
    a: "Yes. UYWNIX trains and fine-tunes custom AI models on your own data — for small companies and enterprises. We handle LLM fine-tuning, custom model training, and secure deployment, including on-premise options for enterprise clients.",
  },
  {
    q: "How fast can you build a website or MVP?",
    a: "Landing pages and business websites ship in 7–10 days. Clickable prototypes ship in days, and full MVP builds typically take 3–6 weeks depending on scope. Our AI-augmented engineering keeps builds fast without sacrificing quality.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes — small businesses are our core focus. We build affordable websites, marketing automation, and AI assistants that let small teams operate like much larger companies. We also serve enterprises with custom model training and dedicated AI infrastructure.",
  },
  {
    q: "What is the difference between AI training and fine-tuning?",
    a: "Training builds a model from scratch on large datasets; fine-tuning takes an existing model and adapts it to your specific data, tone, and use case. For most businesses, fine-tuning on their own data delivers the best results fastest — that is our specialty.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="absolute -top-40 right-0 w-[500px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-violet-300 uppercase tracking-widest mb-6">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Questions, <span className="gradient-text">answered.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Everything businesses ask us about AI automation, pricing, and custom AI model training.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? "border-violet-400/40 bg-white/5" : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base md:text-lg font-bold text-white">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-violet-400" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
