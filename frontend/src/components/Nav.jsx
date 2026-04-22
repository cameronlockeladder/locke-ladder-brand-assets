import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Christ Church" },
  { id: "relationship", label: "Local Experts" },
  { id: "roof-eol", label: "End of Life" },
  { id: "field-inspection", label: "Field Inspection" },
  { id: "repair-vs-replace", label: "Repair vs Replace" },
  { id: "todays-cedar", label: "Today's Cedar" },
  { id: "brava-proof", label: "Lasting Beauty" },
  { id: "light-study", label: "Light Study" },
  { id: "system", label: "Roof System" },
  { id: "attention", label: "Attention to Detail" },
  { id: "new-approach", label: "Our Approach" },
  { id: "roadmap", label: "Christ Church Success" },
  { id: "human-close", label: "Close" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(() => {
    try { return localStorage.getItem("cc_nav_hidden") === "1"; } catch { return false; }
  });
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("cc_theme") || "day"; } catch { return "day"; }
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("theme-night", theme === "night");
    try { localStorage.setItem("cc_theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    try { localStorage.setItem("cc_nav_hidden", navHidden ? "1" : "0"); } catch {}
  }, [navHidden]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const iconColor = scrolled ? "text-ink" : "text-paper";

  return (
    <>
      <header
        data-testid="top-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-paper/90 backdrop-blur-md border-b border-rule/60 text-ink" : "bg-transparent text-paper"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-4" data-testid="brand-mark-button">
            <img src="/assets/brand/locke-ladder/ll-icon.webp" alt="Locke & Ladder"
              className={`h-7 w-auto transition ${scrolled ? "" : "invert brightness-0 opacity-90"}`} />
            <span className={`hidden sm:inline-block h-4 w-px ${scrolled ? "bg-ink/25" : "bg-paper/40"}`} />
            <img src="/assets/brand/client/christ-church/christ-church-logo.png"
              alt="Christ Church | Oak Brook" data-testid="christ-church-logo"
              className={`h-6 w-auto transition ${scrolled ? "" : "invert brightness-0 opacity-90"}`} />
          </button>

          <div className="flex items-center gap-5 md:gap-6">
            {/* Theme toggle — day / night */}
            <button
              onClick={() => setTheme((t) => (t === "day" ? "night" : "day"))}
              data-testid="theme-toggle"
              aria-label={theme === "day" ? "Switch to night mode" : "Switch to day mode"}
              className={`inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-current/5 transition-opacity opacity-75 hover:opacity-100 ${iconColor}`}
            >
              {theme === "day" ? (
                // moon
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                </svg>
              ) : (
                // sun
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="3" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="21" y2="12" />
                  <line x1="5.2" y1="5.2" x2="6.6" y2="6.6" />
                  <line x1="17.4" y1="17.4" x2="18.8" y2="18.8" />
                  <line x1="5.2" y1="18.8" x2="6.6" y2="17.4" />
                  <line x1="17.4" y1="6.6" x2="18.8" y2="5.2" />
                </svg>
              )}
            </button>

            {/* Side-nav visibility toggle (desktop only) */}
            <button
              onClick={() => setNavHidden((h) => !h)}
              data-testid="side-nav-toggle"
              aria-label={navHidden ? "Show section navigator" : "Hide section navigator"}
              aria-pressed={!navHidden}
              className={`hidden xl:inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-current/5 transition-opacity opacity-75 hover:opacity-100 ${iconColor}`}
            >
              {navHidden ? (
                // eye-off
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17.9 17.9A11 11 0 0 1 12 20c-5.5 0-9.7-4-11-8a13 13 0 0 1 4-5.3" />
                  <path d="M9.5 4.2A10.8 10.8 0 0 1 12 4c5.5 0 9.7 4 11 8a12.8 12.8 0 0 1-2.6 4" />
                  <line x1="2" y1="2" x2="22" y2="22" />
                  <path d="M10 10a3 3 0 0 0 4 4" />
                </svg>
              ) : (
                // eye
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>

            <button onClick={() => scrollTo("human-close")} data-testid="header-contact-button"
              className="hidden md:inline-flex items-center font-brand text-[11px] uppercase tracking-[0.24em] hover:opacity-100 opacity-80 transition-opacity">
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Side section nav · hideable via toggle */}
      <nav
        data-testid="side-section-nav"
        aria-hidden={navHidden}
        className={`hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 mix-blend-difference transition-all duration-500 ${
          navHidden ? "opacity-0 translate-x-4 pointer-events-none" : "opacity-100 translate-x-0"
        }`}
      >
        {SECTIONS.map((s) => (
          <button key={s.id} onClick={() => scrollTo(s.id)} data-testid={`nav-dot-${s.id}`}
            className="group flex items-center gap-3 cursor-pointer" aria-label={s.label}>
            <span className={`block h-px transition-all duration-500 ${
              active === s.id ? "w-8 bg-white" : "w-3 bg-white/45 group-hover:w-6 group-hover:bg-white/70"
            }`} />
            <span className={`font-brand text-[10px] tracking-[0.24em] uppercase transition-opacity duration-500 ${
              active === s.id ? "opacity-100 text-white" : "opacity-0 group-hover:opacity-70 text-white"
            }`}>{s.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
