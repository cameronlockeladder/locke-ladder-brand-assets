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
        <SectionTag number="03 / 07" title="The Honest Conversation About Cedar" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 fade-in">
            <h2 className="font-serif font-light display-tight text-[11vw] sm:text-5xl lg:text-[5.5vw] leading-[0.95]">
              New cedar is
              <br />
              <span className="italic">not old cedar.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6 space-y-6 text-body leading-relaxed fade-in">
            <p className="text-lg md:text-xl">
              The iconic look of this church came from old-growth cedar — slower grown, denser,
              cut in ways that modern mills rarely produce. What is available today is different.
            </p>
            <p className="text-base">
              To get real life out of new cedar, you need premium stock, exacting installation,
              and a committed maintenance program. It is expensive, it is vulnerable to fire, and
              it begins visibly aging within a few seasons. Honest stewardship means naming this.
            </p>
          </div>
        </div>

        {/* Three cedar facts as small editorial cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CedarCard
            n="I"
            title="Stock today is thinner."
            body="Old-growth density is largely gone. Commodity cedar splits, cups, and ages faster."
            testId="cedar-stock"
          />
          <CedarCard
            n="II"
            title="Maintenance is constant."
            body="Cleaning, treating, re-fastening. A new cedar roof is a long-term maintenance contract."
            testId="cedar-maintenance"
          />
          <CedarCard
            n="III"
            title="Fire is a real question."
            body="Even treated cedar is a harder story for a campus of this scale and value."
            testId="cedar-fire"
          />
        </div>

        {/* Pivot — reveal Brava */}
        <div className="mt-32 md:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 fade-in">
            <div className="eyebrow text-bronze">The Better Path</div>
            <h3 className="mt-4 font-serif font-light display-tight text-[11vw] sm:text-5xl lg:text-[4.8vw] leading-[1]">
              A cedar that
              <br />
              <span className="italic">acts like stone.</span>
            </h3>
            <p className="mt-6 max-w-xl text-body text-base leading-relaxed">
              Brava composite shake is the first synthetic we&rsquo;ve been willing to put our name on.
              Molded from real cedar masters. Mineral-pigmented, UV-stable, Class A fire assembly,
              impact-rated, and made in Iowa with recycled content. It reads like cedar from the
              street. It behaves like a roof built to outlast us.
            </p>
            <Caption className="mt-6">
              Locke &amp; Ladder rejected every previous synthetic category. Brava is the exception —
              on beauty, on behavior, and on stewardship.
            </Caption>
          </div>

          <div className="lg:col-span-5 fade-in">
            <div className="border-t border-ink/20 pt-6 space-y-3">
              <Spec label="Warranty" value="50-year limited" />
              <Spec label="Fire" value="Class A assembly" />
              <Spec label="Impact" value="Class 4 rated" />
              <Spec label="UV" value="Mineral pigmented — no fade" />
              <Spec label="Origin" value="Washington, Iowa — USA" />
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
      <span className="text-[11px] uppercase tracking-[0.22em] text-slate">{label}</span>
      <span className="font-serif text-ink text-base md:text-lg text-right">{value}</span>
    </div>
  );
}
