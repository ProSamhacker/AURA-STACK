"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, () => ({
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
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              animation: `float ${particle.duration} ${particle.delay} infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <img 
                src="/aurion-logo.png" 
                alt="Logo" 
                className="w-9 h-9 object-contain"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="text-lg font-semibold">
                Aurion <span className="text-purple-400">Stack</span>
              </span>
            </Link>

            <button 
              className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
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

            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="text-slate-300 hover:text-white transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
                Contact
              </button>
              <Link href="https://github.com/ProSamhacker" target="_blank" className="text-slate-300 hover:text-white transition-colors">
                GitHub
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium"
              >
                Hire Me
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-800/50 pt-4">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2">
                Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2">
                Contact
              </button>
              <Link href="https://github.com/ProSamhacker" target="_blank" className="block text-slate-300 hover:text-white transition-colors py-2">
                GitHub
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium text-center"
              >
                Hire Me
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for Projects
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Full-Stack Developer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Building Digital Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            I create modern web applications with clean code and great user experiences. 
            Specializing in React, Next.js, and AI integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors"
            >
              View Projects
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl mx-auto">
            <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700/50">
              <div className="text-2xl md:text-3xl font-bold">5+</div>
              <div className="text-sm text-slate-400 mt-1">Years</div>
            </div>
            <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700/50">
              <div className="text-2xl md:text-3xl font-bold">50+</div>
              <div className="text-sm text-slate-400 mt-1">Projects</div>
            </div>
            <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700/50">
              <div className="text-2xl md:text-3xl font-bold">100%</div>
              <div className="text-sm text-slate-400 mt-1">Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-slate-400 text-lg">Services I offer to bring your ideas to life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description: "Building responsive, fast, and scalable web applications using modern frameworks like React and Next.js."
              },
              {
                icon: "🤖",
                title: "AI Integration",
                description: "Implementing AI features and chatbots to enhance user experience and automate processes."
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description: "Creating clean, intuitive interfaces that users love with attention to detail and accessibility."
              },
              {
                icon: "⚡",
                title: "API Development",
                description: "Building secure and efficient REST APIs for seamless frontend-backend communication."
              },
              {
                icon: "🔧",
                title: "Problem Solving",
                description: "Tackling complex technical challenges with creative solutions and best practices."
              },
              {
                icon: "🚀",
                title: "Performance",
                description: "Optimizing applications for speed, SEO, and smooth user experience across devices."
              }
            ].map((service, i) => (
              <div key={i} className="p-6 bg-slate-800/40 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">Building tools and platforms in public</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-6 bg-slate-800/40 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2">AuraStudio</h3>
              <p className="text-slate-400 mb-4">AI-powered web builder for rapid application development and prototyping.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs bg-purple-500/10 border border-purple-500/20 rounded text-purple-300">React</span>
                <span className="px-2 py-1 text-xs bg-purple-500/10 border border-purple-500/20 rounded text-purple-300">AI</span>
              </div>
            </div>

            <div className="group p-6 bg-slate-800/40 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🧠
              </div>
              <h3 className="text-xl font-semibold mb-2">AuraIQ</h3>
              <p className="text-slate-400 mb-4">Intelligent automation platform for streamlining development workflows.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded text-blue-300">Node.js</span>
                <span className="px-2 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded text-blue-300">ML</span>
              </div>
            </div>

            <div className="group p-6 bg-slate-800/40 rounded-lg border border-slate-700/50 hover:border-pink-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🔍
              </div>
              <h3 className="text-xl font-semibold mb-2">TrendSpy</h3>
              <p className="text-slate-400 mb-4">Market intelligence tool for tracking trends and analyzing data in real-time.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs bg-pink-500/10 border border-pink-500/20 rounded text-pink-300">Analytics</span>
                <span className="px-2 py-1 text-xs bg-pink-500/10 border border-pink-500/20 rounded text-pink-300">Data</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="https://github.com/ProSamhacker" 
              target="_blank"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View more on GitHub
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl border border-slate-700/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-slate-400 text-lg">Have a project in mind? Let's discuss how I can help.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Link 
                href="https://discord.com/users/1331322687225725022"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 rounded-lg border border-[#5865F2]/20 hover:border-[#5865F2]/40 transition-all group"
              >
                <div className="w-12 h-12 bg-[#5865F2] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium group-hover:text-[#5865F2] transition-colors">Discord</div>
                  <div className="text-sm text-slate-400">Instant chat</div>
                </div>
              </Link>

              <Link 
                href="mailto:aurionstack@gmail.com"
                className="flex items-center gap-4 p-4 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium group-hover:text-purple-400 transition-colors">Email</div>
                  <div className="text-sm text-slate-400 truncate">aurionstack@gmail.com</div>
                </div>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ"
                target="_blank"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Follow on YouTube for tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/aurion-logo.png" 
                alt="Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="font-semibold">Aurion <span className="text-purple-400">Stack</span></span>
            </div>
            
            <div className="text-sm text-slate-400">
              © 2026 Aurion Stack. All rights reserved.
            </div>
            
            <div className="flex gap-4">
              <Link href="https://github.com/ProSamhacker" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                GitHub
              </Link>
              <Link href="https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </main>
  );
}