import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

// Locke & Ladder installs come first — the strongest proof.
const LL_PROJECTS = [
  {
    src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-06-scaled.jpg",
    title: "Hickman Residence",
    loc: "Locke & Ladder client",
    kind: "ll",
  },
  {
    src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-02.jpg",
    title: "Hickman Residence",
    loc: "Locke & Ladder client",
    kind: "ll",
  },
  {
    src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-15.jpg",
    title: "Laskey Residence",
    loc: "Locke & Ladder client",
    kind: "ll",
  },
  {
    src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-16.jpg",
    title: "Laskey Residence",
    loc: "Locke & Ladder client",
    kind: "ll",
  },
];

const BRAVA_PROJECTS = [
  { src: "/assets/photos/materials/brava-gallery/01-new-york-lake-forest.webp", title: "Lake Forest", loc: "New York", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/02-georgia-lake-forest.webp", title: "Lake Forest", loc: "Georgia", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/03-colorado-lodge.webp", title: "Lodge", loc: "Colorado", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/04-colorado-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "Colorado", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/05-georgia-canyon-gray-cedar-shake.webp", title: "Canyon Gray", loc: "Georgia", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/06-long-grove-aspen-cedar-shake.webp", title: "Aspen Cedar Shake", loc: "Long Grove, IL", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/07-greensboro-arendale-cedar-shake.webp", title: "Arendale Cedar Shake", loc: "Greensboro", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/08-illinois-cottage.webp", title: "Cottage", loc: "Illinois", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/09-mundelein-lake-forest-cedar-shake.webp", title: "Lake Forest Shake", loc: "Mundelein, IL", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/10-winnetka-weathered-cedar-shake.webp", title: "Weathered Cedar Shake", loc: "Winnetka, IL", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/11-north-carolina-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "North Carolina", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/12-west-virginia-canyon-gray-resort.webp", title: "Canyon Gray Resort", loc: "West Virginia", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/13-wyoming-lodge.webp", title: "Lodge", loc: "Wyoming", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/14-wyoming-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "Wyoming", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/15-decatur-head-island-lodge.webp", title: "Head Island Lodge", loc: "Decatur", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/16-grand-marais-minnesota-minne-stuga.webp", title: "Minne Stuga", loc: "Grand Marais, MN", kind: "brava" },
  { src: "/assets/photos/materials/brava-gallery/17-beechwood-shake.webp", title: "Beechwood Shake", loc: "Illinois", kind: "brava" },
];

const GALLERY = [...LL_PROJECTS, ...BRAVA_PROJECTS];

export default function BravaGallery() {
  const [active, setActive] = useState(0);
  const img = GALLERY[active];
  const isLL = img.kind === "ll";

  return (
    <section
      id="gallery"
      data-testid="section-gallery"
      className="relative bg-ink text-paper overflow-hidden"
    >
      <div className="relative h-[80svh] md:h-[88svh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={img.src}
            src={img.src}
            alt={`${img.title} — ${img.loc}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="brava-hero-image"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-12 max-w-[1600px] mx-auto w-full">
          <div className="flex items-start justify-between">
            <div>
              <div className="eyebrow text-paper/70">Brava in the field</div>
              <h2 className="mt-4 font-serif font-light display-tight text-[12vw] sm:text-5xl lg:text-[6vw] leading-[0.95] text-paper max-w-5xl">
                Start with the ones
                <br />
                <span className="italic">we installed.</span>
              </h2>
            </div>
            <img
              src="/assets/brand/partners/brava/brava-new-logo-white.svg"
              alt="Brava"
              className="hidden md:block w-20 opacity-70"
            />
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              {isLL ? (
                <div className="inline-flex items-center gap-3 bg-warm-gold text-ink px-3 py-1.5 mb-3">
                  <span className="block w-1.5 h-1.5 bg-ink rounded-full" />
                  <span className="font-brand text-[10px] uppercase tracking-[0.24em] font-semibold">
                    Locke &amp; Ladder client
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 bg-paper/15 text-paper px-3 py-1.5 mb-3 backdrop-blur-sm">
                  <span className="font-brand text-[10px] uppercase tracking-[0.24em]">
                    Brava precedent
                  </span>
                </div>
              )}
              <div className="font-serif text-2xl md:text-3xl text-paper">
                {img.title}
                <span className="text-paper/50 italic"> &mdash; {img.loc}</span>
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
              <span className="text-paper/40">&nbsp;first, then Brava gallery</span>
            </div>
            <Caption className="text-paper/50">
              {LL_PROJECTS.length} L&amp;L projects &middot; {BRAVA_PROJECTS.length} Brava precedents
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
