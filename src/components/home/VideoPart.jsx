import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function VideoPart() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bgVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

      {/* Content — left aligned, anchored to bottom */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em] mb-5">
            Freelance MERN Stack Developer&nbsp;&nbsp;·&nbsp;&nbsp;Available for Projects
          </p>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Modern Web Applications<br />Built to Scale Your Business
          </h1>

          {/* Subheading */}
          <p className="text-white/55 text-base leading-relaxed mb-8 max-w-xl">
            I design and develop full stack web applications using React, Node.js, Express, and MongoDB.
            Clean code, fast performance, and results that matter.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold text-sm rounded-lg hover:bg-accent-700 transition-colors duration-200"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold text-sm rounded-lg border border-white/20 hover:bg-white/15 transition-colors duration-200"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoPart;
