import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

function OurService() {
  const services = [
    {
      image: '/service_tech.png',
      title: 'Technology & Application Development',
      linkText: 'Explore technology',
      href: '/services/technology'
    },
    {
      image: '/service_marketing.png',
      title: 'Data-Driven SEO & Digital Marketing',
      linkText: 'View marketing strategies',
      href: '/services/digital-marketing'
    },
    {
      image: '/service_design.png',
      title: 'User-Centric UI/UX & Experience Design',
      linkText: 'See design process',
      href: '/services/experience-design'
    },
    {
      image: '/service_branding.png',
      title: 'Corporate Identity & Brand Strategy',
      linkText: 'Discover branding',
      href: '/services/branding'
    }
  ];

  return (
    <section className="bg-white py-10 md:py-15 w-full">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            Our Main Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(142,33,87,0.12)] transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-light text-gray-900 leading-snug mb-8">
                  {service.title}
                </h3>

                {/* Bottom Link Area */}
                <div className="mt-auto flex items-center justify-between text-sm font-medium text-gray-900 group-hover:text-[#8e2157] transition-colors">
                  <span>{service.linkText}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurService;
