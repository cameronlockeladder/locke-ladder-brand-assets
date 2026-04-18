import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

export default function Diagnosis() {
  return (
    <section
      id="diagnosis"
      data-testid="section-diagnosis"
      className="relative bg-paper py-28 md:py-40 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="01 / 07" title="Priority One · The Sanctuary Leak" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start fade-in">
            <h2 className="font-display display-tight text-[9vw] sm:text-6xl lg:text-[5.2vw] leading-[1]">
              The roof is at the end of a long life.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-body">
              Water is making it into the sanctuary. The visible cedar is worn.
              What matters is what is happening underneath it, and that layer
              has been compromised for a while now.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <Stat value="30+" label="years on the roof" />
              <Stat value="N.E." label="steeple ingress" />
              <Stat value="1" label="active leak, sanctuary side" />
              <Stat value="0" label="spot repairs that reset age" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <Annotated
              image="/assets/photos/projects/christ-church/bell-tower-primary-leak.jpg"
              number="A"
              title="Bell tower, N.E. corner"
              description="Our survey places the primary ingress at the N.E. corner of the steeple. Water is tracking down into the sanctuary from here."
              testId="diagnosis-bell-tower"
            />
            <Annotated
              image="/assets/photos/projects/christ-church/front-roofline-missing-shingles.jpg"
              number="B"
              title="Wear across the south-facing field"
              description="Shake loss, exposed fasteners, inconsistent coursing. The wear is not limited to the leak area."
              testId="diagnosis-field"
            />
            <figure className="fade-in group" data-testid="diagnosis-rot">
              <div className="relative overflow-hidden bg-ink/5 aspect-[16/10]">
                <img
                  src="/assets/proposal-support/christ-church/roof-rot.webp"
                  alt="New cedar shingles patched next to weathered cedar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <span className="bg-paper text-ink px-2.5 py-1 font-brand text-xs uppercase tracking-[0.18em]">C</span>
                </div>
              </div>
              <figcaption className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-10">
                <div className="sm:w-56 shrink-0">
                  <div className="text-ink text-lg font-medium leading-snug">
                    Why spot repairs look bad
                  </div>
                </div>
                <p className="text-sm text-body leading-relaxed max-w-2xl">
                  This is what happens when you patch worn cedar with new cedar.
                  The new shakes sit bright and raw next to weathered wood, and
                  they stay that way for years. For a building the town
                  recognizes by its roofline, that contrast matters.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-28 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-12">
            <SectionTag number="" title="Repair vs. Replace, plainly" className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-rule">
              <Ledger
                title="Repair"
                tone="muted"
                tag="Consider"
                notes={[
                  "Fixes the spot. Leaves the system.",
                  "New shakes stand out visually against weathered cedar for years.",
                  "Does not reset the age of the underlayment underneath.",
                  "At this age, repair is a bridge. It is not a destination.",
                ]}
                testId="ledger-repair"
              />
              <Ledger
                title="Replace"
                tone="ink"
                tag="Our recommendation"
                notes={[
                  "Addresses the underlayment, not just the surface.",
                  "Resets the roof&rsquo;s clock: decades, not years.",
                  "Lets us specify the right system for a church this beloved.",
                  "Opens a decision the Board has not had to revisit in a generation.",
                ]}
                testId="ledger-replace"
              />
            </div>
            <Caption className="mt-4">
              We are triaging leaks during the decision window. This framing is
              here to help the Board see the choice, not to pressure it.
            </Caption>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="border-t border-ink/15 pt-3">
      <div className="font-display text-3xl md:text-4xl text-ink font-medium">{value}</div>
      <div className="mt-1 font-brand text-[11px] uppercase tracking-[0.18em] text-slate">{label}</div>
    </div>
  );
}

function Annotated({ image, number, title, description, testId }) {
  return (
    <figure className="fade-in group" data-testid={testId}>
      <div className="relative overflow-hidden bg-ink/5 aspect-[16/10]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.02]"
        />
        <div className="absolute top-5 left-5 flex items-center gap-3">
          <span className="bg-paper text-ink px-2.5 py-1 font-brand text-xs uppercase tracking-[0.18em]">{number}</span>
        </div>
      </div>
      <figcaption className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-10">
        <div className="sm:w-56 shrink-0">
          <div className="text-ink text-lg font-medium leading-snug">{title}</div>
        </div>
        <p className="text-sm text-body leading-relaxed max-w-2xl">{description}</p>
      </figcaption>
    </figure>
  );
}

function Ledger({ title, notes, tone = "muted", tag, testId }) {
  const bg = tone === "ink" ? "bg-ink text-paper" : "bg-paper text-ink";
  return (
    <div className={`${bg} p-8 md:p-12 border-rule`} data-testid={testId}>
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-3xl md:text-4xl font-medium">{title}</h3>
        <span className={`eyebrow ${tone === "ink" ? "text-paper/60" : "text-warm-gold"}`}>{tag}</span>
      </div>
      <ul className="mt-6 space-y-4">
        {notes.map((n, i) => (
          <li key={i} className="flex gap-4">
            <span className={`font-brand text-xs uppercase tracking-[0.2em] ${tone === "ink" ? "text-paper/40" : "text-warm-gold"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: n }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
