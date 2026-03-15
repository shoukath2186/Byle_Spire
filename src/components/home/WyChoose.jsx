import React from 'react';
import { Check } from 'lucide-react';

function WyChoose() {
  const points = [
    {
      title: 'Direct Communication',
      description:
        'You speak directly with me — the developer. No project managers or middlemen. Faster decisions, fewer misunderstandings, better outcomes.',
    },
    {
      title: 'Clean, Maintainable Code',
      description:
        'Every project follows industry standards — clean architecture, proper documentation, and zero unnecessary complexity.',
    },
    {
      title: 'On-Time Delivery',
      description:
        '95% of my projects ship on or before the agreed deadline. I scope carefully, communicate proactively, and never overpromise.',
    },
    {
      title: 'Scalable Architecture',
      description:
        'I design systems that grow with your business. Your codebase should be ready to handle 10x traffic tomorrow.',
    },
    {
      title: 'Honest Pricing',
      description:
        'You get a fixed quote upfront. No hidden costs, no surprise invoices. Scope changes are discussed before anything changes.',
    },
    {
      title: 'Post-Launch Support',
      description:
        "Your project doesn't end at launch. Post-deployment support, bug fixes, and ongoing maintenance included.",
    },
  ];

  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.2em] mb-3">
            Why Choose Bytespire
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Why Work With a Freelance MERN Stack Developer?
          </h2>
          <p className="text-white/40 text-sm leading-relaxed">
            When you work with Bytespire, you work directly with the developer building your product —
            no account managers, no outsourcing, no surprises.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6"
            >
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent-500" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WyChoose;
