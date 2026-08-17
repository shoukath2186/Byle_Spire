import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-50 pt-32 pb-10 md:pb-15 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="inline-flex mt-[100px] md:mt-0 items-center gap-2 px-3 py-1 rounded-full text-xs font-light uppercase tracking-widest text-[#8e2157] bg-[#8e2157]/10 mb-4">
          About Us
        </span>
        <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
          Empowering Your Business with <br className="hidden md:block" /> Smart Digital Solutions
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-10 max-w-3xl">
          At ByteSpire, we are mainly focused on creating custom applications, resolving complex business issues, and delivering state-of-the-art digital solutions. By merging innovative technology with a deep understanding of your business goals, we help you streamline operations and achieve remarkable growth.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8e2157] text-white rounded-full text-sm font-light hover:bg-[#6b1842] transition-colors shadow-lg shadow-purple-900/20"
        >
          Discover Our Story
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
