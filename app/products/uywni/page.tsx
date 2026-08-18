import Link from "next/link";
import { Metadata } from "next";
import { MessageCircle, Video, Briefcase, ShieldCheck, Sparkles, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "UYWNI App - One App for Social, Chat, Calls & Freelance",
  description: "UYWNI combines social feed, end-to-end encrypted chat, video calls, and a freelance jobs marketplace in one app. Live on iOS and Android. Coming next: real-time multilingual call translation.",
};

const features = [
  {
    icon: Sparkles,
    title: "Social Feed",
    desc: "Posts, stories, short video, likes, replies, and discovery — one feed for everything.",
  },
  {
    icon: MessageCircle,
    title: "Encrypted Chat",
    desc: "End-to-end encrypted messaging with voice notes, media, and reactions.",
  },
  {
    icon: Video,
    title: "HD Video Calls",
    desc: "Crystal-clear calls — with real-time multilingual translation coming next.",
  },
  {
    icon: Briefcase,
    title: "Freelance Marketplace",
    desc: "Post services, apply with your profile, and chat/call clients inside the app.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Community",
    desc: "Refer 10 friends and earn the blue Community Verified badge.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-First",
    desc: "Secure by design — your conversations and data stay protected.",
  },
];

export default function UywniProductPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white">
            UYWNIX
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white">
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="py-24 container mx-auto px-4 text-center relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-400/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
            ● Now Live on iOS & Android
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            UYWNI
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-4">
            One app for <span className="text-white font-semibold">social, chat, video calls & freelance work</span>.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-12">
            The all-in-one social and professional platform — built for people who don't want five apps to live their digital life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="https://play.google.com/store/apps/details?id=com.uywni.uywni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition"
            >
              Get it on Google Play
            </a>
            <a
              href="https://apps.apple.com/app/id6794034503"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/15 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition"
            >
              Download on the App Store
            </a>
          </div>

          <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-[9/19] bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-transparent to-black/60" />
              <div className="text-center p-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <span className="text-white text-2xl font-black">U</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Welcome to UYWNI</h3>
                <p className="text-slate-400 text-sm">Connect. Work. Call. Freelance.</p>
                <a
                  href="https://uywni.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-100 transition"
                >
                  Open Web App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Everything. <span className="gradient-text">One app.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              UYWNI replaces five apps with one login — and it's only getting smarter.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-400/40 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
            Multilingual call translation — coming next.
          </h2>
          <p className="text-slate-400 mb-8">
            Speak your language, they hear theirs. Real-time audio & video call translation is on the UYWNI roadmap —
            built for a world where everyone deserves to be understood.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition"
          >
            Partner with UYWNIX
          </Link>
        </div>
      </section>
    </div>
  );
}
