import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Christ Church" },
  { id: "relationship", label: "Local Experts" },
  { id: "roof-eol", label: "End of Life" },
  { id: "field-inspection", label: "Field Inspection" },
  { id: "repair-vs-replace", label: "Repair vs Replace" },
  { id: "todays-cedar", label: "Today's Cedar" },
  { id: "brava-proof", label: "Brava Proof" },
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

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

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
          <button onClick={() => scrollTo("human-close")} data-testid="header-contact-button"
            className="hidden md:inline-flex items-center font-brand text-[11px] uppercase tracking-[0.24em] hover:opacity-100 opacity-80 transition-opacity">
            Contact
          </button>
        </div>
      </header>

      <nav data-testid="side-section-nav"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 mix-blend-difference">
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
