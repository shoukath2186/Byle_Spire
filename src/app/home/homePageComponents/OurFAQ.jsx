import React, { useState } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

function OurFAQ() {
  const [currentFaq, setCurrentFaq] = useState(null);

  const faqs = [
    {
      question: "How long does a typical web development project take?",
      answer:
        "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout the process.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive support packages including regular updates, security monitoring, performance optimization, and technical support. Our team is available 24/7 for critical issues.",
    },
    {
      question: "Can you work with our existing team and systems?",
      answer:
        "Absolutely! We're experienced in collaborating with in-house teams and integrating with existing systems. We can work as an extension of your team or independently, depending on your needs.",
    },
    {
      question: "What's your pricing structure?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. We provide detailed proposals after our initial consultation.",
    },
    {
      question: "Do you sign NDAs and ensure data security?",
      answer:
        "Yes, we take confidentiality and data security very seriously. We're happy to sign NDAs and follow strict security protocols. All our projects include security best practices and compliance with relevant regulations.",
    },
    {
      question: "Can you help with digital marketing and SEO?",
      answer:
        "Yes! Our digital marketing team provides comprehensive SEO, PPC, social media marketing, and content strategy services. We can help increase your online visibility and drive qualified traffic to your website.",
    },
  ];

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setCurrentFaq(currentFaq === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-white z-10 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#550065]/10 text-[#550065] px-6 py-3 rounded-full font-semibold text-sm mb-6">
            <MessageSquare className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Got <span className="text-[#550065]">Questions</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to the most common questions about our services and
            process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200"
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="font-bold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`transform transition-transform duration-300 ${
                    currentFaq === index ? "rotate-90" : ""
                  }`}
                >
                  <ArrowRight className="h-5 w-5 text-[#550065]" />
                </div>
              </button>

              {/* Answer */}
              {currentFaq === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center text-[#550065] hover:text-purple-600 font-bold text-lg transition-colors duration-300 group"
          >
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurFAQ;
