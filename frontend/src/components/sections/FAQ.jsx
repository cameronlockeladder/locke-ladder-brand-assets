import React, { useState } from "react";
import { SectionTag } from "@/components/primitives";

const ITEMS = [
  {
    q: "What exactly is Brava, and why now?",
    a: "Brava is a composite shake molded from real cedar masters and pigmented with minerals — the same pigment family that has held color in ancient murals for thousands of years. Locke & Ladder refused every synthetic in this category for years. Brava earned the endorsement through Class 4 impact rating, about 95% recycled content, and real-world field performance on homes we installed nearly a decade ago that still satisfy their owners today.",
  },
  {
    q: "Why replace the roof instead of repair the leak?",
    a: "Repairs fix the symptom. The felt underlayment beneath the cedar is at end of life — any spot repair leaves that layer compromised. New cedar shakes stand out against aged wood for years, and long-term leaks threaten mold, framing, and the sanctuary interior. A full system replacement addresses the root cause once, not in pieces.",
  },
  {
    q: "Will congregation services or events be disrupted?",
    a: "No. The installation is sequenced around the church calendar. Noisy phases are coordinated with leadership; the campus is returned to Sunday-ready condition every evening; crews work around weddings, funerals, and special services, not through them.",
  },
  {
    q: "Why Brava specifically for a church of this scale and visibility?",
    a: "It reads as cedar in every light, without cedar's lifetime of maintenance and expense. It holds color under sun and storm, stands up to Illinois hail, and carries a 50-year warranty backed by a manufacturer still in Washington, Iowa. It lets the Board make one decision that serves the next two generations of members.",
  },
  {
    q: "When does this conversation move from self-education to planning?",
    a: "When the Board is ready. Jon Strand will walk through scope, sequencing, and specifics as a conversation — not a pitch. This proposal exists so each member arrives at that conversation already informed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="section-faq"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="13 / 14" title="Questions" />

        <div className="mt-16 border-t border-ink/15" data-testid="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                data-testid={`faq-item-${i}`}
                className="border-b border-ink/15"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  data-testid={`faq-toggle-${i}`}
                  className="w-full flex items-start gap-6 md:gap-10 py-6 md:py-8 text-left group hover:bg-paper-warm/70 transition-colors px-2 -mx-2"
                >
                  <span className="font-brand text-[11px] uppercase tracking-[0.24em] text-slate w-10 md:w-14 pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif text-xl md:text-3xl text-ink leading-snug font-light">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 mt-1 w-9 h-9 md:w-10 md:h-10 rounded-full border border-ink/25 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-ink text-paper border-ink" : "text-ink/70 group-hover:text-ink group-hover:border-ink/50"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  data-testid={`faq-answer-${i}`}
                >
                  <div className="pt-2 pb-8 md:pb-10 pl-16 md:pl-[88px] pr-4 md:pr-16">
                    <p className="text-body text-base md:text-lg leading-relaxed max-w-3xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
