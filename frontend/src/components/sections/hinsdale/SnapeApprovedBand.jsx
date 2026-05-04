import React from "react";
import Picture from "@/components/Picture";
import { SectionTag, Caption } from "@/components/primitives";

/**
 * Editorial Snape proof band · 5 approved images, no card grid.
 * Rhythm: full-bleed → split → full-bleed → split.
 */
const ASSETS = [
  {
    src: "/assets/photos/projects/snape-approved/snape-front-facade.webp",
    alt: "Snape · front facade · finished Brava cedar shake",
    caption: "Front facade · Brava cedar shake",
  },
  {
    src: "/assets/photos/projects/snape-approved/snape-aerial-side-rear.webp",
    alt: "Snape · aerial side & rear elevation · Brava field across multiple gables",
    caption: "Side & rear · aerial",
  },
  {
    src: "/assets/photos/projects/snape-approved/snape-aerial-rear-patio-overview.webp",
    alt: "Snape · rear patio overview · Brava roof and copper accents from above",
    caption: "Rear patio overview",
  },
  {
    src: "/assets/photos/projects/snape-approved/snape-copper-gutter-slate-close.webp",
    alt: "Snape · copper gutter & slate at close range · transition detail",
    caption: "Copper gutter · slate close",
  },
  {
    src: "/assets/photos/projects/snape-approved/snape-aerial-chimney-slate-detail.webp",
    alt: "Snape · aerial chimney detail · slate transition and flashing",
    caption: "Chimney transition · aerial",
  },
];

export default function SnapeApprovedBand({ number = "05 / 07" }) {
  return (
    <>
      {/* HEADER · short */}
      <section
        data-testid="section-snape-proof"
        className="relative bg-ink text-paper px-6 lg:px-12 pt-24 md:pt-32 pb-16 border-t border-ink"
      >
        <div className="max-w-[1600px] mx-auto">
          <SectionTag
            number={number}
            title="What our Brava work looks like"
            className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
          />
          <h2
            className="mt-8 font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95] max-w-3xl"
            data-testid="snape-headline"
          >
            We have done <br />the details.
          </h2>
        </div>
      </section>

      {/* 1 · FULL-BLEED FRONT FACADE */}
      <SnapeFrame asset={ASSETS[0]} testId="snape-1-facade" tall />

      {/* 2 · SPLIT · aerial side-rear + copy column */}
      <section
        data-testid="snape-split-2"
        className="relative grid grid-cols-1 lg:grid-cols-12 bg-ink text-paper border-t border-paper/10"
      >
        <figure className="lg:col-span-8 relative overflow-hidden">
          <Picture
            src={ASSETS[1].src}
            alt={ASSETS[1].alt}
            className="w-full h-[clamp(360px,62vh,720px)] object-cover"
          />
          <SnapeCaption caption={ASSETS[1].caption} />
        </figure>
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center bg-ink-soft">
          <div className="font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold">
            Same Brava we would specify here
          </div>
          <p className="mt-4 font-serif italic text-paper/85 text-lg md:text-xl leading-relaxed">
            Multi-gable, full Brava field. The copper transitions are the part
            most homeowners only see in person.
          </p>
        </div>
      </section>

      {/* 3 · FULL-BLEED REAR PATIO OVERVIEW */}
      <SnapeFrame asset={ASSETS[2]} testId="snape-3-rear" tall />

      {/* 4 · SPLIT · copper close + aerial chimney */}
      <section
        data-testid="snape-split-4"
        className="relative grid grid-cols-1 md:grid-cols-2 bg-ink text-paper border-t border-paper/10"
      >
        <figure className="relative overflow-hidden">
          <Picture
            src={ASSETS[3].src}
            alt={ASSETS[3].alt}
            className="w-full h-[clamp(320px,55vh,640px)] object-cover"
          />
          <SnapeCaption caption={ASSETS[3].caption} />
        </figure>
        <figure className="relative overflow-hidden border-t md:border-t-0 md:border-l border-paper/10">
          <Picture
            src={ASSETS[4].src}
            alt={ASSETS[4].alt}
            className="w-full h-[clamp(320px,55vh,640px)] object-cover"
          />
          <SnapeCaption caption={ASSETS[4].caption} />
        </figure>
      </section>

      {/* SOURCE LINE */}
      <div className="bg-ink text-paper px-6 lg:px-12 py-6 border-t border-paper/10">
        <div className="max-w-[1600px] mx-auto">
          <Caption className="text-paper/45">
            Locke &amp; Ladder project archive &middot; Brava cedar shake on a high-end residential home.
          </Caption>
        </div>
      </div>
    </>
  );
}

function SnapeFrame({ asset, testId, tall }) {
  return (
    <figure
      data-testid={testId}
      className="relative w-full overflow-hidden bg-ink border-t border-paper/10"
    >
      <Picture
        src={asset.src}
        alt={asset.alt}
        className={`w-full ${tall ? "h-[clamp(440px,82vh,960px)]" : "h-[clamp(360px,62vh,720px)]"} object-cover`}
      />
      <SnapeCaption caption={asset.caption} />
    </figure>
  );
}

function SnapeCaption({ caption }) {
  return (
    <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
      <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
        {caption}
      </span>
    </figcaption>
  );
}
