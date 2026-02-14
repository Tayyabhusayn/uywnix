import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - UYWNIX AI Automation",
  description: "Transparent pricing for AI Sales Agents, Voice Employees, and Custom Automation workflows. High ROI packages for scaling businesses.",
};

const plans = [
  {
    name: "Starter",
    price: "$2,500",
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
    price: "$5,000",
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
    desc: "Bespoke AI infrastructure for large organizations.",
    features: [
      "Unlimited AI Agents",
      "Custom LLM Fine-Tuning",
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Invest in automation that pays for itself. Most clients see a 10x ROI within the first 6 months.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-8 rounded-3xl bg-white border ${plan.popular ? 'border-slate-900 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-lg'} flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={plan.name === "Enterprise" ? "/contact" : "/audit"} className={`w-full py-4 rounded-xl font-bold text-center transition ${plan.popular ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-4">Need a custom solution?</p>
          <Link href="/contact" className="text-slate-900 font-bold hover:underline">
            Talk to our sales team →
          </Link>
        </div>
      </main>
    </div>
  );
}
