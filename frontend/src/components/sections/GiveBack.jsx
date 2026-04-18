import React from "react";
import { motion } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

export default function GiveBack() {
  return (
    <section
      id="giveback"
      data-testid="section-giveback"
      className="relative bg-[#003B5C] text-paper overflow-hidden"
    >
      {/* Full-bleed Faith Apostolic photo with 1% headline on top */}
      <div className="relative w-full h-[90svh] md:h-[100svh] overflow-hidden">
        <img
          src="/assets/photos/projects/faith-apostolic-church/faith-apostolic-church-give-back.webp"
          alt="Faith Apostolic Church · a GiveBack precedent"
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="giveback-faith-apostolic"
        />
        <div className="absolute inset-0 bg-[#003B5C]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B5C]/70 via-[#003B5C]/20 to-[#003B5C]/85" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 md:pt-36 pb-16 h-full flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/brand/client/christ-church/christ-church-logo.png"
              alt="Christ Church | Oak Brook"
              data-testid="giveback-christ-church-logo"
              className="h-10 w-auto invert brightness-0"
            />
            <span className="h-6 w-px bg-paper/35" />
            <span className="font-brand text-[11px] uppercase tracking-[0.22em] text-paper/85">
              The Church GiveBack Program
            </span>
          </div>

          <div className="max-w-5xl">
            <SectionTag number="07 / 07" title="" className="[&_*]:text-warm-gold mb-6" />
            <h2 className="font-display display-tight text-[18vw] sm:text-[14vw] lg:text-[12vw] leading-[0.88]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                className="inline-block text-warm-gold"
              >
                1%
              </motion.span>
              <span className="text-paper"> back to Christ Church.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-paper/85 text-lg leading-relaxed font-light">
              When a member of the Christ Church congregation hires Locke
              &amp; Ladder for their own home (roofing, siding, windows and
              doors, or gutters), we return one percent of that project back
              to the church.
            </p>
            <p className="mt-4 max-w-2xl text-paper/70 text-base">
              To be clear, the GiveBack applies to{" "}
              <span className="text-warm-gold font-medium">future</span>{" "}
              congregation-member projects that reference Christ Church. Not
              to this proposal. It is how we invest in a relationship we want
              to earn.
            </p>
          </div>

          <div className="flex items-end gap-6">
            <span className="inline-flex items-center gap-2 bg-paper/10 backdrop-blur-sm font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85 px-3 py-1.5">
              <span className="block w-1.5 h-1.5 bg-warm-gold rounded-full" />
              Precedent · Faith Apostolic Church
            </span>
          </div>
        </div>
      </div>

      {/* Map + community impact */}
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <div className="eyebrow text-warm-gold mb-6">Community impact, measured in blocks</div>
            <p className="font-serif italic text-paper text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
              &ldquo;A church is the heart of a neighborhood. When the roof holds,
              so does everything that gathers underneath it.&rdquo;
            </p>
            <div className="mt-6 font-brand text-[11px] uppercase tracking-[0.24em] text-paper/55">
              Our posture, plainly stated
            </div>

            <div className="mt-12 border-t border-paper/25 pt-6">
              <div className="eyebrow text-paper/60 mb-6">Services that qualify</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 divide-y divide-paper/10 sm:divide-y-0">
                {[
                  { name: "Roofing", note: "Cedar, synthetic shake, slate, asphalt" },
                  { name: "Siding", note: "Cedar, Hardie, composite, masonry" },
                  { name: "Windows & Doors", note: "Marvin, Pella, custom casework" },
                  { name: "Gutters", note: "Seamless copper, aluminum, steel" },
                ].map((s) => (
                  <li
                    key={s.name}
                    className="flex items-baseline justify-between py-4 sm:border-b sm:border-paper/10"
                    data-testid={`giveback-service-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <div>
                      <div className="text-paper text-lg font-medium">{s.name}</div>
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

          <div className="lg:col-span-6">
            <div
              className="relative border border-paper/20 overflow-hidden bg-paper/5"
              data-testid="giveback-oak-brook-map"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src="/assets/brand/client/christ-church/oak-brook-streets.svg"
                  alt="Oak Brook street grid"
                  className="absolute inset-0 w-full h-full object-cover p-6 invert brightness-0 opacity-90"
                />
                {/* Animated, radiating pin */}
                <div
                  className="absolute top-[52%] left-[52%] -translate-x-1/2 -translate-y-1/2"
                  data-testid="giveback-pin"
                >
                  {/* radiating rings */}
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full ll-pulse-ring"
                    style={{ background: "radial-gradient(circle, rgba(213,168,80,0.75) 0%, rgba(213,168,80,0) 70%)" }}
                  />
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full ll-pulse-ring"
                    style={{ background: "radial-gradient(circle, rgba(213,168,80,0.55) 0%, rgba(213,168,80,0) 70%)", animationDelay: "1.1s" }}
                  />
                  {/* solid pin */}
                  <span className="relative block w-3.5 h-3.5 rounded-full bg-warm-gold ring-4 ring-warm-gold/25" />
                  <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 font-brand text-[10px] uppercase tracking-[0.24em] text-paper bg-ink/70 px-2 py-0.5 backdrop-blur-sm whitespace-nowrap">
                    Christ Church
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 bg-paper/5 border-t border-paper/10 flex items-center justify-between gap-3">
                <span className="font-brand text-[10px] uppercase tracking-[0.22em] text-paper/60">
                  Oak Brook, IL · Our home field
                </span>
                <span className="font-serif italic text-paper/75 text-sm">
                  Where the work stays close.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
