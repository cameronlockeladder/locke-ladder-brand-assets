import React from "react";
import { motion } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

/**
 * Compact Brava education band:
 *   - Spec strip (5 cells)
 *   - Brava-vs-wood compact comparison (no paragraphs)
 *   - Source-style caption
 *
 * Replaces the previous BravaEducation that had paragraph copy.
 */
const SPECS = [
  { label: "Class 4", sub: "Impact rated" },
  { label: "188+ MPH", sub: "Wind · 211 w/ screws" },
  { label: "Class A", sub: "Fire option" },
  { label: "50 yrs", sub: "Transferable warranty" },
  { label: "Composite", sub: "Recycled material" },
];

const ROWS = [
  { label: "Lifespan",       wood: "15–20 yrs (avg)",                            brava: "50-yr transferable" },
  { label: "Maintenance",    wood: "ongoing · moss · split-shake replacement",    brava: "low · no replacement cycle within warranty" },
  { label: "Hail / impact",  wood: "splits at field-impact",                      brava: "Class 4 · highest hail rating" },
  { label: "Wind",           wood: "varies · prone to lift",                      brava: "188 mph nails / 211 mph screws" },
  { label: "Fire",           wood: "wood is wood",                                brava: "Class A available at the assembly" },
  { label: "Color",          wood: "ages aggressively in 2–3 yrs",                brava: "mineral pigment runs through the shake" },
];

export default function BravaStrip({ number = "03 / 07" }) {
  return (
    <section
      id="why-brava"
      data-testid="section-why-brava"
      className="relative bg-paper-warm py-24 md:py-32 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number={number} title="Why Brava is on the table" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="why-brava-headline"
            >
              Cedar look. <br />Different math.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="font-serif italic text-slate text-base md:text-lg leading-relaxed">
              If this were ours, this is the roof system we would specify.
            </p>
          </div>
        </div>

        {/* SPEC STRIP · 5 cells, no paragraphs */}
        <div
          className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-b border-ink/15"
          data-testid="brava-spec-strip"
        >
          {SPECS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`p-6 md:p-7 ${i !== SPECS.length - 1 ? "md:border-r border-ink/15" : ""} ${i % 2 === 1 ? "border-l md:border-l-0 border-ink/15" : ""} ${i >= 2 ? "border-t md:border-t-0 border-ink/15" : ""}`}
              data-testid={`spec-${i}`}
            >
              <div className="font-display text-3xl md:text-4xl text-ink font-medium leading-none">{s.label}</div>
              <div className="mt-3 font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* COMPARISON GRID · 6 short rows · no paragraphs */}
        <div className="mt-16">
          <div className="grid grid-cols-12 gap-4 md:gap-6 pb-3 border-b border-ink/15">
            <div className="col-span-3 md:col-span-3 font-brand text-[10px] uppercase tracking-[0.22em] text-slate">
              Property
            </div>
            <div className="col-span-4 md:col-span-4 font-brand text-[10px] uppercase tracking-[0.22em] text-bronze">
              Wood cedar shake
            </div>
            <div className="col-span-5 md:col-span-5 font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold">
              Brava composite cedar shake
            </div>
          </div>
          <ul className="divide-y divide-ink/10" data-testid="brava-vs-wood">
            {ROWS.map((r) => (
              <li key={r.label} className="grid grid-cols-12 gap-4 md:gap-6 py-4 items-baseline text-sm md:text-base">
                <div className="col-span-12 md:col-span-3 font-display text-ink font-medium leading-snug">
                  {r.label}
                </div>
                <div className="col-span-6 md:col-span-4 text-body leading-snug">{r.wood}</div>
                <div className="col-span-6 md:col-span-5 text-ink leading-snug">{r.brava}</div>
              </li>
            ))}
          </ul>
        </div>

        <Caption className="mt-8 text-slate/85" data-testid="brava-sources">
          Sources: Brava Cedar Shake Spec Sheet (PDF) &middot; bravarooftile.com
          About page &middot; Brava Cedar Shake page. Brava notes that pricing
          varies by property and location.
        </Caption>
      </div>
    </section>
  );
}
