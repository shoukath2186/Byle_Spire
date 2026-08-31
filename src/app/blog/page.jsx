import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const posts = [
  {
    slug: 'agentic-ai-and-enterprise-automation',
    title: 'Agentic AI and Enterprise Automation: The Shift from Chat to Autonomous Workflows',
    description:
      'The best and most discussed topic for the IT sector right now is Agentic AI. Explore how artificial intelligence is shifting from simple chat tools to autonomous software agents that actively execute complex business workflows.',
    date: 'August 15, 2026',
    readTime: '6 min read',
    tag: 'Enterprise AI',
    image: '/agentic_ai_cover.png',
  },
  {
    slug: 'autotrophic-ai-companies',
    title: 'Autotrophic AI Companies: The Rise of Self-Improving Systems',
    description:
      'A new class of AI companies is emerging — ones that build systems capable of improving themselves. Here is what autotrophic AI means, who is building it, and why it matters for businesses in 2026.',
    date: 'March 15, 2026',
    readTime: '8 min read',
    tag: 'AI & Technology',
    image: '/autotrophic_ai_cover.jpg',
  },
];

export const metadata = {
  title: 'Blog — ByteSpire',
  description: 'Insights and articles on web development, AI, and technology from ByteSpire.',
  openGraph: {
    title: 'Blog — ByteSpire',
    description: 'Insights and articles on web development, AI, and technology from ByteSpire.',
    url: 'https://bytespire.com/blog',
    siteName: 'ByteSpire',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — ByteSpire',
    description: 'Insights and articles on web development, AI, and technology.',
  },
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
            <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
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
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/15 text-white text-xs font-medium rounded-full shadow-sm">
                      {post.tag}
                    </span>
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
                  <h2 className="text-sm font-light text-gray-900 leading-snug mb-3 group-hover:text-accent-700 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed flex-grow mb-5">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-light text-gray-900 group-hover:gap-2.5 transition-all duration-200">
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
