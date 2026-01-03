import Link from 'next/link';
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        
        {/* --- ANIMATION LAYER --- */}
        {/* Spotlight: The cinematic light from the top */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        {/* Beams: The subtle matrix grid in the background */}
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

        {/* --- CONTENT LAYER --- */}
        {/* z-10 is CRITICAL here so buttons are clickable over the background animations */}
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Aurastack <br /> <span className="text-purple-400">Intelligence.</span>
          </h1>
          
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            A suite of AI-powered development tools built in public. 
            From code generation to trend analysis.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <Link href="https://github.com/ProSamhacker" className="px-8 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold transition duration-200">
              Check GitHub
            </Link>
            <button className="px-8 py-2 rounded-full border border-neutral-600 text-neutral-300 hover:bg-neutral-800 transition duration-200">
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* 2. PRODUCTS SECTION (The Ecosystem) */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
          The Ecosystem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: AuraStudio */}
          <div className="p-6 rounded-2xl border border-white/10 bg-black hover:border-purple-500/50 transition duration-300 group">
            <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-200">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AuraStudio</h3>
            <p className="text-neutral-400 text-sm">
              Next-gen web builder for developers. Clone apps in minutes.
            </p>
          </div>

          {/* Card 2: AuraIQ */}
          <div className="p-6 rounded-2xl border border-white/10 bg-black hover:border-blue-500/50 transition duration-300 group">
            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-200">
              🧠
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AuraIQ</h3>
            <p className="text-neutral-400 text-sm">
              Intelligent automation for workflows. Your personal AI DevOps.
            </p>
          </div>

          {/* Card 3: TrendSpy */}
          <div className="p-6 rounded-2xl border border-white/10 bg-black hover:border-pink-500/50 transition duration-300 group">
            <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-200">
              🕵️
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">TrendSpy</h3>
            <p className="text-neutral-400 text-sm">
              Analyze market trends before they happen. Scrape the invisible.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}