import BackHome from "../components/BackHome";

export default function About() {
  return (
    <div
      className="pt-16 px-6 max-w-4xl mx-auto"
      style={{ color: "var(--text-light)", backgroundColor: "var(--bg-dark)" }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between mb-12">
        <BackHome />
        <h1
          className="text-4xl font-bold text-center flex-1"
          style={{ color: "var(--text-light)" }}
        >
          About Me
        </h1>
        <div className="w-14"></div>
      </div>

      {/* Who I Am */}
      <section className="mb-14">
        <h2
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--accent-teal)" }}
        >
          Who I Am
        </h2>
        <p
          className="leading-relaxed"
          style={{ color: "rgba(238, 238, 238, 0.8)" }}
        >
          I am Talha, studying my Master at TU Darmstadt and enjoying the
          journey of learning and improving every day. I love creating things,
          discovering new ideas, and growing as a developer. I also appreciate
          calm moments and peaceful places, but the happiest memories usually
          come from time spent with family and friends. Life is full of
          blessings, big and small. Alhamdulillah.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--accent-teal)" }}
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Backend */}
          <div
            className="p-5 rounded-lg"
            style={{
              backgroundColor: "rgba(84, 18, 18, 0.1)",
              border: "1px solid rgba(84, 18, 18, 0.3)",
            }}
          >
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--text-light)" }}
            >
              Backend
            </h3>
            <p
              className="text-sm"
              style={{ color: "rgba(238, 238, 238, 0.7)" }}
            >
              C#, .NET Core, Java, Spring Boot, SQL, REST APIs
            </p>
          </div>

          {/* Game Development */}
          <div
            className="p-5 rounded-lg"
            style={{
              backgroundColor: "rgba(84, 18, 18, 0.1)",
              border: "1px solid rgba(84, 18, 18, 0.3)",
            }}
          >
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--text-light)" }}
            >
              Game Development
            </h3>
            <p
              className="text-sm"
              style={{ color: "rgba(238, 238, 238, 0.7)" }}
            >
              Unity, C#, Lua, LÖVE2D, Aseprite
            </p>
          </div>

          {/* Tools */}
          <div
            className="p-5 rounded-lg"
            style={{
              backgroundColor: "rgba(84, 18, 18, 0.1)",
              border: "1px solid rgba(84, 18, 18, 0.3)",
            }}
          >
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--text-light)" }}
            >
              Tools
            </h3>
            <p
              className="text-sm"
              style={{ color: "rgba(238, 238, 238, 0.7)" }}
            >
              Git, GitHub, Docker, Firebase
            </p>
          </div>

          {/* Soft Skills */}
          <div
            className="p-5 rounded-lg"
            style={{
              backgroundColor: "rgba(84, 18, 18, 0.1)",
              border: "1px solid rgba(84, 18, 18, 0.3)",
            }}
          >
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--text-light)" }}
            >
              Soft Skills
            </h3>
            <p
              className="text-sm"
              style={{ color: "rgba(238, 238, 238, 0.7)" }}
            >
              Problem solving, teamwork, clean code, communication
            </p>
          </div>

          {/* Spoken Languages */}
          <div
            className="p-5 rounded-lg"
            style={{
              backgroundColor: "rgba(84, 18, 18, 0.1)",
              border: "1px solid rgba(84, 18, 18, 0.3)",
            }}
          >
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--text-light)" }}
            >
              Languages
            </h3>
            <p
              className="text-sm"
              style={{ color: "rgba(238, 238, 238, 0.7)" }}
            >
              German (fluent), Turkish (fluent), English (B2)
            </p>
          </div>
        </div>
      </section>

      {/* Out of Tech */}
      <section className="mb-20">
        <h2
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--accent-teal)" }}
        >
          Out of Tech
        </h2>
        <p
          className="leading-relaxed"
          style={{ color: "rgba(238, 238, 238, 0.8)" }}
        >
          When I’m not coding, I’m either at the gym, watching football, or
          chilling with games. I’m a lifelong Trabzonspor supporter (yes, I even
          used the club colors in this portfolio 😅). I
          also enjoy traveling, discovering peaceful places, and taking quiet
          moments to recharge. Life feels better with a bit of balance.
        </p>
      </section>
    </div>
  );
}
