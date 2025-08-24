import React, { useEffect, useState } from 'react'
import { Star, Quote, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

function OutClientsSay() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Aarav Mehta",
            company: "TechVision Pvt. Ltd.",
            role: "CEO & Founder",
            content:
                "ByteSpire completely transformed our digital presence. Their team delivered an exceptional website and mobile app that increased our user engagement by 400%. The attention to detail and professionalism is unmatched.",
            rating: 5,
        },
        {
            name: "Priya Sharma",
            company: "GrowthEdge Solutions",
            role: "Marketing Director",
            content:
                "Outstanding service and incredible results! Our new e-commerce platform has increased our conversion rate by 300% and monthly revenue by 250%. ByteSpire's expertise in both design and development is remarkable.",
            rating: 4,
        },
        {
            name: "Rohit Iyer",
            company: "Innoventures India",
            role: "Product Manager",
            content:
                "Professional, reliable, and incredibly innovative. ByteSpire delivered our mobile app ahead of schedule and under budget. Their ongoing support and maintenance service is exceptional. Highly recommended!",
            rating: 5,
        },
        {
            name: "Neha Kapoor",
            company: "StartUpSphere",
            role: "CTO",
            content:
                "The cloud infrastructure and DevOps solutions provided by ByteSpire scaled our application perfectly. We went from 1,000 to 100,000 users without any downtime. Their technical expertise is world-class.",
            rating: 5,
        },
        {
            name: "Karan Verma",
            company: "TrendCraft Fashions",
            role: "Brand Director",
            content:
                "Our brand identity and website redesign exceeded all expectations. Sales increased by 180% in the first quarter after launch. ByteSpire truly understands how to create designs that convert.",
            rating: 4,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
    };

    return (
        <section className="relative py-20 lg:py-32 px-4 bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm text-gray-300 px-6 py-3 rounded-full font-medium text-sm mb-8 border border-gray-700">
                        <MessageSquare className="h-4 w-4 mr-2 text-gray-400" />
                        Client Testimonials
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                        What Our{' '}
                        <span className="relative">
                            <span className="text-gray-300">Clients Say</span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-600 rounded-full"></div>
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what our clients have to say about working with ByteSpire.
                    </p>
                </div>

                {/* Main Testimonial Card */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-800 shadow-2xl">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                                <Quote className="h-8 w-8 text-gray-400" />
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="text-center mb-10">
                            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 font-medium italic">
                                "{testimonials[currentTestimonial].content}"
                            </p>

                            {/* Rating Stars */}
                            <div className="flex justify-center mb-8">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mr-1" />
                                ))}
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center justify-center space-x-4">

                                <div className="text-left">
                                    <div className="font-bold text-lg lg:text-xl text-white">
                                        {testimonials[currentTestimonial].name}
                                    </div>
                                    <div className="text-gray-300 font-medium">
                                        {testimonials[currentTestimonial].role}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {testimonials[currentTestimonial].company}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentTestimonial
                                        ? 'bg-white w-8'
                                        : 'bg-gray-600 w-2 hover:bg-gray-500'
                                        }`}
                                    onClick={() => setCurrentTestimonial(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 shadow-lg"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 shadow-lg"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Bottom Stats */}
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {/* Rating */}
                        <div className="group flex flex-col items-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                4.1/5
                            </div>
                            <div className="text-gray-400 font-medium">Average Rating</div>
                        </div>

                        {/* Retention */}
                        <div className="group flex flex-col items-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                98%
                            </div>
                            <div className="text-gray-400 font-medium">Retention Rate</div>
                        </div>

                        {/* Support */}
                        <div className="group flex flex-col items-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                24/7
                            </div>
                            <div className="text-gray-400 font-medium">Support</div>
                        </div>

                        {/* Add more if needed */}
                        <div className="group flex flex-col items-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                35+
                            </div>
                            <div className="text-gray-400 font-medium">Projects Delivered</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OutClientsSay