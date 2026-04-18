import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

export default function CedarBrava() {
  return (
    <section
      id="cedar-brava"
      data-testid="section-cedar-brava"
      className="relative bg-paper py-28 md:py-40 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="03 / 07" title="Cedar vs. Synthetic" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 fade-in">
            <h2 className="font-serif font-light display-tight text-[11vw] sm:text-5xl lg:text-[5.5vw] leading-[0.95]">
              Today&rsquo;s cedar is a
              <br />
              <span className="italic">different material.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6 space-y-6 text-body leading-relaxed fade-in">
            <p className="text-lg md:text-xl">
              The roof you inherited came from old-growth cedar &mdash; slower
              grown, denser, cut from trees that modern mills rarely see.
              The stock we can actually buy in 2026 is thinner, softer, and
              ages faster. We have to be honest with the Board about that.
            </p>
            <p className="text-base">
              To get real life out of new cedar, you need premium grade, exacting
              installation, and an active maintenance program. It is expensive,
              it is vulnerable to fire, and it begins aging visibly within a
              few seasons. We will quote cedar if the Board asks. We will not
              pretend it is the same building we grew up admiring.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CedarCard
            n="I"
            title="The stock has changed"
            body="Old-growth density is largely gone. Commodity cedar splits, cups, and weathers faster than the roof you remember."
            testId="cedar-stock"
          />
          <CedarCard
            n="II"
            title="Maintenance is ongoing"
            body="Cleaning, treating, re-fastening. A new cedar roof is a long-term maintenance commitment, year after year."
            testId="cedar-maintenance"
          />
          <CedarCard
            n="III"
            title="Fire is a real concern"
            body="Even treated cedar is a harder story to tell about a campus of this scale, value, and public importance."
            testId="cedar-fire"
          />
        </div>

        <div className="mt-32 md:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 fade-in">
            <div className="eyebrow text-bronze">Why we chose Brava</div>
            <h3 className="mt-4 font-serif font-light display-tight text-[11vw] sm:text-5xl lg:text-[4.8vw] leading-[1]">
              The first synthetic we put our
              <span className="italic"> name on.</span>
            </h3>
            <p className="mt-6 max-w-xl text-body text-base leading-relaxed">
              We refused every synthetic in this category for years. Brava
              composite shake is the one that finally earned it. Molded from
              real cedar masters. Mineral-pigmented so the color runs through
              the shake, not on top of it. Class A fire assembly, Class 4
              impact rated. Made in Iowa with about 95% recycled content,
              and backed for fifty years. It reads like cedar from the street.
              It behaves like a roof built to outlast us.
            </p>
            <Caption className="mt-6">
              It is important to us that we only introduce a material to the
              Board that we would specify on our own homes. Brava is on that list.
            </Caption>
          </div>

          <div className="lg:col-span-5 fade-in">
            <div className="border-t border-ink/20 pt-6 space-y-3">
              <Spec label="Warranty" value="50-year limited" />
              <Spec label="Fire" value="Class A assembly" />
              <Spec label="Impact" value="Class 4 rated" />
              <Spec label="UV" value="Mineral pigmented &mdash; no fade" />
              <Spec label="Origin" value="Washington, Iowa &middot; USA" />
              <Spec label="Material" value="~95% recycled content" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CedarCard({ n, title, body, testId }) {
  return (
    <div data-testid={testId} className="border border-rule p-8 md:p-10 bg-paper-warm/40 fade-in">
      <span className="font-serif italic text-warm-gold text-sm">{n}</span>
      <div className="mt-4 font-serif text-2xl text-ink leading-snug">{title}</div>
      <p className="mt-3 text-sm text-body leading-relaxed">{body}</p>
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 pb-3">
      <span className="font-brand text-[11px] uppercase tracking-[0.22em] text-slate">{label}</span>
      <span
        className="font-serif text-ink text-base md:text-lg text-right"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}
