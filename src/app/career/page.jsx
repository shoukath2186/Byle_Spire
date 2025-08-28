"use client";
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Star,
  Heart,
  Coffee,
  Laptop,
  TrendingUp,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

import Header from "../commonElements/Header";
import Footer from "../commonElements/Footer";


function Page() {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jobCategories = [
    { id: 'all', label: 'All Positions', count: 0 },
    { id: 'engineering', label: 'Engineering', count: 0 },
    { id: 'design', label: 'Design', count: 0 },
    { id: 'marketing', label: 'Marketing', count: 0 },
    { id: 'sales', label: 'Sales', count: 0 }
  ];

  const jobOpenings = []; // Currently empty – you can fill later

  const companyBenefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Laptop,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and modern equipment provided"
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Annual learning budget, conferences, and internal mentorship programs"
    },
    {
      icon: TrendingUp,
      title: "Equity & Growth",
      description: "Stock options, performance bonuses, and clear career progression paths"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, team retreats, and a supportive work environment"
    },
    {
      icon: Users,
      title: "Diverse Team",
      description: "Inclusive culture with team members from around the world"
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeTab);

  return (
    <>
    <Header/>
    <div className="min-h-screen mt-[80px] bg-white text-gray-900">
      {/* Main Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-200 bg-purple-50 mb-6">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Join Our Team</span>
              <Star className="h-4 w-4 text-purple-600" />
            </div>
            
            <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Build Your <span className="text-black">Career</span>
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Join a team of passionate innovators building the future of technology. 
              We're looking for talented individuals who want to make an impact.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { label: 'Open Positions', value: '0' },
                { label: 'Team Members', value: '10+' },
                { label: 'Countries', value: '15+' },
                { label: 'Growth Rate', value: '150%' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-black text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{category.label}</span>
                <span className="bg-white/50 text-xs px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {filteredJobs.length === 0 && (
              <p className="text-center text-gray-500 col-span-2">No job openings available right now.</p>
            )}
          </div>

          {/* Company Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Join Our Team?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe in creating an environment where talented people can thrive and do their best work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                  >
                    <Icon className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            {/* <button className="px-8 py-4 bg-black text-white font-bold rounded-xl shadow-lg  transition">
              View Open Roles
            </button> */}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Page;
