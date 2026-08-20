import Link from "next/link";
import { Metadata } from "next";
import { getSortedPostsData } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Newsroom | AI Automation Insights for Business",
  description: "Practical guides on AI model fine-tuning, AI agents for customer support, and AI-accelerated product development — from the UYWNIX team.",
  alternates: {
    canonical: '/newsroom',
  },
};

export default function NewsroomPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Newsroom</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Latest insights, product updates, and strategic analysis from the UYWNIX team.
          </p>
        </div>

        <div className="grid gap-8">
          {allPosts.map((article) => (
            <Link key={article.id} href={`/newsroom/${article.id}`} className="group block bg-white/5 p-8 rounded-3xl border border-white/10 shadow-sm hover:shadow-xl hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <span className="text-blue-600">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                <div className="shrink-0 mt-4 md:mt-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-slate-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
