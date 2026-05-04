import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

/**
 * Full-bleed inline Gaussian Splat iframe.
 * Polycam viewer requires SharedArrayBuffer → COOP/COEP headers (set in /vercel.json).
 * In environments without those headers, the iframe will buffer indefinitely;
 * the fallback link below opens the same model on poly.cam.
 */
export default function PolycamSplatBand({
  number = "06 / 07",
  client,
  address,
  embedUrl,
  fallbackUrl,
  testId = "polycam",
}) {
  return (
    <section
      id="polycam"
      data-testid={`section-${testId}`}
      className="relative bg-ink text-paper border-t border-ink"
    >
      {/* Header band · keep tight */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 md:py-28">
        <SectionTag
          number={number}
          title="Walk the roof in 3D"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />
        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
          <h2
            className="font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95] max-w-3xl"
            data-testid="polycam-headline"
          >
            Walk the roof <br />without leaving home.
          </h2>
          <p className="font-serif italic text-paper/75 text-base md:text-lg leading-relaxed max-w-md">
            Photoreal Gaussian Splat &mdash; pan, zoom, orbit. Best on a tablet
            or desktop.
          </p>
        </div>
      </div>

      {/* Full-bleed iframe shell · 16:9 responsive · ink frame */}
      <div
        className="relative w-full bg-ink border-t border-paper/10"
        data-testid={`${testId}-frame`}
      >
        <div
          className="relative w-full"
          style={{ aspectRatio: "16 / 9", maxHeight: "calc(100vh - 80px)" }}
        >
          <iframe
            src={embedUrl}
            title={`Polycam Gaussian Splat · ${client}`}
            allow="fullscreen; xr-spatial-tracking; cross-origin-isolated"
            loading="lazy"
            data-testid={`${testId}-iframe`}
            className="absolute inset-0 w-full h-full bg-ink"
            style={{ border: 0 }}
          />
        </div>
        <div className="absolute bottom-4 left-6 lg:left-12 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5 pointer-events-none">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            {client} &middot; {address}
          </span>
        </div>
      </div>

      {/* Fallback / source line */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex flex-wrap items-center justify-between gap-4 border-t border-paper/10">
        <Caption className="text-paper/45">
          Polycam Gaussian Splat &middot; April 2026 capture
        </Caption>
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`${testId}-fallback`}
          className="inline-flex items-center gap-2 font-brand text-[11px] uppercase tracking-[0.24em] text-paper/70 hover:text-paper transition-colors"
        >
          If the model doesn&rsquo;t load, view it at poly.cam
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </a>
      </div>
    </section>
  );
}
