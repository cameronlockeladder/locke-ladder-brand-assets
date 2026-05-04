import React from "react";
import { SectionTag } from "@/components/primitives";

export default function NextStepCompact({ number = "07 / 07", clientLine }) {
  return (
    <section
      id="next"
      data-testid="section-next"
      className="relative bg-paper py-24 md:py-32 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number={number} title="Next step" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="next-headline"
            >
              Sit with the scope <br />and the photos.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="font-serif italic text-slate text-base md:text-lg leading-relaxed">
              Ask Joe to walk you through the line items. No deck, no slides.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-b border-ink/15">
          <div className="p-6 md:p-8 md:border-r border-ink/15">
            <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-slate">Contact</div>
            <div className="mt-3 font-display text-2xl md:text-3xl text-ink font-medium">Joe DeBias</div>
            <div className="mt-1 text-sm text-slate">Locke &amp; Ladder &middot; sales rep</div>
          </div>
          <div className="p-6 md:p-8 border-t md:border-t-0 border-ink/15">
            <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-slate">For</div>
            <div className="mt-3 font-display text-base md:text-lg text-ink leading-snug">{clientLine}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
