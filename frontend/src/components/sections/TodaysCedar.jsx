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
          number="06 / 13"
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
      </div>
    </section>
  );
}
