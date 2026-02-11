import { getPostData, getSortedPostsData } from "@/lib/posts";

// Force static generation for Vercel
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);
  return {
    title: `${post.title} - UYWNIX Newsroom`,
    description: post.excerpt,
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  return (
    <article className="min-h-screen bg-white text-black py-24 px-4 container mx-auto max-w-3xl">
      <div className="mb-8">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{post.category} • {post.date}</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-2 mb-6">{post.title}</h1>
      </div>
      <div className="prose prose-lg prose-gray max-w-none">
        {/* Render Markdown Content Here */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}
