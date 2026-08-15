import React from 'react';
import { Monitor, TrendingUp, PenTool, Layout } from 'lucide-react';

function OurTechnologies() {
  const categories = [
    {
      icon: Monitor,
      label: 'Technology & Development',
      items: ['React.js / Next.js', 'Node.js & Express', 'MongoDB / PostgreSQL', 'React Native', 'AWS / Google Cloud'],
    },
    {
      icon: TrendingUp,
      label: 'Digital Marketing & SEO',
      items: ['Google Analytics 4', 'SEMrush & Ahrefs', 'Meta Ads Manager', 'HubSpot / Salesforce', 'Mailchimp & Klaviyo'],
    },
    {
      icon: Layout,
      label: 'Experience Design (UI/UX)',
      items: ['Figma', 'Adobe XD', 'Framer', 'InVision', 'Webflow'],
    },
    {
      icon: PenTool,
      label: 'Branding & Creative',
      items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Cinema 4D', 'CorelDRAW'],
    },
  ];

  return (
    <section className="bg-[#8e2157] py-10 md:py-15 border-t border-[#6b1842]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
            Technologies & Platforms
          </h2>
          <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            We leverage industry-leading tools and platforms across all our services to deliver exceptional, scalable, and data-driven results.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Cards Grid */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-lg p-8 shadow-xl flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div className="mb-6 text-[#8e2157]">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Category Label */}
                  <h3 className="text-gray-900 text-lg font-semibold mb-4">
                    {cat.label}
                  </h3>

                  {/* Items Description */}
                  <p className="text-gray-600 font-light text-sm leading-relaxed flex-grow">
                    {cat.items.join(', ')}, and more...
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-2/5 relative mt-8 lg:mt-0">
            {/* Image Container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 group">
              <img 
                src="/tech_image.png" 
                alt="Our Technologies" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Subtle Gradient Overlay on image for blending */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8e2157]/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative Outline */}
            <div className="absolute -z-0 top-6 -right-6 w-full h-full border-2 border-white/20 rounded-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurTechnologies;
