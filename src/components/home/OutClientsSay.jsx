"use client";

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

function OutClientsSay() {
  const [current, setCurrent] = useState(0);

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
        "Working directly with the developer made everything faster. We got exactly what we asked for — on time, within budget. I'd recommend Bytespire to any startup looking for a reliable MERN stack developer.",
      name: '[Client Name]',
      role: '[Role]',
      company: '[Company]',
      rating: 5,
    },
    {
      content:
        'The quality of code is clean and well-documented. Our internal team had no trouble extending the work after launch. Bytespire is our go-to for any future web development projects.',
      name: '[Client Name]',
      role: '[Role]',
      company: '[Company]',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(p => (p + 1) % testimonials.length);

  return (
    <section className="bg-white py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.2em] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            What Clients Say About Working With Bytespire
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-2xl">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 md:p-10">

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current text-gray-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              "{testimonials[current].content}"
            </p>

            {/* Author + Navigation */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-gray-900 font-semibold text-sm">
                  {testimonials[current].name}
                </div>
                <div className="text-gray-400 text-xs mt-0.5">
                  {testimonials[current].role}, {testimonials[current].company}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex gap-1.5 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-200 ${
                  i === current ? 'w-6 bg-gray-900' : 'w-3 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default OutClientsSay;
