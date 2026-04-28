import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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
  { label: "Class 4", sub: "Impact rated", info: "Highest hail-impact rating. Withstands a 2-inch ice ball at 90 mph with no loss of water-shedding function." },
  { label: "188 MPH", sub: "Wind · 211 w/ screws", info: "Wind-uplift rated to 188 mph with ring-shank nails; 211 mph with screw fastening. Exceeds every Chicagoland wind-design requirement." },
  { label: "Class A", sub: "Rated system with approved underlayments", info: "Highest fire rating when installed over approved underlayments. Carries the full Class A system designation — at the assembly level, not the shake alone." },
  { label: "CRRC", sub: "Cool Roof Rating Council", info: "Listed with the Cool Roof Rating Council for solar reflectance and thermal emittance. Qualifies for cool-roof incentives where applicable." },
  { label: "Miami-Dade", sub: "County approved", info: "Miami-Dade approved — the most demanding wind and impact standards in the country. If it holds up there, it holds up here." },
];

const PARTNERS = [
  { name: "Brava Roof Tile", role: "Material · Composite Shake", href: "https://www.bravarooftile.com" },
  { name: "Bone Roofing Supply", role: "Distribution", href: "https://www.boneroofingsupply.com" },
  { name: "Grace Ice & Water Shield", role: "Membrane", href: "https://gcpat.com/en/solutions/products/grace-ice-water-shield-roofing-underlayment/grace-ice-water-shield-data-sheet" },
  { name: "Eco Chief · Solarhide", role: "Snow retention", href: "https://ecochiefproducts.com/solarhide" },
  { name: "Solar Innovations", role: "Specialty glazing", href: "https://solarinnovations.com" },
];

