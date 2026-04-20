import React from "react";
import { SectionTag } from "@/components/primitives";

export default function TodaysCedar() {
  return (
    <section
      id="todays-cedar"
      data-testid="section-todays-cedar"
      className="relative bg-paper-warm py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="06 / 12" title="Materials" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.4vw] leading-[0.98]"
              data-testid="todays-cedar-headline"
            >
              Today&rsquo;s Cedar.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4 space-y-6 text-body leading-relaxed">
            <p className="text-lg md:text-xl" data-testid="todays-cedar-body-1">
              Most cedar on the market is cheap, rapid-growth wood. Its large
              cellular structure readily absorbs moisture. It is prone to hail
              damage and fires, and forces a lifetime of maintenance, expense,
              and headache. We believe roofs should be enjoyed, not toiled over.
              The stakes of getting the roof material correct are higher than
              ever. Roofing costs have doubled every 10 years for the last 3
              decades
              <span className="ml-1 font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold align-middle">
                [VERIFY]
              </span>
              . Getting the wrong roof could mean you&rsquo;re paying 3 to 4 times
              the price by the time you realize the mistake.
            </p>
            <p className="text-base md:text-lg" data-testid="todays-cedar-body-2">
              We love the beauty, warmth, and aesthetic of cedar. The only
              cedar to consider is Certified Blue Label 3/4&quot; Heavies
              <span className="ml-1 font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold align-middle">
                [VERIFY terminology]
              </span>
              . These might get you 30&ndash;35 years if consistent upkeep is
              performed. While we can install Certi-label shakes, they are
              expensive to install correctly. They are expensive to maintain.
              And they look very aged after just a few years. We believe 30+
              years is not enough for a roof. Especially in light of other
              options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
