export default function Projects() {
  const projects = [
    {
      title: "Git Battle",
      desc: "Gamifying GitHub activity with RPG-style battles.",
      tags: ["TypeScript", "API", "Game"],
      color: "bg-red-500",
      size: "col-span-12 md:col-span-8",
    },
    {
      title: "Feels_FM",
      desc: "An emotion dashboard with a Neo-Brutalist UI.",
      tags: ["React", "Tailwind", "Audio"],
      color: "bg-blue-500",
      size: "col-span-12 md:col-span-4",
    },
    {
      title: "Tabagotchi",
      desc: "Chrome extension that keeps your tabs healthy.",
      tags: ["JavaScript", "Extension", "Utility"],
      color: "bg-green-500",
      size: "col-span-12 md:col-span-4",
    },
    {
      title: "The Bard's Quill",
      desc: "Transforming boring text into Old English.",
      tags: ["NLP", "Chrome", "Fun"],
      color: "bg-purple-500",
      size: "col-span-12 md:col-span-8",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-20 flex flex-col items-center">
      
      {/* Section Header */}
      <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">
        Selected <span className="font-serif italic text-gray-500">Works</span>
      </h2>

      {/* The Bento Grid */}
      <div className="grid grid-cols-12 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.size} group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden`}
          >
            {/* Hover Glow Effect */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${project.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`} />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 max-w-sm">{project.desc}</p>
              
              {/* Tags */}
              <div className="flex gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium uppercase tracking-wider border border-white/20 rounded-full text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="absolute bottom-8 right-8 p-3 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}