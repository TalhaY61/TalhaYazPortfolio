import { FaGithub, FaPlay, FaItchIo } from "react-icons/fa";
import BackHome from "../components/BackHome";

const projects = [
  {
    title: "TimeShift",
    image: "images/timeshift.png",
    description:
      "A 2D puzzle platformer built in 10 hours for a Unity Game Jam using time-shift mechanics.",
    tech: ["C#", "Unity"],
    github: null,
    demo: "https://talhay61.itch.io/timeshift",
    itch: "https://talhay61.itch.io/timeshift",
  },

  {
    title: "ChronoDash",
    image: "images/chronodash.png",
    description:
      "A fast 2D endless runner featuring multiple worlds, power-ups, and increasing difficulty.",
    tech: ["C#", "Unity"],
    github: "https://github.com/TalhaY61/ChronoDash-Unity",
    demo: "https://talhay61.itch.io/chronodash",
    itch: "https://talhay61.itch.io/chronodash",
  },

  {
    title: "GODO",
    image: "images/godo.png",
    description:
      "A gamified full-stack productivity app with XP progression, tasks, shop, and a pixel garden.",
    tech: ["React", "C#", ".NET Core", "MySQL"],
    github: "https://github.com/TalhaY61/GODO",
    demo: null,
    itch: null,
  },
];

export default function Projects() {
  return (
    <div className="pt-16 px-6 max-w-6xl mx-auto" style={{ backgroundColor: 'var(--bg-dark)' }}>

      {/* Header bar */}
      <div className="flex items-center justify-between mb-12">
        <BackHome />
        <h1 className="text-4xl font-bold text-center flex-1" style={{ color: 'var(--text-light)' }}>Projects</h1>
        <div className="w-14"></div>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition transform overflow-hidden flex flex-col"
            style={{ backgroundColor: 'rgba(84, 18, 18, 0.1)', border: '1px solid rgba(84, 18, 18, 0.3)' }}
          >
            {/* Image */}
            <img
              src={p.image}
              className="w-full h-48 object-cover object-top"
              alt={p.title}
            />

            {/* Content */}
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-light)' }}>{p.title}</h2>
              <p className="text-sm" style={{ color: 'rgba(238, 238, 238, 0.7)' }}>{p.description}</p>

              {/* Bottom section */}
              <div className="mt-auto">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4 mt-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(70, 138, 154, 0.2)', border: '1px solid rgba(70, 138, 154, 0.4)', color: 'var(--text-light)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {/* GitHub (only if not null) */}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      title="GitHub"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition hover:scale-110"
                      style={{ backgroundColor: 'rgba(84, 18, 18, 0.3)', border: '1px solid var(--accent-red)' }}
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}

                  {/* Itch.io (only if available) */}
                  {p.itch && (
                    <a
                      href={p.itch}
                      target="_blank"
                      title="Itch.io Page"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition hover:scale-110"
                      style={{ backgroundColor: 'rgba(70, 138, 154, 0.3)', border: '1px solid var(--accent-teal)' }}
                    >
                      <FaItchIo className="text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
