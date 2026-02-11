import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Disabled for Vercel dynamic routes
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default nextConfig;
