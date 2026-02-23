import { useState, useEffect } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "Signify",
    tag: "Hackathon · 2026",
    desc: "Real-time ASL sign language translator running entirely in the browser using MediaPipe gesture recognition.",
    tech: ["MediaPipe", "JavaScript", "Flask"],
    color: "#e63946",
    link: "https://github.com/mrsiuuuu-x1/Grizzly-Hacks-II",
  },
  {
    id: "02",
    title: "Git Battle",
    tag: "Game · TypeScript",
    desc: "Gamifying GitHub activity with RPG-style battles. Your commit history becomes your arsenal.",
    tech: ["TypeScript", "API", "Game"],
    color: "#ff6b35",
    link: "https://github.com/mrsiuuuu-x1/git-battle",
  },
  {
    id: "03",
    title: "Feels FM",
    tag: "Dashboard · React",
    desc: "An emotion-driven music dashboard wrapped in a Neo-Brutalist UI. Mood as interface.",
    tech: ["React", "Tailwind", "Audio"],
    color: "#e63946",
    link: "https://github.com/mrsiuuuu-x1/FeelsFM",
  },
  {
    id: "04",
    title: "Survivetrack",
    tag: "AI · Python",
    desc: "AI-powered survival mapping system for post-apocalyptic scenarios. Hackathon project.",
    tech: ["AI", "Python", "Maps"],
    color: "#ff6b35",
    link: "https://github.com/mrsiuuuu-x1/survivetrack",
  },
  {
    id: "05",
    title: "Netflix Analysis",
    tag: "Data Science · Python",
    desc: "Data science project analyzing movie duration trends using Pandas. Finding patterns in how films have changed over time.",
    tech: ["Python", "Pandas", "Data"],
    color: "#e63946",
    link: "https://github.com/mrsiuuuu-x1/Netflix_Movie_Analysis",
  },
];

const SKILLS = ["Python", "TypeScript", "React", "Next.js", "Flask", "MediaPipe", "Node.js", "Pandas"];

function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

function Cursor({ pos }) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => { window.removeEventListener("mousedown", down); window.removeEventListener("mouseup", up); };
  }, []);

  return (
    <>
      <div style={{
        position: "fixed", left: pos.x, top: pos.y, width: clicked ? 48 : 12, height: clicked ? 48 : 12,
        background: "#e63946", borderRadius: "50%", transform: "translate(-50%,-50%)",
        pointerEvents: "none", zIndex: 9999, transition: "width 0.15s, height 0.15s", mixBlendMode: "difference"
      }} />
      <div style={{
        position: "fixed", left: pos.x, top: pos.y, width: 36, height: 36,
        border: "1px solid rgba(230,57,70,0.5)", borderRadius: "50%", transform: "translate(-50%,-50%)",
        pointerEvents: "none", zIndex: 9998, transition: "left 0.08s ease, top 0.08s ease"
      }} />
    </>
  );
}

