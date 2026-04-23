import React, { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SectionTag } from "@/components/primitives";

/* Featured · worst, most clear condition photos (visual cull) + hail hits.
   Captions adapted from real roof inspection-report language, not fabricated. */
const FEATURED = [
  {
    src: "/assets/photos/projects/christ-church/field-inspection-report/full-campus-aerial-wide.webp",
    label: "Full campus aerial",
  },
  {
    src: "/assets/photos/projects/christ-church/jobnimbus/jn-013.webp",
    label: "Wind-lifted shakes across the field",
  },
  {
    src: "/assets/photos/projects/christ-church/jobnimbus/jn-023.webp",
    label: "Impact indentations to soft metals",
  },
  {
    src: "/assets/photos/projects/christ-church/jobnimbus/jn-052.webp",
    label: "Moss / algae growth over roof facets",
  },
  {
    src: "/assets/photos/projects/christ-church/jobnimbus/jn-074.webp",
    label: "Previous leak damage at chimney",
  },
];

const RAIL_IDS = [
  "017","041","058","062","065","084","098","025","076","027",
  "029","064","032","042","044","037","026",
  "001","070","057","077","072","093","066","020","061","091",
  "008","050","024","053","060","096","069","007","068","097",
  "015","005",
];
const RAIL = RAIL_IDS.map((idx) => `/assets/photos/projects/christ-church/jobnimbus/jn-${idx}.webp`);
const MAGNIFIABLE = new Set(FEATURED.map((f) => f.src));

export default function FieldInspection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const allSlides = [
    ...FEATURED.map((f) => ({ src: f.src })),
    ...RAIL.map((src) => ({ src })),
  ];

  const openAt = (i) => { setIndex(i); setOpen(true); };

  return (
    <section
      id="field-inspection"
      data-testid="section-field-inspection"
      className="relative bg-ink text-paper py-28 md:py-36 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionTag
          number="04 / 14"
          title="From the survey"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />
        <h2
          className="mt-6 font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95] max-w-5xl"
          data-testid="field-inspection-headline"
        >
          Field Inspection Report.
        </h2>

        <div className="mt-6 hidden md:flex items-center gap-3 font-brand text-[10px] uppercase tracking-[0.24em] text-paper/50">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="14" height="14" />
            <line x1="20" y1="20" x2="17" y2="17" />
            <line x1="7" y1="10" x2="13" y2="10" />
            <line x1="10" y1="7" x2="10" y2="13" />
          </svg>
          Hover any featured photo to magnify. Click to enlarge.
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {FEATURED.map((f, i) => {
            const className =
              i === 0 ? "col-span-2 md:col-span-6 aspect-[16/7]"
              : i === 1 ? "col-span-1 md:col-span-3 aspect-[4/3]"
              : i === 2 ? "col-span-1 md:col-span-3 aspect-[4/3]"
              : i === 3 ? "col-span-1 md:col-span-3 aspect-[4/3]"
              : "col-span-1 md:col-span-3 aspect-[4/3]";
            return (
              <MagnifierTile
                key={i}
                src={f.src}
                label={f.label}
                className={className}
                testId={`field-featured-${i}`}
                onClick={() => openAt(i)}
              />
            );
          })}
        </div>

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
        render={{
          slide: ({ slide }) =>
            MAGNIFIABLE.has(slide.src) ? (
              <LightboxMagnifier src={slide.src} />
            ) : undefined,
        }}
      />
    </section>
  );
}

function MagnifierTile({ src, label, className, testId, onClick }) {
  const ref = useRef(null);
  const [lens, setLens] = useState(null);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLens({ x, y });
  };
  const onLeave = () => setLens(null);

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-testid={testId}
      className={`relative group overflow-hidden bg-paper/5 ${className}`}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70 group-hover:opacity-55 transition-opacity pointer-events-none" />

      {lens && (
        <div
          aria-hidden="true"
          data-testid={`${testId}-magnifier-lens`}
          className="hidden md:block pointer-events-none absolute ring-1 ring-paper/85 shadow-[0_8px_28px_-6px_rgba(0,0,0,0.65)]"
          style={{
            width: 240,
            height: 240,
            left: `calc(${lens.x}% - 120px)`,
            top: `calc(${lens.y}% - 120px)`,
            backgroundImage: `url(${src})`,
            backgroundSize: "500% 500%",
            backgroundPosition: `${lens.x}% ${lens.y}%`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-paper gap-3 pointer-events-none">
        <span className="font-brand text-[10px] tracking-[0.22em] uppercase bg-paper/90 text-ink px-2 py-[2px]">
          {label}
        </span>
        <span className="font-brand text-[10px] tracking-[0.22em] uppercase opacity-80 group-hover:opacity-100 shrink-0">
          Enlarge
        </span>
      </div>
    </button>
  );
}

function LightboxMagnifier({ src }) {
  const ref = useRef(null);
  const [lens, setLens] = useState(null);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setLens({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setLens(null)}
      className="relative w-full h-full flex items-center justify-center"
      data-testid="lightbox-magnifier-wrap"
    >
      <img
        src={src}
        alt=""
        className="max-w-full max-h-full object-contain select-none"
        draggable={false}
      />
      {lens && (
        <div
          aria-hidden="true"
          data-testid="lightbox-magnifier-lens"
          className="hidden md:block pointer-events-none absolute ring-2 ring-paper/90 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.75)]"
          style={{
            width: 300,
            height: 300,
            left: `calc(${lens.x}% - 150px)`,
            top: `calc(${lens.y}% - 150px)`,
            backgroundImage: `url(${src})`,
            backgroundSize: "500% 500%",
            backgroundPosition: `${lens.x}% ${lens.y}%`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      <div className="hidden md:block absolute top-4 left-4 font-brand text-[10px] uppercase tracking-[0.24em] text-paper/70 bg-ink/55 backdrop-blur-sm px-2 py-1 pointer-events-none">
        Move cursor to magnify &middot; 5&times;
      </div>
    </div>
  );
}
