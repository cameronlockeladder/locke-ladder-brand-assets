import React from "react";
import { motion } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

// Eric's customer-facing scope drivers from estimate #4798
const DRIVERS = [
  { key: "system", label: "Brava Shake roofing system", amount: 80993.05, note: "Material, install, underlayment, drip edge, accessories" },
  { key: "copper", label: "Full copper package", amount: 12592.08, note: "Double W-valleys (138 LF), step flashing, custom edge metals" },
  { key: "skylights", label: "Skylights", amount: 11509.47, note: "7× Velux fixed + flashing kits" },
  { key: "accessories", label: "Snow guards & accessories", amount: 2618.08, note: "ST9 copper snow guards · 496 count" },
];
const TOTAL = 107712.68;
const MAX = Math.max(...DRIVERS.map((d) => d.amount));

export default function PerSquareMyth() {
  return (
    <section
      id="per-square"
      data-testid="section-per-square"
      className="relative bg-paper-warm py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="04 / 10" title="What drives the price" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="per-square-headline"
            >
              Per-square pricing <br />gets misleading quickly.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4 space-y-4 text-body text-lg leading-relaxed">
            <p>
              Brava material per square is a small part of a Brava roof.
              On Eric&rsquo;s estimate, four drivers move the number.
              The shake itself is one of them.
            </p>
            <p className="font-serif italic text-slate">
              The details that move the number are the details that
              protect the roof.
            </p>
          </div>
        </div>

        {/* Driver bars */}
        <div className="mt-16" data-testid="driver-bars">
          <div className="space-y-5">
            {DRIVERS.map((d, i) => {
              const pct = (d.amount / MAX) * 100;
              const totalPct = ((d.amount / TOTAL) * 100).toFixed(0);
              return (
                <motion.div
                  key={d.key}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="grid grid-cols-12 gap-4 md:gap-6 items-center"
                  data-testid={`driver-${d.key}`}
                >
                  <div className="col-span-12 md:col-span-4 pr-2">
                    <div className="font-display text-base md:text-lg font-medium text-ink leading-snug">
                      {d.label}
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-slate">{d.note}</div>
                  </div>
                  <div className="col-span-9 md:col-span-6 relative h-9 md:h-11 bg-paper border border-rule overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                      className={`absolute inset-y-0 left-0 ${i === 0 ? "bg-warm-gold" : "bg-ink/65"}`}
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center font-brand text-[10px] uppercase tracking-[0.18em] text-ink/55 tabular-nums">
                      {totalPct}% of total
                    </span>
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right font-display text-base md:text-xl tabular-nums text-ink font-medium">
                    {fmt(d.amount)}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Total bar */}
          <div className="mt-8 pt-6 border-t border-ink/15 flex items-baseline justify-between">
            <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-slate">
              Estimate #4798 &middot; customer-facing total
            </div>
            <div
              className="font-display text-3xl md:text-5xl tabular-nums text-ink font-medium"
              data-testid="per-square-total"
            >
              {fmt(TOTAL)}
            </div>
          </div>
        </div>

        {/* Steep / access secondary driver call-out */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SecondaryDriver
            label="10/12 – 12/12 steep"
            note="Standard steep roof line item. Real labor, not a markup."
          />
          <SecondaryDriver
            label="Sections > 12/12"
            note="Triggers high-pitch line on every estimate this complex."
          />
          <SecondaryDriver
            label="Two-story roof access"
            note="Stage, ladder, harness. Counted, not assumed."
          />
        </div>

        <Caption className="mt-10 text-slate/85">
          Source: JobNimbus Estimate #4798 &middot; Eric Bowles &middot; April 22, 2026 (draft).
          Customer-facing line totals only. No internal cost or margin shown.
        </Caption>
      </div>
    </section>
  );
}

function SecondaryDriver({ label, note }) {
  return (
    <div className="border-t border-ink/15 pt-4">
      <div className="font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold">Access driver</div>
      <div className="mt-2 font-display text-lg md:text-xl text-ink font-medium leading-snug">{label}</div>
      <div className="mt-2 text-sm text-body leading-relaxed">{note}</div>
    </div>
  );
}

function fmt(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
