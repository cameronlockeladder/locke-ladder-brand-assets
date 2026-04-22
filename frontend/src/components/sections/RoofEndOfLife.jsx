import React, { useRef, useState, useEffect } from "react";
import { SectionTag, Caption } from "@/components/primitives";

export default function RoofEndOfLife() {
  return (
    <section
      id="roof-eol"
      data-testid="section-roof-eol"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="03 / 12" title="Problem" />

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

        {/* Polycam 3D scan · preserved interactive */}
        <div className="mt-20">
          <Polycam3D />
        </div>
      </div>
    </section>
  );
}

function Polycam3D() {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { rootMargin: "300px 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-6 mb-6">
        <div className="eyebrow text-warm-gold">Walk the campus yourself</div>
        <Caption>3D Scan created from Locke &amp; Ladder site visit</Caption>
      </div>

      <div
        ref={ref}
        className="relative bg-ink border border-ink/10 overflow-hidden group"
        data-testid="polycam-embed-wrap"
        style={{ aspectRatio: "16 / 9" }}
      >
        {inView && loaded ? (
          <iframe
            src="https://poly.cam/capture/3c1da4a0-341f-4fa2-b9fc-a1afa6154d36/embed"
            title="Polycam capture viewer, Christ Church Oak Brook"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            frameBorder="0"
            allow="fullscreen; xr-spatial-tracking"
            loading="lazy"
            data-testid="polycam-iframe"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            data-testid="polycam-load-button"
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-ink text-paper hover:bg-ink-soft transition-colors"
            style={{
              backgroundImage: "url('/assets/photos/projects/christ-church/topdown.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-ink/65 group-hover:bg-ink/55 transition-colors" />
            <div className="relative flex flex-col items-center gap-5">
              <span className="eyebrow text-warm-gold">Interactive 3D model</span>
              <span className="font-display text-2xl md:text-4xl text-paper font-medium">
                Launch walkthrough
              </span>
              <span className="mt-4 inline-flex items-center gap-3 font-brand text-[11px] uppercase tracking-[0.28em] text-paper/80 border border-paper/40 px-5 py-2.5">
                <span className="block w-2 h-2 bg-warm-gold rounded-full" />
                Click to load Polycam viewer
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
