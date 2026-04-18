import React, { useRef, useState, useEffect } from "react";
import { SectionTag, Caption } from "@/components/primitives";

export default function Polycam() {
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
    <section
      id="polycam"
      data-testid="section-polycam"
      className="relative bg-paper-warm py-24 md:py-32 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <SectionTag number="&mdash;" title="Walk the campus yourself" />
            <h2 className="mt-6 font-serif font-light display-tight text-[10vw] sm:text-5xl lg:text-[4.6vw] leading-[1]">
              A 3D scan of the
              <span className="italic"> building as it stands today.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-base leading-relaxed">
              Orbit the model. Zoom into the steeple. Stand on the sanctuary
              roof without climbing a ladder. It is important to us that the
              Board can see what we see before we talk about what to do about it.
            </p>
          </div>
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
              title="Polycam capture viewer — Christ Church | Oak Brook"
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
                <span className="font-serif text-2xl md:text-4xl text-paper italic">
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
        <Caption className="mt-4">
          Captured by Locke &amp; Ladder during our on-site survey.
          {loaded ? " Drag to orbit · scroll to zoom." : " Loads on click to keep the page fast."}
        </Caption>
      </div>
    </section>
  );
}
