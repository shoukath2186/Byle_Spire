import React from 'react'
import Link from 'next/link';
import { 
  Code, Smartphone, Palette, TrendingUp, ArrowRight, CheckCircle,
  Cloud, ShoppingCart, Rocket
} from 'lucide-react';

function Service() { 
    const services = [
        {
            icon: Code,
            title: "Custom Web Development",
            description: "Full-stack web applications built with modern technologies like React, Next.js, Node.js, and Python. We create scalable, secure, and high-performance solutions.",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Scalable"],
            technologies: ["React", "Next.js", "Node.js", "Python", "MongoDB", "PostgreSQL"]
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter. From concept to App Store deployment.",
            features: ["iOS & Android", "Cross-Platform", "UI/UX Focus", "App Store Ready"],
            technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"]
        },
        {
            icon: Palette,
            title: "UI/UX Design & Branding",
            description: "Complete brand identity, user interface design, and user experience optimization. We create designs that convert and engage.",
            features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"],
            technologies: ["Figma", "Adobe Creative", "Sketch", "InVision", "Principle", "Framer"]
        },
        
    ];

    return (
        <>
            <section className="relative py-24 px-4 bg-white overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gray-100/50 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(85,0,101,0.1) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Enhanced Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center bg-[#550065]/10 text-[#550065] px-8 py-3 rounded-full font-semibold text-sm mb-8 border border-[#550065]/20">
                            <Rocket className="h-5 w-5 mr-3" />
                            Our Premium Services
                        </div>
                        
                        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                            <span className="text-gray-900">Comprehensive</span>
                            <br />
                            <span className="bg-gradient-to-r from-[#550065] to-purple-600 bg-clip-text text-transparent">Digital Solutions</span>
                        </h2>
                        
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            From concept to launch, we provide <span className="text-[#550065] font-semibold">end-to-end digital services</span> that help businesses thrive in the digital landscape.
                        </p>
                    </div>

                    {/* Enhanced Services Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="group relative h-full">
                                    {/* Card Container */}
                                    <div className="relative h-full bg-white  p-8 border-2 border-gray-100 hover:border-[#550065]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#550065]/10 group-hover:bg-purple-50">
                                        
                                      
                                        {/* Content */}
                                        <div className="relative h-full flex flex-col">
                                            {/* Header */}
                                            <div className="flex items-center mb-6">
                                                <div className="w-16 h-16 bg-gradient-to-br from-[#550065] to-purple-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                                    <Icon className="h-8 w-8 text-white drop-shadow-lg" />
                                                </div>
                                                <h3 className="text-xl font-bold ml-4 text-gray-900 group-hover:text-[#550065] transition-colors duration-300 leading-tight">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-1 gap-3 mb-6">
                                                {service.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center text-sm">
                                                        <CheckCircle className="h-4 w-4 text-[#550065] mr-3 flex-shrink-0" />
                                                        <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Technologies */}
                                            <div className="border-t border-gray-200 pt-6 mt-auto">
                                                <div className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">Technologies:</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.technologies.map((tech, techIndex) => (
                                                        <span key={techIndex} className="bg-[#550065]/10 text-[#550065] px-3 py-1 rounded-full text-xs font-semibold border border-[#550065]/20 hover:bg-[#550065]/20 transition-colors duration-300">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Particles */}
                                        <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Enhanced CTA Section */}
                    <div className="text-center">
                        
                        
                        <Link href="/services" className="relative inline-flex items-center bg-gradient-to-r from-[#550065] via-purple-600 to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 group border border-purple-400/50">
                            <span className="relative z-10 flex items-center">
                                <Rocket className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                                Explore All Services
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        </Link>
                    </div>
                </div>

                {/* Subtle Animation Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-60 left-20 w-1 h-1 bg-[#550065] rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-80 right-40 w-2 h-2 bg-gray-400 rounded-full animate-pulse opacity-20" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-[#550065] rounded-full animate-ping opacity-30" style={{animationDelay: '3s'}}></div>
                </div>
            </section>
        </>
    )
}

export default Service