export default function RoofSystem() {
  const [hovered, setHovered] = useState(null);
  return (
    <section
      id="system"
      data-testid="section-system"
      className="relative bg-paper-warm py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="09 / 14" title="The full system" />

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
            <SystemPanel hovered={hovered} />
          </div>

          <div className="lg:col-span-7">
            <ol className="divide-y divide-ink/10 border-y border-ink/10" data-testid="system-layer-list">
              {LAYERS.map((l) => {
                const isHover = hovered === l.n;
                return (
                  <li
                    key={l.n}
                    onMouseEnter={() => setHovered(l.n)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(l.n)}
                    onBlur={() => setHovered(null)}
                    tabIndex={0}
                    className={`grid grid-cols-12 gap-4 md:gap-8 py-5 items-baseline cursor-default transition-colors ${
                      isHover ? "bg-paper" : ""
                    }`}
                    data-testid={`system-layer-${l.n}`}
                  >
                    <span className={`col-span-2 md:col-span-1 font-brand text-xs uppercase tracking-[0.2em] transition-colors ${
                      isHover ? "text-warm-gold" : "text-slate"
                    }`}>
                      {l.n}
                    </span>
                    <div className="col-span-10 md:col-span-4 text-ink text-lg md:text-xl font-medium">
                      {l.name}
                    </div>
                    <div className="col-span-12 md:col-span-7 text-sm md:text-base text-body leading-relaxed">
                      {l.note}
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="mt-3 font-brand text-[10px] uppercase tracking-[0.24em] text-slate/80">
              Hover a layer &middot; the diagram responds.
            </div>
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
              <StandardBadge key={s.label} s={s} i={i} last={i === STANDARDS.length - 1} />
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

        {/* Expandable detail panels — Low-e underlayment + Grace vs generic IWS */}
        <div className="mt-20 space-y-4" data-testid="system-detail-panels">
          <DetailPanel
            testId="panel-lowe"
            badge="05"
            title="Low-e Synthetic Underlayment"
            subtitle=""
          >
            <p className="text-body leading-relaxed">
              Traditional 30-lb felt paper does one job: keep water out for a
              few hours during install. A Low-e synthetic underlayment does
              three. It still keeps water out &mdash; for longer, and without
              tearing when a crew walks it. It reflects up to 97% of radiant
              heat away from the attic, which means lower summer cooling
              bills and a more comfortable sanctuary below. And it stays
              dimensionally stable for the full life of the roof so the
              system it supports doesn&rsquo;t telegraph wrinkles up through
              the shakes.
            </p>
            <ul className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <li className="border-t border-ink/15 pt-3">
                <div className="font-brand text-[10px] uppercase tracking-[0.22em] text-ink/55">Performance</div>
                <div className="mt-1 text-ink">Reflects radiant heat &middot; lowers cooling load</div>
              </li>
              <li className="border-t border-ink/15 pt-3">
                <div className="font-brand text-[10px] uppercase tracking-[0.22em] text-ink/55">Longevity</div>
                <div className="mt-1 text-ink">Lasts the life of the roof, not just the install</div>
              </li>
              <li className="border-t border-ink/15 pt-3">
                <div className="font-brand text-[10px] uppercase tracking-[0.22em] text-ink/55">Recommended</div>
                <div className="mt-1 text-ink">EchoShield radiant-barrier synthetic</div>
              </li>
            </ul>
          </DetailPanel>

          <DetailPanel
            testId="panel-iws"
            badge="04"
            title="Grace Ice &amp; Water Shield vs generic IWS"
            subtitle=""
            defaultOpen={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink/15">
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-ink/15">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display text-2xl text-ink font-medium">Generic IWS</h4>
                  <span className="eyebrow text-slate">What we see fail</span>
                </div>
                <figure className="mt-5 relative overflow-hidden aspect-[4/3] bg-ink/5">
                  <img
                    src="/assets/photos/materials/ice-and-water-shield/leakbarrier-roof-underlayments-lb742161-4f_600-cheap-ice-and-water-shield.webp"
                    alt="Generic leak-barrier ice and water shield"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain bg-paper-warm"
                  />
                </figure>
                <ul className="mt-5 space-y-3 text-sm text-body leading-relaxed">
                  <li className="flex gap-3"><Mark minus /> Adhesive softens or slumps in summer heat.</li>
                  <li className="flex gap-3"><Mark minus /> Seams lift on high-slope work before the shingles are even down.</li>
                  <li className="flex gap-3"><Mark minus /> Tears around fasteners instead of self-sealing.</li>
                  <li className="flex gap-3"><Mark minus /> Short warranty, often one season of installation coverage.</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 bg-ink text-paper">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display text-2xl font-medium">Grace Ice &amp; Water Shield</h4>
                  <span className="eyebrow text-warm-gold/85">What we specify</span>
                </div>
                <figure className="mt-5 relative overflow-hidden aspect-[4/3] bg-paper/5">
                  <img
                    src="/assets/photos/materials/ice-and-water-shield/ludowici-install-pierson-indy-9-grace-ice-and-water-shield.webp"
                    alt="Grace Ice & Water Shield installed on a Locke & Ladder job"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 font-brand text-[9px] uppercase tracking-[0.22em] bg-ink/65 backdrop-blur-sm text-paper/80 px-2 py-0.5">
                    On a Locke &amp; Ladder job
                  </span>
                </figure>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed">
                  <li className="flex gap-3"><Mark plus light /> Rubberized asphalt that self-seals around every nail.</li>
                  <li className="flex gap-3"><Mark plus light /> Stays stable through ice-dam cycles, Midwest winters included.</li>
                  <li className="flex gap-3"><Mark plus light /> Protects the most vulnerable areas of the roof for decades, not seasons.</li>
                  <li className="flex gap-3"><Mark plus light /> Backed by GCP&rsquo;s full-system warranty when paired with specified components.</li>
                </ul>
              </div>
            </div>
          </DetailPanel>
        </div>
      </div>
    </section>
  );
}

function StandardBadge({ s, i, last }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      data-testid={`standard-${i}`}
      className={`relative border-ink/10 ${
        !last ? "md:border-r" : ""
      } ${i >= 2 ? "border-t md:border-t-0" : ""} ${
        i % 2 === 1 && !last ? "border-l md:border-l-0" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        data-testid={`standard-${i}-toggle`}
        className="w-full text-left py-6 md:py-8 px-5 md:px-6 hover:bg-paper-warm transition-colors group"
      >
        <div className="font-display text-ink text-2xl md:text-3xl font-medium leading-none">
          {s.label}
        </div>
        <div className="mt-2 flex items-center justify-between gap-3 text-xs md:text-sm text-slate leading-snug">
          <span>{s.sub}</span>
          <span
            aria-hidden="true"
            className={`shrink-0 w-5 h-5 rounded-full border border-ink/25 text-ink/50 group-hover:border-ink/50 group-hover:text-ink flex items-center justify-center transition-all ${
              open ? "rotate-45 bg-ink text-paper border-ink" : ""
            }`}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        data-testid={`standard-${i}-info`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-sm text-body leading-relaxed">
          {s.info}
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ testId, badge, title, subtitle, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-rule bg-paper" data-testid={testId}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        data-testid={`${testId}-toggle`}
        className="w-full flex items-center gap-5 md:gap-8 p-5 md:p-6 text-left hover:bg-paper-warm transition-colors"
      >
        <span className="font-brand text-[11px] uppercase tracking-[0.22em] text-slate shrink-0 w-8">
          {badge}
        </span>
        <span className="flex-1">
          <span
            className="block font-display text-xl md:text-2xl text-ink font-medium leading-snug"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {subtitle && (
            <span className="block mt-1 text-sm md:text-base text-body leading-snug">{subtitle}</span>
          )}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-6 md:pb-8 pt-2">{children}</div>
      </div>
    </div>
  );
}

function Mark({ minus, plus, light }) {
  const color = light ? "text-warm-gold/90" : "text-slate";
  return (
    <span className={`shrink-0 mt-[6px] w-4 h-4 inline-flex items-center justify-center border ${color} rounded-full`} aria-hidden="true">
      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        {minus && <line x1="5" y1="12" x2="19" y2="12" />}
        {plus && <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>}
      </svg>
    </span>
  );
}

function SystemPanel({ hovered }) {
  const [view, setView] = useState("ll"); // "ll" | "brava"
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const BRAVA_SLIDE = "/assets/proposal-support/brava-presentation-reference-slides/02-durability-pays-dividends-lifecycle-cost.webp";

  return (
    <div
      className="relative bg-paper border border-rule p-6 md:p-8"
      data-testid="system-panel"
    >
      {/* Toggle */}
      <div
        role="tablist"
        aria-label="System view"
        className="flex border border-ink/10 mb-6 text-[11px] font-brand uppercase tracking-[0.22em]"
        data-testid="system-view-toggle"
      >
        <button
          role="tab"
          aria-selected={view === "ll"}
          onClick={() => setView("ll")}
          data-testid="system-view-ll"
          className={`flex-1 px-3 py-2.5 transition-colors ${
            view === "ll" ? "bg-ink text-paper" : "bg-paper text-ink/60 hover:text-ink"
          }`}
        >
          L&amp;L view
        </button>
        <button
          role="tab"
          aria-selected={view === "brava"}
          onClick={() => setView("brava")}
          data-testid="system-view-brava"
          className={`flex-1 px-3 py-2.5 transition-colors border-l border-ink/10 ${
            view === "brava" ? "bg-ink text-paper" : "bg-paper text-ink/60 hover:text-ink"
          }`}
        >
          Brava reference
        </button>
      </div>

      {/* Panel body */}
      {view === "ll" ? (
        <div>
          <div className="aspect-[3/4] relative">
            <SystemDiagram hovered={hovered} />
          </div>
          <Caption className="mt-4">
            Exploded view, sanctuary and steeple assembly. Indicative only.
          </Caption>
        </div>
      ) : (
        <div>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            data-testid="brava-system-slide-trigger"
            className="relative w-full aspect-[3/4] overflow-hidden group bg-paper border border-ink/5"
          >
            <img
              src={BRAVA_SLIDE}
              alt="Brava cedar shake roofing system"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-[1200ms] group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-3 right-3 font-brand text-[10px] uppercase tracking-[0.24em] bg-ink/80 text-paper px-2 py-1 backdrop-blur-sm">
              Enlarge
            </span>
          </button>
          <Caption className="mt-4">
            Brava cedar shake roofing system &middot; reference diagram from
            Brava&rsquo;s own material.
          </Caption>
        </div>
      )}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: BRAVA_SLIDE }]}
        styles={{ container: { background: "rgba(26,28,32,0.96)" } }}
      />
    </div>
  );
}

function SystemDiagram({ hovered }) {
  const layers = [
    { y: 56, label: "01", color: "#1A1C20", name: "Brava shake" },
    { y: 108, label: "02", color: "#2B2D32", name: "Edge metals" },
    { y: 160, label: "03", color: "#857650", name: "Ring-shank nails" },
    { y: 212, label: "04", color: "#9A5B3E", name: "Grace IWS" },
    { y: 264, label: "05", color: "#8A98A1", name: "EchoShield" },
    { y: 316, label: "06", color: "#D9D4CA", name: "Decking" },
  ];
  return (
    <svg viewBox="0 0 380 420" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F1EDE5" />
          <stop offset="100%" stopColor="#EAE2D2" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="380" height="420" fill="url(#sky)" />

      {/* Polygons · centered, slight depth offset */}
      {layers.map((l, i) => {
        const active = hovered === l.label;
        const dim = hovered && hovered !== l.label;
        const xOffset = 50 + i * 3;
        return (
          <g
            key={l.label}
            data-testid={`system-diagram-layer-${l.label}`}
            style={{
              opacity: dim ? 0.28 : 1,
              transform: `translate(${xOffset}px, ${l.y + (active ? -10 : 0)}px)`,
              transition: "transform 380ms cubic-bezier(0.25, 1, 0.5, 1), opacity 260ms ease",
              transformOrigin: "center",
            }}
          >
            <polygon
              points="0,30 120,0 240,30 120,60"
              fill={l.color}
              opacity={active ? 1 : 0.92}
              stroke={active ? "#857650" : "#1A1C20"}
              strokeOpacity={active ? 1 : 0.25}
              strokeWidth={active ? 2 : 1}
            />
          </g>
        );
      })}

      {/* Labels · static column, never translates */}
      {layers.map((l) => {
        const active = hovered === l.label;
        const dim = hovered && hovered !== l.label;
        return (
          <g
            key={`label-${l.label}`}
            style={{
              opacity: dim ? 0.3 : 1,
              transition: "opacity 260ms ease",
            }}
          >
            <line
              x1="296" y1={l.y + 30}
              x2="324" y2={l.y + 30}
              stroke={active ? "#857650" : "#1A1C20"}
              strokeOpacity={active ? 1 : 0.25}
              strokeWidth={active ? 2 : 1}
            />
            <text
              x="332" y={l.y + 34}
              fontFamily="Inter, sans-serif"
              fontSize="13"
              fontWeight={active ? 700 : 600}
              fill={active ? "#857650" : "#1A1C20"}
            >
              {l.label}
            </text>
          </g>
        );
      })}

      <line x1="20" y1="386" x2="360" y2="386" stroke="#1A1C20" strokeOpacity="0.15" />
      <text x="20" y="404" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fill="#50636F">
        INDICATIVE · NOT TO SCALE
      </text>
    </svg>
  );
}
