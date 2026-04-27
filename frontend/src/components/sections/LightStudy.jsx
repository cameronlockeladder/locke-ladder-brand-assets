import React, { useState, useRef, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SectionTag } from "@/components/primitives";

// Use only the visible-light range (frames 18-82). Earlier/later frames are pitch black (pre-dawn / post-evening).
const FRAME_START = 18;
const FRAME_END = 82;
const FRAME_COUNT = FRAME_END - FRAME_START + 1;
const FRAMES = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `/assets/aspen/frame-${String(i + FRAME_START).padStart(3, "0")}.webp`
);

// Time anchor labels distributed across the visible day.
const TIME_MARKS = [
  { pct: 0, label: "Dawn" },
  { pct: 25, label: "Morning" },
  { pct: 55, label: "Noon" },
  { pct: 80, label: "Late afternoon" },
  { pct: 100, label: "Evening" },
];

export default function LightStudy() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const COLOR_SLIDE = "/assets/proposal-support/brava-presentation-reference-slides/07-color-for-life-mineral-pigments.webp";

  return (
    <section
      id="light-study"
      data-testid="section-light-study"
      className="relative bg-ink text-paper border-t border-ink py-28 md:py-36 px-6 lg:px-12"
    >
      {/* Color For Life intro panel */}
      <div className="max-w-[1600px] mx-auto" data-testid="color-for-life-panel">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionTag
              number="08 / 14"
              title="Color for life"
              className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
            />
            <h2 className="mt-6 font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.2vw] leading-[0.98] text-paper">
              Pigment that runs
              <br />through the shake.
            </h2>
            <p className="mt-8 max-w-2xl text-paper/80 text-base md:text-lg leading-relaxed">
              Mineral pigments have held color for thousands of years. Brava
              uses the same principle &mdash; pigment runs through the shake,
              not on top of it. What you choose in daylight is what you see at
              dusk, and what still reads as cedar at 7 p.m. in October.
            </p>
          </div>
          <div className="lg:col-span-6">
            <figure>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                data-testid="color-for-life-trigger"
                className="relative block w-full overflow-hidden bg-paper/5 border border-paper/10 group"
              >
                <img
                  src={COLOR_SLIDE}
                  alt="Color for life · mineral pigmentation"
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-[1200ms] group-hover:scale-[1.015]"
                  data-testid="color-for-life-slide"
                />
                <span className="absolute bottom-3 right-3 font-brand text-[10px] uppercase tracking-[0.24em] bg-ink/75 text-paper px-2 py-1 backdrop-blur-sm opacity-85 group-hover:opacity-100 transition-opacity">
                  Enlarge
                </span>
              </button>
              <figcaption className="mt-3 font-brand text-[10px] uppercase tracking-[0.24em] text-paper/55">
                From Brava&rsquo;s own presentation material
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Draggable, non-full-width Aspen light scrubber */}
      <div className="max-w-[1400px] mx-auto mt-24 md:mt-32" data-testid="aspen-scrubber">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-6">
          <div>
            <div className="eyebrow text-paper/60">A light study &middot; Brava Aspen</div>
            <h3
              className="mt-3 font-display display-tight text-[8vw] sm:text-4xl lg:text-[3.6vw] leading-[1] text-paper"
              data-testid="light-study-headline"
            >
              Aspen, from dawn to evening.
            </h3>
          </div>
        </div>

        <AspenSlider />
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: COLOR_SLIDE }]}
        styles={{ container: { background: "rgba(26,28,32,0.96)" } }}
      />
    </section>
  );
}

function AspenSlider() {
  const [progress, setProgress] = useState(0); // 0-100
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef(null);

  const frameIndex = Math.min(FRAME_COUNT - 1, Math.round((progress / 100) * (FRAME_COUNT - 1)));

  // Preload a handful of frames around the current index for smooth scrub
  useEffect(() => {
    const preloadWindow = 4;
    const start = Math.max(0, frameIndex - preloadWindow);
    const end = Math.min(FRAME_COUNT - 1, frameIndex + preloadWindow);
    for (let i = start; i <= end; i++) {
      const img = new Image();
      img.src = FRAMES[i];
    }
  }, [frameIndex]);

  const setFromClientX = (clientX) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setProgress((x / rect.width) * 100);
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    trackRef.current?.setPointerCapture?.(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = (e) => {
    setDragging(false);
    try { trackRef.current?.releasePointerCapture?.(e.pointerId); } catch {}
  };
  // Direct click — handles simulated/test clicks that skip pointer events, and plain mouse clicks on the track
  const onClick = (e) => setFromClientX(e.clientX);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") setProgress((p) => Math.min(100, p + 2));
    else if (e.key === "ArrowLeft") setProgress((p) => Math.max(0, p - 2));
    else if (e.key === "Home") setProgress(0);
    else if (e.key === "End") setProgress(100);
  };

  // Closest label to current progress for the floating time chip
  const nearestLabel = TIME_MARKS.reduce((acc, m) =>
    Math.abs(m.pct - progress) < Math.abs(acc.pct - progress) ? m : acc
  , TIME_MARKS[0]).label;

  return (
    <div data-testid="aspen-slider">
      {/* Contained frame viewer · 16:9 · single <img> with preloaded window */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-ink-soft border border-paper/10">
        <img
          src={FRAMES[frameIndex]}
          alt={`Aspen at frame ${frameIndex + 1}`}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover select-none"
          data-testid="aspen-current-frame"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />

        {/* Floating time chip */}
        <div
          data-testid="aspen-time-chip"
          className="absolute top-4 left-4 font-brand text-[10px] uppercase tracking-[0.24em] bg-ink/65 backdrop-blur-sm text-paper/90 px-2.5 py-1"
        >
          {nearestLabel}
        </div>
      </div>

      {/* Custom draggable slider */}
      <div className="relative pt-10 pb-6 select-none">
        {/* Time-mark labels ABOVE track */}
        <div className="relative h-5">
          {TIME_MARKS.map((m) => (
            <div
              key={m.label}
              className="absolute -translate-x-1/2 font-brand text-[10px] uppercase tracking-[0.24em] text-paper/55"
              style={{ left: `${m.pct}%` }}
              data-testid={`time-mark-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {m.label}
            </div>
          ))}
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Time of day"
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClick={onClick}
          onKeyDown={onKeyDown}
          data-testid="aspen-slider-track"
          className={`relative mt-3 h-[6px] bg-paper/15 cursor-pointer rounded-full touch-none ${
            dragging ? "ring-2 ring-warm-gold/60" : ""
          }`}
        >
          {/* Filled portion */}
          <div
            className="absolute top-0 left-0 h-full bg-warm-gold/80 rounded-full"
            style={{ width: `${progress}%` }}
          />
          {/* Time-mark ticks below the track */}
          {TIME_MARKS.map((m) => (
            <div
              key={m.label}
              className="absolute top-[10px] -translate-x-1/2 w-px h-2 bg-paper/25"
              style={{ left: `${m.pct}%` }}
              aria-hidden="true"
            />
          ))}
          {/* Thumb */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-paper border border-warm-gold shadow-[0_2px_8px_rgba(0,0,0,0.5)] pointer-events-none transition-transform ${
              dragging ? "scale-110" : ""
            }`}
            style={{ left: `calc(${progress}% - 10px)` }}
            data-testid="aspen-slider-thumb"
          />
        </div>

        <div className="mt-6 font-brand text-[10px] uppercase tracking-[0.24em] text-paper/50">
          Drag the slider &middot; or use &larr; &rarr; keys
        </div>
      </div>
    </div>
  );
}
