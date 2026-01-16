"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { TechStack } from '@/components/sections/tech-stack';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactForm } from '@/components/ui/contact-form';

export default function Home() {
  const [particles, setParticles] = useState<Array<{ left: string, top: string, delay: string, duration: string }>>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${15 + Math.random() * 10}s`
      }))
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Professional 3D Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float-slow animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600/15 rounded-full blur-[120px] animate-float-slow animation-delay-4000"></div>
        </div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_100%)]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
                animation: `float-particle ${particle.duration} ${particle.delay} infinite ease-in-out`
              }}
            />
          ))}
        </div>

        {/* Depth Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img
                src="/aurion-logo.png"
                alt="Logo"
                className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="text-lg font-semibold">
                Aurion <span className="text-purple-400">Stack</span>
              </span>
            </Link>

            <button
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="text-gray-300 hover:text-white transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
                Contact
              </button>
              <Link href="https://github.com/ProSamhacker" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </Link>
              <ThemeToggle />
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg transition-all font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
              >
                Hire Me
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/5 pt-4">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2">
                Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2">
                Contact
              </button>
              <Link href="https://github.com/ProSamhacker" target="_blank" className="block text-gray-300 hover:text-white transition-colors py-2">
                GitHub
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg transition-colors font-medium text-center mt-2"
              >
                Hire Me
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            Available for Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
          >
            Full-Stack Developer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
              Building Tomorrow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Crafting modern web applications with clean code and exceptional user experiences.
            Specializing in React, Next.js, and AI integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg font-medium transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all backdrop-blur-sm"
            >
              View Projects
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
          >
            {[
              { num: "5+", label: "Years" },
              { num: "50+", label: "Projects" },
              { num: "100%", label: "Quality" }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-purple-500/30 transition-all">
                  <div className="text-2xl md:text-3xl font-bold">{stat.num}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-400 text-lg">Services I offer to bring your ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description: "Building responsive, fast, and scalable web applications using modern frameworks like React and Next.js.",
                gradient: "from-blue-500/10 to-cyan-500/10",
                borderGradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: "🤖",
                title: "AI Integration",
                description: "Implementing AI features and chatbots to enhance user experience and automate processes.",
                gradient: "from-purple-500/10 to-pink-500/10",
                borderGradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description: "Creating clean, intuitive interfaces that users love with attention to detail and accessibility.",
                gradient: "from-pink-500/10 to-rose-500/10",
                borderGradient: "from-pink-500/20 to-rose-500/20"
              },
              {
                icon: "⚡",
                title: "API Development",
                description: "Building secure and efficient REST APIs for seamless frontend-backend communication.",
                gradient: "from-yellow-500/10 to-orange-500/10",
                borderGradient: "from-yellow-500/20 to-orange-500/20"
              },
              {
                icon: "🔧",
                title: "Problem Solving",
                description: "Tackling complex technical challenges with creative solutions and best practices.",
                gradient: "from-green-500/10 to-emerald-500/10",
                borderGradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: "🚀",
                title: "Performance",
                description: "Optimizing applications for speed, SEO, and smooth user experience across devices.",
                gradient: "from-indigo-500/10 to-purple-500/10",
                borderGradient: "from-indigo-500/20 to-purple-500/20"
              }
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.borderGradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`relative p-6 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all hover:-translate-y-1 h-full`}>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Building tools and platforms in public</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "AuraStudio",
                description: "AI-powered web builder for rapid application development and prototyping.",
                gradient: "from-purple-500 to-pink-500",
                tags: ["React", "AI"]
              },
              {
                icon: "🧠",
                title: "AuraIQ",
                description: "Intelligent automation platform for streamlining development workflows.",
                gradient: "from-blue-500 to-cyan-500",
                tags: ["Node.js", "ML"]
              },
              {
                icon: "🔍",
                title: "TrendSpy",
                description: "Market intelligence tool for tracking trends and analyzing data in real-time.",
                gradient: "from-pink-500 to-rose-500",
                tags: ["Analytics", "Data"]
              }
            ].map((project, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                <div className="relative p-6 bg-black/80 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all hover:-translate-y-2 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-5 text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://github.com/ProSamhacker"
              target="_blank"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
            >
              View more on GitHub
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <section id="contact" className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative p-8 md:p-12 bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-gray-400 text-lg">Have a project in mind? Let's discuss how I can help.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                <Link
                  href="https://discord.com/users/1331322687225725022"
                  target="_blank"
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5865F2] to-[#5865F2] rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative flex items-center gap-4 p-4 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 rounded-xl border border-[#5865F2]/30 hover:border-[#5865F2]/50 transition-all">
                    <div className="w-12 h-12 bg-[#5865F2] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium group-hover:text-[#5865F2] transition-colors">Discord</div>
                      <div className="text-sm text-gray-400">Instant chat</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="mailto:aurionstack@gmail.com"
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative flex items-center gap-4 p-4 bg-purple-500/10 hover:bg-purple-500/20 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium group-hover:text-purple-400 transition-colors">Email</div>
                      <div className="text-sm text-gray-400 truncate">aurionstack@gmail.com</div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="text-center">
                <Link
                  href="https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Follow on YouTube for tutorials
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Contact Form */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-center">Or Send a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/aurion-logo.png"
                alt="Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="font-semibold">Aurion <span className="text-purple-400">Stack</span></span>
            </div>

            <div className="text-sm text-gray-400">
              © 2026 Aurion Stack. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="https://github.com/ProSamhacker" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </Link>
              <Link href="https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.6;
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 6s;
        }

        .animation-delay-4000 {
          animation-delay: 12s;
        }
      `}</style>
    </main>
  );
}