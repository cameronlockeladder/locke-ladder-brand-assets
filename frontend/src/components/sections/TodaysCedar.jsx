import React from "react";
import { motion } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

const LIFECYCLE = [
  { label: "Brava", value: 3.14, tone: "brava" },
  { label: "Metal", value: 6.29, tone: "muted" },
  { label: "Asphalt", value: 7.3, tone: "muted" },
  { label: "Concrete", value: 10.94, tone: "muted" },
  { label: "Natural Cedar", value: 16.76, tone: "cedar" },
];
const MAX_VAL = 18;

export default function TodaysCedar() {
  return (
    <section
      id="todays-cedar"
      data-testid="section-todays-cedar"
      className="relative bg-ink text-paper overflow-hidden border-t border-ink"
    >
      {/* Full-bleed background video behind everything */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          data-testid="todays-cedar-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source
            src="/assets/videos/projects/brava-web-video-assets/todays-cedar-background-laskey-brava-cedar-carmel-00000097-full.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-ink/35 to-ink/85" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 py-28 md:py-36">
        <SectionTag
          number="06 / 14"
          title="Materials"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.4vw] leading-[0.98] text-paper"
              data-testid="todays-cedar-headline"
            >
              Today&rsquo;s Cedar.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4 space-y-6 leading-relaxed text-paper/85">
            <p className="text-lg md:text-xl" data-testid="todays-cedar-body-1">
              Most cedar on the market is cheap, rapid-growth wood. Its large
              cellular structure readily absorbs moisture. It is prone to hail
              damage and fires, and forces a lifetime of maintenance, expense,
              and headache. We believe roofs should be enjoyed, not toiled over.
              The stakes of getting the roof material correct are higher than
              ever. Roofing costs have doubled every 10 years for the last 3
              decades. Getting the wrong roof could mean you&rsquo;re paying 3
              to 4 times the price by the time you realize the mistake.
            </p>
            <p className="text-base md:text-lg" data-testid="todays-cedar-body-2">
              We love the beauty, warmth, and aesthetic of cedar. The only
              cedar to consider is Certified Blue Label 3/4&quot; Heavies.
              These might get you 30&ndash;35 years if consistent upkeep is
              performed. While we can install Certi-label shakes, they are
              expensive to install correctly. They are expensive to maintain.
              And they look very aged after just a few years. We believe 30+
              years is not enough for a roof. Especially in light of other
              options.
            </p>
            <p
              className="text-sm text-paper/65 italic border-l border-warm-gold/70 pl-5 py-1"
              data-testid="todays-cedar-wood-shake-line"
            >
              Average wood cedar shake lifespan: 15&ndash;20 years, with ongoing
              molding, rotting, and moss treatment.
            </p>
          </div>
        </div>

        {/* Lifecycle chart · full width, native bars */}
        <div className="mt-24 md:mt-32" data-testid="lifecycle-chart">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
            <div>
              <div className="eyebrow text-paper/70">Durability pays dividends</div>
              <h3 className="mt-4 font-serif italic font-light text-paper text-[7vw] sm:text-3xl lg:text-[3.4vw] leading-[1.05] max-w-3xl">
                50-year lifecycle cost, as a multiple of the roof.
              </h3>
            </div>
            <p className="max-w-sm text-paper/70 text-sm md:text-base leading-relaxed">
              Over fifty years, Brava is the lowest total cost of ownership.
              Natural cedar runs roughly <span className="text-warm-gold">5x</span> that of Brava.
            </p>
          </div>

          <div className="space-y-4">
            {LIFECYCLE.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="flex items-center gap-4 md:gap-6"
                data-testid={`lifecycle-row-${row.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-28 md:w-40 font-brand text-xs md:text-sm uppercase tracking-[0.18em] text-paper/80 shrink-0">
                  {row.label}
                </div>
                <div className="relative flex-1 h-10 md:h-14 bg-paper/5 border border-paper/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(row.value / MAX_VAL) * 100}%` }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                    className={`absolute inset-y-0 left-0 ${
                      row.tone === "brava"
                        ? "bg-warm-gold"
                        : row.tone === "cedar"
                        ? "bg-bronze/80"
                        : "bg-paper/35"
                    }`}
                  />
                  <span
                    className={`absolute inset-y-0 flex items-center pl-4 font-display text-base md:text-xl tabular-nums font-medium ${
                      row.tone === "brava" ? "text-ink" : "text-paper"
                    }`}
                    style={{ left: `${Math.min((row.value / MAX_VAL) * 100, 80)}%` }}
                  >
                    {row.value.toFixed(2)}x
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <Caption className="mt-8 text-paper/50">
            Source: Brava Roof Tile &middot; 50-year total cost of ownership
            multipliers relative to an indexed roof replacement baseline.
          </Caption>
        </div>

        {/* Roofing-cost timeline · doubling in real dollars, illustrative baseline */}
        <div className="mt-24 md:mt-28 pt-14 md:pt-16 border-t border-paper/10" data-testid="cost-timeline">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-12">
            <div>
              <div className="eyebrow text-paper/70">The cost of waiting</div>
              <h3 className="mt-4 font-serif italic font-light text-paper text-[7vw] sm:text-3xl lg:text-[2.8vw] leading-[1.05] max-w-3xl">
                Roofing costs have doubled every 10 years for the last 3 decades.
              </h3>
            </div>
            <p className="max-w-sm text-paper/65 text-sm md:text-base leading-relaxed">
              Pick the wrong roof now, and you may be paying 3 to 4 times the
              price by the time you realize the mistake.
            </p>
          </div>

          {/* Scaled bar-columns · heights grow exponentially to show the doubling visually */}
          <div className="grid grid-cols-4 gap-4 md:gap-6 items-end" style={{ minHeight: "360px" }}>
            {[
              { year: "1996", amount: "$100,000", grew: 100, tone: "muted" },
              { year: "2006", amount: "$200,000", grew: 200, tone: "muted" },
              { year: "2016", amount: "$400,000", grew: 400, tone: "muted" },
              { year: "2026", amount: "$800,000", grew: 800, tone: "gold" },
            ].map((t, i) => {
              const pct = (t.grew / 800) * 100; // scale against 2026 max
              return (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  data-testid={`timeline-dot-${t.year}`}
                  className="flex flex-col items-center text-center h-full justify-end"
                >
                  <div
                    className={`font-display font-semibold tabular-nums leading-none mb-3 ${
                      t.tone === "gold" ? "text-warm-gold" : "text-paper"
                    }`}
                    style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.4rem)" }}
                  >
                    {t.amount}
                  </div>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${pct}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.25, 1, 0.5, 1] }}
                    className={`w-full max-w-[120px] mx-auto ${
                      t.tone === "gold" ? "bg-warm-gold" : "bg-paper/25"
                    }`}
                    style={{ minHeight: "18px" }}
                  />
                  <div className="mt-4 font-brand text-[11px] uppercase tracking-[0.24em] text-paper/55">
                    {t.year}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6 font-brand text-[10px] uppercase tracking-[0.24em] text-paper/40">
            Illustrative baseline &middot; a comparable roof indexed at $100,000 in 1996.
          </div>
        </div>

        {/* Cedar-vs-Brava 3-ring lifespan graphic · copy→viz POC #6 */}
        <div className="mt-24 md:mt-28 pt-14 md:pt-16 border-t border-paper/10" data-testid="lifespan-rings">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="eyebrow text-paper/70">Lifespan, plainly</div>
              <h3 className="mt-4 font-serif italic font-light text-paper text-[7vw] sm:text-3xl lg:text-[2.8vw] leading-[1.05]">
                One decision for the next two generations of members.
              </h3>
              <p className="mt-6 text-paper/70 text-sm md:text-base leading-relaxed max-w-md">
                Average wood cedar shake lasts 15&ndash;20 years, with ongoing
                molding, rotting, and moss treatment. Brava&rsquo;s limited
                warranty runs 50.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[380px]">
                <svg viewBox="0 0 460 380" className="w-full max-w-[520px] h-auto" aria-hidden="true">
                  {/* 50yr ring · Brava */}
                  <circle cx="230" cy="190" r="170" fill="none" stroke="#857650" strokeOpacity="0.8" strokeWidth="2" />
                  <text x="230" y="18" textAnchor="middle" fontFamily="Inter" fontSize="11" letterSpacing="2" fill="#EAE2D2" opacity="0.65">BRAVA &middot; 50 YEARS</text>
                  {/* 30yr ring · certi-label */}
                  <circle cx="230" cy="190" r="105" fill="none" stroke="#EAE2D2" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="230" y="74" textAnchor="middle" fontFamily="Inter" fontSize="10" letterSpacing="2" fill="#EAE2D2" opacity="0.55">CERTI-LABEL CEDAR &middot; ~30 YRS</text>
                  {/* 15-20yr ring · generic cedar */}
                  <circle cx="230" cy="190" r="55" fill="none" stroke="#9A5B3E" strokeOpacity="0.8" strokeWidth="1.5" />
                  <text x="230" y="186" textAnchor="middle" fontFamily="Inter" fontSize="10" letterSpacing="2" fill="#9A5B3E" opacity="0.95">GENERIC CEDAR</text>
                  <text x="230" y="202" textAnchor="middle" fontFamily="Inter" fontSize="16" fontWeight="600" fill="#EAE2D2">15&ndash;20 yrs</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
