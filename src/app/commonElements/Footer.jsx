"use client";

import React from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  ArrowUp
} from "lucide-react";

function Footer() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "E-commerce Solutions"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t-2 border-[#550065] relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#550065]/5 via-transparent to-purple-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group cursor-pointer">
              <div className="w-12 h-12 bg-[#5a585a] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <img src="/logo.png" alt="" />
              </div>
              <span className="ml-3 text-white font-black text-2xl tracking-tight">
                ByteSpire
              </span>
            </Link>
            
            <p className="text-white/70 leading-relaxed max-w-sm">
              Empowering businesses with cutting-edge technology solutions. 
              We transform ideas into digital reality with innovation and excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-white/80 hover:text-white transition-colors duration-300 group">
                <Mail className="h-5 w-5 mr-3 text-[#550065] group-hover:scale-110 transition-transform duration-300" />
                <span>hello@bytespire.com</span>
              </div>
              <div className="flex items-center text-white/80 hover:text-white transition-colors duration-300 group">
                <Phone className="h-5 w-5 mr-3 text-[#550065] group-hover:scale-110 transition-transform duration-300" />
                <span>+91 7777 777 777</span>
              </div>
              <div className="flex items-center text-white/80 hover:text-white transition-colors duration-300 group">
                <MapPin className="h-5 w-5 mr-3 text-[#550065] group-hover:scale-110 transition-transform duration-300" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-xl">Quick Links</h3>
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block text-white/80  font-semibold transition-all duration-300 transform hover:translate-x-2 hover:text-purple-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#550065] rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-xl">Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="block text-white/80  font-semibold transition-all duration-300 transform hover:translate-x-2 hover:text-purple-300 relative group"
                >
                  {service}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#550065] rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-xl">Stay Connected</h3>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-[#5a585a] flex items-center justify-center rounded-lg hover:bg-[#550065] text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-white/80 text-sm">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-[#550065]/30 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:border-[#550065] transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-[#550065] text-white rounded-r-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#550065]/30 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/70 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} ByteSpire. All rights reserved.</p>
            <div className="flex space-x-6 mt-2">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#550065] text-white rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;