import React from "react";
import { SectionTag } from "@/components/primitives";

const STEPS = [
  { n: "01", title: "Confirm scope", body: "Walk the line items together. Adjust copper, snow guard count, skylight options. Lock the customer-facing total." },
  { n: "02", title: "Review samples & color", body: "Pull Brava color samples in person on-site. See the shake against the brick at 10 a.m. and at 6 p.m." },
  { n: "03", title: "Confirm copper, skylights, snow guards", body: "Rocky Mountain snow guard diagram. Velux model and flashing kit confirmation. Copper W-valley spec." },
  { n: "04", title: "Schedule the install", body: "Book against weather and homeowner availability. Crew sequencing reviewed before start." },
  { n: "05", title: "Protect the property", body: "Landscaping covered. Driveway protected. Magnetic sweep daily. House returned to its prior state every evening." },
  { n: "06", title: "Install", body: "Tear off, deck inspection, underlayment, edge metals, copper, shake, accessories, snow retention. Daily photo log to JobNimbus." },
  { n: "07", title: "Final walk", body: "Walk every elevation with the homeowner. Punch list closed. Warranty paperwork delivered." },
];

export default function NextSteps() {
  return (
    <section
      id="next"
      data-testid="section-next"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="10 / 10" title="What happens next" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="next-headline"
            >
              The roadmap, in seven steps.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-body text-lg leading-relaxed">
            <p>
              No surprises, no high-pressure close. Each step has its own
              checkpoint &mdash; you can pause the work after any of them.
            </p>
          </div>
        </div>

        {/* Steps · vertical, numbered */}
        <ol className="mt-16 divide-y divide-rule border-y border-rule" data-testid="next-steps">
          {STEPS.map((s) => (
            <li
              key={s.n}
              data-testid={`step-${s.n}`}
              className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline"
            >
              <span className="col-span-2 md:col-span-1 font-brand text-xs uppercase tracking-[0.22em] text-warm-gold">
                {s.n}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-display text-xl md:text-2xl text-ink font-medium leading-snug">
                {s.title}
              </h3>
              <p className="col-span-12 md:col-span-7 text-body text-base md:text-lg leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        {/* CTA · restrained */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h3
              className="font-serif italic font-light text-ink text-[6vw] sm:text-3xl lg:text-[2.6vw] leading-[1.2] max-w-3xl"
              data-testid="next-cta-headline"
            >
              Ask Joe to walk you <br />through the scope.
            </h3>
            <p className="mt-5 max-w-2xl text-body text-base md:text-lg leading-relaxed">
              No deck. No slides. Just sit with the line items and the photos
              and ask anything you would ask of a contractor in your driveway.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-3">
            <div className="border-t border-ink/15 pt-4">
              <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-slate">Contact</div>
              <div className="mt-2 font-display text-xl text-ink font-medium">Joe DeBias</div>
              <div className="mt-1 text-sm text-slate">Sales rep · Locke &amp; Ladder</div>
            </div>
            <div className="border-t border-ink/15 pt-4">
              <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-slate">For</div>
              <div className="mt-2 font-display text-base text-ink">
                Eric Bowles &middot; 404 N Vine St, Hinsdale
              </div>
              <div className="mt-1 font-display text-base text-ink">
                Mark Lindahl &middot; 903 Middleton, Inverness
              </div>
            </div>
          </div>
        </div>

        <p className="mt-16 max-w-2xl font-serif italic text-slate text-base md:text-lg leading-relaxed">
          &ldquo;The details that move the number are the details that
          protect the roof.&rdquo;
        </p>
      </div>
    </section>
  );
}
