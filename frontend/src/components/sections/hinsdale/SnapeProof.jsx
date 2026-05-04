import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

export default function SnapeProof() {
  return (
    <section
      id="snape-proof"
      data-testid="section-snape-proof"
      className="relative bg-ink text-paper border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-28 md:pt-32">
        <SectionTag
          number="08 / 10"
          title="Brava in the field, locally"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95]"
              data-testid="snape-headline"
            >
              We have seen the details.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-paper/80 text-base md:text-lg leading-relaxed">
            <p>
              A Brava install on a high-end home is an exercise in
              transitions. Copper, dormers, valleys, ridge work. Here is a
              recent Locke &amp; Ladder Brava project.
            </p>
          </div>
        </div>
      </div>

      {/* Hero aerial · finished L&L Brava install */}
      <figure className="mt-12 relative w-full h-[56vh] md:h-[78vh] overflow-hidden bg-ink" data-testid="snape-hero">
        <img
          src="/assets/photos/projects/snape/hero-aerial.webp"
          alt="Recent Locke & Ladder Brava cedar shake install · aerial view of dark slate-look roof with copper accents"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/30 pointer-events-none" />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/55 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            Recent Locke &amp; Ladder Brava install &middot; aerial
          </span>
        </figcaption>
      </figure>

      {/* Front elevation · same project, ground-view */}
      <figure
        className="relative w-full overflow-hidden bg-ink border-t border-paper/10"
        data-testid="snape-front-elevation"
      >
        <img
          src="/assets/photos/projects/snape/front-elevation.webp"
          alt="Locke & Ladder Brava cedar shake install · front elevation"
          loading="lazy"
          className="w-full h-[clamp(420px,72vh,860px)] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent pointer-events-none" />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/55 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            Front elevation &middot; finished Brava cedar shake
          </span>
        </figcaption>
      </figure>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16 md:pt-20 pb-28 md:pb-36">
        {/* Detail tile grid · two video tiles + three photo tiles */}
        <div
          className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4"
          data-testid="snape-detail-grid"
        >
          {/* Big copper detail video · spans 4 cols on md */}
          <DetailTile
            kind="video"
            src="/assets/photos/projects/snape/copper-loop.mp4"
            poster="/assets/photos/projects/snape/copper-detail.webp"
            label="Copper detailing"
            className="col-span-2 md:col-span-4 aspect-[16/10]"
            testId="snape-copper-loop"
          />
          {/* Roofline detail · 2 cols */}
          <DetailTile
            kind="video"
            src="/assets/photos/projects/snape/snape-cut-roofline.mp4"
            poster="/assets/photos/projects/snape/dormer-detail.webp"
            label="Roofline · ridge work"
            className="col-span-2 md:col-span-2 aspect-[16/10]"
            testId="snape-roofline-loop"
          />
          {/* Three stills · 2 cols each */}
          <DetailTile
            kind="image"
            src="/assets/photos/projects/snape/dormer-detail.webp"
            label="Dormer transitions"
            className="col-span-2 md:col-span-2 aspect-[4/3]"
            testId="snape-dormer-detail"
          />
          <DetailTile
            kind="image"
            src="/assets/photos/projects/snape/copper-detail.webp"
            label="Copper · close"
            className="col-span-2 md:col-span-2 aspect-[4/3]"
            testId="snape-copper-detail"
          />
          <DetailTile
            kind="video"
            src="/assets/photos/projects/snape/snape-cut-details.mp4"
            poster="/assets/photos/projects/snape/material-sample.webp"
            label="Field details"
            className="col-span-2 md:col-span-2 aspect-[4/3]"
            testId="snape-cut-details"
          />
        </div>

        <Caption className="mt-8 text-paper/45">
          Locke &amp; Ladder project archive &middot; Brava cedar shake on a high-end residential home.
          No invented quotes; visual evidence only.
        </Caption>
      </div>
    </section>
  );
}

function DetailTile({ kind, src, poster, label, className, testId }) {
  return (
    <figure
      data-testid={testId}
      className={`relative overflow-hidden bg-paper/5 group ${className}`}
    >
      {kind === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent pointer-events-none" />
      <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-3 bg-ink/55 backdrop-blur-sm px-2.5 py-1">
        <span className="font-brand text-[10px] uppercase tracking-[0.22em] text-paper/85">{label}</span>
      </figcaption>
    </figure>
  );
}
