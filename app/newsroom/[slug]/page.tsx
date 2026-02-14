import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

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
    <article className="min-h-screen bg-white text-slate-900 flex flex-col">
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
          <Link href="/newsroom" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-slate-900 mb-6 transition-colors group">
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Newsroom
          </Link>
          <div className="flex items-center gap-3 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
            <span>{post.category}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-8">{post.title}</h1>
        </div>

        <div className="prose prose-lg prose-slate max-w-none mb-20 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="border-t border-slate-100 pt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">Share this insight</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0077b5] text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition-all"
            >
              LinkedIn
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${articleTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition-all"
            >
              X / Twitter
            </a>
            <a 
              href={`https://api.whatsapp.com/send?text=${articleTitle}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </article>
  );
}
