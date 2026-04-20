import React from "react";
import { motion } from "framer-motion";
import { SectionTag } from "@/components/primitives";

const STEPS = [
  {
    n: "01",
    title: "Preproduction Planning",
    body: "Scope, sequencing, materials staging, and a pre-start walk of the sanctuary, steeple, and mansard before a single crew arrives.",
  },
  {
    n: "02",
    title: "Church Calendar Coordination",
    body: "Install sequenced around services and events to minimize disruption to the congregation.",
  },
  {
    n: "03",
    title: "Safety + Site Protection",
    body: "OSHA protocols, congregation safety, perimeter protection, and fall-arrest systems on every elevation.",
  },
  {
    n: "04",
    title: "Installation Oversight",
    body: "Daily jobsite supervision. Locke & Ladder's long-term financial health stands behind the guarantee.",
  },
  {
    n: "05",
    title: "Daily Cleanup",
    body: "Magnets across the lawn, trash hauled each evening, campus returned to ready-for-Sunday condition before the crew leaves.",
  },
  {
    n: "06",
    title: "Final Walkthrough",
    body: "Board and Locke & Ladder principals walk the finished roof together. Every concern documented and closed before sign-off.",
  },
  {
    n: "07",
    title: "Long-Term Relationship",
    body: "Ongoing communication after install. Seasonal check-ins, fast response when something needs attention, and the same team on the next project.",
  },
];

export default function RoadMap() {
  return (
    <section
      id="roadmap"
      data-testid="section-roadmap"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="11 / 12" title="How the work goes" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.4vw] leading-[0.98]"
              data-testid="roadmap-headline"
            >
              Client Success Road Map.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg leading-relaxed text-body">
              From the first planning meeting to years after the last shake is
              set. The same team, the same standard, the same phone number.
            </p>
          </div>
        </div>

        <ol className="mt-16 relative border-l border-ink/15">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
              className="relative pl-8 md:pl-14 pb-12 last:pb-0"
              data-testid={`roadmap-step-${s.n}`}
            >
              <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-warm-gold ring-4 ring-paper" />
              <div className="flex items-baseline gap-5 flex-wrap">
                <span className="font-brand text-xs uppercase tracking-[0.22em] text-warm-gold">
                  Step {s.n}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-ink font-medium leading-snug">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 max-w-2xl text-body text-base md:text-lg leading-relaxed">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
