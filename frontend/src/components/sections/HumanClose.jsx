import React from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";

export default function HumanClose() {
  return (
    <section
      id="human-close"
      data-testid="section-human-close"
      className="relative bg-ink text-paper overflow-hidden"
    >
      {/* Single full-bleed image. No header. No body copy. */}
      <div className="relative w-full h-[100svh] overflow-hidden">
        <img
          src="/assets/photos/team/team-photo.webp"
          alt=""
          data-testid="human-close-image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/75" />

        {/* Asset-needed flag — top left, minimal */}
        <span
          className="absolute top-24 left-6 md:left-12 font-brand text-[10px] uppercase tracking-[0.24em] bg-warm-gold text-ink px-2.5 py-1 font-semibold"
          data-testid="human-close-asset-flag"
        >
          [ASSET NEEDED: L&amp;L team photo or house flying an L&amp;L flag]
        </span>

        {/* Preserved PDF packet interactive — tucked in bottom-right corner */}
        <a
          href={`${API || ""}/proposal/packet.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="closing-pdf-download"
          className="group absolute bottom-8 right-6 md:bottom-10 md:right-12 inline-flex items-center gap-4 bg-paper/10 hover:bg-paper text-paper hover:text-ink font-brand text-[11px] uppercase tracking-[0.28em] px-6 py-4 backdrop-blur-md border border-paper/25 transition-colors"
        >
          <span className="block w-1.5 h-1.5 bg-warm-gold rounded-full" />
          Board packet (PDF)
          <span className="relative inline-block w-10 h-px bg-paper/60 group-hover:bg-ink transition-colors">
            <span className="absolute -right-1 -top-[3px] w-[7px] h-[7px] border-r border-t border-paper/80 group-hover:border-ink rotate-45" />
          </span>
        </a>
      </div>
    </section>
  );
}
