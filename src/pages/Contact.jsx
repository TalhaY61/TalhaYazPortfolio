import BackHome from "../components/BackHome";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

export default function Contact() {
  return (
    <div className="pt-16 px-6 max-w-3xl mx-auto text-gray-200">

      <div className="flex items-center justify-between mb-12">
        <BackHome />
        <h1 className="text-4xl font-bold text-center flex-1">Contact</h1>
        <div className="w-14"></div>
      </div>

      <p className="text-gray-400 mb-8 text-center">
        Thanks for visiting my portfolio.  
        If you'd like to reach out — whether it's about a project, an opportunity,
        or just to say hi — here are the best ways to contact me.
      </p>

      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <a
          href="mailto:talha-yaz@hotmail.de"
          className="text-lg hover:underline"
          style={{ color: 'var(--accent-teal)' }}
        >
          talha-yaz@hotmail.de
        </a>
      </div>

      {/* Social Icons */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Socials</h2>

        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://github.com/TalhaY61" target="_blank" className="transition" style={{ color: 'var(--text-light)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-light)'}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/talhayaz/" target="_blank" className="transition" style={{ color: 'var(--text-light)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-light)'}>
            <FaLinkedin />
          </a>
          <a href="https://talhay61.itch.io" target="_blank" className="transition" style={{ color: 'var(--text-light)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-light)'}>
            <SiItchdotio />
          </a>
          {/*<a href="https://instagram.com" target="_blank" className="transition" style={{ color: 'var(--text-light)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-light)'}>
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" className="transition" style={{ color: 'var(--text-light)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-light)'}>
            <FaTwitter />
          </a>*/}
        </div>
      </div>
    </div>
    
  );
}
