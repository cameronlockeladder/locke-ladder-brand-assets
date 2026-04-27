import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

const POLYCAM_URL = "https://poly.cam/capture/3c1da4a0-341f-4fa2-b9fc-a1afa6154d36";

export default function RoofEndOfLife() {
  return (
    <section
      id="roof-eol"
      data-testid="section-roof-eol"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="03 / 14" title="Problem" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2
              className="font-display display-tight text-[10vw] sm:text-5xl lg:text-[5vw] leading-[1]"
              data-testid="roof-eol-headline"
            >
              Roof is at the end of useful life.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-body text-lg leading-relaxed" data-testid="roof-eol-body">
              Active leaks are threatening the interior and integrity of the
              sanctuary. Cedar is worn. The felt paper underlayment beneath
              the cedar is at the end of its typical lifespan and is
              compromised. Long-term leaks will create extensive repair needs
              and leave the Church at risk for mold.
            </p>
          </div>
        </div>

        {/* Polycam 3D scan · launches in a new tab (Polycam embed requires cross-origin isolation we don't ship) */}
        <div className="mt-20">
          <Polycam3D />
        </div>
      </div>
    </section>
  );
}

function Polycam3D() {
  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-6 mb-6">
        <div className="eyebrow text-warm-gold">Walk the campus yourself</div>
        <Caption>3D Scan created from Locke &amp; Ladder site visit</Caption>
      </div>

      <a
        href={POLYCAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="polycam-launch"
        className="relative block w-full overflow-hidden bg-ink border border-ink/10 group focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold"
        style={{ aspectRatio: "16 / 9" }}
      >
        <img
          src="/assets/photos/projects/christ-church/topdown.webp"
          alt="Polycam 3D scan of Christ Church Oak Brook campus, top-down view"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-ink/60 group-hover:bg-ink/45 transition-colors" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-paper text-center px-6">
          <span className="eyebrow text-warm-gold">Interactive 3D model</span>
          <span className="font-display text-3xl md:text-5xl font-medium leading-[1.05]">
            Walk the campus &middot; in 3D
          </span>
          <span className="mt-3 inline-flex items-center gap-3 font-brand text-[11px] uppercase tracking-[0.28em] text-paper/90 border border-paper/50 px-5 py-2.5 group-hover:bg-paper group-hover:text-ink transition-colors">
            <span className="block w-2 h-2 bg-warm-gold rounded-full" />
            Launch in a new tab
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </span>
        </div>
      </a>
      <Caption className="mt-3 text-slate/80">
        Opens at poly.cam &middot; full WebGL 3D viewer (zoom, pan, walk-through)
      </Caption>
    </div>
  );
}
