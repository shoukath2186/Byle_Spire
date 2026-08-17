"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Check } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/home/FinalCTA";

function ServicesPage() {
  const services = [
    {
      image: '/service_tech.png',
      title: 'Technology & Application Development',
      description: 'We build robust, scalable, and high-performance web and mobile applications tailored to your unique business needs. From initial architecture to deployment, our engineering team ensures top-tier quality.',
      features: ['Custom Web Applications', 'Cross-Platform Mobile Apps', 'API Development & Integration', 'Cloud Architecture & DevOps'],
      linkText: 'Explore technology',
      href: '/services/technology'
    },
    {
      image: '/service_marketing.png',
      title: 'Data-Driven SEO & Digital Marketing',
      description: 'Accelerate your growth with targeted marketing strategies. We combine creative campaigns with deep data analytics to maximize your ROI and increase your brand visibility online.',
      features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC) Advertising', 'Social Media Management', 'Conversion Rate Optimization'],
      linkText: 'View marketing strategies',
      href: '/services/digital-marketing'
    },
    {
      image: '/service_design.png',
      title: 'User-Centric UI/UX & Experience Design',
      description: 'Great design is about how it works, not just how it looks. We craft intuitive, frictionless user journeys and stunning interfaces that keep your users engaged and satisfied.',
      features: ['Wireframing & Prototyping', 'User Interface (UI) Design', 'User Experience (UX) Research', 'Usability Testing'],
      linkText: 'See design process',
      href: '/services/experience-design'
    },
    {
      image: '/service_branding.png',
      title: 'Corporate Identity & Brand Strategy',
      description: 'Your brand is your promise to your customer. We help you define your voice, visualize your identity, and position your company as a market leader in your industry.',
      features: ['Logo & Visual Identity', 'Brand Guidelines & Strategy', 'Corporate Materials Design', 'Rebranding Solutions'],
      linkText: 'Discover branding',
      href: '/services/branding'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow ">
        {/* Page Header */}
        <section className="relative bg-black py-24 md:py-32 text-center px-6 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url("/services_bg.png")' }}
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-light uppercase tracking-widest text-pink-200 bg-[#8e2157]/40 border border-[#8e2157]/60 mb-6 backdrop-blur-sm">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight mb-6 drop-shadow-lg">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-white/80 text-base md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md">
              From building complex software to crafting beautiful brands and driving traffic, we provide end-to-end services to help your business thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Services Detailed Grid */}
        <section className="bg-white py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-[0_12px_40px_rgba(142,33,87,0.08)] hover:border-[#8e2157]/20 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="h-64 w-full overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-light text-gray-900 leading-snug mb-4 group-hover:text-[#8e2157] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 font-light leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-light text-gray-700">
                          <Check className="h-4 w-4 text-[#8e2157] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Link Area */}
                    <Link href={service.href} className="mt-auto inline-block">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-[#8e2157] hover:text-[#6b1842] transition-colors">
                        <span>{service.linkText}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Imported from Home */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;