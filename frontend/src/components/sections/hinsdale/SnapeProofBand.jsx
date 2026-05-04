import React from "react";
import { SectionTag } from "@/components/primitives";
import Picture from "@/components/Picture";

export default function SnapeProofBand({ number = "08 / 10" }) {
  return (
    <>
      {/* Full-bleed aerial · finished L&L Brava install */}
      <figure
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-ink border-t border-ink"
        data-testid="snape-bleed"
      >
        <Picture
          src="/assets/photos/projects/snape/hero-aerial.webp"
          alt="Recent Locke & Ladder Brava cedar shake install · aerial view of slate-look composite roof with copper accents"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 max-w-[1600px] mx-auto">
          <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold/85">
            Locke &amp; Ladder &middot; Brava cedar shake project
          </div>
          <h2
            className="mt-3 font-display display-tight text-[10vw] sm:text-5xl lg:text-[5vw] text-paper leading-[0.95] max-w-4xl"
            data-testid="snape-headline"
          >
            We have seen the details.
          </h2>
        </div>
      </figure>

      {/* Copy band · plain explainer */}
      <section
        data-testid="section-snape-proof"
        className="relative bg-ink text-paper px-6 lg:px-12 py-20 md:py-28 border-t border-paper/10"
      >
        <div className="max-w-[1600px] mx-auto">
          <SectionTag
            number={number}
            title="Brava in the field, locally"
            className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <p className="font-serif italic font-light text-paper text-2xl md:text-3xl lg:text-[2.4vw] leading-[1.2] max-w-2xl">
                Copper, dormers, valleys, ridge work, transitions. Brava on a
                high-end home is an exercise in the details.
              </p>
            </div>
            <div className="lg:col-span-6 lg:pt-2 space-y-4 text-paper/80 text-base md:text-lg leading-relaxed">
              <p>
                A finished Brava roof on a complicated home is mostly the
                things that are not the shake itself. It is the way the
                copper meets the shake at every dormer cheek. It is the
                consistency of the courses across a hip and a valley. It
                is the underlayment under everything you cannot see.
              </p>
              <p className="text-paper/65">
                The picture above and below are recent Locke &amp; Ladder
                Brava work. No fake quotes. No retouching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed front elevation · same project */}
      <figure
        className="relative w-full overflow-hidden bg-ink border-t border-paper/10"
        data-testid="snape-front-elevation"
      >
        <Picture
          src="/assets/photos/projects/snape/front-elevation.webp"
          alt="Locke & Ladder Brava cedar shake install · front elevation, peaked-gable home with cedar shake field"
          className="w-full h-[clamp(420px,80vh,960px)] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent pointer-events-none" />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/55 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            Front elevation &middot; finished Brava cedar shake
          </span>
        </figcaption>
      </figure>
    </>
  );
}
