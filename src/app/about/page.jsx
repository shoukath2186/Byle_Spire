import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Cpu, Code2, LineChart, Layout, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About ByteSpire | AI & Digital Solutions Company in Kerala',
  description: 'ByteSpire Innovations is a Kerala-based IT company building AI-powered web, mobile & digital solutions for businesses of every size. Know our story.',
  keywords: 'ByteSpire Innovations, AI solutions for business, AI development company India, web development company Kerala, digital agency Kozhikode, AI powered software solutions'
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does ByteSpire build AI solutions for small businesses too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We scope AI solutions — from chatbots to workflow automation — for businesses of any size and budget, not just large enterprises."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does ByteSpire work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work across industries including e-commerce, SaaS, healthcare, real estate, education, and professional services, adapting our tech and AI solutions to each sector's needs."
      }
    },
    {
      "@type": "Question",
      "name": "Where is ByteSpire located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ByteSpire Innovations Pvt. Ltd is based in Kozhikode, Kerala, and works with clients across India and internationally."
      }
    },
    {
      "@type": "Question",
      "name": "Can ByteSpire add AI features to my existing website or app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We regularly integrate AI capabilities — chatbots, automation, predictive tools — into existing systems without requiring a full rebuild."
      }
    }
  ]
};

function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Header />

      <main className="flex-grow">
        {/* SECTION 1 — Hero */}
        <section className="relative bg-black py-24 md:py-32 text-center px-6 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url("/about_bg.png")' }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/50 to-white" />
          
          <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center mt-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-light uppercase tracking-widest text-pink-200 bg-[#8e2157]/40 border border-[#8e2157]/60 mb-6 backdrop-blur-sm">
              Our Story
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6 drop-shadow-lg">
              Empowering Businesses Through <br className="hidden md:block" /> AI-Driven Digital Innovation
            </h1>
            <p className="text-white/80 text-base md:text-xl font-light leading-relaxed max-w-3xl drop-shadow-md">
              ByteSpire is a Kerala-based digital and AI solutions company helping businesses of every size build, automate, and scale with technology that actually moves the needle.
            </p>
          </div>
        </section>

        {/* SECTION 2 — Who We Are */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
              We Build Digital Experiences That Matter
            </h2>
            <div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed text-left md:text-center">
              <p>
                ByteSpire Innovations Pvt. Ltd was founded on a simple belief: technology should accelerate a business, not complicate it. What started as a small team with a big vision has grown into a full-stack digital partner for startups, SMEs, and enterprises across India and beyond.
              </p>
              <p>
                Today, we're a collective of developers, AI engineers, designers, and strategists working under one roof — not in silos. We combine software engineering, artificial intelligence, design, and marketing into one connected process, so every product we build is functional, intelligent, and built to convert.
              </p>
              <p>
                From launching a scalable SaaS platform, to embedding AI automation into an existing business workflow, to rebranding a legacy company for the digital-first era — our mission stays the same: turn bold ideas into working, revenue-generating reality.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — AI Solutions */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                AI Solutions for Every Business
              </h2>
              <p className="text-gray-600 font-light text-base md:text-lg">
                Artificial intelligence isn't a buzzword at ByteSpire — it's built into how we solve problems. We design and deploy practical AI solutions for businesses of any size and industry, so you get real efficiency gains, not just a chatbot bolted onto your website.
              </p>
            </div>

            <div className="mb-12 text-center">
              <h3 className="text-xl font-light text-gray-900">What We Deliver</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'AI Chatbots & Virtual Assistants', desc: 'Custom-trained bots for customer support, lead capture, and internal operations.' },
                { title: 'Workflow & Process Automation', desc: 'AI-driven automation that removes repetitive manual work from your team\'s day.' },
                { title: 'AI Integration for Existing Systems', desc: 'We plug AI capabilities into your current website, app, CRM, or ERP without a rebuild from scratch.' },
                { title: 'Predictive Analytics & Business Intelligence', desc: 'Turn your business data into forecasts and decisions, not just dashboards.' },
                { title: 'Custom AI Model Development', desc: 'For businesses that need something purpose-built beyond off-the-shelf tools.' },
                { title: 'AI-Powered Content & SEO Tools', desc: 'Solutions that help your marketing team produce and optimize content faster.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#8e2157]/20 transition-all duration-300">
                  <h4 className="text-base font-medium text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-gray-600 font-light text-base md:text-lg">
                Whether you're a 5-person startup or an established enterprise, our AI solutions are scoped to your budget and built to scale with you — no unnecessary complexity, no inflated tech stack.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — What We Do (Core Services) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Full-Stack Digital Capabilities Under One Roof
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Code2, title: 'Technology & Development', desc: 'Web applications, mobile apps, and scalable backend architecture built for performance and security.', link: '/services/technology' },
                { icon: Cpu, title: 'Artificial Intelligence Solutions', desc: 'AI automation, custom AI tools, and intelligent integrations tailored to your business processes.', link: '/services/ai-solutions' },
                { icon: LineChart, title: 'Digital Marketing & SEO', desc: 'Data-driven SEO, paid campaigns, and content strategy that drives measurable traffic and conversions.', link: '/services/marketing' },
                { icon: Layout, title: 'UI/UX & Experience Design', desc: 'Pixel-perfect, user-first design that makes complex products feel simple to use.', link: '/services/ui-ux' },
                { icon: Sparkles, title: 'Brand Strategy & Identity', desc: 'Positioning, visual identity, and brand messaging that helps you stand out in a crowded market.', link: '/services/branding' },
              ].map((service, i) => (
                <div key={i} className="group bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:border-[#8e2157]/20 transition-all duration-300 border border-transparent flex flex-col h-full">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8e2157] group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <service.icon className="w-6 h-6 text-[#8e2157] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-[#8e2157] transition-colors">
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p className="text-gray-500 font-light text-sm mb-6 flex-grow leading-relaxed">{service.desc}</p>
                  <Link href={service.link} className="inline-flex items-center text-sm font-medium text-[#8e2157] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Why Choose ByteSpire */}
        <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Why Businesses Choose ByteSpire
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Result-Oriented', desc: "We don't just write code or run campaigns; we deliver measurable outcomes that grow your revenue and ROI." },
                { title: 'True Partnership', desc: "Transparent communication, no jargon, no vendor games. You work with a dedicated team, not a ticketing system." },
                { title: 'AI-First, Not AI-Hype', desc: "We use AI where it genuinely improves your business, not as a marketing gimmick." },
                { title: 'Agile & Fast', desc: "The digital landscape moves quickly, and so do we — adaptive processes, quick turnarounds, no bureaucracy." },
                { title: 'Uncompromising Quality', desc: "From pixel-perfect UI to secure, scalable backend systems, every layer is built to last." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#8e2157]" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — Our Process */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-16 text-center">
              How We Work
            </h2>
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Discover', desc: 'We learn your business, your goals, and where technology (including AI) can create the biggest impact.' },
                { step: '2', title: 'Design & Strategize', desc: 'We map out the solution — UX, architecture, and AI/automation opportunities — before writing a single line of code.' },
                { step: '3', title: 'Build', desc: 'Our developers and AI engineers build your product in agile sprints, with regular check-ins.' },
                { step: '4', title: 'Launch & Optimize', desc: 'We deploy, monitor, and continuously optimize for performance, SEO, and conversions.' },
                { step: '5', title: 'Support & Scale', desc: 'Post-launch support and scalable architecture so your solution grows with your business.' }
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-200 text-xl font-light text-[#8e2157] z-10 relative shadow-sm group-hover:border-[#8e2157] transition-colors">
                    {item.step}
                  </div>
                  {i < 4 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gray-200 z-0"></div>}
                  <h3 className="text-base font-medium text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — Who We Work With */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              Built for Businesses of Every Size
            </h2>
            <p className="text-gray-600 font-light text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're a solo founder validating an MVP, a growing SME automating operations, or an enterprise integrating AI across departments — our team scopes solutions to fit your stage, not a one-size-fits-all package.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Startups & Founders', 'Small & Medium Businesses', 'E-commerce Brands', 'Enterprises & Established Corporations'].map((item, i) => (
                <span key={i} className="px-6 py-3 bg-white border border-gray-200 shadow-sm rounded-full text-gray-700 font-light text-sm hover:border-[#8e2157]/30 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — FAQs */}
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.mainEntity.map((faq, i) => (
                <div key={i} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3">{faq.name}</h3>
                  <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — Closing CTA */}
        <section className="relative w-full py-16 md:py-20 bg-black overflow-hidden border-t border-gray-100">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: 'url("/cta_bg.png")' }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />

          <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl md:text-4xl font-light text-white leading-tight mb-6 drop-shadow-md">
                Ready to Bring AI <br className="hidden md:block"/> Into Your Business?
              </h2>
              <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl">
                Whether you need a scalable web application, an AI-powered automation tool, or a complete digital and brand overhaul — our team is ready to build it with you.
              </p>
              
              <div className="flex flex-wrap gap-4 md:gap-6">
                {['Free Consultation', 'Custom AI & Digital Solutions', 'Rapid Response Time'].map((signal, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/70 text-sm font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#8e2157]" />
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#8e2157] text-white font-light px-8 py-4 rounded-full text-lg hover:bg-[#6b1842] transition-all duration-300 shadow-[0_8px_30px_rgba(142,33,87,0.3)] hover:shadow-[0_12px_40px_rgba(142,33,87,0.5)] group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;