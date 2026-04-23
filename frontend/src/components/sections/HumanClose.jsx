import React from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";

export default function HumanClose() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <section
      id="human-close"
      data-testid="section-human-close"
      className="relative bg-ink text-paper overflow-hidden"
    >
      {/* Full-bleed Coppergate flag loop */}
      <div className="relative w-full h-[100svh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="human-close-video"
        >
          <source
            src="/assets/videos/projects/coppergate-window-install/coppergate-window-install-v1-0008-full.mp4"
            type="video/mp4"
          />
          <source
            src="/assets/videos/projects/coppergate-window-install/coppergate-window-install-v1-0006-07-14s.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/85" />
      </div>

      {/* Sign-off · the end */}
      <div
        className="relative bg-ink text-paper border-t border-paper/10 px-6 lg:px-12 py-24 md:py-32"
        data-testid="signoff-block"
      >
        <div className="max-w-[1600px] mx-auto">
          <p
            className="font-serif italic font-light text-paper/85 leading-[1.15]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)" }}
            data-testid="signoff-statement"
          >
            With respect for your mission,
            <br />and for the work of your community &mdash;
          </p>

          <div className="mt-10 flex items-center gap-5 flex-wrap">
            <div
              className="font-display text-paper text-3xl md:text-4xl font-semibold leading-none"
              data-testid="signoff-signature"
            >
              Jon Strand
            </div>
            <span className="h-6 w-px bg-paper/30" />
            <div className="font-brand text-[11px] uppercase tracking-[0.24em] text-paper/60">
              Founder &middot; Locke &amp; Ladder
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between flex-wrap gap-6 border-t border-paper/15 pt-10">
            <a
              href={`${API || ""}/proposal/packet.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="closing-pdf-download"
              className="inline-flex items-center gap-4 bg-paper/10 hover:bg-paper text-paper hover:text-ink font-brand text-[11px] uppercase tracking-[0.28em] px-6 py-4 backdrop-blur-md border border-paper/25 transition-colors group"
            >
              <span className="block w-1.5 h-1.5 bg-warm-gold rounded-full" />
              Board packet (PDF)
              <span className="relative inline-block w-10 h-px bg-paper/60 group-hover:bg-ink transition-colors">
                <span className="absolute -right-1 -top-[3px] w-[7px] h-[7px] border-r border-t border-paper/80 group-hover:border-ink rotate-45" />
              </span>
            </a>
            <div className="font-brand text-[10px] uppercase tracking-[0.28em] text-paper/50">
              Prepared &middot; {today}
            </div>
          </div>

          {/* Final bottom rule · the end */}
          <div className="mt-20 md:mt-28">
            <div className="h-px bg-paper/20" />
            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap font-brand text-[10px] uppercase tracking-[0.28em] text-paper/40">
              <span>Locke &amp; Ladder</span>
              <span data-testid="signoff-end-marker">&mdash; end &mdash;</span>
              <span>For Christ Church | Oak Brook</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
