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
        <SectionTag number="01 / 07" title="Priority One — The Sanctuary Leak" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: headline + short text */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start fade-in">
            <h2 className="font-serif font-light display-tight text-[9vw] sm:text-6xl lg:text-[5.2vw] leading-[1]">
              It is not a
              <br />
              <span className="italic">shingle problem.</span>
            </h2>
            <p className="mt-8 max-w-md text-body text-base leading-relaxed">
              Water is reaching the sanctuary during services.
              The visible cedar is the symptom. The system underneath is the cause.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <Stat value="30+" label="years on the roof" />
              <Stat value="N.E." label="steeple — primary ingress" />
              <Stat value="1" label="active leak, sanctuary side" />
              <Stat value="0" label="spot repairs that reset age" />
            </div>
          </div>

          {/* Right: annotated evidence */}
          <div className="lg:col-span-7 space-y-10">
            <Annotated
              image="/assets/proposal-support/christ-church/roof-rot.webp"
              number="A"
              title="Underlayment failure"
              description="Beneath the visible cedar, the membrane that keeps water out has broken down. Rot follows. This is not visible from the ground."
              testId="diagnosis-rot"
            />
            <Annotated
              image="/assets/photos/projects/christ-church/bell-tower-primary-leak.jpg"
              number="B"
              title="Bell tower / N.E. corner"
              description="Current evidence places the primary ingress at the N.E. corner of the steeple. Water is tracking down into the sanctuary from here."
              testId="diagnosis-bell-tower"
            />
            <Annotated
              image="/assets/photos/projects/christ-church/front-roofline-missing-shingles.jpg"
              number="C"
              title="Compromised field, south-facing"
              description="Shake loss, exposed fasteners, inconsistent coursing. The field is tired — not just at the leak."
              testId="diagnosis-field"
            />
          </div>
        </div>

        {/* Repair vs Replace plainspoken ledger */}
        <div className="mt-28 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-12">
            <SectionTag number="—" title="Repair vs. Replace, plainly" className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-rule">
              <Ledger
                title="Repair"
                tone="muted"
                notes={[
                  "Fixes the spot, not the system.",
                  "Spot shakes look obviously new against weathered cedar.",
                  "Does not reset the age of the roof or the underlayment beneath it.",
                  "At this age, repair is a bridge — not a destination.",
                ]}
                testId="ledger-repair"
              />
              <Ledger
                title="Replace"
                tone="ink"
                notes={[
                  "Addresses the underlayment, not just the surface.",
                  "Resets the roof&rsquo;s clock — decades, not years.",
                  "Lets us specify the right system for a church this beloved.",
                  "Opens a decision the board has not had to revisit in a generation.",
                ]}
                testId="ledger-replace"
              />
            </div>
            <Caption className="mt-4">
              We will continue to triage leaks during the decision window.
              This framing is intended to help the Board see the choice — not to pressure it.
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
      <div className="font-serif text-3xl md:text-4xl text-ink">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate">{label}</div>
    </div>
  );
}

function Annotated({ image, number, title, description, testId }) {
  return (
    <figure className="fade-in group" data-testid={testId}>
      <div className="relative overflow-hidden bg-ink/5 aspect-[16/10]">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.02]" />
        <div className="absolute top-5 left-5 flex items-center gap-3">
          <span className="bg-paper text-ink px-2.5 py-1 font-serif text-xs italic">{number}</span>
        </div>
      </div>
      <figcaption className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-10">
        <div className="sm:w-56 shrink-0">
          <div className="font-serif text-ink text-lg leading-snug">{title}</div>
        </div>
        <p className="text-sm text-body leading-relaxed max-w-2xl">{description}</p>
      </figcaption>
    </figure>
  );
}

function Ledger({ title, notes, tone = "muted", testId }) {
  const bg = tone === "ink" ? "bg-ink text-paper" : "bg-paper text-ink";
  return (
    <div className={`${bg} p-8 md:p-12 border-rule`} data-testid={testId}>
      <div className="flex items-baseline justify-between">
        <h3 className="font-serif text-3xl md:text-4xl">{title}</h3>
        <span className={`eyebrow ${tone === "ink" ? "text-paper/60" : "text-warm-gold"}`}>
          {tone === "ink" ? "Recommended" : "Consider"}
        </span>
      </div>
      <ul className="mt-6 space-y-4">
        {notes.map((n, i) => (
          <li key={i} className="flex gap-4">
            <span className={`font-serif italic text-sm ${tone === "ink" ? "text-paper/40" : "text-warm-gold"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: n }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
