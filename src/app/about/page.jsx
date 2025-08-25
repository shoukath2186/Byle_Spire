import React from "react";
import { Users, Target, Award, Code, Zap, Shield, Heart, Lightbulb, Rocket, Star } from "lucide-react";
import Header from "../commonElements/Header";
import Footer from "../commonElements/Footer";
import Head from "next/head";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | ByteSpire Innovations Pvt. Ltd</title>
        <meta
          name="description"
          content="Learn more about ByteSpire Innovations Pvt. Ltd — a product and service-based IT company delivering cutting-edge web development, mobile apps, and digital solutions. Building Digital Solutions, One Byte at a Time."
        />
        <meta
          name="keywords"
          content="About ByteSpire, ByteSpire Innovations, IT company, web development, mobile app development, digital transformation, software company in India"
        />
        <meta name="author" content="ByteSpire Innovations Pvt. Ltd" />
        <link rel="canonical" href="https://bytespire.in/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Us | ByteSpire Innovations Pvt. Ltd" />
        <meta
          property="og:description"
          content="Discover ByteSpire Innovations Pvt. Ltd — Building Digital Solutions, One Byte at a Time. Empowering businesses with cutting-edge technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bytespire.in/about" />
        <meta property="og:site_name" content="ByteSpire Innovations Pvt. Ltd" />
        <meta property="og:image" content="https://bytespire.in/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | ByteSpire Innovations Pvt. Ltd" />
        <meta
          name="twitter:description"
          content="ByteSpire Innovations Pvt. Ltd — Building Digital Solutions, One Byte at a Time. Learn about our mission, values, and services."
        />
        <meta name="twitter:image" content="https://bytespire.in/logo.png" />
      </Head>
      <Header />
      <div className="bg-gradient-to-br from-slate-50 via-white to-purple-50 text-gray-900 min-h-screen">
        {/* Hero Section with Animated Background */}
        <section className="relative overflow-hidden px-6 py-24 lg:py-32">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-25 animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
              <Code className="h-5 w-5 text-[#550065]" />
              <span className="text-gray-700 font-medium">Est. 2023 • Digital Innovation</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#550065] via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              ByteSpire Innovations
            </h1>
            <div className="text-2xl lg:text-3xl font-bold text-gray-700 mb-6">
              Pvt. Ltd.
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Building Digital Solutions, One Byte at a Time. We transform ideas into powerful digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#550065] to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                <Rocket className="h-5 w-5" />
                Innovation First
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#550065] text-[#550065] font-semibold rounded-full hover:bg-[#550065] hover:text-white transition-all duration-300">
                <Star className="h-5 w-5" />
                Client Focused
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section with Split Layout */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/50">
                <h2 className="text-4xl lg:text-5xl font-black mb-8 bg-gradient-to-r from-[#550065] to-purple-600 bg-clip-text text-transparent">
                  Who We Are
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    ByteSpire Innovations Pvt. Ltd. is a product and service-based IT company specializing in creating powerful, innovative digital solutions. We believe that technology should be a force for growth, and we partner with businesses to build the tools they need to succeed in the modern digital landscape.
                  </p>
                  <p>
                    From dynamic web platforms to intuitive mobile applications, our team is dedicated to delivering high-quality, scalable solutions that meet your unique challenges. With a client-first approach, we combine creativity, technical expertise, and industry experience to help businesses thrive in a competitive market.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Creative Solutions</h3>
                </div>
                <p className="text-gray-600">We turn complex challenges into elegant, user-friendly solutions that drive real results.</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Cutting-Edge Tech</h3>
                </div>
                <p className="text-gray-600">We leverage the latest technologies to build future-ready applications that scale with your business.</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Passionate Team</h3>
                </div>
                <p className="text-gray-600">Our dedicated team brings passion, expertise, and innovation to every project we undertake.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section with Gradient Background */}
        <section className="px-6 py-20 bg-gradient-to-r from-purple-50 via-white to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full translate-y-1/2 animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
              <Target className="h-5 w-5 text-[#550065]" />
              <span className="text-gray-700 font-medium">Our Mission</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-[#550065] to-purple-600 bg-clip-text text-transparent">
              Empowering Digital Transformation
            </h2>
            <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/50 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our mission is to empower businesses with cutting-edge technology. We aim to be a trusted partner in digital transformation, providing expert IT services that drive efficiency, enhance user experience, and create lasting value. We are committed to excellence, innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section with Enhanced Cards */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-[#550065] to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Innovation Card */}
            <div className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#550065] to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We constantly push boundaries to bring fresh, cutting-edge solutions for modern challenges, staying ahead of technology trends.
                </p>
              </div>
            </div>

            {/* Excellence Card */}
            <div className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality is at the heart of everything we do. We deliver with precision, professionalism, and attention to every detail.
                </p>
              </div>
            </div>

            {/* Collaboration Card */}
            <div className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-600 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe success comes through teamwork, transparency, and strong partnerships built on trust and communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section with Modern Layout */}
        <section className="px-6 py-20 bg-gradient-to-r from-gray-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full translate-x-1/4 translate-y-1/4 animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
                <Code className="h-5 w-5 text-[#550065]" />
                <span className="text-gray-700 font-medium">Our Products</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-[#550065] to-purple-600 bg-clip-text text-transparent">
                Built for Success
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/50 text-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="w-24 h-24 mx-auto lg:mx-0 bg-gradient-to-br from-[#550065] to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Premium Solutions</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    In addition to our services, ByteSpire Innovations Pvt. Ltd. develops and maintains a suite of in-house products. These solutions are built to address common business needs and can be customized to fit the specific requirements of our clients.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">Custom Development</h4>
                      <p className="text-gray-600 text-sm">Tailored solutions for your needs</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">Ready-to-Deploy</h4>
                      <p className="text-gray-600 text-sm">Fast implementation products</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">Enterprise Grade</h4>
                      <p className="text-gray-600 text-sm">Scalable and secure solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Enhanced Design */}
        <section className="px-6 py-20 bg-gradient-to-r from-[#550065] via-purple-700 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto text-white">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                Let's Build the Future Together
              </h2>
              <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Partner with ByteSpire Innovations Pvt. Ltd. to bring your vision to life. From concept to deployment, we're here to deliver world-class digital solutions that drive real results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#550065] font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
                <span>Start Your Project</span>
                <Rocket className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#550065] transition-all duration-300">
                <Users className="h-6 w-6" />
                Meet Our Team
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black mb-2">35+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">99%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;