function AnimatedText({ text, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span style={{ display: "inline-block", overflow: "hidden" }}>
      <span style={{
        display: "inline-block",
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
      }}>{text}</span>
    </span>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block", textDecoration: "none",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "32px 0",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* hover background */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${project.color}08, transparent)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />

      <div style={{ display: "flex", alignItems: "flex-start", gap: 24, position: "relative" }}>
        {/* number */}
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: 11, color: project.color,
          opacity: 0.7, minWidth: 28, paddingTop: 4, letterSpacing: 2
        }}>{project.id}</span>

        {/* content */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 10, flexWrap: "wrap" }}>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 4vw, 44px)",
              color: hovered ? project.color : "#f5f5f0", margin: 0, letterSpacing: 1,
              transition: "color 0.3s ease"
            }}>{project.title}</h3>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(245,245,240,0.35)",
              letterSpacing: 2, textTransform: "uppercase"
            }}>{project.tag}</span>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(245,245,240,0.55)",
            margin: "0 0 16px", lineHeight: 1.7, maxWidth: 520
          }}>{project.desc}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.tech.map(t => (
              <span key={t} style={{
                fontFamily: "'Space Mono', monospace", fontSize: 10, color: project.color,
                border: `1px solid ${project.color}40`, padding: "3px 10px", borderRadius: 2,
                letterSpacing: 1, textTransform: "uppercase"
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* arrow */}
        <div style={{
          width: 40, height: 40, border: `1px solid ${hovered ? project.color : "rgba(255,255,255,0.12)"}`,
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.3s ease", flexShrink: 0, marginTop: 4,
          background: hovered ? project.color : "transparent",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={hovered ? "#0a0a0a" : "rgba(255,255,255,0.5)"} strokeWidth="2">
            <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const mousePos = useMousePosition();
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{
      background: "#080808", color: "#f5f5f0", minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif", cursor: "none", overflowX: "hidden"
    }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #e63946; color: #080808; }
        a { cursor: none; }
        button { cursor: none; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0,0); }
          10% { transform: translate(-2%,-3%); }
          30% { transform: translate(3%,1%); }
          50% { transform: translate(-1%,4%); }
          70% { transform: translate(2%,-2%); }
          90% { transform: translate(-3%,2%); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(245,245,240,0.4);
          text-decoration: none;
          transition: color 0.3s ease;
          background: none; border: none; padding: 0;
        }
        .nav-link:hover { color: #e63946; }
        .cta-btn {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #080808;
          background: #e63946;
          border: none;
          padding: 14px 32px;
          border-radius: 2px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        .cta-btn:hover { background: #f5f5f0; transform: translateY(-2px); }
        .skill-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(245,245,240,0.5);
          border: 1px solid rgba(245,245,240,0.1);
          padding: 6px 14px;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .skill-tag:hover { border-color: #e63946; color: #e63946; }
      `}</style>

      {/* Custom cursor */}
      <Cursor pos={mousePos} />

      {/* Grain overlay */}
      <div style={{
        position: "fixed", inset: "-50%", width: "200%", height: "200%",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.03, pointerEvents: "none", zIndex: 9997, animation: "grain 0.5s steps(1) infinite"
      }} />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "24px 48px",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, background: "#e63946", borderRadius: "50%", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 3, color: "#f5f5f0" }}>
            Abdul Rafay
          </span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {["work", "about", "contact"].map(s => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 48px 80px",
        position: "relative", overflow: "hidden"
      }}>
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(230,57,70,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230,57,70,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }} />

        {/* Red blob */}
        <div style={{
          position: "absolute", top: "15%", right: "5%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none", zIndex: 0,
          filter: "blur(60px)"
        }} />

        {/* Main heading */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 8, overflow: "hidden" }}>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#e63946",
              letterSpacing: 4, textTransform: "uppercase",
              opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s"
            }}>Full-Stack Developer</span>
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(72px, 14vw, 180px)",
            lineHeight: 0.9, letterSpacing: -2,
            color: "#f5f5f0", margin: "0 0 8px",
          }}>
            <div style={{ overflow: "hidden" }}>
              <AnimatedText text="Building" delay={300} />
            </div>
            <div style={{ overflow: "hidden", display: "flex", alignItems: "center", gap: 24 }}>
              <AnimatedText text="Things" delay={450} />
              <span style={{
                display: "inline-block",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(72px, 14vw, 180px)",
                color: "transparent",
                WebkitTextStroke: "2px #e63946",
                opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.7s"
              }}>
                <AnimatedText text="That" delay={600} />
              </span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <AnimatedText text="Matter." delay={750} />
            </div>
          </h1>

          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            flexWrap: "wrap", gap: 32, marginTop: 48,
            opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 1s"
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "rgba(245,245,240,0.45)", maxWidth: 420, lineHeight: 1.8,
              fontStyle: "italic"
            }}>
              I craft interactive web apps, AI-powered tools, and data-driven projects —
              with an obsession for detail and a love for unconventional ideas.
            </p>

            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <a className="cta-btn" href="#work" onClick={(e) => { e.preventDefault(); scrollTo("work"); }}>
                View Work
              </a>
              <a href="mailto:abdulrafay88243@gmail.com" style={{
                fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2,
                color: "rgba(245,245,240,0.4)", textDecoration: "none",
                textTransform: "uppercase", transition: "color 0.3s",
                borderBottom: "1px solid rgba(245,245,240,0.15)", paddingBottom: 2
              }}
                onMouseEnter={e => e.target.style.color = "#e63946"}
                onMouseLeave={e => e.target.style.color = "rgba(245,245,240,0.4)"}
              >
                Let&apos;s Talk ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "20px 0", overflow: "hidden", background: "rgba(230,57,70,0.04)"
      }}>
        <div style={{ display: "flex", animation: "marquee 20s linear infinite", width: "max-content" }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, letterSpacing: 6,
              color: "rgba(245,245,240,0.15)", textTransform: "uppercase", whiteSpace: "nowrap",
              padding: "0 40px"
            }}>
              Python · TypeScript · React · Next.js · Flask · MediaPipe · Node.js · Pandas · Python · TypeScript · React · Next.js · Flask · MediaPipe · Node.js · Pandas &nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── WORK ── */}
      <section id="work" style={{ padding: "120px 48px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 80 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#e63946", letterSpacing: 3 }}>
            01 /
          </span>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 6vw, 72px)",
            color: "#f5f5f0", letterSpacing: 1
          }}>Selected Work</h2>
        </div>

        <div style={{ maxWidth: 900 }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{
        padding: "120px 48px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(180deg, transparent, rgba(230,57,70,0.03), transparent)"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 48 }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#e63946", letterSpacing: 3 }}>02 /</span>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#f5f5f0", letterSpacing: 1 }}>
                About
              </h2>
            </div>

            <p style={{ fontSize: 16, color: "rgba(245,245,240,0.6)", lineHeight: 1.9, marginBottom: 24 }}>
              I&apos;m Abdul Rafay — a developer who finds beauty in the intersection of code and creativity.
              I build things that feel different: AI tools with soul, interactive web apps with personality,
              and interfaces that make people stop and look twice.
            </p>
            <p style={{ fontSize: 16, color: "rgba(245,245,240,0.6)", lineHeight: 1.9, marginBottom: 40 }}>
              Whether it&apos;s hackathons, open source, or freelance — I show up with full commitment
              and leave with something worth putting in a portfolio. Currently exploring the edges
              of what&apos;s possible with AI and the web.
            </p>

            <div style={{ display: "flex", gap: 16 }}>
              <a href="https://github.com/mrsiuuuu-x1" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2, color: "#e63946", textDecoration: "none", textTransform: "uppercase", borderBottom: "1px solid #e6394640", paddingBottom: 2 }}>
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/abdul-rafay-104084352/" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2, color: "rgba(245,245,240,0.4)", textDecoration: "none", textTransform: "uppercase", borderBottom: "1px solid rgba(245,245,240,0.15)", paddingBottom: 2 }}>
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right - skills */}
          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(245,245,240,0.3)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>
              Technologies
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {SKILLS.map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 60 }}>
              {[
                { num: "6+", label: "Projects Shipped" },
                { num: "2", label: "Hackathons" },
                { num: "15+", label: "Commits on Signify" },
                { num: "∞", label: "Ideas in Queue" },
              ].map(s => (
                <div key={s.label} style={{ borderLeft: "2px solid #e63946", paddingLeft: 16 }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: "#f5f5f0", lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(245,245,240,0.35)", letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        padding: "120px 48px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        {/* Big background text */}
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none", overflow: "hidden"
        }}>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(80px, 18vw, 240px)",
            color: "rgba(230,57,70,0.04)", letterSpacing: -4, whiteSpace: "nowrap"
          }}>CONTACT</span>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#e63946", letterSpacing: 3, textTransform: "uppercase" }}>
            03 / Let&apos;s Work Together
          </span>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 8vw, 100px)",
            color: "#f5f5f0", margin: "24px 0 16px", letterSpacing: 1, lineHeight: 0.95
          }}>
            Got a project<br />
            <span style={{ color: "transparent", WebkitTextStroke: "2px rgba(245,245,240,0.25)" }}>in mind?</span>
          </h2>
          <p style={{ color: "rgba(245,245,240,0.4)", marginBottom: 48, fontSize: 15, fontStyle: "italic" }}>
            I&apos;m open to freelance work, collaborations, and interesting conversations.
          </p>
          <a className="cta-btn" href="mailto:abdulrafay88243@gmail.com" style={{ fontSize: 12, padding: "16px 48px" }}>
            abdulrafay88243@gmail.com
          </a>

          <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 80 }}>
            <a href="https://github.com/mrsiuuuu-x1" target="_blank" rel="noopener noreferrer"
              className="nav-link">GitHub</a>
            <a href="https://www.linkedin.com/in/abdul-rafay-104084352/" target="_blank" rel="noopener noreferrer"
              className="nav-link">LinkedIn</a>
            <a href="mailto:abdulrafay88243@gmail.com" className="nav-link">Email</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "24px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(245,245,240,0.2)", letterSpacing: 2 }}>
          © 2026 ABDUL RAFAY
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(245,245,240,0.2)", letterSpacing: 2 }}>
          BUILT WITH NEXT.JS & SOUL
        </span>
      </footer>
    </div>
  );
}