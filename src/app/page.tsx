import SpotLight from "@/components/SpotLight";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      <SpotLight />

      {/* Pillar of Light */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          Crafting code with <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-600 font-serif italic">
            Soul.
          </span>
        </h1>
        
        <p className="text-gray-400 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Full-stack developer specializing in browser extensions and interactive web apps.
        </p>

        {/* Button */}
        <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
          View Projects
        </button>
      
      </div>
    </main>
  );
}