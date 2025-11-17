import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

export default function Footer({}) {
  return (
    <footer
      className="py-16 text-center mt-20"
      style={{
        backgroundColor: "var(--bg-dark)",
        borderTop: "1px solid rgba(84, 18, 18, 0.3)",
      }}
    >
      <h4
        className="text-2xl font-bold mb-4"
        style={{ color: "var(--text-light)" }}
      >
        Let's Connect
      </h4>

      <p className="mb-4" style={{ color: "rgba(238, 238, 238, 0.7)" }}>
        You can reach me anytime at:
      </p>

      <a
        href="mailto:talha-yaz@hotmail.de"
        className="text-lg hover:underline"
        style={{ color: "var(--accent-teal)" }}
      >
        talha-yaz@hotmail.de
      </a>

      <div
        className="flex justify-center gap-6 text-2xl mt-8"
        style={{ color: "rgba(238, 238, 238, 0.6)" }}
      >
        <a
          href="https://www.linkedin.com/in/talhayaz/"
          target="_blank"
          className="transition hover:opacity-100"
          style={{ color: "var(--text-light)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-teal)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light)")}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/TalhaY61"
          target="_blank"
          className="transition hover:opacity-100"
          style={{ color: "var(--text-light)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-teal)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light)")}
        >
          <FaGithub />
        </a>
        {/*<a href="https://instagram.com" target="_blank" className="transition hover:opacity-100" style={{ color: 'var(--text-light)' }}><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" className="transition hover:opacity-100" style={{ color: 'var(--text-light)' }}><FaTwitter /></a> */}
        <a
          href="https://talhay61.itch.io"
          target="_blank"
          className="transition hover:opacity-100"
          style={{ color: "var(--text-light)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-teal)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light)")}
        >
          <SiItchdotio />
        </a>
      </div>
    </footer>
  );
}
