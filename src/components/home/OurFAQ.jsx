"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowRight } from 'lucide-react';

function OurFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: 'How long does a web development project take?',
      answer:
        'It depends on the scope. A landing page or simple website takes 2–3 weeks. A custom web application or MERN stack project typically takes 6–12 weeks. After our initial call, I provide a clear timeline in the project proposal.',
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer:
        'Absolutely. Many of my best projects have been MVPs and early-stage startup platforms. I understand the need to move fast, stay lean, and build something that can scale. Startup web development is a core part of what I do at Bytespire.',
    },
    {
      question: 'What is your pricing for freelance web development?',
      answer:
        'Pricing is project-based with a fixed quote. This means no hourly billing surprises. Rates depend on project complexity, timeline, and technology requirements. Get in touch for a free consultation and quote.',
    },
    {
      question: 'Do you provide support after the website or app goes live?',
      answer:
        'Yes. Every project includes 30 days of post-launch support to handle bugs, questions, and minor adjustments. Extended maintenance packages are also available if you need ongoing support.',
    },
    {
      question: 'Can you work with my existing codebase or team?',
      answer:
        'Yes. I can join an ongoing project, review and improve existing code, or collaborate with your in-house developers. Just share the details and we can figure out the best way to work together.',
    },
    {
      question: 'Do you sign NDAs and protect client data?',
      answer:
        'Yes. I sign NDAs before any project discussion and follow best practices for data security. Your idea, code, and business information are always kept confidential.',
    },
    {
      question: 'What is the MERN stack and why is it a good choice?',
      answer:
        'MERN stands for MongoDB, Express, React, and Node.js — four powerful JavaScript technologies that work together to build full stack web applications. It is fast, cost-effective (one language across front and back end), and highly scalable, making it ideal for startups and modern web products.',
    },
  ];

  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/[0.07]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.2em] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-white/[0.07]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 flex items-start justify-between gap-6 text-left"
              >
                <span className={`font-medium text-sm leading-snug ${open === i ? 'text-white' : 'text-white/60'}`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-200 ${
                    open === i ? 'bg-accent-600 text-white' : 'bg-white/10 text-white/40'
                  }`}
                >
                  {open === i
                    ? <Minus className="h-3 w-3" />
                    : <Plus className="h-3 w-3" />
                  }
                </span>
              </button>

              {open === i && (
                <div className="pb-5 text-white/40 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 pt-8 border-t border-white/[0.07]">
          <p className="text-white/30 text-xs mb-3">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium text-sm transition-colors duration-200 group"
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
