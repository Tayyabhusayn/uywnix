import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact UYWNIX - Start Your AI Transformation",
  description: "Ready to scale with AI? Contact UYWNIX for a consultation on AI Sales Agents, Voice Employees, and Custom Automation.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Let's Build the Future</h1>
            <p className="text-xl text-slate-500">
              Tell us about your business challenges. We'll tell you how AI can solve them.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:contact@uywnix.com" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition">contact@uywnix.com</a>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-lg font-medium text-slate-900">Dubai, UAE</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Global Presence</p>
                    <p className="text-lg font-medium text-slate-900">USA • India • UK</p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Looking for a quick answer?</h4>
                  <p className="text-slate-500 mb-4 text-sm">Our AI Agent is available 24/7 to answer questions about pricing and implementation.</p>
                  <Link href="/ai-agent" className="text-blue-600 font-bold text-sm hover:underline">Chat with AI Agent →</Link>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Work Email</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 transition"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg hover:-translate-y-0.5 transform">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
