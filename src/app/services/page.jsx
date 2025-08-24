"use client";
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp,
  Cloud, 
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react';
import Header from "../commonElements/Header";
import Footer from "../commonElements/Footer";

function Page() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Full-stack web applications built with modern technologies like React, Next.js, Node.js, and Python. We create scalable, secure, and high-performance solutions.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Scalable"],
      technologies: ["React", "Next.js", "Node.js", "Python", "MongoDB", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter. From concept to App Store deployment.",
      features: ["iOS & Android", "Cross-Platform", "UI/UX Focus", "App Store Ready"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      description: "Complete brand identity, user interface design, and user experience optimization. We create designs that convert and engage.",
      features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"],
      technologies: ["Figma", "Adobe Creative", "Sketch", "InVision", "Principle", "Framer"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & SEO",
      description: "Comprehensive digital marketing strategies including SEO, PPC, social media marketing, and content strategy to grow your online presence.",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush", "HubSpot", "Mailchimp"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      description: "Cloud infrastructure setup, migration, and management. DevOps implementation for continuous integration and deployment.",
      features: ["AWS/Azure Setup", "CI/CD Pipeline", "Server Management", "Security"],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and customer analytics for online retail success.",
      features: ["Payment Gateway", "Inventory System", "Analytics", "Mobile Optimized"],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Magento", "BigCommerce"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-black text-white relative overflow-hidden mt-[60px]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 animate-pulse" 
             style={{ background: 'radial-gradient(circle, #550065 0%, transparent 70%)' }}></div>
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full opacity-15 animate-pulse" 
             style={{ background: 'radial-gradient(circle, #550065 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-10 animate-pulse" 
             style={{ background: 'radial-gradient(circle, #550065 0%, transparent 70%)' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Our Services</span>
              <Star className="h-4 w-4 text-purple-400" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">What We</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Create
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your digital presence with our comprehensive suite of services. 
              From cutting-edge web development to strategic digital marketing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800  p-8 transition-all duration-700 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.gradient} p-[2px]`}>
                    <div className="w-full h-full bg-gray-900 "></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r ${service.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-purple-500 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className={`absolute top-8 right-8 transition-all duration-300 ${
                      isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                    }`}>
                      <ArrowRight className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="  p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${10 + (i * 15)}%`,
                      top: `${20 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can bring your vision to life with our expertise and cutting-edge solutions.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
}

export default Page;