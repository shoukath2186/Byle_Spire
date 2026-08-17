"use client";
import React, { use, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Check, ArrowRight, Plus, Minus } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/home/FinalCTA";

// Import data
import { 
  technologyServices, 
  digitalMarketingServices, 
  experienceDesignServices, 
  brandingServices 
} from '@/data/services/mainServices';

const serviceDataMap = {
  technology: technologyServices,
  'digital-marketing': digitalMarketingServices,
  'experience-design': experienceDesignServices,
  branding: brandingServices
};

export default function ServiceDetail({ params }) {
  // Unwrap params using React.use() to comply with Next.js 15+ async params requirement
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const data = serviceDataMap[slug];

  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">Service not found</h1>
            <Link href="/services" className="text-[#8e2157] hover:underline">Return to Services</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Page Banner */}
        <section className="relative bg-black pt-28 pb-16 md:pt-32 md:pb-20 px-6 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url("${data.bannerImage}")` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />

          <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left">
            <div className="max-w-4xl">
              <Link href="/services" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm font-light">
                <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg">
                {data.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 md:py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                Overview
              </h2>
              <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Sub-Services Grid */}
        {data.subServices && data.subServices.length > 0 && (
          <section className="py-12 md:py-20 px-6 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto w-full">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Our Expertise
                </h2>
                <div className="w-20 h-1 bg-[#8e2157] rounded-full"></div>
              </div>

              <div className="flex flex-col">
                {data.subServices.map((sub, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 bg-transparent border-b border-gray-200 py-10 last:border-0 group">
                    <div className="shrink-0">
                      <div className="bg-[#8e2157]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#8e2157] transition-all duration-300 group-hover:bg-[#8e2157] group-hover:text-white group-hover:scale-105">
                        <sub.icon className="w-7 h-7" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-[#8e2157] transition-colors duration-300">
                        {sub.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-3xl">
                        {sub.description}
                      </p>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 max-w-3xl">
                        {sub.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center text-sm text-gray-700 font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8e2157] mr-3 shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Solutions Section */}
        {data.solutions && (
          <section className="py-12 md:py-20 px-6 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto w-full">
              <div className="mb-12 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  {data.solutions.title}
                </h2>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  {data.solutions.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.solutions.points.map((point, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <point.icon className="w-10 h-10 text-[#8e2157] mb-6" />
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{point.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Section */}
        {data.process && (
          <section className="py-12 md:py-20 px-6 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8e2157]/20 to-transparent opacity-50"></div>
            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className="mb-12 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  {data.process.title}
                </h2>
                <p className="text-white/70 font-light text-lg leading-relaxed">
                  {data.process.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.process.steps.map((step, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                    <div className="text-4xl font-light text-[#8e2157] mb-6 opacity-80">{step.step}</div>
                    <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {data.faq && (
          <section className="py-12 md:py-20 px-6 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-20 h-1 bg-[#8e2157] mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {data.faq.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div 
                        key={idx} 
                        className={`bg-gray-50 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                          isOpen ? 'border-[#8e2157]/50 shadow-md' : 'border-gray-100 hover:border-[#8e2157]/30'
                        }`}
                        onClick={() => toggleFaq(idx)}
                      >
                        <div className="flex items-center justify-between p-6">
                          <h3 className={`text-lg font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-[#8e2157]' : 'text-gray-900'}`}>
                            {faq.question}
                          </h3>
                          <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-[#8e2157]" />
                            ) : (
                              <Plus className="w-5 h-5 text-[#8e2157] opacity-50 group-hover:opacity-100" />
                            )}
                          </div>
                        </div>
                        <div 
                          className={`transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
                          }`}
                        >
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 font-light text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Dynamic CTA */}
        {data.cta ? (
          <section className="py-12 md:py-16 px-6 bg-[#8e2157] text-white">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-light mb-6 text-left">{data.cta.title}</h2>
                <p className="text-white/80 font-light text-lg mb-10 max-w-2xl text-left">{data.cta.description}</p>
                <div className="flex flex-col sm:flex-row justify-start gap-4">
                  {data.cta.primaryButton && (
                    <Link href={data.cta.primaryButton.href} className="bg-white text-[#8e2157] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center">
                      {data.cta.primaryButton.label}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  )}
                  {data.cta.secondaryButton && (
                    <Link href={data.cta.secondaryButton.href} className="bg-black/20 text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-black/40 transition-colors flex items-center justify-center">
                      {data.cta.secondaryButton.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <FinalCTA />
        )}

      </main>

      <Footer />
    </div>
  );
}