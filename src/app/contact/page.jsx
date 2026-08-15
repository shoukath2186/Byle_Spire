"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState(null);

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Full Name is required";
    else if (data.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) newErrors.email = "Email Address is required";
    else if (!emailRegex.test(data.email)) newErrors.email = "Please provide a valid email address";

    if (!data.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\+?[0-9\s\-()]+$/.test(data.phone)) {
      newErrors.phone = "Phone number can only contain numbers.";
    } else if (data.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = "Phone number must contain at least 10 digits";
    }

    if (!data.service) newErrors.service = "Please select a service";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setGeneralError(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        const errData = await response.json();
        if (errData.fieldErrors) {
          setErrors(errData.fieldErrors);
        } else {
          setGeneralError(errData.error || "Failed to send message. Please try again.");
        }
      }
    } catch (error) {
      console.error(error);
      setGeneralError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">

        {/* Page Header */}
        <section className="bg-black py-20 md:py-28 text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#8e2157]/20 via-black to-black opacity-80" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-light uppercase tracking-widest text-pink-200 bg-[#8e2157]/40 border border-[#8e2157]/60 mb-6 backdrop-blur-sm">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4 drop-shadow-lg">
              Let's Build Something <br className="hidden md:block" /> Extraordinary
            </h1>
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Whether you have a fully formed project or just an idea, our team is ready to help you bring it to life.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

              {/* Left Side: Contact Information */}
              <div className="w-full lg:w-2/5 flex flex-col">
                <h2 className="text-3xl font-light text-gray-900 mb-8">
                  Contact Information
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-10">
                  Fill out the form and our team will get back to you within 24 hours. We're looking forward to learning more about your business.
                </p>

                <div className="space-y-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8e2157]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#8e2157]" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Email Us</h4>
                      <p className="text-gray-500 font-light text-sm">hello@bytespire.com</p>
                      <p className="text-gray-500 font-light text-sm">support@bytespire.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8e2157]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#8e2157]" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Call Us</h4>
                      <p className="text-gray-500 font-light text-sm">+1 (555) 123-4567</p>
                      <p className="text-gray-500 font-light text-sm">Mon - Fri, 9am - 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8e2157]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#8e2157]" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Our Office</h4>
                      <p className="text-gray-500 font-light text-sm leading-relaxed">
                        123 Innovation Drive<br />
                        Tech District, Floor 4<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="w-full lg:w-3/5">
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-light text-gray-900 mb-8">Send a Message</h3>

                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center flex flex-col items-center">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <Send className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Message Sent Successfully!</h4>
                      <p className="text-gray-500 font-light text-sm">
                        Thank you for reaching out. One of our experts will get back to you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setErrors({});
                          setGeneralError(null);
                        }}
                        className="mt-6 text-[#8e2157] text-sm font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {generalError && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-start gap-3">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{generalError}</span>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                          <input
                            name="name"
                            type="text"
                            className={`w-full bg-white border ${errors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8e2157]/20 focus:border-[#8e2157] transition-all`}
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                          <input
                            name="email"
                            type="text"
                            className={`w-full bg-white border ${errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8e2157]/20 focus:border-[#8e2157] transition-all`}
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                          <input
                            name="phone"
                            type="tel"
                            className={`w-full bg-white border ${errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8e2157]/20 focus:border-[#8e2157] transition-all`}
                            placeholder="+15551234567"
                            onChange={(e) => {
                              e.target.value = e.target.value.replace(/[^0-9+]/g, "");
                            }}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Service Required <span className="text-red-500">*</span></label>
                          <select
                            name="service"
                            className={`w-full bg-white border ${errors.service ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8e2157]/20 focus:border-[#8e2157] transition-all`}
                          >
                            <option value="">Select a service...</option>
                            <option value="Technology & App Development">Technology & App Development</option>
                            <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                            <option value="Experience Design (UI/UX)">Experience Design (UI/UX)</option>
                            <option value="Branding & Identity">Branding & Identity</option>
                            <option value="Other / General Inquiry">Other / General Inquiry</option>
                          </select>
                          {errors.service && <p className="text-red-500 text-xs mt-1.5">{errors.service}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                        <textarea
                          name="message"
                          rows="4"
                          className={`w-full bg-white border ${errors.message ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8e2157]/20 focus:border-[#8e2157] transition-all resize-none`}
                          placeholder="Tell us about your project..."
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#8e2157] text-white font-medium px-8 py-4 rounded-xl hover:bg-[#6b1842] transition-all duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
