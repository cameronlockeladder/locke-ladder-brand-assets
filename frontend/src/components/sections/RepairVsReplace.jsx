import React from "react";
import { SectionTag } from "@/components/primitives";

const REPAIR = [
  "Fixes the spot but does not address the core problem of compromised materials.",
  "New shakes from spot repairs stand out like a sore thumb for years.",
  "Does not fix the failing felt paper underlayment, leaving the Church exposed to additional leaks.",
  "Attempts to repair may create additional new problems due to roof condition.",
  "Roof problems go beyond the sanctuary leak. A repair is a temporary band aid, not a solution.",
];

const REPLACE = [
  "Addresses the entire system, not just the symptom.",
  "Opportunity for maintenance freedom.",
  "Reduced insurance premiums.",
  "Enhance exterior appearance.",
];

export default function RepairVsReplace() {
  return (
    <section
      id="repair-vs-replace"
      data-testid="section-repair-vs-replace"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="05 / 12" title="The choice" />

        <h2
          className="mt-8 font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.4vw] leading-[0.98] max-w-5xl"
          data-testid="repair-replace-headline"
        >
          Repair vs. Replace.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-0 border border-rule">
          <div
            className="bg-paper p-8 md:p-12 border-b md:border-b-0 md:border-r border-rule"
            data-testid="ledger-repair"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-3xl md:text-4xl text-ink font-medium">Repair</h3>
              <span className="eyebrow text-slate">Consider</span>
            </div>
            <ul className="mt-8 space-y-5">
              {REPAIR.map((n, i) => (
                <li key={i} className="flex gap-4" data-testid={`repair-bullet-${i}`}>
                  <span className="font-brand text-[11px] uppercase tracking-[0.2em] text-slate pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-body leading-relaxed">{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ink text-paper p-8 md:p-12" data-testid="ledger-replace">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-3xl md:text-4xl font-medium">Replace</h3>
              <span className="eyebrow text-ink/55">Our recommendation</span>
            </div>
            <ul className="mt-8 space-y-5">
              {REPLACE.map((n, i) => (
                <li key={i} className="flex gap-4" data-testid={`replace-bullet-${i}`}>
                  <span className="font-brand text-[11px] uppercase tracking-[0.2em] text-paper/40 pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
