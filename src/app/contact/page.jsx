"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({});
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    else if (formData.name.length < 3) errors.name = "Name must be at least 3 characters";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Enter a valid email address";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone)) errors.phone = "Enter a valid 10-digit phone number";
    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.length < 10) errors.message = "Message must be at least 10 characters";
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setError({});
          setTimeout(() => setIsSubmitted(false), 30000);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9207022186",
      href: "tel:+919207022186",
    },
    {
      icon: Mail,
      label: "Email",
      value: "bytespire1@gmail.com",
      href: "mailto:bytespire1@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Panthirangav, Kozhikode, Kerala",
      href: null,
    },
  ];

  return (
    <>
      <Header />

      <main className="mt-[80px] bg-white min-h-screen">

        {/* Page Header — black strip */}
        <section className="bg-black px-6 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/30 text-xs font-medium uppercase tracking-[0.2em] mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Let's Work Together
            </h1>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              Have a project in mind? Tell me about it. I'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Main Content — two columns */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

            {/* Left — Contact Info */}
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-8">Contact Details</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-900 text-sm font-medium hover:text-accent-600 transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Availability note */}
              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-medium text-gray-600">Available for projects</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Typically respond within 24 hours. For urgent matters, call directly.
                </p>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-8">Send a Message</h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">Message Sent</h3>
                  <p className="text-gray-400 text-sm">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:bg-white transition-colors duration-200 ${
                          error.name ? "border-red-300 bg-red-50" : "border-gray-200"
                        }`}
                      />
                      {error.name && <p className="mt-1.5 text-red-500 text-xs">{error.name}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:bg-white transition-colors duration-200 ${
                          error.email ? "border-red-300 bg-red-50" : "border-gray-200"
                        }`}
                      />
                      {error.email && <p className="mt-1.5 text-red-500 text-xs">{error.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:bg-white transition-colors duration-200 ${
                        error.phone ? "border-red-300 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {error.phone && <p className="mt-1.5 text-red-500 text-xs">{error.phone}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:bg-white transition-colors duration-200 resize-none ${
                        error.message ? "border-red-300 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {error.message && <p className="mt-1.5 text-red-500 text-xs">{error.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold text-sm rounded-lg hover:bg-accent-700 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* Map — minimal */}
        <section className="border-t border-gray-100">
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.217572424494!2d75.7804!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bfa8d097e7d%3A0x4b5bfa7d6d4f80bb!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1692456789012"
            loading="lazy"
            title="ByteSpire Location — Panthirangav, Kozhikode"
            style={{ display: "block" }}
          />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
