import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SectionTag } from "@/components/primitives";

const FRAME_COUNT = 90;
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) => `/assets/aspen/frame-${String(i + 1).padStart(3, "0")}.webp`);

export default function LightStudy() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const COLOR_SLIDE = "/assets/proposal-support/brava-presentation-reference-slides/07-color-for-life-mineral-pigments.webp";

  return (
    <section
      id="light-study"
      data-testid="section-light-study"
      className="relative bg-ink text-paper border-t border-ink"
    >
      {/* Color For Life intro panel · ABOVE the scrubber */}
      <div
        className="relative bg-ink border-b border-paper/10"
        data-testid="color-for-life-panel"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionTag
              number="08 / 12"
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
              vespers, and what still reads as cedar at 7 p.m. in October.
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

      {/* Scroll-scrubbed Aspen study */}
      <Scrubber />

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: COLOR_SLIDE }]}
        styles={{ container: { background: "rgba(26,28,32,0.96)" } }}
      />
    </section>
  );
}

function Scrubber() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.4 });
  const index = useTransform(smooth, (v) => Math.min(FRAMES.length - 1, Math.floor(v * FRAMES.length)));
  const labelOpacity = useTransform(smooth, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative" style={{ height: "240vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <FramesStack progress={index} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-12 pointer-events-none max-w-[1600px] mx-auto">
          <motion.div style={{ opacity: labelOpacity }}>
            <div className="eyebrow text-paper/80">A light study &middot; Brava Aspen</div>
            <h3
              className="mt-4 font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.5vw] leading-[0.95] max-w-5xl text-paper"
              data-testid="light-study-headline"
            >
              Aspen, from dawn to evening.
            </h3>
            <p
              className="mt-4 max-w-xl text-paper/80 text-base md:text-lg leading-relaxed"
              data-testid="light-study-body"
            >
              Mineral pigmentation moves with the sun. The color chosen in
              daylight is the color you see at vespers, and the color that
              still reads as cedar at 7 p.m. in October.
            </p>
          </motion.div>

          <motion.div style={{ opacity: labelOpacity }} className="flex items-end justify-between">
            <span className="text-paper/60 text-xs">
              <span className="inline-block w-8 h-px bg-paper/40 mr-3 align-middle" />
              Scroll to move through the day
            </span>
            <FrameCounter progress={index} total={FRAMES.length} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FramesStack({ progress }) {
  return (
    <div className="absolute inset-0">
      {FRAMES.map((src, i) => (
        <Frame key={src} src={src} i={i} progress={progress} />
      ))}
    </div>
  );
}

function Frame({ src, i, progress }) {
  const opacity = useTransform(progress, (current) => (current === i ? 1 : 0));
  return (
    <motion.img
      src={src}
      alt={`Aspen light frame ${i + 1}`}
      loading="lazy"
      style={{ opacity }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

function FrameCounter({ progress, total }) {
  const label = useTransform(progress, (i) => `${String(i + 1).padStart(3, "0")} / ${String(total).padStart(3, "0")}`);
  return (
    <div className="font-display text-paper/90 text-base md:text-lg tabular-nums font-medium">
      <motion.span>{label}</motion.span>
    </div>
  );
}
