import React from "react";
import { SectionTag } from "@/components/primitives";

export default function TwoHomes() {
  return (
    <section
      id="two-homes"
      data-testid="section-two-homes"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="02 / 10" title="The two homes" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2
              className="font-display display-tight text-[10vw] sm:text-5xl lg:text-[5vw] leading-[1]"
              data-testid="two-homes-headline"
            >
              Same week. <br />Different stage <br />of the same decision.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4 space-y-5 text-body text-lg leading-relaxed">
            <p>
              Two homes in the western suburbs. Both wood cedar. Both walked
              and droned by Locke &amp; Ladder in April 2026. One has a
              priced Brava scope on the table. The other has the field
              evidence and a scope still being finalized.
            </p>
            <p>
              We are showing both, side by side, on purpose. The point is
              not to push a number. The point is to make the homework
              transparent.
            </p>
          </div>
        </div>

        {/* Side-by-side property orientation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-testid="two-homes-grid">
          <PropertyCard
            tag="Eric Bowles"
            jobNum="Job #3640"
            address="404 N Vine St &middot; Hinsdale, IL 60521"
            type="Chicago Retail"
            status="Inspection Report Sent"
            scopeStatus="Estimate #4798 &middot; draft"
            scopeNumber="$107,712.68"
            scopeNote="Customer-facing total &middot; Brava Shake scope"
            poster="/assets/photos/projects/hinsdale-cedar/eric/eric-front.webp"
            posterAlt="Eric Bowles · 404 N Vine St · cedar shake home with stone chimney, April 2026"
            testId="property-eric"
          />
          <PropertyCard
            tag="Mark Lindahl"
            jobNum="Job #3684"
            address="903 Middleton &middot; Inverness, IL 60544"
            type="Chicago Insurance"
            status="Inspection Report Sent"
            scopeStatus="Scope &amp; pricing"
            scopeNumber="In review"
            scopeNote="99 photos in &middot; estimate pending final review"
            poster="/assets/photos/projects/hinsdale-cedar/mark/903-middleton-front.webp"
            posterAlt="Mark Lindahl · 903 Middleton · front elevation, April 2026"
            testId="property-mark"
          />
        </div>

        <p className="mt-10 max-w-3xl font-serif italic text-slate text-base md:text-lg leading-relaxed">
          &ldquo;The right answer here is not to pretend Mark has a number.
          The inspection is in. The photos are in. The next job is to turn
          field evidence into a scope that can survive scrutiny.&rdquo;
        </p>
      </div>
    </section>
  );
}

function PropertyCard({ tag, jobNum, address, type, status, scopeStatus, scopeNumber, scopeNote, poster, posterAlt, testId }) {
  return (
    <article
      data-testid={testId}
      className="relative group overflow-hidden bg-ink border border-ink/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={poster}
          alt={posterAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/15 pointer-events-none" />
        <div className="absolute top-5 left-5 inline-flex items-center gap-3 bg-paper/15 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper">{tag}</span>
        </div>
      </div>
      <div className="bg-ink text-paper p-6 md:p-8 space-y-4">
        <div>
          <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/55">{jobNum}</div>
          <div className="mt-2 font-display text-xl md:text-2xl text-paper font-medium leading-snug">
            <span dangerouslySetInnerHTML={{ __html: address }} />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/65">
          <span><span className="text-paper/45">Type</span> &middot; {type}</span>
          <span><span className="text-paper/45">Status</span> &middot; {status}</span>
        </div>
        <div className="pt-4 border-t border-paper/10">
          <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold/85">
            <span dangerouslySetInnerHTML={{ __html: scopeStatus }} />
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-display text-3xl md:text-4xl tabular-nums text-paper font-medium">
              {scopeNumber}
            </span>
          </div>
          <div className="mt-1 text-sm text-paper/55">
            <span dangerouslySetInnerHTML={{ __html: scopeNote }} />
          </div>
        </div>
      </div>
    </article>
  );
}
