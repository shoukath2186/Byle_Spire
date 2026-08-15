import React from 'react';
import { Star } from 'lucide-react';

function OutClientsSay() {
  const testimonials = [
    {
      content:
        'Bytespire completely transformed our digital presence. The web application they built increased our user engagement by 400%. Attention to detail and professionalism is outstanding.',
      name: 'Aarav Mehta',
      role: 'CEO & Founder',
      company: 'TechVision Pvt. Ltd.',
      rating: 5,
    },
    {
      content:
        "The team's ability to seamlessly integrate design and complex technology is unmatched. We got exactly what we asked for — on time and within budget. Highly recommended.",
      name: 'Sarah Jenkins',
      role: 'Marketing Director',
      company: 'Global Retail Co.',
      rating: 5,
    },
    {
      content:
        'The quality of code is clean and well-documented. Our internal team had no trouble extending the work after launch. Bytespire is our go-to for any future digital projects.',
      name: 'David Chen',
      role: 'CTO',
      company: 'Fintech Solutions',
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-10 md:py-15 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4">
            What Clients Say About Working With Us
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            We measure our success by the success of our clients. Here is what they have to say about our partnership and the results we've delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:bg-white hover:border-gray-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current text-[#8e2157]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-8 flex-grow italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="mt-auto border-t border-gray-200 pt-5">
                <div className="text-gray-900 font-medium text-sm mb-1">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-xs font-light">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OutClientsSay;
