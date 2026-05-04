import React from "react";
import { motion } from "framer-motion";
import Picture from "@/components/Picture";
import { SectionTag } from "@/components/primitives";

/**
 * Compact "What we saw" section — full-bleed homeowner aerial + 3-4 short callouts.
 * No contact sheet, no card grid.
 */
export default function WhatWeSaw({
  number,
  src,
  alt,
  captionAddress,
  captionDate,
  callouts,
  testId = "what-we-saw",
}) {
  return (
    <section
      id="what-we-saw"
      data-testid={`section-${testId}`}
      className="relative bg-ink text-paper border-t border-ink"
    >
      {/* Header band · short */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-12">
        <SectionTag
          number={number}
          title="What we saw"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />
        <h2
          className="mt-8 font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95] max-w-3xl"
          data-testid="what-we-saw-headline"
        >
          From the air, plainly.
        </h2>
      </div>

      {/* Full-bleed image */}
      <figure className="relative w-full overflow-hidden bg-ink">
        <Picture
          src={src}
          alt={alt}
          className="w-full h-[clamp(420px,80vh,920px)] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent pointer-events-none" />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            {captionAddress} &middot; {captionDate}
          </span>
        </figcaption>
      </figure>

      {/* Callouts · 3 or 4, sub-2-line each */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div
          className={`grid grid-cols-1 md:grid-cols-${callouts.length} gap-0 border-t border-b border-paper/15`}
          data-testid="what-we-saw-callouts"
        >
          {callouts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`p-6 md:p-8 ${i !== callouts.length - 1 ? "md:border-r border-paper/15" : ""} ${i !== 0 ? "border-t md:border-t-0 border-paper/15" : ""}`}
              data-testid={`callout-${i}`}
            >
              <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-xl md:text-2xl text-paper font-medium leading-snug">
                {c.title}
              </div>
              <div className="mt-3 text-paper/65 text-sm md:text-base leading-snug">
                {c.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
