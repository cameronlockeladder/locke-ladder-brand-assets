import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

// Scattered team photos. No captions. No grid. They animate up as you scroll.
const TEAM_IMAGES = [
  "/assets/photos/team/team-photo.webp",
  "/assets/photos/team/extras/collage-people-1.jpg",
  "/assets/photos/team/crew-measure.webp",
  "/assets/photos/team/extras/collage-people-5.jpg",
  "/assets/photos/team/roofers-de-sol.webp",
  "/assets/photos/team/truck-bw.webp",
  "/assets/photos/team/crew-window-install.webp",
  "/assets/photos/team/crew-siding-install.webp",
  "/assets/photos/team/extras/travis-in-ll-truck-gif-6.jpg",
  "/assets/photos/team/crew-window-install-jons-house.webp",
  "/assets/photos/team/trucks-irving.webp",
  "/assets/photos/team/extras/examples-messmer-13.jpg",
  "/assets/photos/team/window-install-house.webp",
  "/assets/photos/team/extras/bitners-metal-during-4.jpg",
  "/assets/photos/team/extras/bitners-metal-during-9.jpg",
  "/assets/photos/team/extras/bitners-metal-during-11.jpg",
  "/assets/photos/team/extras/bitners-metal-during-13-1.jpg",
  "/assets/photos/team/extras/team-photo.jpg",
];

// Hand-picked placements. Each tile has its own position, size, rotation, and
// parallax speed to create a scattered, collage feel. Positions are percentages
// of the canvas area (2x viewport tall) so they distribute naturally.
const LAYOUT = [
  { top: "6%",  left: "4%",  width: "28vw", rotate: -3.2, z: 2 },
  { top: "2%",  left: "38%", width: "20vw", rotate: 2.1,  z: 3 },
  { top: "12%", left: "66%", width: "26vw", rotate: -1.4, z: 2 },
  { top: "22%", left: "12%", width: "18vw", rotate: 3.8,  z: 3 },
  { top: "26%", left: "46%", width: "22vw", rotate: -2.8, z: 1 },
  { top: "30%", left: "74%", width: "18vw", rotate: 2.4,  z: 3 },
  { top: "40%", left: "4%",  width: "22vw", rotate: 1.6,  z: 2 },
  { top: "42%", left: "32%", width: "26vw", rotate: -3.4, z: 3 },
  { top: "46%", left: "66%", width: "20vw", rotate: 2.0,  z: 2 },
  { top: "56%", left: "16%", width: "20vw", rotate: -1.9, z: 2 },
  { top: "60%", left: "44%", width: "24vw", rotate: 3.1,  z: 3 },
  { top: "62%", left: "72%", width: "18vw", rotate: -2.6, z: 1 },
  { top: "72%", left: "6%",  width: "18vw", rotate: 2.9,  z: 2 },
  { top: "74%", left: "30%", width: "22vw", rotate: -1.2, z: 3 },
  { top: "76%", left: "58%", width: "20vw", rotate: 2.2,  z: 2 },
  { top: "86%", left: "20%", width: "24vw", rotate: -3.0, z: 3 },
  { top: "88%", left: "52%", width: "22vw", rotate: 1.8,  z: 2 },
  { top: "92%", left: "78%", width: "16vw", rotate: -2.4, z: 1 },
];

export default function Team() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="team"
      data-testid="section-team"
      ref={ref}
      className="relative bg-paper pt-28 md:pt-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="06 / 07" title="Relationship" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.2vw] leading-[0.98]">
              We came here for a long relationship.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-body">
              The steeple first. Then the sanctuary. Then the mansard when its
              time comes, and the decades of small, uninteresting, essential
              decisions in between. To us, that is the work. Not a single bid,
              won once, then gone.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border-t border-ink/15 pt-6 space-y-5">
              <Line k="Accountable lead" v="Jon Strand, Founder" sub="Pastor&rsquo;s son. Art student. Builder." />
              <Line k="Metal shop" v="In-house" sub="We fabricate our own. We don&rsquo;t sub it out." />
              <Line k="Founding principle" v="Say no to the wrong product" sub="The list of materials we refuse is long." />
              <Line k="Long game" v="Roofing, siding, windows, gutters" sub="Trusted on the next project, not just this one." />
            </div>
          </div>
        </div>

        <div className="mt-16 mb-10 eyebrow text-warm-gold">How we like to work</div>
      </div>

      {/* Scatter canvas. 2x tall so we have room to stagger and parallax. */}
      <div className="relative w-full" style={{ height: "200vh" }} data-testid="team-scatter">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {TEAM_IMAGES.map((src, i) => (
            <ScatterTile
              key={src + i}
              src={src}
              index={i}
              layout={LAYOUT[i % LAYOUT.length]}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <Caption className="mt-10 pb-28 max-w-2xl">
          Same team every morning. Chicagoland based. Trained on the metals a
          building like this actually needs.
        </Caption>
      </div>
    </section>
  );
}

function ScatterTile({ src, index, layout, progress }) {
  // Each tile arrives from below with its own stagger, then parallaxes.
  // Entry window lives roughly between 0 and 0.6 of section progress.
  const stagger = (index % 6) * 0.02;
  const inStart = 0.05 + stagger;
  const inEnd = inStart + 0.18;

  const y = useTransform(
    progress,
    [0, inStart, inEnd, 1],
    [120, 80, 0, -60 - (index % 5) * 12]
  );
  const opacity = useTransform(progress, [0, inStart, inEnd, 0.85, 1], [0, 0, 1, 1, 0.85]);
  const scale = useTransform(progress, [inStart, inEnd], [0.88, 1]);

  return (
    <motion.figure
      data-testid={`team-image-${index}`}
      className="absolute will-change-transform shadow-[0_18px_60px_-20px_rgba(26,28,32,0.35)]"
      style={{
        top: layout.top,
        left: layout.left,
        width: layout.width,
        rotate: `${layout.rotate}deg`,
        zIndex: layout.z,
        y,
        opacity,
        scale,
      }}
    >
      <div className="relative overflow-hidden bg-ink/5 aspect-[4/5]">
        <img
          src={src}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </motion.figure>
  );
}

function Line({ k, v, sub }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-ink/10 pb-5">
      <div>
        <div className="text-ink text-base md:text-lg font-medium" dangerouslySetInnerHTML={{ __html: v }} />
        {sub && <div className="text-xs text-slate mt-0.5" dangerouslySetInnerHTML={{ __html: sub }} />}
      </div>
      <div className="font-brand text-[11px] uppercase tracking-[0.22em] text-slate sm:text-right">{k}</div>
    </div>
  );
}
