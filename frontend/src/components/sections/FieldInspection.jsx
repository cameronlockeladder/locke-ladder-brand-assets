import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SectionTag } from "@/components/primitives";

// Featured hero tiles · 4 curated high-res inspection photos
const FEATURED = [
  {
    src: "/assets/photos/projects/christ-church/field-inspection-report/full-campus-aerial-wide.jpg",
    label: "Full campus aerial",
  },
  {
    src: "/assets/photos/projects/christ-church/field-inspection-report/bell-tower-roof-closeup.jpg",
    label: "Bell tower, roof closeup",
  },
  {
    src: "/assets/photos/projects/christ-church/field-inspection-report/dark-steeple-roof-closeup.jpg",
    label: "Steeple, NE leak zone",
  },
  {
    src: "/assets/photos/projects/christ-church/field-inspection-report/front-roofline-and-spire.jpg",
    label: "Front roofline & spire",
  },
];

// Curated JobNimbus rail · top-quality tiles only (culled from 100 by filesize)
const RAIL_IDS = [
  "017","041","058","062","065","084","098","025","076","027",
  "029","074","049","064","032","042","044","037","023","026",
  "001","070","057","077","072","093","066","020","061","091",
  "008","050","024","053","060","096","069","007","068","097",
  "015","005",
];
const RAIL = RAIL_IDS.map((idx) => `/assets/photos/projects/christ-church/jobnimbus/jn-${idx}.webp`);

export default function FieldInspection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const allSlides = [
    ...FEATURED.map((f) => ({ src: f.src })),
    ...RAIL.map((src) => ({ src })),
  ];

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section
      id="field-inspection"
      data-testid="section-field-inspection"
      className="relative bg-ink text-paper py-28 md:py-36 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionTag
          number="04 / 12"
          title="From the survey"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />
        <h2
          className="mt-6 font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95] max-w-5xl"
          data-testid="field-inspection-headline"
        >
          Field Inspection Report.
        </h2>

        {/* 4 featured tiles */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {FEATURED.map((f, i) => {
            const className =
              i === 0
                ? "col-span-2 md:col-span-4 md:row-span-2 aspect-[16/11]"
                : i === 1
                ? "col-span-1 md:col-span-2 aspect-[4/5]"
                : i === 2
                ? "col-span-1 md:col-span-2 aspect-[4/5]"
                : "col-span-2 md:col-span-4 aspect-[16/8]";
            return (
              <button
                key={i}
                onClick={() => openAt(i)}
                data-testid={`field-featured-${i}`}
                className={`relative group overflow-hidden bg-paper/5 ${className}`}
              >
                <img
                  src={f.src}
                  alt={f.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent opacity-70 group-hover:opacity-55 transition-opacity" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-paper gap-3">
                  <span className="font-brand text-[10px] tracking-[0.22em] uppercase bg-paper/90 text-ink px-2 py-[2px]">
                    {f.label}
                  </span>
                  <span className="font-brand text-[10px] tracking-[0.22em] uppercase opacity-80 group-hover:opacity-100 shrink-0">
                    Enlarge
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Curated JobNimbus rail · no captions */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-baseline justify-between mb-6">
            <div className="eyebrow text-paper/60">Site documentation</div>
            <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/40">Scroll</span>
          </div>
          <div
            data-testid="field-rail"
            className="rail-scroll no-scrollbar flex gap-3 md:gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:-mx-12 lg:px-12"
          >
            {RAIL.map((src, i) => (
              <button
                key={i}
                onClick={() => openAt(FEATURED.length + i)}
                data-testid={`field-rail-${i}`}
                className="relative shrink-0 h-48 md:h-64 aspect-[3/2] overflow-hidden group bg-paper/5"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/5 transition-colors" />
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
      />
    </section>
  );
}
