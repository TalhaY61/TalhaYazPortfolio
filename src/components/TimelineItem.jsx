export default function TimelineItem({
  year,
  title,
  company,
  description,
  technologies = [],
  achievements = [],
}) {
  return (
    <div className="relative pl-10 pb-12 border-l-2" style={{ borderColor: 'rgba(70, 138, 154, 0.3)' }}>
      
      {/* Dot */}
      <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2" style={{ backgroundColor: 'var(--accent-teal)', borderColor: 'var(--bg-dark)' }}></span>

      {/* Year */}
      <p className="text-sm font-medium" style={{ color: 'var(--accent-teal)' }}>{year}</p>

      {/* Title + company */}
      <h3 className="text-xl font-bold mt-1" style={{ color: 'var(--text-light)' }}>{title}</h3>
      <p className="text-sm mb-4" style={{ color: 'rgba(238, 238, 238, 0.7)' }}>{company}</p>

      {/* Description */}
      <p className="mb-4" style={{ color: 'rgba(238, 238, 238, 0.8)' }}>{description}</p>

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium mb-2" style={{ color: 'rgba(238, 238, 238, 0.8)' }}>Technologies & Skills</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(70, 138, 154, 0.2)', border: '1px solid rgba(70, 138, 154, 0.4)', color: 'var(--text-light)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium mb-2" style={{ color: 'rgba(238, 238, 238, 0.8)' }}>
            Key Responsibilities & Achievements
          </h4>

          <ul className="list-disc list-inside space-y-1" style={{ color: 'rgba(238, 238, 238, 0.7)' }}>
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
