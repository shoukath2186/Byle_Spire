"use client";
import Image from "next/image"; // Needed because you use useState

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    // { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Technology & Development", path: "/services/technology" },
    { name: "Digital Marketing & SEO", path: "/services/digital-marketing" },
    { name: "UI/UX & Experience Design", path: "/services/experience-design" },
    { name: "Brand Strategy & Identity", path: "/services/branding" },
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
        <div className="flex justify-between items-center h-14 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
              <Image src="/log-no-bg.png" alt="ByteSpire Logo" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10 object-contain" />
            </div>
            <span
              className={`ml-2 lg:ml-3 font-medium text-xl lg:text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"
                }`}
            >
              BYTE SPIRE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group py-6">
                <Link
                  href={item.path}
                  className={`relative flex items-center font-light transition-all duration-300 hover:scale-105 ${isScrolled ? "text-gray-700 hover:text-[#8e2157]" : "text-white/90 hover:text-white"
                    }`}
                >
                  {item.name}
                  {item.name === "Services" && <ChevronDown className="ml-1 w-4 h-4" />}
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#8e2157] rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Dropdown Menu for Services */}
                {item.name === "Services" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className={`w-64 rounded-xl shadow-xl overflow-hidden flex flex-col py-2 ${isScrolled ? "bg-white border border-gray-100" : "bg-black border border-white/10"}`}>
                      {serviceItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className={`px-5 py-3 text-sm font-light transition-colors ${isScrolled ? "text-gray-700 hover:bg-gray-50 hover:text-[#8e2157]" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
            className={`lg:hidden rounded-b-2xl border mt-2 mx-2 shadow-2xl transition-all duration-300 max-h-[80vh] overflow-y-auto ${isScrolled ? "bg-white border-gray-200" : "bg-black/95 border-[#8e2157]/30"
              }`}
          >
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <Link
                    href={item.path}
                    className={`flex justify-between items-center font-light py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${isScrolled
                      ? "text-gray-800 hover:text-[#8e2157] hover:bg-[#8e2157]/10"
                      : "text-white hover:text-purple-300 hover:bg-[#8e2157]/20"
                      }`}
                    onClick={() => {
                      if (item.name !== "Services") {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </Link>

                  {/* Mobile Sub-menu for Services */}
                  {item.name === "Services" && (
                    <div className="pl-6 pr-4 space-y-1 mt-1 mb-2">
                      {serviceItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className={`block py-2 px-4 rounded-lg font-light text-sm transition-colors ${isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-white/70 hover:bg-white/10"}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
