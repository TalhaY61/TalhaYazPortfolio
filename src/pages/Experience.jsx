import TimelineItem from "../components/TimelineItem";
import BackHome from "../components/BackHome";

export default function Experience() {
  return (
    <div className="pt-16 px-6 max-w-5xl mx-auto" style={{ color: 'var(--text-light)', backgroundColor: 'var(--bg-dark)' }}>

      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <BackHome />
        <h1 className="text-4xl font-bold text-center flex-1" style={{ color: 'var(--text-light)' }}>Experience</h1>
        <div className="w-14"></div>
      </div>

      {/* Experience Timeline */}
      <TimelineItem
        year="Dec 2024 – Aug 2025"
        title="Junior Software Developer"
        company="Noxart Games"
        description="Developed features and improved internal systems for a multi-platform game environment within an agile workflow."
        technologies={[
          "Python", "Lua", "TypeScript", "C++", "Git", "GitLab", "Scrum", "Communication"
        ]}
        achievements={[
          "Implemented gameplay systems, UI logic, and scalable backend tools.",
          "Developed quest logic and entity behaviors using Lua and TypeScript.",
          "Improved system stability by optimizing update loops and reducing redundant computations.",
          "Collaborated closely with designers and artists to integrate new features.",
        ]}
      />

      <TimelineItem
        year="Jan 2024 – Mar 2024"
        title="Software Development Intern"
        company="NTT DATA Business Solutions"
        description="Built and optimized backend components in enterprise-level Java/Spring applications."
        technologies={[
          "Java", "Spring Boot", "SQL", "Agile", "Git"
        ]}
        achievements={[
          "Developed backend modules using Java Spring Boot for internal tools.",
          "Wrote clean, maintainable, and testable code using SOLID principles.",
          "Participated in code reviews, improving team code quality and consistency.",
        ]}
      />

      <TimelineItem
        year="Jul 2023 – Sep 2023"
        title="Backend Development Intern"
        company="D-Engage"
        description="Worked on API development and secure backend features using .NET technologies."
        technologies={[
          "C#", ".NET Core", "Entity Framework", "SQL", "API", "Git"
        ]}
        achievements={[
          "Implemented and tested RESTful API endpoints with .NET Core.",
          "Designed scalable database structures using Entity Framework.",
          "Improved API security by applying authentication and validation rules.",
        ]}
      />
    </div>
  );
}
