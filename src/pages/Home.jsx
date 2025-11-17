import { NavLink } from "react-router-dom";
import NavbarItem from "../components/NavbarItem";

export default function Home() {
  return (
    <div style={{ color: 'var(--text-light)', backgroundColor: 'var(--bg-dark)' }}>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span style={{ color: 'var(--accent-red)' }}>Talha</span> <span style={{ color: 'var(--accent-teal)' }}>Yaz</span>
        </h1>

        <h2 className="text-xl md:text-2xl mb-6" style={{ color: 'rgba(238, 238, 238, 0.8)' }}>
          Software Developer & Game Developer
        </h2>

        <p className="max-w-xl mb-8" style={{ color: 'rgba(238, 238, 238, 0.7)' }}>
          I’m passionate about gaming and game development. I love turning ideas into small projects or experiments and learning something new along the way.
        </p>

        {/* NAVIGATION UNDER HERO */}
        <nav className="mt-12 flex flex-wrap justify-center gap-4 text-sm border-t pt-8" style={{ borderColor: 'var(--accent-red)', color: 'rgba(238, 238, 238, 0.7)' }}>
          <NavbarItem to="/projects">Projects</NavbarItem>
          <NavbarItem to="/experience">Experience</NavbarItem>
          <NavbarItem to="/education">Education</NavbarItem>
          <NavbarItem to="/about">About</NavbarItem>
          <NavbarItem to="/contact">Contact</NavbarItem>
        </nav>
      </section>

    </div>
  );
}
