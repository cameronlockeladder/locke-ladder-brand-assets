import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

const LAYERS = [
  {
    n: "07",
    name: "Brava Composite Shake",
    role: "Visible roof",
    note: "Class A · Class 4 · mineral pigmented",
  },
  {
    n: "06",
    name: "Custom Fabricated Edge Metals",
    role: "Eaves, rakes, ridges",
    note: "Locke & Ladder metal shop — matched profiles",
  },
  {
    n: "05",
    name: "Double-W Valley Metal",
    role: "High-volume water paths",
    note: "Open-valley, doubled for commercial life",
  },
  {
    n: "04",
    name: "Ring-Shank Stainless Nailing",
    role: "Fastening",
    note: "Resists back-out over decades of movement",
  },
  {
    n: "03",
    name: "Grace Ice & Water Shield",
    role: "Vulnerable zones",
    note: "Eaves, valleys, steeple transitions, penetrations",
  },
  {
    n: "02",
    name: "EchoShield Synthetic Underlayment",
    role: "Field water barrier",
    note: "High-tear, high-temp rated, UV stable during install",
  },
  {
    n: "01",
    name: "Decking, Inspected & Restored",
    role: "Substrate",
    note: "Rotted sheathing cut out, sistered, replaced",
  },
];

const PARTNERS = [
  { name: "Brava Roof Tile", role: "Material — Composite Shake", href: "https://www.bravarooftile.com" },
  { name: "Bone Roofing Supply", role: "Distribution", href: "https://bonedry.com" },
  { name: "Grace Ice & Water Shield", role: "Membrane", href: "https://gcpat.com/solutions/products/grace-ice-water-shield-roofing-underlayment" },
  { name: "Eco Chief / Solarhide", role: "Snow retention", href: "https://ecochief.com" },
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
        <SectionTag number="04 / 07" title="The Roof, as a System" />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif font-light display-tight text-[11vw] sm:text-5xl lg:text-[5.2vw] leading-[0.98]">
              Seven layers.
              <br />
              <span className="italic">One quiet roof.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-base leading-relaxed">
              A great roof is mostly invisible. What the congregation sees is the shake.
              What keeps the building dry is everything beneath it — specified, detailed,
              and installed by people who understand the stakes.
            </p>
          </div>
        </div>

        {/* Exploded study */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Visual column */}
          <div className="lg:col-span-5 fade-in">
            <div className="relative bg-paper border border-rule p-6 md:p-10">
              <div className="aspect-[3/4] relative">
                {/* A simple editorial diagram built in SVG */}
                <SystemDiagram />
              </div>
              <Caption className="mt-4">
                Exploded view — sanctuary and steeple assembly. Indicative only.
              </Caption>
            </div>
          </div>

          {/* Index column */}
          <div className="lg:col-span-7">
            <ol className="divide-y divide-ink/10 border-y border-ink/10">
              {LAYERS.map((l) => (
                <li
                  key={l.n}
                  className="grid grid-cols-12 gap-4 md:gap-8 py-5 items-baseline"
                  data-testid={`system-layer-${l.n}`}
                >
                  <span className="col-span-2 md:col-span-1 font-serif italic text-warm-gold">
                    {l.n}
                  </span>
                  <div className="col-span-10 md:col-span-5 font-serif text-ink text-lg md:text-xl">
                    {l.name}
                  </div>
                  <div className="col-span-6 md:col-span-2 text-[11px] uppercase tracking-[0.2em] text-slate">
                    {l.role}
                  </div>
                  <div className="col-span-6 md:col-span-4 text-sm text-body leading-relaxed">
                    {l.note}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-28">
          <div className="eyebrow text-warm-gold mb-6">Specified partners</div>
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
                <div className="font-serif text-ink text-lg leading-snug">{p.name}</div>
                <div className="mt-1 text-xs text-slate">{p.role}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-ink/60 group-hover:text-ink">
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
      {/* Layered planes shifted */}
      {[
        { y: 40, label: "07", color: "#1A1C20" },
        { y: 80, label: "06", color: "#2B2D32" },
        { y: 120, label: "05", color: "#50636F" },
        { y: 160, label: "04", color: "#857650" },
        { y: 200, label: "03", color: "#9A5B3E" },
        { y: 240, label: "02", color: "#8A98A1" },
        { y: 280, label: "01", color: "#D9D4CA" },
      ].map((l, i) => (
        <g key={i} transform={`translate(${30 + i * 4}, ${l.y})`}>
          <polygon
            points="0,30 120,0 240,30 120,60"
            fill={l.color}
            opacity={0.9}
            stroke="#1A1C20"
            strokeOpacity="0.25"
          />
          <text x="250" y="36" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="12" fill="#1A1C20">
            {l.label}
          </text>
        </g>
      ))}
      <line x1="0" y1="360" x2="300" y2="360" stroke="#1A1C20" strokeOpacity="0.15" />
      <text x="30" y="378" fontFamily="Manrope, sans-serif" fontSize="9" letterSpacing="2" fill="#50636F">
        INDICATIVE · NOT TO SCALE
      </text>
    </svg>
  );
}
