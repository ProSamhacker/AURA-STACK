"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);

  useEffect(() => {
    // Generate particles only on client side
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${15 + Math.random() * 10}s`
      }))
    );
  }, []);
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Advanced 3D Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Animated Grid with Depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/aurion-logo.png" 
              alt="Aurion Stack Logo" 
              width="48" 
              height="48"
              className="object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Aurion Stack
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-neutral-300 hover:text-white transition">
              Services
            </Link>
            <Link href="#products" className="text-neutral-300 hover:text-white transition">
              Products
            </Link>
            <Link href="#hire" className="text-neutral-300 hover:text-white transition">
              Hire Me
            </Link>
            <Link 
              href="https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ" 
              target="_blank"
              className="text-neutral-300 hover:text-red-500 transition"
            >
              YouTube
            </Link>
            <Link 
              href="https://github.com/ProSamhacker" 
              target="_blank"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <div className="min-h-screen w-full flex items-center justify-center relative pt-20">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-4 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Available for Hire
            </div>

            <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-400 leading-tight">
              Full-Stack Developer
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                Building Tomorrow
              </span>
            </h1>
            
            <p className="mt-6 font-normal text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful web applications. Specializing in AI-powered tools, 
              modern web development, and scalable solutions that drive results.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link 
                href="#hire"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="flex items-center gap-2">
                  Hire Me Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="#products"
                className="px-8 py-4 rounded-full border border-neutral-600 bg-neutral-900/50 backdrop-blur text-white hover:bg-neutral-800 hover:border-neutral-500 transition duration-300 transform hover:scale-105 font-semibold"
              >
                View My Work
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
                <div className="text-sm text-neutral-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-neutral-400 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
                <div className="text-sm text-neutral-400 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-4">
            What I Offer
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Comprehensive development services tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "💻",
              title: "Web Development",
              description: "Full-stack web applications using React, Next.js, Node.js, and modern frameworks. Responsive, fast, and SEO-optimized.",
              gradient: "from-blue-600 to-cyan-600",
              tags: ["React", "Next.js", "TypeScript"]
            },
            {
              icon: "🤖",
              title: "AI Integration",
              description: "Integrate powerful AI capabilities into your applications. From chatbots to complex ML models and automation.",
              gradient: "from-purple-600 to-pink-600",
              tags: ["OpenAI", "ML", "Automation"]
            },
            {
              icon: "📱",
              title: "UI/UX Design",
              description: "Beautiful, intuitive interfaces that users love. Modern design systems with attention to detail and accessibility.",
              gradient: "from-pink-600 to-rose-600",
              tags: ["Figma", "Tailwind", "Design"]
            },
            {
              icon: "⚡",
              title: "API Development",
              description: "Robust RESTful and GraphQL APIs. Scalable backend architecture with security and performance in mind.",
              gradient: "from-yellow-600 to-orange-600",
              tags: ["Node.js", "REST", "GraphQL"]
            },
            {
              icon: "🔧",
              title: "Custom Solutions",
              description: "Tailored software solutions for unique business challenges. From concept to deployment and maintenance.",
              gradient: "from-green-600 to-emerald-600",
              tags: ["Custom", "Scalable", "Support"]
            },
            {
              icon: "🚀",
              title: "DevOps & Deployment",
              description: "CI/CD pipelines, cloud deployment, and infrastructure management. Keep your applications running smoothly.",
              gradient: "from-indigo-600 to-purple-600",
              tags: ["AWS", "Docker", "CI/CD"]
            }
          ].map((service, i) => (
            <div key={i} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              <div className="relative p-8 rounded-3xl border border-white/10 bg-black backdrop-blur-xl hover:border-white/20 transition duration-300 transform hover:-translate-y-2 h-full">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section id="products" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Building powerful tools and platforms in public
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: AuraStudio */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative p-8 rounded-3xl border border-white/10 bg-black backdrop-blur-xl hover:border-purple-500/50 transition duration-300 transform hover:-translate-y-2 h-full">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg shadow-purple-500/50">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">AuraStudio</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Next-generation web builder powered by AI. Clone and customize applications in minutes with intelligent component generation.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs">AI-Powered</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs">React</span>
              </div>
            </div>
          </div>

          {/* Card 2: AuraIQ */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative p-8 rounded-3xl border border-white/10 bg-black backdrop-blur-xl hover:border-blue-500/50 transition duration-300 transform hover:-translate-y-2 h-full">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg shadow-blue-500/50">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">AuraIQ</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Intelligent automation platform with AI-driven DevOps capabilities. Deploy, monitor, and optimize with machine learning.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">Automation</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">DevOps</span>
              </div>
            </div>
          </div>

          {/* Card 3: TrendSpy */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative p-8 rounded-3xl border border-white/10 bg-black backdrop-blur-xl hover:border-pink-500/50 transition duration-300 transform hover:-translate-y-2 h-full">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg shadow-pink-500/50">
                <span className="text-2xl">🕵️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">TrendSpy</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Advanced market intelligence platform analyzing emerging trends with real-time data scraping and predictive analytics.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs">Analytics</span>
                <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs">Real-time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIRE ME SECTION */}
      <section id="hire" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative p-12 md:p-16 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6">
                  Let's Build Something Amazing
                </h2>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  Available for freelance projects, full-time opportunities, and consulting work. 
                  I bring expertise in modern web technologies, AI integration, and scalable architecture.
                </p>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Whether you need a complete web application, AI-powered features, or technical consulting, 
                  I'm here to help turn your vision into reality.
                </p>
                
                {/* Why Hire Me */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Fast Turnaround</div>
                      <div className="text-neutral-400 text-sm">Efficient development without compromising quality</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Modern Tech Stack</div>
                      <div className="text-neutral-400 text-sm">Using cutting-edge tools and best practices</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Clear Communication</div>
                      <div className="text-neutral-400 text-sm">Regular updates and transparent collaboration</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  
                  {/* Discord */}
                  <Link 
                    href="https://discord.com/users/1331322687225725022"
                    target="_blank"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 hover:border-[#5865F2]/40 transition mb-4"
                  >
                    <div className="h-12 w-12 rounded-xl bg-[#5865F2] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-[#5865F2] transition">Message on Discord</div>
                      <div className="text-neutral-400 text-sm">Instant responses</div>
                    </div>
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-[#5865F2] group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  {/* Email */}
                  <Link 
                    href="mailto:aurionstack@gmail.com"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 transition"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-purple-400 transition">Email Me</div>
                      <div className="text-neutral-400 text-sm">aurionstack@gmail.com</div>
                    </div>
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="text-center text-neutral-400 text-sm">
                  Usually responds within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. YOUTUBE SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative aspect-video rounded-3xl border border-white/10 bg-black/50 backdrop-blur overflow-hidden group cursor-pointer">
              <Link href="https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ" target="_blank">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/80 to-black/60 group-hover:from-black/70 group-hover:to-black/50 transition">
                  <div className="w-24 h-24 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center transform group-hover:scale-110 transition shadow-2xl shadow-red-500/50">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent"></div>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6">
              Follow the Journey
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Watch me build in public on YouTube. Tutorials, project walkthroughs, coding sessions, 
              and insights into the development process.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Subscribe for weekly content covering web development, AI integration, best practices, 
              and behind-the-scenes looks at real projects.
            </p>
            <Link 
              href="https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold transition transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/aurion-logo.png" 
                  alt="Aurion Stack Logo" 
                  width="40" 
                  height="40"
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Aurion Stack
                </div>
              </div>
              <p className="text-neutral-400 text-sm max-w-md">
                Full-stack developer specializing in AI-powered web applications. Available for hire. 
                Building the future of web development.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><Link href="#services" className="hover:text-white transition">Web Development</Link></li>
                <li><Link href="#services" className="hover:text-white transition">AI Integration</Link></li>
                <li><Link href="#services" className="hover:text-white transition">UI/UX Design</Link></li>
                <li><Link href="#services" className="hover:text-white transition">API Development</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <Link href="https://discord.com/users/1331322687225725022" target="_blank" className="hover:text-white transition">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="mailto:aurionstack@gmail.com" className="hover:text-white transition">
                    Email
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/ProSamhacker" target="_blank" className="hover:text-white transition">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ" target="_blank" className="hover:text-white transition">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <div>© 2026 Aurion Stack. Crafted with precision and passion.</div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition">Privacy</Link>
              <Link href="#" className="hover:text-white transition">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100vh) translateX(100px);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </main>
  );
}