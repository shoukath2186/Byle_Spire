"use client"; // Needed because you use useState

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // If scrolled down, true
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white border-b border-gray-200 shadow-md" : "bg-transparent border-b-2 border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 bg-[#5a585a] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
              <img src="/logo.png" alt="" />
            </div>
            <span
              className={`ml-3 font-medium text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"
                }`}
            >
              BYTESPIRE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-light relative group transition-all duration-300 hover:scale-105 ${isScrolled ? "text-gray-700 hover:text-[#8e2157]" : "text-white/90 hover:text-white"
                  }`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#8e2157] rounded-full transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8e2157]/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></span>
              </Link>
            ))}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="relative overflow-hidden bg-[#8e2157] text-white px-5 py-2 rounded-xl font-light transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group"
              >
                <span className="relative z-10">Get Started</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden rounded-b-2xl border mt-2 mx-2 shadow-2xl transition-all duration-300 ${isScrolled ? "bg-white border-gray-200" : "bg-black/95 border-[#8e2157]/30"
              }`}
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block font-light py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${isScrolled
                    ? "text-gray-800 hover:text-[#8e2157] hover:bg-[#8e2157]/10"
                    : "text-white hover:text-purple-300 hover:bg-[#8e2157]/20"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center bg-[#8e2157] text-white px-6 py-4 rounded-xl font-light transition-all duration-300 mt-6 hover:shadow-lg transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
