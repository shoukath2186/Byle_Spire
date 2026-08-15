import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function FinalCTA() {
  const trustSignals = [
    'Free Consultation',
    'Custom Agency Solutions',
    'Rapid Response Time'
  ];

  return (
    <section className="relative w-full py-10 md:py-15 bg-black overflow-hidden border-t border-gray-100">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: 'url("/cta_bg.png")' }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text */}
        <div className="max-w-2xl text-left">
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6 drop-shadow-md">
            Ready to Transform Your <br className="hidden md:block"/> Digital Presence?
          </h2>
          <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl">
            Whether you need a scalable web application, a data-driven marketing strategy, or a complete brand overhaul, our experts are ready to deliver. Let's turn your vision into reality.
          </p>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {trustSignals.map((signal, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/70 text-sm font-light">
                <CheckCircle2 className="w-4 h-4 text-[#8e2157]" />
                {signal}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#8e2157] text-white font-light px-8 py-4 rounded-full text-lg hover:bg-[#6b1842] transition-all duration-300 shadow-[0_8px_30px_rgba(142,33,87,0.3)] hover:shadow-[0_12px_40px_rgba(142,33,87,0.5)] group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;
