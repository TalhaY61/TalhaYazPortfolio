import { NavLink } from "react-router-dom";

export default function NavbarItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-medium px-4 py-2 rounded-lg transition border-2 ${
          isActive
            ? "border-[var(--accent-teal)] bg-[var(--accent-teal)] text-[var(--bg-dark)]"
            : "border-[var(--accent-teal)] text-[var(--text-light)] hover:bg-[var(--accent-teal)] hover:text-[var(--bg-dark)]"
        }`
      }
      style={{ borderColor: 'var(--accent-teal)' }}
    >
      {children}
    </NavLink>
  );
}
