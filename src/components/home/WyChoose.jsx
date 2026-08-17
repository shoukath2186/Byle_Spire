import React from 'react';
import { Users, Settings, MessageSquare, Clock, LifeBuoy, Code2 } from 'lucide-react';

function WyChoose() {
  const points = [
    {
      title: 'Expert Development Team',
      description:
        'Our highly skilled developers bring years of experience across modern tech stacks. We build robust, scalable architectures that ensure your applications perform flawlessly under any load.',
      icon: Users,
    },
    {
      title: 'Custom Solutions',
      description:
        'Every solution we design is custom-tailored to solve your specific business challenges. You get exactly what your business needs to grow and succeed.',
      icon: Settings,
    },
    {
      title: 'Transparent Communication',
      description:
        'We believe in absolute transparency. You stay informed at every stage of the project, with regular updates, clear reporting, and open channels.',
      icon: MessageSquare,
    },
    {
      title: 'On-Time Delivery',
      description:
        'We respect your deadlines and deliver on time, every time. Our agile methodology ensures predictable and timely releases without compromising quality.',
      icon: Clock,
    },
    {
      title: 'Ongoing Support',
      description:
        'Beyond launch, we provide dedicated support and maintenance so you are never left entirely on your own. We are your long-term technology partner.',
      icon: LifeBuoy,
    },
    {
      title: 'Clean & Scalable Code',
      description:
        'We strictly follow industry best practices and guidelines. Our clean code ensures that your software is maintainable, highly optimized, and ready to scale.',
      icon: Code2,
    },
  ];

  return (
    <section className="bg-black py-10 md:py-15 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
            Why Choose Bytespire?
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            We merge cutting-edge technology with deep industry expertise to build software that accelerates your business growth.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-5"
            >
              <div className="bg-[#8e2157]/20 p-3 border border-[#8e2157]/40 rounded-xl shrink-0 mt-1">
                <point.icon className="h-5 w-5 text-pink-300" />
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
          ))}
        </div>

      </div>
    </section>
  );
}

export default WyChoose;
