import React from 'react'
import { Zap, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

function VideoPart() {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
                {/* Background Video */}
                <video
                    className="fixed inset-0 w-full h-full object-cover  mt-[60px]"
                    src="/bgVideo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#550065]/20 via-transparent to-purple-500/20 z-10"></div>

                <div className="max-w-7xl mx-auto text-center relative z-20">
                    <div className="space-y-8 animate-fade-in">
                        <div className="inline-flex items-center bg-white backdrop-blur-sm text-black px-6 py-3 rounded-full font-semibold text-sm mb-6 border border-white/20">
                            <Zap className="h-4 w-4 mr-2" />
                            #1 Digital Solutions Partner
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight">
                            <span className="bg-[#9b63a6] bg-clip-text text-transparent">
                                Digital Solutions
                            </span>
                            <br />
                            <span className="text-white">That Transform Businesses</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                            We craft innovative web applications, mobile apps, and digital marketing strategies that drive growth, engage users, and deliver measurable results for forward-thinking businesses worldwide.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/contact" className="relative overflow-hidden bg-[#550065] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group backdrop-blur-sm">
                                <span className="relative z-10 flex items-center">
                                    Start Your Project Today
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>

                            <button className="flex items-center text-white hover:text-purple-200 font-semibold text-lg group transition-all duration-300">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                                    <Play className="h-6 w-6 ml-1" />
                                </div>
                                Watch Our Success Stories
                            </button>
                        </div>

                        {/* Trusted by section */}
                        <div className="pt-16">
                            {/* Your trusted by content can go here */}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoPart