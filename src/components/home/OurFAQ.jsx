"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowRight } from 'lucide-react';

function OurFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: 'What services does ByteSpire provide?',
      answer:
        'We offer end-to-end digital solutions across four main pillars: Technology & Development (custom web and mobile apps), Digital Marketing & SEO, Experience Design (UI/UX), and Corporate Branding.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Timelines vary based on the project scope. A standard corporate website or branding package takes 3–6 weeks, while complex custom applications or comprehensive marketing campaigns can take 8–16 weeks. We always provide a detailed roadmap before starting.',
    },
    {
      question: 'Do you work with startups and enterprise clients?',
      answer:
        'Absolutely. We scale our services to fit businesses of all sizes. For startups, we focus on rapid MVP development and lean marketing. For enterprise clients, we deliver robust, scalable architectures and advanced data-driven campaigns.',
    },
    {
      question: 'What makes ByteSpire different from other agencies?',
      answer:
        'We believe in transparent communication, dedicated support, and building custom solutions that drive measurable business growth. You work directly with our experts without layers of account managers, ensuring your vision is executed flawlessly.',
    },
    {
      question: 'Do you provide post-launch support and maintenance?',
      answer:
        'Yes. Every project comes with a standard 30-day support period. Beyond that, we offer flexible, ongoing maintenance retainers for continuous optimization, SEO management, and new feature updates.',
    },
    {
      question: 'How do you handle project pricing?',
      answer:
        'For development and design projects, we provide fixed-price quotes based on a detailed scope of work—meaning no hourly billing surprises. For ongoing marketing or maintenance, we offer predictable monthly retainers tailored to your goals.',
    },
  ];

  return (
    <section className="bg-white py-10 md:py-15 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 flex items-start justify-between gap-6 text-left"
              >
                <span className={`font-medium text-base md:text-lg leading-snug ${open === i ? 'text-gray-900' : 'text-gray-600'}`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-200 ${
                    open === i ? 'bg-[#8e2157] text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {open === i
                    ? <Minus className="h-3 w-3" />
                    : <Plus className="h-3 w-3" />
                  }
                </span>
              </button>

              {open === i && (
                <div className="pb-5 text-gray-500 text-base md:text-lg font-light leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center text-center">
          <p className="text-gray-400 text-xs font-light mb-3">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#8e2157] font-medium text-sm transition-colors duration-200 group"
          >
            Contact me directly
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default OurFAQ;
