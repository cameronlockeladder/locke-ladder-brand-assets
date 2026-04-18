import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "An Icon" },
  { id: "diagnosis", label: "The Leak" },
  { id: "evidence", label: "Evidence" },
  { id: "cedar-brava", label: "Cedar → Brava" },
  { id: "gallery", label: "Gallery" },
  { id: "visualizer", label: "Visualizer" },
  { id: "aspen", label: "Light Study" },
  { id: "system", label: "The System" },
  { id: "craftsmanship", label: "Craft" },
  { id: "team", label: "Relationship" },
  { id: "giveback", label: "GiveBack" },
  { id: "closing", label: "A Note" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Top header */}
      <header
        data-testid="top-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-paper/85 backdrop-blur-md border-b border-rule/60" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3"
            data-testid="brand-mark-button"
          >
            <img
              src="/assets/brand/locke-ladder/ll-icon.webp"
              alt="Locke & Ladder"
              className="h-7 w-auto"
            />
            <span className="hidden sm:inline-block h-4 w-px bg-ink/25" />
            <span className="hidden sm:inline-block font-serif text-[13px] tracking-[0.04em] text-ink/80">
              A proposal for <span className="italic">Christ Church | Oak Brook</span>
            </span>
          </button>
          <button
            onClick={() => scrollTo("closing")}
            data-testid="header-contact-button"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-medium text-ink/80 hover:text-ink transition-colors"
          >
            Contact
            <span className="inline-block w-8 h-px bg-ink/40" />
          </button>
        </div>
      </header>

      {/* Side dot nav - desktop */}
      <nav
        data-testid="side-section-nav"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 mix-blend-difference"
      >
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            data-testid={`nav-dot-${s.id}`}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={s.label}
          >
            <span
              className={`block h-px transition-all duration-500 ${
                active === s.id ? "w-8 bg-white" : "w-3 bg-white/45 group-hover:w-6 group-hover:bg-white/70"
              }`}
            />
            <span
              className={`text-[10px] tracking-[0.28em] uppercase font-medium transition-opacity duration-500 ${
                active === s.id ? "opacity-100 text-white" : "opacity-0 group-hover:opacity-70 text-white"
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
