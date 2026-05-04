import React from "react";
import { motion } from "framer-motion";
import Picture from "@/components/Picture";

/**
 * Brava education + Brava-vs-wood-cedar.
 * Used on both Bowles and Lindahl pages with optional `tone` prop:
 *  - "paper" (default): light section
 *  - "ink": dark section
 */
export default function BravaEducation({ tone = "paper", number = "07 / 10", title = "Why Brava is on the table" }) {
  const dark = tone === "ink";
  return (
    <>
      {/* WHAT IS BRAVA · plainspoken */}
      <section
        id="why-brava"
        data-testid="section-why-brava"
        className={`relative ${dark ? "bg-ink text-paper" : "bg-paper-warm"} py-28 md:py-36 px-6 lg:px-12 border-t ${dark ? "border-ink" : "border-rule"}`}
      >
        <div className="max-w-[1600px] mx-auto">
          <SectionTag number={number} title={title} dark={dark} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <h2
                className={`font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98] ${dark ? "text-paper" : ""}`}
                data-testid="why-brava-headline"
              >
                Cedar look. <br />Different math.
              </h2>
            </div>
            <div className={`lg:col-span-5 space-y-4 text-base md:text-lg leading-relaxed ${dark ? "text-paper/80" : "text-body"}`}>
              <p>
                Brava is a composite cedar shake. It is molded directly from
                real cedar masters, so the surface reads as cedar in every
                light. It performs differently than wood because it is a
                rated synthetic system, not a botanical material.
              </p>
              <p className={`font-serif italic ${dark ? "text-paper/65" : "text-slate"}`}>
                If this were ours, this is the roof system we would specify.
              </p>
            </div>
          </div>

          <FactsRow dark={dark} />
        </div>
      </section>

      {/* BRAVA VS WOOD CEDAR · two-column comparison band */}
      <section
        data-testid="section-brava-vs-wood"
        className={`relative ${dark ? "bg-ink-soft text-paper border-t border-paper/10" : "bg-paper border-t border-rule"} py-24 md:py-32 px-6 lg:px-12`}
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h3 className={`font-serif italic font-light text-[6vw] sm:text-3xl lg:text-[3vw] leading-[1.18] max-w-3xl ${dark ? "text-paper" : "text-ink"}`}>
              Wood cedar still has a place. We are not against it.
            </h3>
            <p className={`max-w-sm text-sm md:text-base leading-relaxed ${dark ? "text-paper/60" : "text-slate"}`}>
              Source captions: Brava Cedar Shake spec sheet (PDF), Brava About page,
              Brava Cedar Shake page.
            </p>
          </div>

          <div
            className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-b ${dark ? "border-paper/15" : "border-ink/15"}`}
            data-testid="brava-vs-wood"
          >
            <ComparisonCol
              dark={dark}
              accent="bronze"
              eyebrow="Wood cedar shake"
              rows={[
                { label: "Lifespan", value: "15–20 yrs (avg) · 30 yrs with Certi-Label 3/4″ Heavies" },
                { label: "Maintenance", value: "ongoing · cleaning, moss treatment, replacement of split shakes" },
                { label: "Hail / impact", value: "splits and tears at field-impact" },
                { label: "Wind", value: "varies by install · prone to wind-lift in storms" },
                { label: "Fire", value: "wood is wood · Class A only with full system add-ons" },
                { label: "Color", value: "ages aggressively · uneven across exposures within 2–3 yrs" },
              ]}
            />
            <ComparisonCol
              dark={dark}
              accent="gold"
              eyebrow="Brava composite cedar shake"
              rows={[
                { label: "Lifespan", value: "50-year transferable warranty" },
                { label: "Maintenance", value: "low · no moss treatment, no replacement cycle within warranty" },
                { label: "Hail / impact", value: "Class 4 · highest hail-impact rating" },
                { label: "Wind", value: "188 mph (nails) · up to 211 mph (screws)" },
                { label: "Fire", value: "Class A available at the assembly level with approved underlayments" },
                { label: "Color", value: "mineral pigment runs through the shake · holds through sun and storm" },
              ]}
            />
          </div>

          <p
            className={`mt-10 text-xs leading-relaxed ${dark ? "text-paper/45" : "text-slate/85"}`}
            data-testid="brava-sources"
          >
            Sources: Brava Cedar Shake Spec Sheet (PDF, bravarooftile.com) &middot;
            Brava About page &middot; Brava Cedar Shake product page.
            Brava notes that pricing varies by property and location and that
            costs are comparable to natural cedar but lower-maintenance over lifecycle.
          </p>
        </div>
      </section>
    </>
  );
}

/* ---------- internals ---------- */

function SectionTag({ number, title, dark }) {
  return (
    <div className="flex items-baseline gap-6">
      <span className={`font-brand text-xs uppercase tracking-[0.22em] ${dark ? "text-warm-gold/80" : "text-warm-gold/75"}`}>
        {number}
      </span>
      <span className={`font-brand text-[11px] uppercase tracking-[0.22em] ${dark ? "text-paper/70" : "text-ink/70"}`}>
        {title}
      </span>
    </div>
  );
}

function FactsRow({ dark }) {
  const FACTS = [
    { label: "Class 4", sub: "Impact rated", note: "Highest hail-impact rating. Withstands a 2-inch ice ball at 90 mph with no loss of water-shedding function." },
    { label: "188+ MPH", sub: "Wind · 211 w/ screws", note: "Wind-uplift rated to 188 mph with nails; up to 211 mph with high-wind screw installation." },
    { label: "Class A", sub: "Fire rating available", note: "Class A available at the assembly level with approved underlayments." },
    { label: "50 years", sub: "Transferable warranty", note: "Brava cedar shake carries a 50-year transferable warranty per Brava&rsquo;s spec sheet." },
    { label: "Recycled", sub: "Composite material", note: "Composite shake from recycled materials. Lower lifetime maintenance vs natural cedar over lifecycle." },
  ];
  return (
    <div
      className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-b ${dark ? "border-paper/15" : "border-ink/15"}`}
      data-testid="why-brava-facts"
    >
      {FACTS.map((f, i) => (
        <motion.div
          key={f.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.06 }}
          className={`p-6 md:p-8 ${i !== 4 ? `lg:border-r ${dark ? "border-paper/15" : "border-ink/15"}` : ""} ${i !== 0 ? `border-t lg:border-t-0 ${dark ? "border-paper/15" : "border-ink/15"}` : ""}`}
          data-testid={`why-brava-fact-${i}`}
        >
          <div className={`font-display text-3xl md:text-4xl font-medium leading-none ${dark ? "text-paper" : "text-ink"}`}>{f.label}</div>
          <div className="mt-3 font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold">{f.sub}</div>
          <div
            className={`mt-4 text-sm leading-relaxed ${dark ? "text-paper/70" : "text-body"}`}
            dangerouslySetInnerHTML={{ __html: f.note }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function ComparisonCol({ dark, accent, eyebrow, rows }) {
  return (
    <div
      className={`p-7 md:p-9 ${accent === "gold" ? (dark ? "bg-ink" : "bg-paper-warm") : ""}`}
    >
      <div className={`font-brand text-[10px] uppercase tracking-[0.22em] ${accent === "gold" ? "text-warm-gold" : "text-bronze"}`}>
        {eyebrow}
      </div>
      <ul className={`mt-5 divide-y ${dark ? "divide-paper/10" : "divide-ink/10"}`}>
        {rows.map((r) => (
          <li key={r.label} className="grid grid-cols-12 gap-4 py-3 text-sm md:text-base items-baseline">
            <div className={`col-span-4 font-brand text-[10px] uppercase tracking-[0.22em] ${dark ? "text-paper/55" : "text-slate"}`}>
              {r.label}
            </div>
            <div className={`col-span-8 leading-snug ${dark ? "text-paper/85" : "text-ink"}`}>
              {r.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
