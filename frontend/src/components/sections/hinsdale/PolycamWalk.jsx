import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

/* ==============================================================
   POLYCAM EMBED CONSTANTS — paste new embed codes here later
   ==============================================================
   Each entry can be:
     null → renders the "embed pending" placeholder tile
     "https://poly.cam/capture/<id>" → renders click-to-launch tile
     "https://poly.cam/capture/<id>/embed" → renders inline iframe
       (requires COEP/COOP headers on parent page · see DEPLOY_NOTES.md)
*/
export const POLYCAM_MARK_GAUSSIAN_SPLAT_EMBED_PENDING = null;
export const POLYCAM_ERIC_GAUSSIAN_SPLAT_EMBED_PENDING = null;

const VIEWERS = [
  {
    tag: "Mark Lindahl",
    address: "903 Middleton · Inverness, IL",
    poster: "/assets/photos/projects/hinsdale-cedar/mark/aerial-context-with-truck.webp",
    embed: POLYCAM_MARK_GAUSSIAN_SPLAT_EMBED_PENDING,
    testId: "polycam-mark",
  },
  {
    tag: "Eric Bowles",
    address: "404 N Vine St · Hinsdale, IL",
    poster: "/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-context.webp",
    embed: POLYCAM_ERIC_GAUSSIAN_SPLAT_EMBED_PENDING,
    testId: "polycam-eric",
  },
];

export default function PolycamWalk() {
  return (
    <section
      id="polycam"
      data-testid="section-polycam"
      className="relative bg-ink text-paper py-28 md:py-36 px-6 lg:px-12 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag
          number="09 / 10"
          title="Walk the roofs in 3D"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95]"
              data-testid="polycam-headline"
            >
              Walk both roofs <br />without leaving home.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-paper/80 text-base md:text-lg leading-relaxed">
            <p>
              Each roof is captured as a Gaussian Splat &mdash; a
              photorealistic 3D model you can pan, zoom, and orbit. Use it
              to see exactly what the drone saw.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-testid="polycam-grid">
          {VIEWERS.map((v) => (
            <PolycamTile key={v.tag} viewer={v} />
          ))}
        </div>

        <Caption className="mt-8 text-paper/45">
          Polycam Gaussian Splat &middot; captures processing &middot; embed codes will be inserted
          when ready (see <code className="text-paper/60">PolycamWalk.jsx</code> top constants).
        </Caption>
      </div>
    </section>
  );
}

function PolycamTile({ viewer }) {
  // Three states: inline iframe (if .../embed), launch tile (if any other URL), pending placeholder (null)
  const isEmbed = typeof viewer.embed === "string" && viewer.embed.endsWith("/embed");
  const isLaunchUrl = typeof viewer.embed === "string" && !isEmbed;
  const isPending = !viewer.embed;

  if (isEmbed) {
    return (
      <figure
        data-testid={viewer.testId}
        className="relative overflow-hidden bg-ink border border-paper/10"
        style={{ aspectRatio: "16 / 9" }}
      >
        <iframe
          src={viewer.embed}
          title={`Polycam · ${viewer.tag}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          allow="fullscreen; xr-spatial-tracking"
          loading="lazy"
          data-testid={`${viewer.testId}-iframe`}
        />
        <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5 pointer-events-none">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            {viewer.tag} &middot; {viewer.address}
          </span>
        </figcaption>
      </figure>
    );
  }

  // Launch tile (URL provided but not /embed) OR pending (no URL)
  return (
    <a
      href={isLaunchUrl ? viewer.embed : undefined}
      target={isLaunchUrl ? "_blank" : undefined}
      rel={isLaunchUrl ? "noopener noreferrer" : undefined}
      data-testid={viewer.testId}
      aria-disabled={isPending ? "true" : undefined}
      className={`relative block overflow-hidden bg-ink border border-paper/10 group focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold ${
        isPending ? "cursor-not-allowed" : ""
      }`}
      style={{ aspectRatio: "16 / 9" }}
      onClick={(e) => {
        if (isPending) e.preventDefault();
      }}
    >
      <img
        src={viewer.poster}
        alt={`${viewer.tag} · ${viewer.address}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-ink/55 group-hover:bg-ink/45 transition-colors" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-paper text-center px-6">
        <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold">
          {isPending ? "Polycam capture · processing" : "Interactive 3D Gaussian Splat"}
        </span>
        <span className="font-display text-2xl md:text-4xl font-medium leading-[1.05]">
          Walk the {viewer.tag.split(" ")[0]} roof
        </span>
        <span className="text-paper/70 text-sm">{viewer.address}</span>
        <span className={`mt-3 inline-flex items-center gap-3 font-brand text-[11px] uppercase tracking-[0.28em] px-5 py-2.5 transition-colors ${
          isPending
            ? "text-paper/55 border border-paper/30"
            : "text-paper/90 border border-paper/50 group-hover:bg-paper group-hover:text-ink"
        }`}>
          <span className={`block w-2 h-2 rounded-full ${isPending ? "bg-paper/40 animate-pulse" : "bg-warm-gold"}`} />
          {isPending ? "Embed pending" : "Launch in a new tab"}
          {isLaunchUrl && (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          )}
        </span>
      </div>

      <div className="absolute top-4 left-4 inline-flex items-center gap-3 bg-paper/15 backdrop-blur-sm px-3 py-1.5">
        <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper">{viewer.tag}</span>
      </div>
    </a>
  );
}
