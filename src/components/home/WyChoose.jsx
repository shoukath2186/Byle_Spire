import React from 'react';
import { Check } from 'lucide-react';

function WyChoose() {
  const points = [
    {
      title: 'Expert Development Team',
      description:
        'Our highly skilled developers bring years of experience across modern tech stacks. We build robust, scalable architectures that ensure your applications perform flawlessly under any load.',
    },
    {
      title: 'Transparent Communication & Custom Solutions',
      description:
        'We believe in absolute transparency. You stay informed at every stage of the project. Every solution we design is custom-tailored to solve your specific business challenges.',
    },
    {
      title: 'Ongoing Support & On-Time Delivery',
      description:
        'We respect your deadlines and deliver on time, every time. Beyond launch, we provide dedicated support and maintenance so you are never left entirely on your own.',
    },
  ];

  return (
    <section className="bg-black py-10 md:py-15 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
            Why Choose Bytespire?
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            We merge cutting-edge technology with deep industry expertise to build software that accelerates your business growth.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex flex-col items-start gap-5">
                <div className="bg-[#8e2157]/20 p-3 border border-[#8e2157]/40 rounded-xl">
                  <Check className="h-5 w-5 text-pink-300" />
                </div>
                <div>
                  <h3 className="text-white font-light text-xl mb-3">
                    {point.title}
                  </h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WyChoose;
