import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Picture from "@/components/Picture";

const TILES = [
  {
    to: "/bowles",
    client: "Eric Bowles",
    address: "404 N Vine St · Hinsdale, IL",
    poster: "/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-detail.webp",
    note: "Estimate #4798 · $107,712.68 (draft)",
    testId: "index-bowles",
  },
  {
    to: "/lindahl",
    client: "Mark Lindahl",
    address: "903 Middleton · Inverness, IL",
    poster: "/assets/photos/projects/hinsdale-cedar/mark/aerial-context-with-truck.webp",
    note: "Inspection report sent · scope in review",
    testId: "index-lindahl",
  },
];

export default function HinsdaleIndex() {
  useEffect(() => {
    document.title = "Locke & Ladder · Hinsdale Cedar · Bowles & Lindahl";
  }, []);

  return (
    <div className="min-h-screen bg-ink text-paper paper-grain" data-testid="hinsdale-index">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="font-brand text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-paper/55">
          Locke &amp; Ladder &middot; Private client index
        </div>
        <h1 className="mt-6 font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] leading-[0.95]">
          Two homes, <br />one decision in front of each.
        </h1>
        <p className="mt-6 max-w-xl text-paper/70 text-base md:text-lg leading-relaxed">
          These pages are private and tailored to each homeowner.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-testid="index-tiles">
          {TILES.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              data-testid={t.testId}
              className="relative block group overflow-hidden bg-ink-soft border border-paper/10"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Picture
                src={t.poster}
                alt={`${t.client} · ${t.address}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10 group-hover:from-ink/95 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <div className="font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold">
                  {t.note}
                </div>
                <div className="mt-3 font-display text-3xl md:text-5xl text-paper font-medium leading-tight">
                  {t.client}
                </div>
                <div className="mt-2 text-paper/70 text-sm md:text-base">{t.address}</div>
                <div className="mt-6 inline-flex items-center gap-3 font-brand text-[11px] uppercase tracking-[0.28em] text-paper/85 group-hover:text-paper transition-colors">
                  Open page
                  <span className="relative inline-block w-10 h-px bg-paper/50 group-hover:bg-paper transition-colors">
                    <span className="absolute -right-1 -top-[3px] w-[7px] h-[7px] border-r border-t border-paper/60 group-hover:border-paper rotate-45" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
