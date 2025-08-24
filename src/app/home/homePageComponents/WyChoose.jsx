import React from 'react'
import { Shield, Users, Award, Lightbulb, Clock, ThumbsUp } from 'lucide-react';

function WhyChoose() {
    const whyChooseUs = [
        {
            icon: Award,
            title: "Proven Track Record",
            description: "750+ successful projects delivered with 99% client satisfaction rate. Our portfolio speaks for our expertise and reliability.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "50+ skilled professionals including developers, designers, marketers, and project managers with years of industry experience.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Clock,
            title: "On-Time Delivery",
            description: "We pride ourselves on meeting deadlines. 95% of our projects are delivered on time and within budget.",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "Rigorous testing and quality control processes ensure bug-free, secure, and high-performance solutions.",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: ThumbsUp,
            title: "Post-Launch Support",
            description: "Comprehensive support and maintenance services to keep your digital solutions running smoothly.",
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            icon: Lightbulb,
            title: "Innovation Focus",
            description: "We stay ahead of technology trends and implement cutting-edge solutions to give you a competitive advantage.",
            gradient: "from-yellow-500 to-orange-500"
        }
    ];

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            
            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full font-semibold text-sm mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <Award className="h-4 w-4 mr-2" />
                        Why Choose ByteSpire
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        What Makes Us{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Different
                        </span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our commitment to excellence, innovation, and client success sets us apart in the digital solutions landscape.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {whyChooseUs.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div 
                                key={index} 
                                className="group relative bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 lg:p-8 hover:bg-white hover:border-purple-200 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Gradient border effect on hover */}
                                 {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div> */}
                                
                                <div className="relative z-10">
                                    {/* Icon with gradient background */}
                                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base group-hover:text-gray-700 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                    
                                    {/* Hover arrow indicator */}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-16">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                        <button className="px-8 py-4 border-2 border-purple-200 text-purple-700 font-semibold rounded-2xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-300">
                            View Our Work 
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose