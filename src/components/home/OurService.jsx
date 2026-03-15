import React from 'react';
import { Code, Monitor, Server, Layout, Smartphone, Rocket, Check } from 'lucide-react';

function OurService() {
  const services = [
    {
      icon: Layout,
      title: 'MERN Stack Development',
      description:
        'Complete, production-ready web applications using MongoDB, Express, React, and Node.js. Every layer handled with precision and scalability in mind.',
      features: [
        'Custom REST API development',
        'React component architecture',
        'MongoDB schema design',
        'Scalable Node.js server setup',
      ],
    },
    {
      icon: Monitor,
      title: 'React.js Web Development',
      description:
        'Fast, component-driven front-end interfaces built with React.js. Clean UI architectures, smooth interactions, and optimised performance.',
      features: [
        'Single Page Applications (SPA)',
        'Reusable component systems',
        'State management (Redux / Context API)',
        'React performance optimisation',
      ],
    },
    {
      icon: Server,
      title: 'Node.js Backend Development',
      description:
        'Reliable, scalable server-side logic built with Node.js and Express. Secure REST APIs, third-party integrations, and authentication systems.',
      features: [
        'RESTful API design and development',
        'JWT authentication & authorisation',
        'Third-party API integrations',
        'Real-time features with Socket.io',
      ],
    },
    {
      icon: Code,
      title: 'Custom Web Application Development',
      description:
        'Custom web applications built from the ground up — tailored to your workflow, your users, and your goals. No templates, no shortcuts.',
      features: [
        'Requirement analysis and planning',
        'Custom admin dashboards',
        'Role-based access control',
        'Cloud deployment (AWS / Vercel / DigitalOcean)',
      ],
    },
    {
      icon: Smartphone,
      title: 'Responsive Website Development',
      description:
        'Fully responsive, mobile-first websites that look sharp on every screen and load fast enough to keep users and search engines happy.',
      features: [
        'Mobile-first CSS architecture',
        'Cross-browser compatibility testing',
        'Core Web Vitals optimisation',
        'Accessibility best practices (WCAG)',
      ],
    },
    {
      icon: Rocket,
      title: 'Startup Website Development',
      description:
        'Startup MVPs and landing pages that look professional, load quickly, and are ready to scale as your business grows.',
      features: [
        'MVP scoping and planning',
        'Landing page with conversion focus',
        'Rapid prototyping',
        'Launch-ready in weeks, not months',
      ],
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.2em] mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Full Stack Web Development Services
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            From MVP launch to enterprise platforms — professional, end-to-end MERN stack development
            tailored to your business goals and timeline.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col"
              >
                {/* Icon */}
                <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-5">
                  <Icon className="h-4 w-4 text-gray-600" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 border-t border-gray-200 pt-4">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                      <Check className="h-3.5 w-3.5 flex-shrink-0 mt-px text-accent-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OurService;
