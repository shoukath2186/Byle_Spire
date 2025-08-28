import React, { useState, useEffect } from 'react';
import { Code, Palette, Rocket, Target, Clock, ChevronRight, Zap, Star } from 'lucide-react';
import Link from 'next/link';

function OurProcess() {
    const [activeStep, setActiveStep] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [backgroundDots, setBackgroundDots] = useState([]);

    useEffect(() => {
        // Set client flag to prevent hydration mismatch
        setIsClient(true);
        setIsInView(true);
        
        // Generate background dots only on client
        const dots = [...Array(50)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5
        }));
        setBackgroundDots(dots);

        // Auto-cycle through steps - only start after hydration
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % 4);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    const process = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "We dive deep into understanding your vision, goals, and requirements to create a solid foundation for success.",
            icon: Target,
            duration: "1-2 weeks",
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-50 to-cyan-50"
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Transform ideas into stunning visuals with wireframes, mockups, and interactive prototypes that bring your vision to life.",
            icon: Palette,
            duration: "2-3 weeks",
            color: "from-purple-500 to-pink-500",
            bgColor: "from-purple-50 to-pink-50"
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Our expert developers craft your solution with cutting-edge technology, rigorous testing, and quality assurance.",
            icon: Code,
            duration: "4-12 weeks",
            color: "from-green-500 to-emerald-500",
            bgColor: "from-green-50 to-emerald-50"
        },
        {
            step: "04",
            title: "Launch & Optimization",
            description: "Deploy with confidence and continuous optimization, monitoring, and support to ensure peak performance.",
            icon: Rocket,
            duration: "Ongoing",
            color: "from-orange-500 to-red-500",
            bgColor: "from-orange-50 to-red-50"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-20 px-4 relative overflow-hidden">
            {/* Animated background pattern - only render on client */}
            {isClient && (
                <div className="absolute inset-0 opacity-10">
                    {backgroundDots.map((dot) => (
                        <div
                            key={dot.id}
                            className="absolute w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                            style={{
                                left: `${dot.left}%`,
                                top: `${dot.top}%`,
                                animationDelay: `${dot.delay}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
                        <Zap className="h-5 w-5 text-yellow-500" />
                        <span className="font-semibold text-gray-700">Our Workflow</span>
                        <Star className="h-4 w-4 text-yellow-500" />
                    </div>

                    <p className="text-6xl md:text-8xl font-black mb-6">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                            Our
                        </span>
                        <span> </span>
                        <span className="bg-[#a411c1] bg-clip-text text-transparent ">
                            Process
                        </span>
                    </p>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A streamlined approach that transforms your ideas into exceptional digital experiences
                    </p>
                </div>

                {/* Main Process Timeline */}
                <div className="relative">
                    {/* Central Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full"></div>

                    {/* Progress Indicator */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full transition-all duration-1000 z-10"
                        style={{ height: `${((activeStep + 1) / 4) * 100}%` }}
                    ></div>

                    <div className="space-y-20">
                        {process.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = activeStep === index;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                    onClick={() => setActiveStep(index)}
                                >
                                    {/* Timeline Node */}
                                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all duration-500 z-20 cursor-pointer ${isActive
                                        ? `bg-gradient-to-r ${step.color} scale-125 shadow-xl`
                                        : 'bg-gray-300 hover:scale-110'
                                        }`}>
                                        {isActive && isClient && (
                                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} animate-ping opacity-75`}></div>
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <div className={`${isLeft ? 'pr-12 ml-4' : 'pl-12 mr-4'} w-full max-w-md`}>
                                        <div
                                            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border transition-all duration-500 cursor-pointer ${isActive
                                                ? `border-transparent bg-gradient-to-br ${step.bgColor} scale-105 shadow-2xl`
                                                : 'border-gray-200 hover:scale-102 hover:shadow-xl'
                                                }`}
                                            style={{
                                                transform: isActive ? 'scale(1.05)' : 'scale(1)',
                                                filter: isActive ? 'brightness(1.1)' : 'brightness(1)'
                                            }}
                                        >
                                            {/* Icon and Step Number */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg ${isActive && isClient ? 'animate-bounce' : ''}`}>
                                                    <Icon className="h-8 w-8" />
                                                </div>
                                                <div className={`text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                                    {step.step}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                                            {/* Duration and Action */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <Clock className="h-4 w-4" />
                                                    <span className="font-medium">{step.duration}</span>
                                                </div>
                                                <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isActive ? 'translate-x-1' : ''}`} />
                                            </div>

                                            {/* Active indicator glow */}
                                            {isActive && isClient && (
                                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-20 animate-pulse -z-10`}></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Step Indicators */}
                <div className="flex justify-center gap-4 mt-16">
                    {process.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${activeStep === index
                                ? `bg-gradient-to-r ${step.color} scale-125`
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Link href="/contact">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                            <span>Let's Start Your Journey</span>
                            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div> 
                    </Link>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default OurProcess;