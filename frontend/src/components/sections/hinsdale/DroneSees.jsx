import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

export default function DroneSees() {
  return (
    <section
      id="drone"
      data-testid="section-drone"
      className="relative bg-ink text-paper py-28 md:py-36 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionTag
          number="03 / 10"
          title="From the air"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95]"
              data-testid="drone-headline"
            >
              What the drone sees.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4 space-y-4 text-paper/80 text-base md:text-lg leading-relaxed">
            <p>
              Two-story access. Steep pitches. Skylights, copper valleys,
              snow guards, dormers, transitions. Mature landscaping pushing
              right up to the eaves.
            </p>
            <p>
              The drone is not for show. It is the cheapest way to get an
              honest count.
            </p>
          </div>
        </div>

        {/* Aerial detail · Eric's roof seen from above */}
        <figure className="mt-16 relative w-full overflow-hidden bg-ink/40 border border-paper/10">
          <img
            src="/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-context.webp"
            alt="Aerial context · 404 N Vine St with surrounding tree canopy and adjacent properties"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
            <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
              404 N Vine St &middot; Eric Bowles &middot; April 28, 2026
            </span>
          </figcaption>
        </figure>

      {/* Mark's aerial-with-truck · context bridge */}
      <figure className="mt-10 relative w-full overflow-hidden bg-ink/40 border border-paper/10" data-testid="drone-mark-truck">
        <img
          src="/assets/photos/projects/hinsdale-cedar/mark/aerial-context-with-truck.webp"
          alt="Aerial context · 903 Middleton with Locke & Ladder field truck visible on the curb"
          loading="lazy"
          className="w-full h-auto object-cover"
        />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            903 Middleton &middot; Mark Lindahl &middot; L&amp;L on site
          </span>
        </figcaption>
      </figure>

        {/* Dual contact sheets */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ContactPlate
            label="Eric Bowles · 404 N Vine St"
            count="101 frames · DJI"
            src="/assets/photos/projects/hinsdale-cedar/eric/contact-sheet.webp"
            testId="drone-contact-eric"
          />
          <ContactPlate
            label="Mark Lindahl · 903 Middleton"
            count="75 frames · DJI"
            src="/assets/photos/projects/hinsdale-cedar/mark/contact-sheet.webp"
            testId="drone-contact-mark"
          />
        </div>

        {/* Three observations · sparse, visual */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="drone-observations">
          <Observation
            number="01"
            title="Roof complexity"
            body="Multiple gables, hips, valleys, and dormer transitions. Each transition is a place water has to be redirected — and a place price quietly accumulates."
          />
          <Observation
            number="02"
            title="Adjacent landscaping"
            body="Mature trees and shrubs pressed into the eaves. Drives debris load, moss in shaded fields, and access cost during install."
          />
          <Observation
            number="03"
            title="Steep & two-story access"
            body="10/12 to 12/12 pitches with stretches over 12/12. Two-story access on both homes. This is the &lsquo;steep roof&rsquo; line on a Brava estimate. It is real labor, not a markup."
          />
        </div>

        <Caption className="mt-10 text-paper/45">
          DJI Mavic flight &middot; Locke &amp; Ladder, April 28, 2026 &middot; raw frames in JobNimbus
        </Caption>
      </div>
    </section>
  );
}

function ContactPlate({ label, count, src, testId }) {
  return (
    <figure
      data-testid={testId}
      className="relative bg-paper/[0.03] border border-paper/10 overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={src}
          alt={`${label} · drone contact sheet`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <figcaption className="flex items-baseline justify-between gap-3 px-5 py-4 border-t border-paper/10">
        <span className="font-brand text-[11px] uppercase tracking-[0.22em] text-paper/85">{label}</span>
        <span className="font-brand text-[10px] uppercase tracking-[0.22em] text-paper/45">{count}</span>
      </figcaption>
    </figure>
  );
}

function Observation({ number, title, body }) {
  return (
    <div className="border-t border-paper/15 pt-5">
      <div className="flex items-baseline gap-4">
        <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold">{number}</span>
        <h3 className="font-display text-xl md:text-2xl text-paper font-medium leading-snug">{title}</h3>
      </div>
      <p
        className="mt-4 text-paper/70 text-sm md:text-base leading-relaxed"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
