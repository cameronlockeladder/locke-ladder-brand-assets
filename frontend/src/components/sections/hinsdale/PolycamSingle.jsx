import React from "react";
import { SectionTag, Caption } from "@/components/primitives";
import Picture from "@/components/Picture";

/**
 * Single Polycam Gaussian Splat tile, full-bleed.
 * Pass `embed` as either:
 *   "https://poly.cam/capture/<id>"          → click-to-launch tile (default)
 *   "https://poly.cam/capture/<id>/embed"    → inline iframe (requires COEP/COOP)
 *   null                                     → "embed pending" placeholder
 */
export default function PolycamSingle({
  number = "09 / 10",
  client,
  address,
  embed,
  poster,
  testId = "polycam",
}) {
  const isInline = typeof embed === "string" && embed.endsWith("/embed");
  const isLaunch = typeof embed === "string" && !isInline;

  return (
    <section
      id="polycam"
      data-testid={`section-${testId}`}
      className="relative bg-ink text-paper py-24 md:py-32 px-6 lg:px-12 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag
          number={number}
          title="Walk the roof in 3D"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95]"
              data-testid="polycam-headline"
            >
              Walk the roof <br />without leaving home.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-paper/80 text-base md:text-lg leading-relaxed">
            <p>
              {client}&rsquo;s home is captured as a Gaussian Splat &mdash; a
              photorealistic 3D model you can pan, zoom, and orbit. Use it
              to see exactly what the drone saw, on your own time.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed-ish viewer · ample room */}
      <div className="mt-14 max-w-[1700px] mx-auto px-2 md:px-6">
        {isInline ? (
          <figure
            data-testid={testId}
            className="relative overflow-hidden bg-ink border border-paper/10"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              src={embed}
              title={`Polycam Gaussian Splat · ${client}`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="fullscreen; xr-spatial-tracking"
              loading="lazy"
              data-testid={`${testId}-iframe`}
            />
          </figure>
        ) : (
          <a
            href={isLaunch ? embed : undefined}
            target={isLaunch ? "_blank" : undefined}
            rel={isLaunch ? "noopener noreferrer" : undefined}
            data-testid={testId}
            aria-disabled={!embed ? "true" : undefined}
            onClick={(e) => { if (!embed) e.preventDefault(); }}
            className={`relative block overflow-hidden bg-ink border border-paper/10 group focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold ${
              !embed ? "cursor-not-allowed" : ""
            }`}
            style={{ aspectRatio: "16 / 9" }}
          >
            <Picture
              src={poster}
              alt={`${client} · ${address}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-ink/55 group-hover:bg-ink/40 transition-colors" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-paper text-center px-6">
              <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold">
                {!embed ? "Polycam capture · processing" : "Interactive 3D Gaussian Splat"}
              </span>
              <span className="font-display text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
                Walk the {client.split(" ")[0]} roof
              </span>
              <span className="text-paper/70 text-sm md:text-base">{address}</span>
              <span className={`mt-3 inline-flex items-center gap-3 font-brand text-[11px] uppercase tracking-[0.28em] px-5 py-2.5 transition-colors ${
                !embed
                  ? "text-paper/55 border border-paper/30"
                  : "text-paper/95 border border-paper/55 group-hover:bg-paper group-hover:text-ink"
              }`}>
                <span className={`block w-2 h-2 rounded-full ${!embed ? "bg-paper/40 animate-pulse" : "bg-warm-gold"}`} />
                {!embed ? "Embed pending" : "Launch in a new tab"}
                {isLaunch && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                )}
              </span>
            </div>
          </a>
        )}

        <Caption className="mt-4 text-paper/45">
          Polycam Gaussian Splat &middot; pan, zoom, orbit. Best viewed full-screen on a tablet or desktop.
        </Caption>
      </div>
    </section>
  );
}
