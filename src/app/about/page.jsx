"use client";
import React from 'react';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/home/FinalCTA";

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Result-Oriented',
      description: 'We don’t just write code or run campaigns; we deliver measurable business outcomes that drive growth and maximize your ROI.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We believe in absolute transparency and direct communication. When you work with us, you work with a dedicated partner, not just a vendor.'
    },
    {
      icon: Zap,
      title: 'Agile Innovation',
      description: 'The digital landscape moves fast. We stay ahead of the curve by leveraging the latest technologies and adaptive methodologies.'
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromising Quality',
      description: 'From pixel-perfect UI design to scalable, secure backend architecture, we take pride in delivering excellence at every layer.'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black py-24 md:py-32 text-center px-6 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url("/about_bg.png")' }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/50 to-white" />
          
          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center mt-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-light uppercase tracking-widest text-pink-200 bg-[#8e2157]/40 border border-[#8e2157]/60 mb-6 backdrop-blur-sm">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6 drop-shadow-lg">
              Empowering Businesses <br className="hidden md:block" /> Through Digital Innovation
            </h1>
            <p className="text-white/80 text-base md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md">
              ByteSpire is a forward-thinking digital agency dedicated to closing the gap between complex engineering and beautiful, intuitive design.
            </p>
          </div>
        </section>

        {/* The Mission Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              We Build Digital Experiences That Matter
            </h2>
            <div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed">
              <p>
                Founded on the belief that technology should accelerate business rather than complicate it, ByteSpire started as a vision to provide enterprise-grade digital solutions to forward-thinking companies.
              </p>
              <p>
                Today, we are a collective of passionate developers, creative designers, and strategic marketers working together under one roof. We break down the traditional silos between engineering, design, and marketing to deliver cohesive, powerful digital products that stand out in crowded markets.
              </p>
              <p>
                Whether it's building a highly scalable SaaS platform from scratch, completely rebranding an established corporation, or executing a data-driven SEO campaign, our mission remains the same: to turn your boldest ideas into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base">
                The principles that guide our work, our culture, and our partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div 
                    key={i} 
                    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#8e2157]/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8e2157] group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#8e2157] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#8e2157] transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;