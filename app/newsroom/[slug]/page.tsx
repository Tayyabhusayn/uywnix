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
    <article className="min-h-screen bg-white text-black py-24 px-4 container mx-auto max-w-3xl">
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
      <div className="mb-8">
        <Link href="/newsroom" className="text-sm font-bold text-gray-400 hover:text-black mb-4 block">← Back to Newsroom</Link>
        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{post.category} • {post.date}</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-2 mb-6 leading-tight">{post.title}</h1>
      </div>
      <div className="prose prose-lg prose-gray max-w-none mb-16">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      <div className="border-t border-gray-100 pt-12">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 text-center">Share this insight</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0077b5] text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            LinkedIn
          </a>
          <a 
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${articleTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#000000] text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Twitter / X
          </a>
          <a 
            href={`https://api.whatsapp.com/send?text=${articleTitle}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
