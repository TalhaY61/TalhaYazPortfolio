import TimelineItem from "../components/TimelineItem";
import BackHome from "../components/BackHome";

export default function Education() {
  return (
    <div className="pt-16 px-6 max-w-5xl mx-auto" style={{ color: 'var(--text-light)', backgroundColor: 'var(--bg-dark)' }}>

      {/* Header bar */}
      <div className="flex items-center justify-between mb-12">
        <BackHome />
        <h1 className="text-4xl font-bold text-center flex-1" style={{ color: 'var(--text-light)' }}>Education</h1>
        <div className="w-14"></div>
      </div>

      {/* M.Sc. */}
      <TimelineItem
        year="2024 – Present"
        title="M.Sc. Computer Science"
        company="Technical University of Darmstadt"
        description="Advanced studies with a focus on intelligent systems, data-driven algorithms, and modern software engineering."
        technologies={[
          "Machine Learning",
          "Deep Learning",
          "Artificial Intelligence",
          "Data Mining",
          "Python",
        ]}
      />

      {/* B.Sc. */}
      <TimelineItem
        year="2020 – 2024"
        title="B.Sc. Computer Science"
        company="Turkish-German University (Istanbul)"
        description="Completed foundational and advanced coursework in computer science with a strong focus on software development and system design."
        technologies={[
          "Object-Oriented Programming",
          "Java",
          "C#",
          "Python",
          "Data Structures & Algorithms",
          "Database Systems",
        ]}
      />
    </div>
  );
}
