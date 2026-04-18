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
            <h2 className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.5vw] leading-[0.95]">
              Today&rsquo;s cedar is a different material.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6 space-y-6 leading-relaxed fade-in text-body">
            <p className="text-lg md:text-xl">
              The roof you inherited came from old-growth cedar. Slower grown,
              denser, cut from trees that modern mills rarely see. The stock we
              can actually buy in 2026 is thinner, softer, and ages faster. We
              have to be honest with the Board about that.
            </p>
            <p className="text-base">
              To get real life out of new cedar, you need premium grade,
              exacting installation, and an active maintenance program. It is
              expensive, it is vulnerable to fire, and it begins aging visibly
              within a few seasons. We will quote cedar if the Board asks. We
              will not pretend it is the same building we grew up admiring.
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

        {/* The Brava reveal paragraph follows in the next section (LaskeyReveal + gallery flow).
            This section closes with a transition line. */}
        <div className="mt-28 md:mt-32 max-w-3xl">
          <div className="eyebrow text-bronze">Why we chose Brava</div>
          <h3 className="mt-4 font-display display-tight text-[9vw] sm:text-4xl lg:text-[3.8vw] leading-[1.02]">
            The first synthetic we put our name on.
          </h3>
          <p className="mt-6 text-body text-base leading-relaxed">
            We refused every synthetic in this category for years. Brava
            composite shake is the one that finally earned it. Molded from real
            cedar masters. Mineral pigmented so the color runs through the
            shake, not on top of it. Class A fire assembly, Class 4 impact
            rated. Made in Iowa with about 95% recycled content, and backed for
            fifty years. Read on for a side by side from our Laskey project
            before you decide.
          </p>
          <Caption className="mt-6">
            It is important to us that we only introduce a material to the
            Board that we would specify on our own homes. Brava is on that list.
          </Caption>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-ink/15 pt-6">
            <Spec label="Warranty" value="50-year limited" />
            <Spec label="Fire" value="Class A assembly" />
            <Spec label="Impact" value="Class 4 rated" />
            <Spec label="UV" value="Mineral pigmented, no fade" />
            <Spec label="Origin" value="Washington, Iowa" />
            <Spec label="Material" value="~95% recycled content" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CedarCard({ n, title, body, testId }) {
  return (
    <div data-testid={testId} className="border border-rule p-8 md:p-10 bg-paper-warm/40 fade-in">
      <span className="font-brand text-warm-gold text-xs uppercase tracking-[0.22em]">{n}</span>
      <div className="mt-4 font-display text-2xl text-ink leading-snug font-medium">{title}</div>
      <p className="mt-3 text-sm text-body leading-relaxed">{body}</p>
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div className="flex flex-col gap-1 py-2">
      <span className="font-brand text-[10px] uppercase tracking-[0.22em] text-slate">{label}</span>
      <span className="text-ink text-base font-medium" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
