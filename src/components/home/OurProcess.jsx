import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, PenTool, Code2, Rocket } from 'lucide-react';

function OurProcess() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Strategy',
      description:
        'We begin by deeply understanding your business goals, target audience, and market landscape to formulate a tailored strategy across tech, design, or marketing.',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Design & Architecture',
      description:
        'Our experts craft intuitive user experiences, robust technical architectures, and compelling brand identities that lay the perfect foundation for success.',
    },
    {
      number: '03',
      icon: Code2,
      title: 'Execution & Development',
      description:
        'We bring the strategy to life. From writing clean code to deploying targeted campaigns, our team executes with precision and constant communication.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Optimization',
      description:
        'We don’t just deliver; we optimize. After a successful launch, we monitor performance, gather data, and refine the solution for maximum impact.',
    },
  ];

  return (
    <section className="bg-white py-10 md:py-15 border-t border-gray-100 relative overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] bg-gradient-to-r from-transparent via-[#8e2157]/5 to-transparent blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4">
            A Proven Process for Every Solution.
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
            Whether we are building a complex application or launching a digital marketing campaign, our structured approach ensures predictable, high-quality results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 relative">
          
          {/* Weaving Dashed Line (Visible on LG) */}
          <div className="hidden lg:block absolute top-[30%] left-0 w-full border-t-2 border-dashed border-gray-200 -z-10" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`relative group bg-white border border-gray-100 rounded-3xl p-8 hover:border-[#8e2157]/40 hover:shadow-[0_20px_40px_rgba(142,33,87,0.1)] transition-all duration-500 overflow-hidden flex flex-col ${
                  i % 2 !== 0 ? 'lg:mt-16' : 'lg:-mt-2'
                }`}
              >
                {/* Massive Watermark Number */}
                <div className="absolute -bottom-8 -right-4 text-[120px] font-black text-gray-50/80 group-hover:text-[#8e2157]/5 transition-colors duration-500 pointer-events-none select-none z-0">
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 mb-8 w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#8e2157] group-hover:border-[#8e2157] transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#8e2157]/30 group-hover:-translate-y-1">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-[#8e2157]">Step {step.number}</span>
                    <div className="h-[1px] w-8 bg-gray-200 group-hover:bg-[#8e2157]/30 transition-colors" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-[#8e2157] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center md:justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#8e2157] text-white font-light px-8 py-4 rounded-full text-sm hover:bg-[#6b1842] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(142,33,87,0.2)] hover:shadow-[0_12px_30px_rgba(142,33,87,0.4)]"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default OurProcess;
