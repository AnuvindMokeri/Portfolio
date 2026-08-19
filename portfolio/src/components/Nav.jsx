import { useEffect, useState } from "react";
import { profile } from "../data/content";

const LINKS = [
  { href: "#about", label: "PROFILE" },
  { href: "#stack", label: "SCHEMATIC" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#experience", label: "EDUCATION" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__mark mono">
          <span className="nav__mark-dot" aria-hidden="true" />
          {profile.drawnBy}
        </a>

        <nav className="nav__links mono" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__status mono">
          <span className="nav__status-dot" aria-hidden="true" />
          {profile.status}
        </div>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="nav__mobile mono" aria-label="Primary mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
