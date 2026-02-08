import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom - UYWNIX AI & Tech Insights | #1 Tech Blog",
  description: "Latest news on AI Agents, Business Automation, and Global Tech trends from UYWNIX. Stay ahead of the curve.",
  keywords: "AI News, Tech Blog, Business Automation Insights, UYWNIX Newsroom",
};

const articles = [
  {
    id: 1,
    title: "The Rise of AI Agents in Business",
    excerpt: "How autonomous agents are transforming customer support and internal workflows in 2026.",
    date: "Feb 08, 2026",
    category: "AI & Automation"
  },
  {
    id: 2,
    title: "Introducing UYWNI: Social Media Reimagined",
    excerpt: "Why we are building a new social platform focused on authentic connection and privacy.",
    date: "Feb 01, 2026",
    category: "Product"
  },
  {
    id: 3,
    title: "Web Development Trends for 2026",
    excerpt: "From AI-generated UI to edge computing, here is what to expect this year.",
    date: "Jan 20, 2026",
    category: "Technology"
  }
];

export default function NewsroomPage() {
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

      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Newsroom</h1>
        <p className="text-muted-foreground mb-12 text-lg">Insights, updates, and thoughts from the UYWNIX team.</p>

        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <span className="font-semibold text-primary">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
