"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

import Header from "../commonElements/Header";
import Footer from "../commonElements/Footer";



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


  // ✅ Input change handler
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError({});
  };

  // ✅ Validation function
  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setError(errors);
    return Object.keys(errors).length === 0; // true if no errors
  };

  // ✅ Submit handler
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
        // console.log(res); 
      } catch (error) {
         console.log(error);
         
      } finally {
        setLoading(false);
      }

    }
  };

  return (
    <>
    <Header/>
    <div className="bg-gradient-to-br from-slate-50 via-white to-purple-50 text-gray-900 min-h-screen mt-[80px]">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden px-6 py-24 lg:py-32 bg-gray-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#550065] via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Let's Connect
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
            Ready to bring your vision to life? We're here to make magic happen.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Available for new projects</span>
          </div>
        </div>
      </section>

      {/* Contact Cards with Hover Effects */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-100 border-2 border-gray-200 m-[30px] rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#550065] to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-4">Ready to chat? Give us a ring!</p>
              <a className="text-[#550065] font-semibold hover:text-purple-700 transition-colors">
                +91 7777 777 777
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Email Us</h3>
              <p className="text-gray-600 mb-4">Drop us a line anytime!</p>
              <a href="" className="text-[#550065] font-semibold hover:text-purple-700 transition-colors">
                contact@bytespire.com
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come say hello!</p>
              <p className="text-[#550065] font-semibold">Calicut, Kerala, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-[#550065] to-purple-600 bg-clip-text text-transparent">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-600">Tell us about your project and let's create something amazing together</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full p-6 rounded-2xl border-2 ${error.name ? "border-red-500" : "border-gray-200"
                      } focus:border-[#550065] focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg group-hover:shadow-lg`}
                  />
                  {error.name && (
                    <p className="mt-2 text-red-600 text-sm">{error.name}</p>
                  )}
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className={`w-full p-6 rounded-2xl border-2 ${error.email ? "border-red-500" : "border-gray-200"
                      } focus:border-[#550065] focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg group-hover:shadow-lg`}
                  />
                  {error.email && (
                    <p className="mt-2 text-red-600 text-sm">{error.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className={`w-full p-6 rounded-2xl border-2 ${error.phone ? "border-red-500" : "border-gray-200"
                    } focus:border-[#550065] focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg group-hover:shadow-lg`}
                />
                {error.phone && (
                  <p className="mt-2 text-red-600 text-sm">{error.phone}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className={`w-full p-6 rounded-2xl border-2 ${error.message ? "border-red-500" : "border-gray-200"
                    } focus:border-[#550065] focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg resize-none group-hover:shadow-lg`}
                ></textarea>
                {error.message && (
                  <p className="mt-2 text-red-600 text-sm">{error.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                 <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#550065] to-purple-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={loading || isSubmitted}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    {loading ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin" />
                        Sending Message...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-6 w-6 animate-pulse" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-[#550065] to-purple-600 bg-clip-text text-transparent">
              Find Our Space
            </h2>
            <p className="text-xl text-gray-600">Located in the heart of God's Own Country</p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50">
              <iframe
                className="w-full h-96 lg:h-[500px] rounded-3xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.217572424494!2d75.7804!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bfa8d097e7d%3A0x4b5bfa7d6d4f80bb!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1692456789012"
                loading="lazy"
                title="ByteSpire Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section className="px-6 py-20 bg-gradient-to-r from-[#550065] via-purple-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who've transformed their ideas into reality with ByteSpire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#550065] font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a href="" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#550065] transition-all duration-300">
              <Mail className="h-5 w-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default ContactPage;