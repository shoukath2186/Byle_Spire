"use client";
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  Award,
  ArrowRight,
 
  Eye,
  Heart,
  Star,
  Sparkles,
  Code2,
  Smartphone,
  Globe,
} from 'lucide-react';
import Header from "../commonElements/Header";
import Footer from "../commonElements/Footer";



function Page() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [likedProjects, setLikedProjects] = useState(new Set());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with AI-powered recommendations, real-time inventory, and seamless payment integration.",
    category: "web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    client: "TechStore Inc.",
    duration: "4 months",
    year: "2024",
    status: "Live",
    likes: 127,
    views: "2.3k",
    featured: true,
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    description: "Cross-platform fitness tracking app with personalized workout plans, nutrition tracking, and social features.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    client: "FitLife Studios",
    duration: "6 months",
    year: "2024",
    status: "In Development",
    likes: 89,
    views: "1.8k",
    featured: true,
    color: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    id: 3,
    title: "Brand Identity Redesign",
    description: "Complete brand overhaul for a tech startup including logo design, color palette, and marketing materials.",
    category: "design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Figma", "Adobe Creative Suite", "Sketch"],
    client: "InnovateTech",
    duration: "2 months",
    year: "2025",
    status: "Completed",
    likes: 156,
    views: "3.1k",
    featured: false,
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    id: 4,
    title: "Real Estate Dashboard",
    description: "Comprehensive property management dashboard with analytics, tenant management, and financial reporting.",
    category: "web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    client: "PropertyPro",
    duration: "5 months",
    year: "2025",
    status: "Live",
    likes: 98,
    views: "2.7k",
    featured: true,
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    id: 5,
    title: "Healthcare Mobile Solution",
    description: "HIPAA-compliant mobile app for patient management, appointment scheduling, and telemedicine consultations.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Flutter", "Dart", "AWS", "GraphQL"],
    client: "MedCare Solutions",
    duration: "8 months",
    year: "2023",
    status: "Live",
    likes: 143,
    views: "4.2k",
    featured: true,
    color: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50"
  },
  {
    id: 6,
    title: "SaaS Analytics Platform",
    description: "Business intelligence platform with custom dashboards, data visualization, and automated reporting.",
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Vue.js", "Python", "Django", "D3.js", "Redis"],
    client: "DataInsight Pro",
    duration: "7 months",
    year: "2025",
    status: "Live",
    likes: 201,
    views: "5.6k",
    featured: true,
    color: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  }
];


  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Development', icon: Code2 },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'design', label: 'UI/UX Design', icon: Award }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleLike = (projectId) => {
    setLikedProjects(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(projectId)) {
        newLiked.delete(projectId);
      } else {
        newLiked.add(projectId);
      }
      return newLiked;
    });
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-white relative overflow-hidden mt-[80px]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #550065 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#550065' }}
            ></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-purple-200 bg-purple-50 mb-6">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">Our Portfolio</span>
              <Star className="h-4 w-4 text-purple-600" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-gray-900">
              <span>Featured</span>
              <br />
              <span style={{ color: '#550065' }}>Projects</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover our latest work and see how we've helped businesses transform 
              their digital presence with innovative solutions.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeFilter === category.id
                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={{
                      backgroundColor: activeFilter === category.id ? '#550065' : undefined
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: hoveredProject === project.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    <Star className="h-3 w-3 inline mr-1" />
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 "
                  />
                  
                  {/* Overlay */}
                  
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                      {project.status}
                    </span>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                      <button
                        onClick={() => handleLike(project.id)}
                        className="flex items-center gap-1 transition-colors hover:text-red-500"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            likedProjects.has(project.id) ? 'fill-red-500 text-red-500' : ''
                          }`} 
                        />
                        <span>{project.likes + (likedProjects.has(project.id) ? 1 : 0)}</span>
                      </button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.client}</span>
                    </div>
                  </div>

                  
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${project.color} pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ 
                backgroundColor: '#550065',
                color: 'white'
              }}
            >
              <span>Load More Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats Section */}
          <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { label: 'Projects Completed', value: '35+', icon: Award },
              { label: 'Happy Clients', value: '20+', icon: Heart },
              { label: 'Years Experience', value: '3+', icon: Calendar },
              { label: 'Team Members', value: '10+', icon: Users }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors duration-300">
                  <Icon className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                  <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        .line-clamp-3 {  
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
}

export default Page;