import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const posts = [
  {
    slug: 'autotrophic-ai-companies',
    title: 'Autotrophic AI Companies: The Rise of Self-Improving Systems',
    description:
      'A new class of AI companies is emerging — ones that build systems capable of improving themselves. Here is what autotrophic AI means, who is building it, and why it matters for businesses in 2026.',
    date: 'March 15, 2026',
    readTime: '8 min read',
    tag: 'AI & Technology',
  },
];

export const metadata = {
  title: 'Blog — Bytespire',
  description:
    'Insights and articles on web development, AI, and technology from Bytespire — a freelance MERN stack development studio.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="mt-[80px] bg-white min-h-screen">

        {/* Page Header */}
        <section className="bg-black px-6 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/30 text-xs font-medium uppercase tracking-[0.2em] mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Insights & Articles
            </h1>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              Thoughts on web development, AI, technology, and building products that scale.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Cover */}
                <div className="relative aspect-[16/9] bg-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 bg-white/10 border border-white/15 text-white/70 text-xs font-medium rounded-full">
                      {post.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center select-none">
                    <span className="text-white/[0.04] text-[96px] font-black leading-none">AI</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-sm font-bold text-gray-900 leading-snug mb-3 group-hover:text-accent-700 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed flex-grow mb-5">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-900 group-hover:gap-2.5 transition-all duration-200">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
