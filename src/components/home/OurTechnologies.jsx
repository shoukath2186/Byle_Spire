import React from 'react';

function OurTechnologies() {
  const categories = [
    {
      label: 'Frontend',
      items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      label: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io'],
    },
    {
      label: 'Database',
      items: ['MongoDB', 'Mongoose', 'PostgreSQL'],
    },
    {
      label: 'Tools & Cloud',
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'DigitalOcean'],
    },
  ];

  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.2em] mb-3">
            Technologies
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Technologies I Work With
          </h2>
          <p className="text-white/40 text-sm leading-relaxed">
            A modern, proven set of tools to build fast, secure, and scalable web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6"
            >
              {/* Category Label */}
              <div className="text-white/30 text-xs font-medium uppercase tracking-[0.15em] mb-5">
                {cat.label}
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-white/60 text-sm">
                    <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurTechnologies;
