import SpotLight from "@/components/SpotLight";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <SpotLight />

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

        {/* Main Content Pillar */}
        <div className="relative z-10 text-center max-w-4xl px-6 mt-10">
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            Crafting code with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 font-serif italic pr-2">
              Soul.
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer specializing in browser extensions <br className="hidden md:block"/>
            and interactive web apps.
          </p>

          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            View Projects
          </button>
        
        </div>

        {/* Tech Stack Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 md:gap-12 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          <span className="text-xl font-bold text-gray-400">Python</span>
          <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
          <span className="text-xl font-bold text-gray-400">TypeScript</span>
          <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
          <span className="text-xl font-bold text-gray-400">Next.js</span>
          <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
          <span className="text-xl font-bold text-gray-400">Tailwind</span>
        </div>

      </section>

      <Projects />

      <Contact />

    </main>
  );
}