import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

const EVIDENCE = [
  { tag: "Inspection", value: "On-site walk", note: "April 28, 2026 · Joe DeBias" },
  { tag: "Drone", value: "75 frames", note: "DJI Mavic · full elevation set" },
  { tag: "JobNimbus photos", value: "99 photos", note: "uploaded · April 28, 2026" },
  { tag: "Estimate", value: "Pending", note: "field evidence in · scope being finalized" },
];

export default function MarkScope() {
  return (
    <section
      id="mark-scope"
      data-testid="section-mark-scope"
      className="relative bg-ink text-paper py-28 md:py-36 px-6 lg:px-12 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag
          number="06 / 10"
          title="Mark's scope is not priced yet"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98] text-paper"
              data-testid="mark-scope-headline"
            >
              Honest beats fast.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-paper/80 text-base md:text-lg leading-relaxed">
            <p>
              The right answer here is not to pretend Mark has a number.
              The inspection is in. The photos are in. The next job is to
              turn field evidence into a scope that can survive scrutiny.
            </p>
          </div>
        </div>

        {/* Hero photo · 903 Middleton front */}
        <figure className="mt-14 relative overflow-hidden border border-paper/10" data-testid="mark-front-figure">
          <img
            src="/assets/photos/projects/hinsdale-cedar/mark/903-middleton-front.webp"
            alt="903 Middleton · front elevation · existing wood cedar shake roof, April 2026"
            loading="lazy"
            className="w-full h-[clamp(420px,72vh,820px)] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
          <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
            <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
              903 Middleton &middot; Inverness &middot; Mark Lindahl
            </span>
          </figcaption>
        </figure>

        {/* Evidence row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-b border-paper/15" data-testid="mark-evidence">
          {EVIDENCE.map((e, i) => (
            <div
              key={e.tag}
              className={`p-6 md:p-8 ${i !== EVIDENCE.length - 1 ? "md:border-r border-paper/15" : ""} ${i >= 2 ? "border-t md:border-t-0 border-paper/15" : ""} ${i % 2 === 1 ? "border-l md:border-l-0 border-paper/15" : ""}`}
            >
              <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/55">{e.tag}</div>
              <div className="mt-3 font-display text-2xl md:text-3xl text-paper font-medium leading-none">
                {e.value}
              </div>
              <div className="mt-3 text-sm text-paper/55 leading-snug">{e.note}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl font-serif italic text-paper/75 text-base md:text-lg leading-relaxed">
          &ldquo;If this were ours, we would not put a number on it before
          we put eyes on every transition.&rdquo;
        </p>

        <Caption className="mt-8 text-paper/45">
          Job #3684 &middot; status: inspection report sent &middot; sales rep Joe DeBias
        </Caption>
      </div>
    </section>
  );
}
