import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Caption, VerifyTag } from "@/components/primitives";

// The user is uploading 90 frames later. We start with 5 available.
// The scrubber component gracefully scales with however many frames exist.
const FRAME_COUNT = 5;
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) => `/assets/aspen/frame-${String(i + 1).padStart(3, "0")}.webp`);

export default function AspenLightStudy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.4 });

  // Map to frame index
  const index = useTransform(smooth, (v) => Math.min(FRAMES.length - 1, Math.floor(v * FRAMES.length)));

  // Subtle overlay opacity (fade labels at extremes)
  const labelOpacity = useTransform(smooth, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      id="aspen"
      data-testid="section-aspen"
      ref={ref}
      className="relative bg-ink text-paper border-t border-ink"
      // Give generous scroll length for the scrub
      style={{ height: "240vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Stacked frames — one visible at a time */}
        <FramesStack progress={index} />
        {/* Atmospheric vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60 pointer-events-none" />

        {/* Overlay copy */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-12 pointer-events-none max-w-[1600px] mx-auto">
          <motion.div style={{ opacity: labelOpacity }}>
            <div className="eyebrow text-paper/80">A Light Study</div>
            <h2 className="mt-4 font-serif font-light display-tight text-[12vw] sm:text-5xl lg:text-[5.5vw] leading-[0.95] max-w-5xl text-paper">
              Aspen, <span className="italic">from dawn</span>
              <br />
              to evening.
            </h2>
            <p className="mt-4 max-w-lg text-paper/75 text-base leading-relaxed">
              Mineral pigmentation moves with the sun. The color you choose on Tuesday
              is the color you see at vespers — and the color that still reads as cedar
              at 7 p.m. in October.
            </p>
          </motion.div>

          <motion.div style={{ opacity: labelOpacity }} className="flex items-end justify-between">
            <Caption className="text-paper/60">
              <span className="inline-block w-8 h-px bg-paper/40 mr-3 align-middle" />
              Scroll to move through the day
            </Caption>
            <FrameCounter progress={index} total={FRAMES.length} />
          </motion.div>
        </div>

        {/* Until all 90 frames land */}
        <div className="absolute top-6 right-6 z-20 pointer-events-auto">
          <VerifyTag>Using {FRAME_COUNT} of 90 frames · drop remaining to /assets/aspen</VerifyTag>
        </div>
      </div>
    </section>
  );
}

function FramesStack({ progress }) {
  // Render each frame absolutely; show only the one matching the current index.
  return (
    <div className="absolute inset-0">
      {FRAMES.map((src, i) => (
        <Frame key={src} src={src} i={i} progress={progress} />
      ))}
    </div>
  );
}

function Frame({ src, i, progress }) {
  // Use motion value change to toggle opacity. For small counts we just show based on equality.
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
    <div className="font-serif text-paper/90 text-base md:text-lg tabular-nums">
      <motion.span>{label}</motion.span>
    </div>
  );
}
