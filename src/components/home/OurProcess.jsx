"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function OurProcess() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'Tell me about your project, goals, and timeline. We have a free 30-minute call to understand exactly what you need before any commitment is made.',
    },
    {
      number: '02',
      title: 'Proposal & Planning',
      description:
        'You receive a clear project proposal with scope, timeline, tech stack, and fixed price. No vague estimates, no moving targets.',
    },
    {
      number: '03',
      title: 'Development',
      description:
        'I build your application in focused sprints with regular progress updates. You stay informed at every stage — no surprises, no silence.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description:
        "We test thoroughly, deploy to your hosting environment, and go live. Post-launch support is included so you're never left on your own.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.2em] mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            Simple Process. Predictable Results.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`relative cursor-pointer rounded-xl p-6 border transition-colors duration-200 ${
                active === i
                  ? 'bg-gray-900 border-gray-900'
                  : 'bg-gray-50 border-gray-100 hover:border-gray-200'
              }`}
            >
              {/* Step Number */}
              <div
                className={`text-4xl font-black leading-none mb-5 ${
                  active === i ? 'text-white/10' : 'text-gray-200'
                }`}
              >
                {step.number}
              </div>

              <h3
                className={`text-sm font-bold mb-2 ${
                  active === i ? 'text-white' : 'text-gray-900'
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-xs leading-relaxed ${
                  active === i ? 'text-white/55' : 'text-gray-500'
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Step Indicators */}
        <div className="flex gap-1.5 mb-10">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-200 ${
                i === active ? 'w-6 bg-gray-900' : 'w-3 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-accent-700 transition-colors duration-200"
        >
          Start Your Project
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>
    </section>
  );
}

export default OurProcess;
