import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

const LL_PROJECTS = [
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-06-scaled.jpg", title: "Hickman Residence", loc: "Locke & Ladder client", kind: "ll" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-02.jpg", title: "Hickman Residence", loc: "Locke & Ladder client", kind: "ll" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-15.jpg", title: "Laskey Residence", loc: "Locke & Ladder client", kind: "ll" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-16.jpg", title: "Laskey Residence", loc: "Locke & Ladder client", kind: "ll" },
];

// Brava precedents · removed darker / black-and-white candidates per direction.
const BRAVA_PROJECTS = [
  { src: "/assets/photos/materials/brava-gallery/01-new-york-lake-forest.webp", title: "Lake Forest", loc: "New York" },
  { src: "/assets/photos/materials/brava-gallery/02-georgia-lake-forest.webp", title: "Lake Forest", loc: "Georgia" },
  { src: "/assets/photos/materials/brava-gallery/04-colorado-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "Colorado" },
  { src: "/assets/photos/materials/brava-gallery/05-georgia-canyon-gray-cedar-shake.webp", title: "Canyon Gray", loc: "Georgia" },
  { src: "/assets/photos/materials/brava-gallery/06-long-grove-aspen-cedar-shake.webp", title: "Aspen Cedar Shake", loc: "Long Grove, IL" },
  { src: "/assets/photos/materials/brava-gallery/07-greensboro-arendale-cedar-shake.webp", title: "Arendale Cedar Shake", loc: "Greensboro" },
  { src: "/assets/photos/materials/brava-gallery/08-illinois-cottage.webp", title: "Cottage", loc: "Illinois" },
  { src: "/assets/photos/materials/brava-gallery/09-mundelein-lake-forest-cedar-shake.webp", title: "Lake Forest Shake", loc: "Mundelein, IL" },
  { src: "/assets/photos/materials/brava-gallery/10-winnetka-weathered-cedar-shake.webp", title: "Weathered Cedar Shake", loc: "Winnetka, IL" },
  { src: "/assets/photos/materials/brava-gallery/11-north-carolina-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "North Carolina" },
  { src: "/assets/photos/materials/brava-gallery/13-wyoming-lodge.webp", title: "Lodge", loc: "Wyoming" },
  { src: "/assets/photos/materials/brava-gallery/14-wyoming-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "Wyoming" },
  { src: "/assets/photos/materials/brava-gallery/17-beechwood-shake.webp", title: "Beechwood Shake", loc: "Illinois" },
].map((p) => ({ ...p, kind: "brava" }));

const GALLERY = [...LL_PROJECTS, ...BRAVA_PROJECTS];

export default function BravaProof() {
  const [active, setActive] = useState(0);
  const img = GALLERY[active];
  const isLL = img.kind === "ll";

  return (
    <section
      id="brava-proof"
      data-testid="section-brava-proof"
      className="relative bg-ink text-paper border-t border-ink"
    >
      {/* Section header */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-28 md:pt-32">
        <SectionTag
          number="07 / 12"
          title="Proof"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />
        <h2
          className="mt-6 font-serif font-light display-tight text-[12vw] sm:text-5xl lg:text-[6vw] text-paper leading-[0.95] max-w-5xl"
          data-testid="brava-proof-headline"
        >
          Brava, in the field.
        </h2>
      </div>

      {/* Drone montage · OPEN with this before gallery */}
      <div className="mt-16 relative w-full h-[56vh] md:h-[72vh] overflow-hidden bg-ink" data-testid="brava-drone-montage">
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <img
            src="/assets/photos/materials/brava-gallery/06-long-grove-aspen-cedar-shake.webp"
            alt="Brava cedar shake field"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-warm-gold text-ink font-brand text-[10px] uppercase tracking-[0.24em] px-2.5 py-1 font-semibold">
              [ASSET NEEDED: Brava drone montage]
            </span>
            <p className="mt-6 text-paper/80 text-base md:text-lg leading-relaxed">
              Short-form drone montage &middot; mixed closeups and midrange,
              jump cuts not too quick. Replace this placeholder when the edit
              is supplied.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40 pointer-events-none" />
      </div>

      {/* Laskey introducing Brava */}
      <figure className="relative mt-0 w-full" data-testid="laskey-intro">
        <div className="relative w-full bg-ink">
          <img
            src="/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-side-by-side-intro-to-brava-cedar-shot.webp"
            alt="Laskey Residence · real cedar alongside Brava cedar"
            className="w-full h-[clamp(420px,82vh,960px)] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-5 left-5 md:top-8 md:left-8 flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 bg-warm-gold text-ink font-brand text-[10px] uppercase tracking-[0.24em] px-2.5 py-1 font-semibold w-fit">
              <span className="block w-1.5 h-1.5 bg-ink rounded-full" />
              Locke &amp; Ladder client
            </span>
            <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85 bg-ink/55 backdrop-blur-sm px-2.5 py-1 w-fit">
              Laskey Residence &middot; Introducing Brava
            </span>
          </div>
          <div className="absolute bottom-6 md:bottom-10 left-5 md:left-12 right-5 md:right-12 text-paper">
            <div className="font-display display-tight text-[7vw] sm:text-4xl lg:text-[3.4vw] leading-[1.02] text-paper max-w-4xl">
              Real cedar and Brava cedar on the same house. In the same light.
            </div>
          </div>
        </div>
      </figure>

      {/* Why we chose Brava · corrected copy */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 md:pt-28 pb-24 md:pb-28">
        <div className="max-w-3xl">
          <div className="eyebrow text-warm-gold">Why we chose Brava</div>
          <h3 className="mt-4 font-serif font-light display-tight text-[9vw] sm:text-4xl lg:text-[3.6vw] leading-[1.02]">
            The first synthetic we put our name on.
          </h3>
          <p className="mt-6 text-paper/85 text-base leading-relaxed" data-testid="why-brava-body">
            We refused every synthetic in this category for years. Brava
            composite shake is the one that finally earned it. Molded from
            real cedar masters. Mineral pigmented so the color runs through
            the shake, not on top of it. Class 4 impact rated. Made in Iowa
            with about 95% recycled content, and backed for fifty years. It
            is important to us that we only introduce a material to the Board
            that we would specify on our own homes. Brava is on that list.
          </p>

          {/* Badge row · Class 4 · mineral pigmented (Class A intentionally removed from the shake) */}
          <div className="mt-8 flex flex-wrap gap-3" data-testid="brava-badge-row">
            <Badge>Class 4</Badge>
            <Badge>Mineral pigmented</Badge>
            <Badge>~95% recycled content</Badge>
            <Badge>50-year limited warranty</Badge>
            <Badge muted>Made in Washington, Iowa</Badge>
          </div>
        </div>

        {/* Quote cards · sprinkled */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="brava-quote-cards">
          <QuoteCard
            quote="My satisfaction level hasn't changed in 9 years."
            attr="Amy, Michigan"
            verify
          />
          <QuoteCard
            quote="[ASSET NEEDED: Laskey or Hickman quote + 5-star symbol]"
            attr="[VERIFY]"
            placeholder
          />
        </div>
      </div>

      {/* Gallery · abundant, L&L + Brava intermixed but L&L badge carries the weight */}
      <div className="relative h-[80svh] md:h-[88svh] w-full overflow-hidden border-t border-paper/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={img.src}
            src={img.src}
            alt={`${img.title} · ${img.loc}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="brava-hero-image"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/50" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-12 max-w-[1600px] mx-auto w-full">
          <div className="flex items-start justify-end">
            <img src="/assets/brand/partners/brava/brava-new-logo-white.svg" alt="Brava" className="hidden md:block w-20 opacity-70" />
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              {isLL ? (
                <div className="inline-flex items-center gap-3 bg-warm-gold text-ink px-3 py-1.5 mb-3">
                  <span className="block w-1.5 h-1.5 bg-ink rounded-full" />
                  <span className="font-brand text-[10px] uppercase tracking-[0.24em] font-semibold">Locke &amp; Ladder client</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 bg-paper/15 text-paper px-3 py-1.5 mb-3 backdrop-blur-sm">
                  <span className="font-brand text-[10px] uppercase tracking-[0.24em]">Brava precedent</span>
                </div>
              )}
              <div className="font-serif text-2xl md:text-3xl text-paper">
                {img.title}
                <span className="text-paper/50 italic"> &middot; {img.loc}</span>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <Caption className="text-paper/60">Image</Caption>
              <div className="mt-1 font-serif text-base text-paper/90 tabular-nums">
                {String(active + 1).padStart(2, "0")}
                <span className="text-paper/40"> / {String(GALLERY.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ink border-t border-paper/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div className="eyebrow text-paper/60">
              <span className="text-warm-gold">Locke &amp; Ladder installs</span>
              <span className="text-paper/40">&nbsp;first, then Brava precedents</span>
            </div>
            <Caption className="text-paper/50">
              {LL_PROJECTS.length} L&amp;L projects &middot; {BRAVA_PROJECTS.length} Brava precedents &middot; [ASSET NEEDED: more Hickman detailed closeups]
            </Caption>
          </div>
          <div
            className="rail-scroll no-scrollbar flex gap-2 overflow-x-auto -mx-6 px-6 lg:-mx-12 lg:px-12"
            data-testid="brava-thumbnail-rail"
          >
            {GALLERY.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                data-testid={`brava-thumb-${i}`}
                className={`relative shrink-0 h-20 md:h-24 aspect-[3/2] overflow-hidden group transition-all ${
                  active === i ? "ring-1 ring-paper" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={g.src} alt="" loading="lazy" className="w-full h-full object-cover" />
                {g.kind === "ll" && (
                  <span className="absolute top-1 left-1 right-1 bg-warm-gold text-ink font-brand text-[8px] uppercase tracking-[0.18em] px-1 py-[2px] text-center font-semibold">
                    L&amp;L
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, muted = false }) {
  return (
    <span
      className={`inline-flex items-center font-brand text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 ${
        muted
          ? "bg-paper/10 text-paper/70 border border-paper/15"
          : "bg-warm-gold text-ink font-semibold"
      }`}
    >
      {children}
    </span>
  );
}

function QuoteCard({ quote, attr, verify, placeholder }) {
  return (
    <figure
      className={`p-7 md:p-8 border ${
        placeholder
          ? "border-dashed border-paper/25 bg-paper/[0.03]"
          : "border-paper/15 bg-paper/[0.05]"
      }`}
    >
      <div className="flex items-center gap-1 text-warm-gold text-base" aria-label="Five star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>&#9733;</span>
        ))}
      </div>
      <blockquote className="mt-5 font-serif italic text-paper text-xl md:text-2xl leading-snug">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 font-brand text-[11px] uppercase tracking-[0.22em] text-paper/70">
        &mdash; {attr}
        {verify && (
          <span className="ml-2 text-warm-gold">[VERIFY]</span>
        )}
      </figcaption>
    </figure>
  );
}
