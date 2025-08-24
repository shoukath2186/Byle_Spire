import React from 'react'
import {Shield,Star,Users,Award,Coffee,Clock} from 'lucide-react'; 

function OurImpact() {
    const stats = [
        { number: "35+", label: "Projects Completed", icon: Award, description: "Successful projects delivered" },
        { number: "20+", label: "Happy Clients", icon: Users, description: "Satisfied customers worldwide" },
        { number: "99%", label: "Client Satisfaction", icon: Star, description: "Average client satisfaction rate" },
        { number: "24/7", label: "Support Available", icon: Shield, description: "Round-the-clock customer support" },
        { number: "10+", label: "Team Members", icon: Coffee, description: "Expert developers and designers" },
        { number: "3+", label: "Years Experience", icon: Clock, description: "Years of industry expertise" }
    ];

    return (
        <>
            <section className="relative py-24 bg-black overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Enhanced Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-6">
                            <Star className="h-4 w-4 text-purple-400 mr-2" />
                            <span className="text-white/80 text-sm font-semibold">Performance Metrics</span>
                        </div>
                        
                        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent leading-tight">
                            Our Impact in Numbers
                        </h2>
                        <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Real results that demonstrate our <span className="text-purple-400 font-semibold">commitment to excellence</span> and drive for innovation
                        </p>
                    </div>

                    {/* Enhanced Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="group relative">
                                    {/* Card Container */}
                                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl  ">
                                        
                                        
                                        {/* Content */}
                                        <div className="relative text-center">
                                            {/* Icon */}
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gray-300 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                                <Icon className="h-10 w-10 text-black drop-shadow-lg" />
                                            </div>
                                            
                                            {/* Number */}
                                            <div className="text-4xl md:text-5xl font-black mb-3 bg-[#8c3e9b] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                                {stat.number}
                                            </div>
                                            
                                            {/* Label */}
                                            <div className="text-white h-[60px] font-bold text-lg mb-2 group-hover:text-gray-100 transition-colors duration-300">
                                                {stat.label}
                                            </div>
                                            
                                            {/* Description */}
                                            <div className="text-gray-400  text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                                {stat.description}
                                            </div>
                                        </div>

                                        {/* Floating Particles */}
                                        <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="text-center mt-20">
                        <div className="inline-flex items-center space-x-2 text-gray-400 text-lg">
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-purple-400 fill-current" />
                                ))}
                            </div>
                            <span className="font-semibold text-white">Trusted by industry leaders worldwide</span>
                        </div>
                    </div>
                </div>

                {/* Subtle Animation Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-40 left-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-60 right-40 w-2 h-2 bg-white/50 rounded-full animate-pulse opacity-40" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{animationDelay: '3s'}}></div>
                </div>
            </section>
        </>
    )
}

export default OurImpact