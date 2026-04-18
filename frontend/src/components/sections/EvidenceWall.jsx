import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SectionTag, Caption } from "@/components/primitives";

// Featured tiles come from our on-site survey + JobNimbus selects.
const FEATURED = [
  { src: "/assets/photos/projects/christ-church/jobnimbus/jn-001.webp", caption: "Steeple, north face" },
  { src: "/assets/photos/projects/christ-church/jobnimbus/jn-002.webp", caption: "Steeple, detail" },
  { src: "/assets/photos/projects/christ-church/jobnimbus/jn-003.webp", caption: "Cedar field, tired" },
  { src: "/assets/photos/projects/christ-church/jobnimbus/jn-004.webp", caption: "Sanctuary ridge" },
  { src: "/assets/photos/projects/christ-church/jobnimbus/jn-005.webp", caption: "Valley, south-facing" },
  { src: "/assets/photos/projects/christ-church/jobnimbus/jn-006.webp", caption: "Parapet transition" },
];

// Rail: remaining JobNimbus captures from the survey.
const RAIL = Array.from({ length: 94 }, (_, i) => {
  const idx = String(i + 7).padStart(3, "0");
  return `/assets/photos/projects/christ-church/jobnimbus/jn-${idx}.webp`;
});

export default function EvidenceWall() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const allSlides = [
    ...FEATURED.map((f) => ({ src: f.src, description: f.caption })),
    ...RAIL.map((src) => ({ src })),
  ];

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section
      id="evidence"
      data-testid="section-evidence"
      className="relative bg-ink text-paper py-28 md:py-36 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <SectionTag
              number="02 / 07"
              title="Field Evidence &mdash; 100 captures from our survey"
              className="[&_.eyebrow]:text-paper/70 [&_.font-serif]:text-paper/90"
            />
            <h2 className="mt-6 font-serif font-light display-tight text-[12vw] sm:text-5xl lg:text-[5vw] text-paper leading-[0.95] max-w-4xl">
              The whole field
              <br />
              <span className="italic">is tired.</span>
            </h2>
          </div>
          <p className="max-w-sm text-paper/70 text-base leading-relaxed">
            Six images we keep coming back to &mdash; plus the rest of what we
            documented on-site. Tap any image to inspect at full size.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {FEATURED.map((f, i) => {
            const className =
              i === 0
                ? "col-span-2 md:col-span-3 md:row-span-2 aspect-[4/5]"
                : i === 1
                ? "col-span-2 md:col-span-3 aspect-[16/10]"
                : i === 2
                ? "col-span-1 md:col-span-2 aspect-[4/5]"
                : i === 3
                ? "col-span-1 md:col-span-1 aspect-[4/5]"
                : i === 4
                ? "col-span-2 md:col-span-3 aspect-[16/10]"
                : "col-span-2 md:col-span-3 aspect-[16/10]";
            return (
              <button
                key={i}
                onClick={() => openAt(i)}
                data-testid={`evidence-featured-${i}`}
                className={`relative group overflow-hidden bg-paper/5 ${className}`}
              >
                <img
                  src={f.src}
                  alt={f.caption}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-paper">
                  <span className="font-serif italic text-sm">{f.caption}</span>
                  <span className="font-brand text-[10px] tracking-[0.22em] uppercase opacity-80 group-hover:opacity-100">
                    Enlarge &rarr;
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20">
          <div className="flex items-baseline justify-between mb-6">
            <div className="eyebrow text-paper/60">The rest of what we documented</div>
            <Caption className="text-paper/50">Scroll &rarr;</Caption>
          </div>
          <div
            data-testid="evidence-rail"
            className="rail-scroll no-scrollbar flex gap-3 md:gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:-mx-12 lg:px-12"
          >
            {RAIL.map((src, i) => (
              <button
                key={i}
                onClick={() => openAt(FEATURED.length + i)}
                data-testid={`evidence-rail-${i}`}
                className="relative shrink-0 h-48 md:h-64 aspect-[3/2] overflow-hidden group bg-paper/5"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={allSlides}
        styles={{ container: { background: "rgba(26,28,32,0.96)" } }}
        carousel={{ preload: 2 }}
        data-testid="evidence-lightbox"
      />
    </section>
  );
}
