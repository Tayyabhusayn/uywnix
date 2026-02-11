import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";

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
    title: `${post.title} - UYWNIX Newsroom`,
    description: post.excerpt,
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <article className="min-h-screen bg-white text-black py-24 px-4 container mx-auto max-w-3xl">
      <div className="mb-8">
        <Link href="/newsroom" className="text-sm font-bold text-gray-400 hover:text-black mb-4 block">← Back to Newsroom</Link>
        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{post.category} • {post.date}</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-2 mb-6 leading-tight">{post.title}</h1>
      </div>
      <div className="prose prose-lg prose-gray max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}

import Link from "next/link";
