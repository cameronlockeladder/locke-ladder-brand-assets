import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

const LAYERS = [
  { n: "01", name: "Brava Composite Shake", note: "Class 4 impact rated." },
  { n: "02", name: "Custom Fabricated Edge Metals", note: "Custom fabricated to maximize performance and beauty. More thought. More intentionality. More attention to detail." },
  { n: "03", name: "Ring-shank nails", note: "Option to use screws for even higher wind rating." },
  { n: "04", name: "Grace Ice & Water Shield", note: "Highest performing on the market. Protecting the most vulnerable areas of the roof no matter how much ice and snow." },
  { n: "05", name: "EchoShield Synthetic Underlayment (suggested)", note: "Reflect up to 97% of radiant heat. Lower cooling bills. Increased comfort for the congregation." },
  { n: "06", name: "Decking", note: "Locke & Ladder inspects every sheet of decking to ensure lifetime performance." },
];

const STANDARDS = [
  { label: "Class 4", sub: "Impact rated" },
  { label: "188 MPH", sub: "Wind · 211 w/ screws" },
  { label: "Class A", sub: "Rated system with approved underlayments" },
  { label: "CRRC", sub: "Cool Roof Rating Council" },
  { label: "Miami-Dade", sub: "County approved" },
];

const PARTNERS = [
  { name: "Brava Roof Tile", role: "Material · Composite Shake", href: "https://www.bravarooftile.com" },
  { name: "Bone Roofing Supply", role: "Distribution", href: "https://bonedry.com" },
  { name: "Grace Ice & Water Shield", role: "Membrane", href: "https://gcpat.com/solutions/products/grace-ice-water-shield-roofing-underlayment" },
  { name: "Eco Chief · Solarhide", role: "Snow retention", href: "https://ecochief.com" },
  { name: "Solar Innovations", role: "Specialty glazing", href: "https://solarinnovations.com" },
];

export default function RoofSystem() {
  return (
    <section
      id="system"
      data-testid="section-system"
      className="relative bg-paper-warm py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="09 / 12" title="The full system" />

        {/* Etymology headline · definition directly underneath */}
        <div className="mt-8" data-testid="roof-system-headline-block">
          <h2
            id="roof-system-headline"
            aria-describedby="roof-system-def"
            data-testid="roof-system-headline"
            className="font-display font-semibold uppercase text-ink leading-[0.95] tracking-[-0.02em]"
            style={{ fontSize: "clamp(56px, 8vw, 140px)" }}
          >
            Roof System
          </h2>
          <div
            id="roof-system-def"
            role="definition"
            data-testid="roof-system-definition-tag"
            className="mt-5 font-serif text-ink/80 text-base md:text-xl leading-snug max-w-2xl"
          >
            <em>system</em>
            <span className="font-brand not-italic text-ink/55 mx-2" style={{ fontSize: "0.75em", letterSpacing: "0.06em" }}>
              (noun)
            </span>
            <span className="mx-1 text-ink/40">&middot;</span>
            <em>a set of components engineered to perform as one.</em>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 fade-in">
            <div className="relative bg-paper border border-rule p-6 md:p-10">
              <div className="aspect-[3/4] relative">
                <SystemDiagram />
              </div>
              <Caption className="mt-4">
                Exploded view, sanctuary and steeple assembly. Indicative only.
              </Caption>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="divide-y divide-ink/10 border-y border-ink/10">
              {LAYERS.map((l) => (
                <li
                  key={l.n}
                  className="grid grid-cols-12 gap-4 md:gap-8 py-5 items-baseline"
                  data-testid={`system-layer-${l.n}`}
                >
                  <span className="col-span-2 md:col-span-1 font-brand text-slate text-xs uppercase tracking-[0.2em]">
                    {l.n}
                  </span>
                  <div className="col-span-10 md:col-span-4 text-ink text-lg md:text-xl font-medium">
                    {l.name}
                  </div>
                  <div className="col-span-12 md:col-span-7 text-sm md:text-base text-body leading-relaxed">
                    {l.note}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Standards badge row · Class A restored at SYSTEM level */}
        <div className="mt-20 md:mt-24" data-testid="standards-badge-row">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
            <div className="eyebrow text-ink/65">Meets or exceeds all major standards</div>
            <Caption>Source: Brava Roof Tile</Caption>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-b border-ink/15">
            {STANDARDS.map((s, i) => (
              <div
                key={s.label}
                data-testid={`standard-${i}`}
                className={`py-6 md:py-8 px-5 md:px-6 border-ink/10 ${
                  i !== STANDARDS.length - 1 ? "md:border-r" : ""
                } ${i >= 2 ? "border-t md:border-t-0" : ""} ${
                  i % 2 === 1 && i < STANDARDS.length - 1 ? "border-l md:border-l-0" : ""
                }`}
              >
                <div className="font-display text-ink text-2xl md:text-3xl font-medium leading-none">
                  {s.label}
                </div>
                <div className="mt-2 text-xs md:text-sm text-slate leading-snug">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="eyebrow text-ink/65 mb-6">Specified partners</div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-b border-ink/15">
            {PARTNERS.map((p, i) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`partner-${i}`}
                className={`group py-6 md:py-8 px-5 md:px-6 border-ink/10 hover:bg-paper transition-colors ${
                  i !== PARTNERS.length - 1 ? "md:border-r" : ""
                } ${i !== 0 ? "border-t md:border-t-0" : ""}`}
              >
                <div className="text-ink text-lg leading-snug font-medium">{p.name}</div>
                <div className="mt-1 text-xs text-slate">{p.role}</div>
                <div className="mt-4 inline-flex items-center gap-2 font-brand text-[10px] uppercase tracking-[0.24em] text-ink/60 group-hover:text-ink">
                  Visit
                  <span className="w-6 h-px bg-ink/40 group-hover:bg-ink transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemDiagram() {
  return (
    <svg viewBox="0 0 300 400" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F1EDE5" />
          <stop offset="100%" stopColor="#EAE2D2" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="300" height="400" fill="url(#sky)" />
      {[
        { y: 40, label: "01", color: "#1A1C20" },
        { y: 90, label: "02", color: "#2B2D32" },
        { y: 140, label: "03", color: "#857650" },
        { y: 190, label: "04", color: "#9A5B3E" },
        { y: 240, label: "05", color: "#8A98A1" },
        { y: 290, label: "06", color: "#D9D4CA" },
      ].map((l, i) => (
        <g key={i} transform={`translate(${30 + i * 4}, ${l.y})`}>
          <polygon points="0,30 120,0 240,30 120,60" fill={l.color} opacity={0.9} stroke="#1A1C20" strokeOpacity="0.25" />
          <text x="250" y="36" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#1A1C20">{l.label}</text>
        </g>
      ))}
      <line x1="0" y1="360" x2="300" y2="360" stroke="#1A1C20" strokeOpacity="0.15" />
      <text x="30" y="378" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fill="#50636F">
        INDICATIVE · NOT TO SCALE
      </text>
    </svg>
  );
}
