import React, { useState, useEffect } from 'react';
import { Code, Terminal, Cpu, Database, Globe, Smartphone, Cloud, HardDrive, Server } from 'lucide-react';

function OurTechnologies() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Frontend');

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    const technologies = [
        { name: "React", category: "Frontend", level: 95 },
        { name: "Next.js", category: "Frontend", level: 90 },
        { name: "Vue.js", category: "Frontend", level: 85 },
        { name: "Angular", category: "Frontend", level: 80 },

        { name: "Node.js", category: "Backend", level: 92 },
        { name: "Python", category: "Backend", level: 88 },
        { name: "PHP", category: "Backend", level: 85 },
        { name: "Ruby on Rails", category: "Backend", level: 78 },

        { name: "React Native", category: "Mobile", level: 87 },
        { name: "Flutter", category: "Mobile", level: 83 },
        { name: "Swift", category: "Mobile", level: 80 },
        { name: "Kotlin", category: "Mobile", level: 82 },

        { name: "AWS", category: "Cloud", level: 90 },
        { name: "Azure", category: "Cloud", level: 85 },
        { name: "Google Cloud", category: "Cloud", level: 88 },

        { name: "Docker", category: "DevOps", level: 92 },

        // 🆕 Added Databases
        { name: "MySQL", category: "Database", level: 90 },
        { name: "PostgreSQL", category: "Database", level: 88 },
        { name: "MongoDB", category: "Database", level: 87 },
        { name: "Firebase", category: "Database", level: 83 },
    ];
   const categories = [
  { name: 'All', icon: Globe, color: 'from-white to-gray-300' },
  { name: 'Frontend', icon: Code, color: 'from-blue-400 to-cyan-400' },
  { name: 'Backend', icon: Server, color: 'from-green-400 to-emerald-400' },
  { name: 'Mobile', icon: Smartphone, color: 'from-purple-400 to-pink-400' },
  { name: 'Cloud', icon: Cloud, color: 'from-orange-400 to-yellow-400' },
  { name: 'DevOps', icon: Terminal, color: 'from-red-400 to-rose-400' },
  { name: 'Database', icon: HardDrive, color: 'from-indigo-400 to-blue-500' },
];
    const filteredTechs = selectedCategory === 'All'
        ? technologies
        : technologies.filter(tech => tech.category === selectedCategory);

    const getCategoryColor = (category) => {
        const cat = categories.find(c => c.name === category);
        return cat ? cat.color : 'from-white to-gray-300';
    };

    return (
        <div className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
                        <Cpu className="h-6 w-6 text-white animate-pulse" />
                        <span className="text-white/80 font-medium tracking-wider uppercase text-sm">Technologies</span>
                        <Cpu className="h-6 w-6 text-white animate-pulse" />
                        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
                    </div>

                    <h1 className="text-7xl md:text-8xl font-black mb-8 text-white leading-none">
                        TECH
                        <br />
                        <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                            STACK
                        </span>
                    </h1>

                    <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                        Mastering cutting-edge technologies to deliver exceptional digital solutions
                    </p>
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-3 mb-12">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">
                            🤖 AI Integration
                        </span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.name}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${selectedCategory === category.name
                                        ? 'bg-white text-black border-white scale-105'
                                        : 'bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white/80'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="font-medium">{category.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredTechs.map((tech, index) => (
                        <div
                            key={tech.name}
                            className={`
                                group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition duration-500 cursor-pointer
                                 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Corner accent */}
                            <div className={`absolute top-0 left-0 w-12 h-12 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br ${getCategoryColor(tech.category)} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-white transition-colors duration-300">
                                            {tech.name}
                                        </h3>
                                        <span className="text-white/50 text-sm font-medium uppercase tracking-wider">
                                            {tech.category}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white/40 text-xs mb-1">EXPERTISE</div>
                                        <div className="text-white font-bold text-lg">
                                            {tech.level}%
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative">
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${getCategoryColor(tech.category)} rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: hoveredIndex === index || isLoaded ? `${tech.level}%` : '0%',
                                                transitionDelay: hoveredIndex === index ? '0ms' : `${index * 100 + 500}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Hover Effect Lines */}
                                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="group">
                            <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">22+</div>
                            <div className="text-white/50 text-sm uppercase tracking-wider">Technologies</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">35+</div>
                            <div className="text-white/50 text-sm uppercase tracking-wider">Projects</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                            <div className="text-white/50 text-sm uppercase tracking-wider">Years</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                            <div className="text-white/50 text-sm uppercase tracking-wider">Support</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-24 h-0.5 bg-white/20 mx-auto"></div>
                </div>
            </div>
        </div>
    );
}

export default OurTechnologies;