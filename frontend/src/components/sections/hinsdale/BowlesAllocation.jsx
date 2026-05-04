import React from "react";
import { motion } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

/**
 * Stacked-allocation visual for Eric's $107,712.68 customer-facing total.
 * Each segment is sized proportionally to its share of total. No internal numbers.
 * Snow guards remain inside Full Copper Package per scope.
 */
const SEGMENTS = [
  { key: "system",     label: "Brava Shake Roofing System", sub: "36.4 SQ shake · tear-off · underlayment · accessories", amount: 80993.05, color: "bg-warm-gold" },
  { key: "copper",     label: "Full Copper Package",        sub: "Double W-valley (138 LF) · 496 ST9 copper snow guards", amount: 12592.08, color: "bg-bronze" },
  { key: "skylights",  label: "Skylights",                  sub: "7× Velux fixed + flashing kits",                       amount: 11509.47, color: "bg-slate" },
  { key: "accessories",label: "Accessories",                sub: "Edge metals · fasteners · sealants · sundries",         amount:  2618.08, color: "bg-ink/60" },
];
const TOTAL = 107712.68;

export default function BowlesAllocation({ number = "04 / 07" }) {
  return (
    <section
      id="allocation"
      data-testid="section-allocation"
      className="relative bg-paper py-24 md:py-32 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number={number} title="What this means here" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="allocation-headline"
            >
              $107,712.68, <br />where it goes.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="font-serif italic text-slate text-base md:text-lg leading-relaxed">
              Customer-facing total &middot; same scope the contract carries.
            </p>
          </div>
        </div>

        {/* STACKED ALLOCATION BAR · proportional fills, ~85vw wide */}
        <div className="mt-14" data-testid="allocation-bar">
          <div className="flex w-full h-14 md:h-16 border border-ink overflow-hidden">
            {SEGMENTS.map((s, i) => {
              const pct = (s.amount / TOTAL) * 100;
              return (
                <motion.div
                  key={s.key}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                  className={`${s.color} relative ${i !== SEGMENTS.length - 1 ? "border-r-2 border-paper" : ""}`}
                  data-testid={`alloc-seg-${s.key}`}
                  title={`${s.label} · ${pct.toFixed(1)}%`}
                />
              );
            })}
          </div>

          {/* 4-tick row · percentage only · sits beneath proportionally */}
          <div className="flex w-full mt-2" aria-hidden="true">
            {SEGMENTS.map((s, i) => {
              const pct = (s.amount / TOTAL) * 100;
              return (
                <div
                  key={s.key}
                  className={`${i !== SEGMENTS.length - 1 ? "border-r-2 border-rule" : ""} pr-2`}
                  style={{ width: `${pct}%` }}
                >
                  <div className="font-brand text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-slate tabular-nums">
                    {pct.toFixed(0)}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GROUP DETAIL · 4 EQUAL columns (no proportional crowding), each row matches a swatch on the bar */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-b border-rule"
          data-testid="allocation-groups"
        >
          {SEGMENTS.map((s, i) => (
            <div
              key={s.key}
              className={`p-6 md:p-7 ${i !== SEGMENTS.length - 1 ? "md:border-r border-rule" : ""} ${i !== 0 ? "border-t md:border-t-0 border-rule" : ""}`}
              data-testid={`group-${s.key}`}
            >
              <div className="flex items-center gap-3">
                <span className={`block w-3 h-3 ${s.color} ring-1 ring-ink/15`} aria-hidden="true" />
                <span className="font-brand text-[10px] uppercase tracking-[0.22em] text-slate">
                  {((s.amount / TOTAL) * 100).toFixed(0)}% of total
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg md:text-xl text-ink font-medium leading-snug">
                {s.label}
              </h3>
              <div className="mt-3 font-display text-2xl md:text-3xl tabular-nums text-ink font-medium">
                {fmt(s.amount)}
              </div>
              <div className="mt-3 text-xs md:text-sm text-body leading-snug">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* TOTAL ROW */}
        <div className="mt-10 flex items-baseline justify-between border-t-2 border-ink pt-5">
          <div className="font-brand text-[11px] uppercase tracking-[0.24em] text-slate">
            Estimate #4798 &middot; April 22, 2026 (draft) &middot; total
          </div>
          <div
            className="font-display text-3xl md:text-5xl tabular-nums text-ink font-medium"
            data-testid="allocation-total"
          >
            {fmt(TOTAL)}
          </div>
        </div>

        <Caption className="mt-6 text-slate/85">
          Customer-facing line totals only.
        </Caption>
      </div>
    </section>
  );
}

function fmt(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
