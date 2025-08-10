import { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";
import logo from '../assets/Logo.png';

const links = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
  { label: "Reviews", target: "reviews" },
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll/active logic
  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      const scrollY = window.scrollY;
      const sections = [
        { target: "home", id: "home" },
        { target: "about", id: isMobile ? "mob_about" : "about" },
        { target: "contact", id: isMobile ? "mob_contact" : "contact" },
        { target: "reviews", id: "reviews" },
      ];
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && scrollY + 140 >= el.offsetTop) current = s.target;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Menu close on resize up
  useEffect(() => {
    setMenu(false);
  }, [isMobile]);

  // Smooth scroll helper
  const scrollToSection = (target) => {
    setMenu(false);
    let sectionId =
      target === "about"
        ? isMobile
          ? "mob_about"
          : "about"
        : target === "contact"
        ? isMobile
          ? "mob_contact"
          : "contact"
        : target === "home"
        ? null
        : target;
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(target);
    } else if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("home");
    }
  };

  return (
    <nav className="nav">
      <div className="nav__logo" onClick={() => scrollToSection("home")}>
        <img
          src={logo}
          alt="Varad Clinic - Health is Wealth"
          className="nav__logo-img"
        />
      </div>
      <ul className="nav__links">
        {links.map(({ label, target }) => (
          <li key={target}>
            <button
              className={active === target ? "active" : ""}
              onClick={() => scrollToSection(target)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      {/* Hamburger for mobile */}
      <button
        className={`nav__burger${menu ? " active" : ""}`}
        aria-label="Open menu"
        aria-expanded={menu}
        onClick={() => setMenu((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      {/* Small box dropdown menu (not full overlay) */}
      {isMobile && menu && (
        <div className="nav__mobile-dropdown" tabIndex="-1">
          <ul>
            {links.map(({ label, target }) => (
              <li key={target}>
                <button
                  className={active === target ? "active" : ""}
                  onClick={() => scrollToSection(target)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
