import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

// Locke & Ladder installs · now with additional Hickman + Laskey assets
const LL_PROJECTS = [
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-06-scaled.webp", title: "Hickman Residence", loc: "Locke & Ladder client" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-02.webp", title: "Hickman Residence", loc: "Locke & Ladder client" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-11.webp", title: "Hickman Residence", loc: "Locke & Ladder client" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-13-scaled.webp", title: "Hickman Residence", loc: "Locke & Ladder client" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/hickman-export-16.webp", title: "Hickman Residence", loc: "Locke & Ladder client" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-aerial.webp", title: "Laskey Residence", loc: "Locke & Ladder client" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-15.webp", title: "Laskey Residence", loc: "Locke & Ladder client" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-16.webp", title: "Laskey Residence", loc: "Locke & Ladder client" },
  { src: "/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-29.webp", title: "Laskey Residence", loc: "Locke & Ladder client" },
].map((p) => ({ ...p, kind: "ll" }));

// Brava precedents · larger/premier homes lead; darker/b&w removed
const BRAVA_PROJECTS = [
  { src: "/assets/photos/materials/brava-gallery/13-wyoming-lodge.webp", title: "Lodge", loc: "Wyoming" },
  { src: "/assets/photos/materials/brava-gallery/01-new-york-lake-forest.webp", title: "Lake Forest", loc: "New York" },
  { src: "/assets/photos/materials/brava-gallery/02-georgia-lake-forest.webp", title: "Lake Forest", loc: "Georgia" },
  { src: "/assets/photos/materials/brava-gallery/09-mundelein-lake-forest-cedar-shake.webp", title: "Lake Forest Shake", loc: "Mundelein, IL" },
  { src: "/assets/photos/materials/brava-gallery/10-winnetka-weathered-cedar-shake.webp", title: "Weathered Cedar Shake", loc: "Winnetka, IL" },
  { src: "/assets/photos/materials/brava-gallery/06-long-grove-aspen-cedar-shake.webp", title: "Aspen Cedar Shake", loc: "Long Grove, IL" },
  { src: "/assets/photos/materials/brava-gallery/14-wyoming-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "Wyoming" },
  { src: "/assets/photos/materials/brava-gallery/11-north-carolina-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "North Carolina" },
  { src: "/assets/photos/materials/brava-gallery/07-greensboro-arendale-cedar-shake.webp", title: "Arendale Cedar Shake", loc: "Greensboro" },
  { src: "/assets/photos/materials/brava-gallery/05-georgia-canyon-gray-cedar-shake.webp", title: "Canyon Gray", loc: "Georgia" },
  { src: "/assets/photos/materials/brava-gallery/04-colorado-natural-cedar-shake.webp", title: "Natural Cedar Shake", loc: "Colorado" },
  { src: "/assets/photos/materials/brava-gallery/17-beechwood-shake.webp", title: "Beechwood Shake", loc: "Illinois" },
  { src: "/assets/photos/materials/brava-gallery/08-illinois-cottage.webp", title: "Cottage", loc: "Illinois" },
].map((p) => ({ ...p, kind: "brava" }));

const GALLERY = [...BRAVA_PROJECTS, ...LL_PROJECTS];

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

      {/* Drone montage · christ-church-brava-drone-montage */}
      <div
        className="mt-16 relative w-full h-[56vh] md:h-[78vh] overflow-hidden bg-ink"
        data-testid="brava-drone-montage"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="brava-drone-video"
        >
          <source
            src="/assets/videos/projects/brava-web-video-assets/christ-church-brava-drone-montage.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/30 pointer-events-none" />
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
            <span className="inline-flex items-center gap-2 bg-paper/90 text-ink font-brand text-[10px] uppercase tracking-[0.24em] px-2.5 py-1 font-semibold w-fit">
              <span className="block w-1.5 h-1.5 bg-warm-gold rounded-full" />
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

      {/* Why we chose Brava · vertical POV video LEFT, split copy RIGHT */}
      <div className="relative bg-ink" data-testid="why-brava-block">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 md:pt-28 pb-24 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT · vertical video, not full-bleed */}
            <div className="lg:col-span-5 flex lg:justify-start justify-center">
              <div
                className="relative w-full max-w-[420px] aspect-[9/16] overflow-hidden bg-black ring-1 ring-paper/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)]"
                data-testid="why-brava-video-wrap"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid="why-brava-bg-video"
                >
                  <source
                    src="/assets/videos/projects/brava-web-video-assets/hickman-brava-during-v1-first-9s.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 font-brand text-[10px] uppercase tracking-[0.24em] bg-ink/55 backdrop-blur-sm text-paper/80 px-2 py-0.5">
                  Hickman Residence &middot; Brava in hand
                </span>
              </div>
            </div>

            {/* RIGHT · split copy */}
            <div className="lg:col-span-7 lg:pt-4">
              <div className="eyebrow text-bronze">Why we chose Brava</div>
              <h3 className="mt-4 font-serif font-light display-tight text-[9vw] sm:text-4xl lg:text-[3.6vw] leading-[1.02] text-paper">
                The first synthetic
                <br />we put our name on.
              </h3>

              <div className="mt-8 max-w-xl space-y-5 text-paper/85 text-base md:text-lg leading-relaxed" data-testid="why-brava-body">
                <p>
                  We refused every synthetic in this category for years. Brava
                  composite shake is the one that finally earned it.
                </p>
                <p>
                  Molded from real cedar masters. Mineral pigmented so the color
                  runs through the shake, not on top of it. Class 4 impact
                  rated. Made in Iowa with about 95% recycled content, and
                  backed for fifty years.
                </p>
                <p>
                  It is important to us that we only introduce a material to
                  the Board that we would specify on our own homes. Brava is
                  on that list.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3" data-testid="brava-badge-row">
                <Badge>Class 4</Badge>
                <Badge>Mineral pigmented</Badge>
                <Badge muted>~95% recycled content</Badge>
                <Badge muted>50-year limited warranty</Badge>
                <Badge muted>Made in Washington, Iowa</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery · hero + thumbnail rail */}
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
                <div className="inline-flex items-center gap-3 bg-paper/90 text-ink px-3 py-1.5 mb-3">
                  <span className="block w-1.5 h-1.5 bg-warm-gold rounded-full" />
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
                  <span className="absolute top-1 left-1 right-1 bg-paper/85 text-ink font-brand text-[8px] uppercase tracking-[0.18em] px-1 py-[2px] text-center font-semibold">
                    L&amp;L
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quote cards · directly under the gallery */}
      <div className="bg-ink border-t border-paper/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="brava-quote-cards">
            <QuoteCard
              quote="My satisfaction level hasn't changed in 9 years."
              attr="Amy, Michigan"
            />
            <QuoteCard
              quote="From the first attic inspection to the final day, Locke & Ladder gave us complete confidence. They started exactly when promised, finished in six days, and helped us secure thousands in insurance funds we never would have pursued on our own. Top shelf."
              attr="Gilda Hickman"
            />
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

function QuoteCard({ quote, attr }) {
  return (
    <figure className="p-7 md:p-8 border border-paper/15 bg-paper/[0.05]">
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
      </figcaption>
    </figure>
  );
}
