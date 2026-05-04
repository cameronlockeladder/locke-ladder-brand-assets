import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

const FACTS = [
  {
    label: "Class 4",
    sub: "Impact rated",
    note: "Highest hail-impact rating. The full Brava cedar shake line is Class 4.",
  },
  {
    label: "188+ MPH",
    sub: "Wind · 211 w/ screws",
    note: "Wind-uplift rated to 188 mph with nails; up to 211 mph with high-wind screw installation.",
  },
  {
    label: "Class A",
    sub: "Fire rating available",
    note: "Class A fire rating available at the assembly level with approved underlayments.",
  },
  {
    label: "50 years",
    sub: "Transferable warranty",
    note: "Brava cedar shake carries a 50-year transferable warranty per Brava&rsquo;s spec sheet.",
  },
  {
    label: "Recycled",
    sub: "Composite material",
    note: "Brava composite shake is made from recycled materials. Lower lifetime maintenance vs natural cedar.",
  },
];

export default function WhyBrava() {
  return (
    <section
      id="why-brava"
      data-testid="section-why-brava"
      className="relative bg-paper-warm py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="07 / 10" title="Why Brava is on the table" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="why-brava-headline"
            >
              Cedar look. <br />Different math.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-body text-lg leading-relaxed">
            <p>
              Brava is a synthetic composite shake. It looks like cedar
              because it is molded from real cedar masters. It performs
              like a system because it is rated like one.
            </p>
            <p className="font-serif italic text-slate">
              If this were ours, this is the roof system we would specify.
            </p>
          </div>
        </div>

        {/* Facts grid · 5 across at lg, with sub-bordered cells */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-b border-ink/15"
          data-testid="why-brava-facts"
        >
          {FACTS.map((f, i) => (
            <div
              key={f.label}
              className={`p-6 md:p-8 ${i !== FACTS.length - 1 ? "lg:border-r border-ink/15" : ""} ${i !== 0 ? "border-t lg:border-t-0 border-ink/15" : ""}`}
              data-testid={`why-brava-fact-${i}`}
            >
              <div className="font-display text-3xl md:text-4xl text-ink font-medium leading-none">
                {f.label}
              </div>
              <div className="mt-3 font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold">
                {f.sub}
              </div>
              <div
                className="mt-4 text-sm text-body leading-relaxed"
                dangerouslySetInnerHTML={{ __html: f.note }}
              />
            </div>
          ))}
        </div>

        {/* Brava on Mark's existing roof · same-class wood cedar · context bridge */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow text-slate">Why now</div>
            <h3 className="mt-4 font-serif italic font-light text-ink text-[6vw] sm:text-2xl lg:text-[2.4vw] leading-[1.2] max-w-xl">
              Wood cedar still has a place. <br />
              We are not against it.
            </h3>
            <p className="mt-6 text-body text-base md:text-lg leading-relaxed max-w-md">
              Certified Blue Label 3/4&quot; Heavies, installed correctly,
              maintained consistently, can run 30 years. We will install
              that if a homeowner wants it. We just do not pretend it is
              cheaper over a lifecycle than Brava.
            </p>
          </div>
          {/* Why Now · Eric's actual cedar shake aging in real time */}
          <div className="lg:col-span-6">
            <figure className="relative overflow-hidden bg-ink/5 aspect-[4/3]">
              <img
                src="/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-detail.webp"
                alt="404 N Vine St · existing wood cedar shake roof, aging across multiple gables"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
                <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
                  Eric&rsquo;s existing wood cedar &middot; aging cleanly, but aging
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        <Caption className="mt-10 text-slate/85">
          Sources: Brava Cedar Shake Spec Sheet (PDF) &middot; bravarooftile.com &middot; About page &middot; product page.
          Class 4 impact, 50-year transferable warranty, 188+ mph wind, Class A fire (available),
          composite shake from recycled materials. Pricing varies by property and location per Brava.
        </Caption>
      </div>
    </section>
  );
}
