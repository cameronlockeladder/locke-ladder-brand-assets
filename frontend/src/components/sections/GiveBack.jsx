import React from "react";
import { motion } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

export default function GiveBack() {
  return (
    <section
      id="giveback"
      data-testid="section-giveback"
      className="relative bg-[#003B5C] text-paper py-28 md:py-36 px-6 lg:px-12 overflow-hidden"
    >
      <div className="relative max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="/assets/brand/client/christ-church/christ-church-logo.png"
            alt="Christ Church | Oak Brook"
            data-testid="giveback-christ-church-logo"
            className="h-10 w-auto invert brightness-0"
          />
          <span className="h-6 w-px bg-paper/35" />
          <span className="font-brand text-[11px] uppercase tracking-[0.22em] text-paper/80">
            The Church GiveBack Program
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: headline + clarifier */}
          <div className="lg:col-span-7">
            <SectionTag number="07 / 07" title="" className="[&_.eyebrow]:text-warm-gold" />
            <h2 className="mt-4 font-display display-tight text-[13vw] sm:text-6xl lg:text-[7vw] leading-[0.92]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
                className="inline-block font-display font-medium text-warm-gold"
              >
                1%
              </motion.span>
              <span className="text-paper"> back to Christ Church.</span>
            </h2>

            <div className="mt-10 max-w-2xl space-y-5 text-paper/85 text-lg leading-relaxed font-light">
              <p>
                When a member of the Christ Church congregation hires Locke
                &amp; Ladder for their own home (roofing, siding, windows and
                doors, or gutters), we return one percent of that project back
                to the church.
              </p>
              <p className="text-paper/70 text-base">
                To be clear, the GiveBack applies to{" "}
                <span className="text-warm-gold font-medium">future</span>{" "}
                congregation-member projects that reference Christ Church. Not
                to this proposal. It is how we invest in a relationship we want
                to earn.
              </p>
            </div>
          </div>

          {/* Right: Faith Apostolic + Oak Brook map */}
          <div className="lg:col-span-5">
            <figure className="mb-8 border border-paper/20" data-testid="giveback-faith-apostolic">
              <div className="relative aspect-[4/3] bg-paper/5 overflow-hidden">
                <img
                  src="/assets/photos/projects/faith-apostolic-church/faith-apostolic-church-give-back.webp"
                  alt="Faith Apostolic Church, a prior GiveBack recipient"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-paper text-ink font-brand text-[10px] uppercase tracking-[0.22em] px-2 py-1">
                  Precedent · Faith Apostolic Church
                </span>
              </div>
              <figcaption className="bg-paper/5 px-4 py-3 text-xs text-paper/60 leading-relaxed">
                A sister congregation we have supported through the GiveBack
                Program. The same approach we are offering Christ Church.
              </figcaption>
            </figure>

            <div className="relative border border-paper/20 overflow-hidden bg-paper/5" data-testid="giveback-oak-brook-map">
              <div className="aspect-[4/3]">
                <img
                  src="/assets/brand/client/christ-church/oak-brook-streets.svg"
                  alt="Oak Brook street grid, indicative"
                  className="w-full h-full object-contain p-6 invert brightness-0 opacity-90"
                />
                {/* Pin marker for Christ Church */}
                <div className="absolute top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-warm-gold ring-4 ring-warm-gold/30" />
                  <span className="mt-2 font-brand text-[9px] uppercase tracking-[0.22em] text-paper bg-ink/70 px-1.5 py-0.5 backdrop-blur-sm">
                    Christ Church
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 bg-paper/5 border-t border-paper/10">
                <span className="font-brand text-[10px] uppercase tracking-[0.22em] text-paper/60">
                  Oak Brook, IL · Our home field
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service lines bar */}
        <div className="mt-20 border-t border-paper/25 pt-6">
          <div className="eyebrow text-paper/60 mb-6">Services that qualify</div>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-0 md:divide-x md:divide-paper/15 border-b border-paper/15">
            {[
              { name: "Roofing", note: "Cedar, synthetic shake, slate, asphalt" },
              { name: "Siding", note: "Cedar, Hardie, composite, masonry" },
              { name: "Windows & Doors", note: "Marvin, Pella, custom casework" },
              { name: "Gutters", note: "Seamless copper, aluminum, steel" },
            ].map((s) => (
              <li
                key={s.name}
                className="flex items-baseline justify-between gap-4 py-5 md:px-6"
                data-testid={`giveback-service-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div>
                  <div className="text-paper text-xl font-medium">{s.name}</div>
                  <div className="text-xs text-paper/55 mt-0.5">{s.note}</div>
                </div>
                <span className="font-brand text-[11px] uppercase tracking-[0.22em] text-warm-gold">
                  1% back
                </span>
              </li>
            ))}
          </ul>
          <Caption className="mt-6 text-paper/50">
            Applies to fully executed residential projects by Christ Church members.
          </Caption>
        </div>
      </div>
    </section>
  );
}
