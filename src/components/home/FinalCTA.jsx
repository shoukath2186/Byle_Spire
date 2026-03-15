import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

function FinalCTA() {
  const trustSignals = [
    'No obligation — free initial consultation',
    'Fixed-price quotes — no hidden fees',
    '35+ projects delivered successfully',
    'Response within 24 hours',
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
            Ready to Build Something Great?
          </h2>

          {/* Copy */}
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Let's turn your idea into a fast, scalable web application. Whether you have a detailed brief
            or just a rough concept — I can help you plan, build, and launch with confidence.
          </p>
          <p className="text-gray-400 text-xs mb-10">
            Get a free 30-minute consultation. No commitment, no pressure — just a clear plan for your project.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold text-sm rounded-lg hover:bg-accent-700 transition-colors duration-200"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              See My Portfolio
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col gap-2">
            {trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 text-xs">
                <Check className="h-3.5 w-3.5 flex-shrink-0 text-gray-300" />
                {signal}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;
