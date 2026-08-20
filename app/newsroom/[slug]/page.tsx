import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import ShareRow from "@/components/ShareRow";

// Force static generation for Vercel
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/newsroom/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `https://uywnix.com/newsroom/${slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-image.png'],
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  const articleUrl = `https://uywnix.com/newsroom/${slug}`;
  const articleTitle = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(articleUrl);

  return (
    <article className="min-h-screen bg-slate-950 text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": ["https://uywnix.com/og-image.png"],
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": "UYWNIX",
              "url": "https://uywnix.com"
            },
             "publisher": {
              "@type": "Organization",
              "name": "UYWNIX",
              "logo": {
                "@type": "ImageObject",
                "url": "https://uywnix.com/logo.png"
              }
            }
          })
        }}
      />
      
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-3xl">
        <div className="mb-12">
          <Link href="/newsroom" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-white mb-6 transition-colors group">
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Newsroom
          </Link>
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
            <span>{post.category}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">{post.date}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">{Math.ceil(post.content.split(" ").length / 200)} min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white mb-8">{post.title}</h1>
        </div>

        <div className="prose prose-lg prose-slate prose-invert max-w-none mb-20 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg prose-blockquote:border-blue-400">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="border-t border-white/10 pt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">Share this insight</p>
          <ShareRow url={articleUrl} title={post.title} />
          <div className="text-center mt-12">
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition"
            >
              Get Your Free AI Audit →
            </Link>
          </div>
        </div>
      </main>
    </article>
  );
}
