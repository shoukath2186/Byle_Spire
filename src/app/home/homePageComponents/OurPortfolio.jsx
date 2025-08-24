import React from 'react'
import { ArrowRight,Eye} from 'lucide-react';

import Link from 'next/link';


function OurPortfolio() {

    const portfolio = [
    {
      title: "FinanceFlow - Banking App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description: "Secure mobile banking application with advanced features",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      results: "2M+ downloads, 4.8★ rating"
    },
    {
      title: "ShopEase E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description: "Multi-vendor e-commerce platform with AI recommendations",
      tech: ["Next.js", "Stripe", "AWS"],
      results: "$5M+ GMV, 300% growth"
    },
    {
      title: "MedCare Health Portal",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      description: "Comprehensive healthcare management system",
      tech: ["React", "Python", "MongoDB"],
      results: "50K+ patients served"
    },
    {
      title: "TravelLux Brand Identity",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&h=300&fit=crop",
      description: "Complete brand redesign for luxury travel agency",
      tech: ["Figma", "Adobe Creative"],
      results: "400% brand recognition increase"
    },
    {
      title: "FoodieHub Delivery App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      description: "Food delivery app with real-time tracking",
      tech: ["Flutter", "Firebase", "Google Maps"],
      results: "1M+ orders processed"
    },
    {
      title: "EduTech Learning Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      description: "Online education platform with interactive features",
      tech: ["Vue.js", "WebRTC", "Redis"],
      results: "100K+ students enrolled"
    }
  ];

  return (
    <>
      <section className="relative py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#550065]/10 text-[#550065] px-6 py-3 rounded-full font-semibold text-sm mb-6">
              <Eye className="h-4 w-4 mr-2" />
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Success Stories & <span className="text-[#550065]">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve their digital transformation goals with measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-[#550065]/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#550065] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#550065]">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#550065] font-semibold">{project.results}</div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#550065] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center text-[#550065] hover:text-purple-600 font-bold text-lg transition-colors duration-300 group">
              View All Projects & Case Studies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurPortfolio