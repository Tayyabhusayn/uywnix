import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - UYWNIX AI Automation",
  description: "Transparent pricing for AI Sales Agents, Voice Employees, and Custom Automation workflows. High ROI packages for scaling businesses.",
};

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    desc: "Perfect for small teams ready to automate lead qualification.",
    features: [
      "1 AI Sales Agent (Text)",
      "CRM Integration (HubSpot/Salesforce)",
      "Email Automation",
      "Standard Support (Email)",
      "Up to 1,000 leads/mo"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "$2,499",
    period: "/month",
    desc: "Full-scale automation for growing agencies and firms.",
    features: [
      "3 AI Sales Agents (Text + Voice)",
      "Custom Workflow Automation",
      "Advanced Analytics Dashboard",
      "Priority Support (Slack/WhatsApp)",
      "Unlimited leads",
      "Dedicated Account Manager"
    ],
    cta: "Scale Now",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Bespoke AI infrastructure, custom model fine-tuning, and dedicated teams for large organizations.",
    features: [
      "Unlimited AI Agents",
      "Custom LLM Fine-Tuning on Your Data",
      "AI Model Training & Deployment",
      "On-Premise Deployment Option",
      "24/7 Elite Support",
      "Full Security Audit & Compliance",
      "SLA Guarantees"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Invest in automation that pays for itself. Most clients see a 10x ROI within the first 6 months.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-8 rounded-3xl bg-white/5 border ${plan.popular ? 'border-violet-400/40 shadow-2xl scale-105 z-10' : 'border-white/10 shadow-lg'} flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-400 font-medium ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={plan.name === "Enterprise" ? "/contact" : "/audit"} className={`w-full py-4 rounded-xl font-bold text-center transition ${plan.popular ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-4">Need a custom solution?</p>
          <Link href="/contact" className="text-slate-300 font-bold hover:text-white hover:underline">
            Talk to our sales team →
          </Link>
        </div>
      </main>
    </div>
  );
}
