import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "Git Battle",
      desc: "Gamifying GitHub activity with RPG-style battles.",
      tags: ["TypeScript", "API", "Game"],
      color: "bg-red-500",
      size: "col-span-12 md:col-span-8",
      link: "https://github.com/mrsiuuuu-x1/git-battle"
    },
    {
      title: "Feels_FM",
      desc: "An emotion dashboard with a Neo-Brutalist UI.",
      tags: ["React", "Tailwind", "Audio"],
      color: "bg-blue-500",
      size: "col-span-12 md:col-span-4",
      link: "https://github.com/mrsiuuuu-x1/FeelsFM"
    },
    {
      title: "Tabagotchi",
      desc: "Chrome extension that keeps your tabs healthy.",
      tags: ["JavaScript", "Extension", "Utility"],
      color: "bg-green-500",
      size: "col-span-12 md:col-span-4",
      link: "https://github.com/mrsiuuuu-x1/Tabagotchi"
    },
    {
      title: "The Bard's Quill",
      desc: "Transforming boring text into Old English.",
      tags: ["NLP", "Chrome", "Fun"],
      color: "bg-purple-500",
      size: "col-span-12 md:col-span-8",
      link: "https://github.com/mrsiuuuu-x1/the-bards-quill"
    },
    {
      title: "Survivetrack",
      desc: "AI-powered survival mapping system for post-apocalyptic scenarios.",
      tags: ["AI", "Python", "Hackathon"],
      color: "bg-orange-500",
      size: "col-span-12 md:col-span-8",
      link: "https://github.com/mrsiuuuu-x1/survivetrack-apocalypse-clean"
    },
    {
      title: "Netflix Analysis",
      desc: "Data science project analyzing movie duration trends.",
      tags: ["Python", "Pandas", "Data"],
      color: "bg-pink-500",
      size: "col-span-12 md:col-span-4",
      link: "https://github.com/mrsiuuuu-x1/Netflix_Movie_Analysis"
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 flex flex-col items-center">
      
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">
          Selected <span className="font-serif italic text-gray-500">Works</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-12 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className={project.size}>
            <FadeIn delay={index * 0.1} className="h-full">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="group relative p-8 h-full rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
                  
                  {/* Background Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${project.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`} />

                  <div className="relative z-10 pr-20">
                    <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-6 max-w-sm">{project.desc}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium uppercase tracking-wider border border-white/20 rounded-full text-gray-300 whitespace-nowrap">
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
              </a>

            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}