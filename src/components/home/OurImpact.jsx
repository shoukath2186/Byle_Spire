import React from 'react';

function OurImpact() {
  const stats = [
    { number: '35+', label: 'Projects Delivered' },
    { number: '20+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '3+',  label: 'Years Experience' },
  ];

  const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js'];

  return (
    <section className="bg-white border-b border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-gray-900 mb-1 tabular-nums">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-gray-100 mb-8" />

        {/* Tech Stack Row */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-gray-300 text-xs uppercase tracking-widest mr-2">Tech Stack</span>
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium border border-gray-200 text-gray-500 bg-gray-50"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurImpact;
