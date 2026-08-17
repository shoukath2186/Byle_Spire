"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calculator,
  BarChart3,
  Cpu,
  ArrowRight,
  Check,
  Calendar,
  Sparkles
} from "lucide-react";
import Link from "next/link";

function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/banner-left.png",
      alt: "Development Focus",
      badge: "Empowering Digital Growth",
      title: "Build Modern Web &\nMobile Applications",
      description: "We design and develop clean, scale-ready software solutions built around React, Node.js, and Cloud services to accelerate your company."
    },
    {
      image: "/banner-center.png",
      alt: "Digital Marketing & SEO",
      badge: "Visibility & Conversion",
      title: "Data-Driven SEO &\nDigital Marketing",
      description: "Amplify your brand's reach with targeted marketing strategies, search engine optimization, and measurable campaigns that drive real growth."
    },
    {
      image: "/banner-right.png",
      alt: "Business Solutions",
      badge: "Enterprise Efficiency",
      title: "Smart IT &\nBusiness Solutions",
      description: "Streamline operations with custom enterprise software, cloud infrastructure, and intelligent automation designed to scale your business."
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);


  return (
    <section className="relative h-[85vh] max-h-[85vh] w-full flex items-center justify-center bg-white overflow-visible  pt-0">

      {/* Background Slideshow Panel (Full-Width Slides) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden  bg-black">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className={`object-cover transition-transform duration-[6000ms] ease-out ${idx === currentSlide ? "scale-110" : "scale-100"
                }`}
            />
          </div>
        ))}
      </div>

      {/* Overlays for dark theme / text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10 pointer-events-none" />

      {/* Top dark gradient overlay for transparent header text readability */}
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent h-28 z-20 pointer-events-none" />

      {/* Main Banner Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center py-auto">

        {/* Wrapper for heading */}
        <div className="max-w-3xl transition-opacity duration-500 ease-in-out" key={currentSlide}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-light uppercase tracking-widest bg-[#8e2157]/20 text-pink-200 border border-[#8e2157]/40 mb-5">
            <Sparkles className="h-3 w-3 animate-pulse text-pink-300" />
            {slides[currentSlide].badge}
          </span>
          <h1 className="text-4xl md:text-5xl  font-light text-white leading-tight mb-6 drop-shadow-lg whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          <p className="text-white/90 text-sm md:text-[16px] leading-relaxed max-w-2xl drop-shadow-md">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-[#8e2157] w-6" : "bg-[#8e2157]/50 hover:bg-[#8e2157]/80"
                }`}
            />
          ))}
        </div>

      </div>

      {/* Floating Interaction widget: Status Section under the Hero Section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4 z-30">
        <div className="bg-white text-gray-900 rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ">

          {/* Stats Panel Body */}
          <div className="p-6 md:p-8 min-h-[120px] flex items-center justify-center">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fadeIn">
              <div className="p-3 rounded-xl border border-gray-50 hover:bg-purple-50/30 transition-all duration-300">
                <div className="text-4xl font-medium text-[#8e2157] mb-1">35+</div>
                <div className="text-[12px] text-gray-600 uppercase tracking-widest font-light mb-1">Projects Delivered</div>
                <div className="text-[14px] text-gray-700">Small to Medium Businesses</div>
              </div>
              <div className="p-3 rounded-xl border border-gray-50 hover:bg-purple-50/30 transition-all duration-300">
                <div className="text-4xl font-medium text-[#8e2157] mb-1">20+</div>
                <div className="text-[12px] text-gray-600 uppercase tracking-widest font-light mb-1">Happy Clients</div>
                <div className="text-[14px] text-gray-700">Partners globally</div>
              </div>
              <div className="p-3 rounded-xl border border-gray-50 hover:bg-purple-50/30 transition-all duration-300">
                <div className="text-4xl font-medium text-[#8e2157] mb-1">99%</div>
                <div className="text-[12px] text-gray-600 uppercase tracking-widest font-light mb-1">Satisfaction</div>
                <div className="text-[14px] text-gray-700">Top quality coding</div>
              </div>
              <div className="p-3 rounded-xl border border-gray-50 hover:bg-purple-50/30 transition-all duration-300">
                <div className="text-4xl font-medium text-[#8e2157] mb-1">3+</div>
                <div className="text-[12px] text-gray-600 uppercase tracking-widest font-light mb-1">Years Experience</div>
                <div className="text-[14px] text-gray-700">Professional development</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HeroBanner;
