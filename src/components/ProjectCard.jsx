import { FaGithub, FaItchIo } from "react-icons/fa";

export default function ProjectCard({ title, description, tech, image, github, itch }) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition transform overflow-hidden flex flex-col">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-top"
      />

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 text-sm mb-6">{description}</p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-[#2a2a2a] border border-gray-700 px-2 py-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* GitHub icon (only if repo exists) */}
          {github && (
            <a
              href={github}
              target="_blank"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
              title="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
          )}

          {/* Itch.io icon (only if published) */}
          {itch && (
            <a
              href={itch}
              target="_blank"
              className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition"
              title="Itch.io"
            >
              <FaItchIo className="text-lg" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
