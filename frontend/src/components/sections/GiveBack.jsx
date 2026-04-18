import React from "react";
import { motion } from "framer-motion";
import { SectionTag, Caption } from "@/components/primitives";

export default function GiveBack() {
  return (
    <section
      id="giveback"
      data-testid="section-giveback"
      className="relative bg-[#003B5C] text-paper py-28 md:py-40 px-6 lg:px-12 overflow-hidden"
    >
      {/* Subtle Oak Brook streets backdrop */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <img
          src="/assets/brand/client/christ-church/oak-brook-streets.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <SectionTag number="07 / 07" title="The Church GiveBack Program" className="[&_.eyebrow]:text-warm-gold" />
            <h2 className="mt-8 font-serif font-light display-tight text-[13vw] sm:text-6xl lg:text-[7vw] leading-[0.92]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
                className="inline-block font-serif font-medium text-warm-gold"
              >
                1%
              </motion.span>
              <span className="text-paper"> back to</span>
              <br />
              <span className="italic text-paper">Christ Church.</span>
            </h2>

            <div className="mt-10 max-w-2xl space-y-5 text-paper/85 text-lg leading-relaxed">
              <p>
                When a member of the Christ Church congregation hires Locke &amp; Ladder for
                their own home — roofing, siding, windows &amp; doors, or gutters — we return
                one percent of that project back to the church.
              </p>
              <p className="text-paper/70 text-base">
                To be clear: the GiveBack applies to <em className="text-warm-gold not-italic font-medium">future</em> congregation-member projects
                that reference Christ Church — not to this proposal. It is how we invest
                in a relationship we want to earn.
              </p>
            </div>
          </div>

          {/* Service lines — visual, not fake-clickable */}
          <div className="lg:col-span-5 lg:pt-4">
            <div className="border-t border-paper/25 pt-6">
              <div className="eyebrow text-paper/60 mb-6">Services that qualify</div>
              <ul className="space-y-0 divide-y divide-paper/15 border-b border-paper/15">
                {[
                  { name: "Roofing", note: "Cedar, synthetic shake, slate, asphalt" },
                  { name: "Siding", note: "Cedar, Hardie, composite, masonry" },
                  { name: "Windows & Doors", note: "Marvin, Pella, custom casework" },
                  { name: "Gutters", note: "Seamless copper, aluminum, steel" },
                ].map((s) => (
                  <li
                    key={s.name}
                    className="flex items-baseline justify-between py-5"
                    data-testid={`giveback-service-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <div>
                      <div className="font-serif text-xl text-paper">{s.name}</div>
                      <div className="text-xs text-paper/55 mt-0.5">{s.note}</div>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-warm-gold">1% back</span>
                  </li>
                ))}
              </ul>
              <Caption className="mt-6 text-paper/50">
                Applies to fully executed residential projects by Christ Church members.
              </Caption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
