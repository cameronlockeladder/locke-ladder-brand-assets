import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

// Customer-facing line items only · no internal cost / margin / profit
const SECTIONS = [
  {
    title: "Brava Shake roofing system",
    total: 80993.05,
    items: [
      { name: "Brava Multi Width Synthetic Cedar Shake", spec: "36.4 SQ", line: 59420.09 },
      { name: "Tear off · existing wood shake", spec: "33 SQ", line: 6906.90 },
      { name: "Top Shield synthetic underlayment", spec: "full coverage", line: null },
      { name: "Standard drip edge & gutter apron", spec: "perimeter", line: null },
      { name: "Roof-to-wall trim board", spec: "as required", line: null },
      { name: "Ultimate pipe boots, nails, sealant", spec: "all penetrations", line: null },
      { name: "Two dumpster loads", spec: "tear-off haul-away", line: null },
    ],
  },
  {
    title: "Full copper package",
    total: 12592.08,
    items: [
      { name: "Copper Double W-Valley", spec: "138 LF", line: 5658.0 },
      { name: "R&R copper step flashing", spec: "wall transitions", line: null },
      { name: "Custom-fab copper edge metals", spec: "as required", line: null },
    ],
  },
  {
    title: "Skylights",
    total: 11509.47,
    items: [
      { name: "Velux fixed skylights", spec: "7 count", line: 9993.41 },
      { name: "Velux flashing kits", spec: "7 count", line: 1516.06 },
    ],
  },
  {
    title: "Accessories",
    total: 2618.08,
    items: [
      { name: "ST9 copper snow guards", spec: "496 count", line: 6934.08, note: "diagram and count sent to Rocky Mountain · April 22, 2026" },
    ],
  },
];

const TOTAL = 107712.68;

export default function EricScope() {
  return (
    <section
      id="eric-scope"
      data-testid="section-eric-scope"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="05 / 10" title="Eric's scope, plainly" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="eric-scope-headline"
            >
              What $107,712.68 <br />actually buys.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-body text-lg leading-relaxed">
            <p>
              Customer-facing line items only. No internal cost, no margin,
              no profit. This is the same scope the contract carries.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Scope groups · 8 cols */}
          <div className="lg:col-span-8 space-y-10" data-testid="eric-scope-groups">
            {SECTIONS.map((s) => (
              <ScopeGroup key={s.title} group={s} />
            ))}
          </div>

          {/* Sticky sidebar total · 4 cols */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 bg-ink text-paper p-6 md:p-8 border border-ink/10">
              <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/55">
                Estimate #4798
              </div>
              <div className="mt-2 font-display text-lg text-paper">
                404 N Vine St &middot; Hinsdale, IL
              </div>
              <div className="mt-8 pt-6 border-t border-paper/15">
                <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold/85">
                  Customer-facing total
                </div>
                <div
                  className="mt-3 font-display text-4xl md:text-5xl tabular-nums text-paper font-medium"
                  data-testid="eric-scope-total"
                >
                  {fmt(TOTAL)}
                </div>
                <div className="mt-3 text-sm text-paper/55">
                  Draft &middot; April 22, 2026 &middot; sales rep Joe DeBias
                </div>
              </div>

              <ul className="mt-8 pt-6 border-t border-paper/15 space-y-3 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.title} className="flex items-baseline justify-between gap-4">
                    <span className="text-paper/75">{s.title}</span>
                    <span className="font-display tabular-nums text-paper">{fmt(s.total)}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 pt-6 border-t border-paper/15 text-xs leading-relaxed text-paper/55">
                Internal cost, margin, and operating numbers are deliberately
                excluded from this view.
              </p>
            </div>
          </aside>
        </div>

        <Caption className="mt-10 text-slate/85">
          Source: JobNimbus Estimate #4798 &middot; April 22, 2026 (draft).
        </Caption>
      </div>
    </section>
  );
}

function ScopeGroup({ group }) {
  return (
    <div data-testid={`scope-group-${group.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "")}`}>
      <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-ink/15">
        <h3 className="font-display text-2xl md:text-3xl text-ink font-medium">{group.title}</h3>
        <span className="font-display text-xl md:text-2xl tabular-nums text-ink font-medium shrink-0">
          {fmt(group.total)}
        </span>
      </div>
      <ul className="mt-4 divide-y divide-ink/10">
        {group.items.map((it) => (
          <li
            key={it.name}
            className="grid grid-cols-12 gap-4 py-3 text-sm md:text-base items-baseline"
          >
            <div className="col-span-12 md:col-span-6 text-ink leading-snug">
              {it.name}
              {it.note && (
                <div className="mt-1 text-xs text-slate italic">{it.note}</div>
              )}
            </div>
            <div className="col-span-7 md:col-span-3 text-slate text-xs md:text-sm">{it.spec}</div>
            <div className="col-span-5 md:col-span-3 text-right font-display tabular-nums text-ink/85">
              {it.line ? fmt(it.line) : <span className="text-slate text-xs">included</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function fmt(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
