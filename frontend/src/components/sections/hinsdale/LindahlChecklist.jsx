import React from "react";
import { motion } from "framer-motion";
import { SectionTag } from "@/components/primitives";

/**
 * Visual checklist for Mark · "pricing pending, evidence first."
 * Each row toggles between done / pending. No fake price.
 */
const CHECKLIST = [
  { state: "done",    title: "On-site walk",                 detail: "April 28, 2026 · Joe DeBias" },
  { state: "done",    title: "Drone capture",                detail: "DJI Mavic · 75 frames in Drive" },
  { state: "done",    title: "Photos uploaded",              detail: "99 photos · JobNimbus" },
  { state: "done",    title: "Polycam Gaussian Splat",       detail: "captured · viewable below" },
  { state: "pending", title: "Underlayment & deck inspection",detail: "decided in the inspection report, not the bid" },
  { state: "pending", title: "Copper vs aluminum at valleys", detail: "honest only when specified clearly" },
  { state: "pending", title: "Snow retention by elevation",   detail: "count slopes that need it · no flat multiplier" },
  { state: "pending", title: "Skylights · keep, replace, eliminate", detail: "decided before, not during, install" },
  { state: "pending", title: "Customer-facing scope locked",  detail: "next" },
];

export default function LindahlChecklist({ number = "04 / 07" }) {
  return (
    <section
      id="status"
      data-testid="section-status"
      className="relative bg-paper py-24 md:py-32 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number={number} title="What this means here" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="status-headline"
            >
              Evidence in. <br />Number not yet.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="font-serif italic text-slate text-base md:text-lg leading-relaxed">
              We do not put a number on it before we put eyes on every transition.
            </p>
          </div>
        </div>

        <ol className="mt-14 divide-y divide-rule border-t border-b border-rule" data-testid="lindahl-checklist">
          {CHECKLIST.map((row, i) => (
            <motion.li
              key={row.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-4 md:gap-8 py-5 md:py-6 items-baseline"
              data-testid={`checklist-${i}`}
            >
              <div className="col-span-2 md:col-span-1">
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full ${
                    row.state === "done" ? "bg-warm-gold text-ink" : "border border-ink/30 text-ink/40"
                  }`}
                  aria-hidden="true"
                  data-testid={`checklist-state-${row.state}-${i}`}
                >
                  {row.state === "done" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <span className="block w-1.5 h-1.5 rounded-full bg-ink/30" />
                  )}
                </span>
              </div>
              <div className="col-span-10 md:col-span-5">
                <div className="font-display text-lg md:text-xl text-ink font-medium leading-snug">{row.title}</div>
              </div>
              <div className="col-span-12 md:col-span-5 text-body text-sm md:text-base leading-snug">
                {row.detail}
              </div>
              <div className="hidden md:block col-span-1 text-right font-brand text-[10px] uppercase tracking-[0.22em]">
                <span className={row.state === "done" ? "text-warm-gold" : "text-slate/50"}>
                  {row.state === "done" ? "done" : "pending"}
                </span>
              </div>
            </motion.li>
          ))}
        </ol>

        <p className="mt-12 max-w-2xl font-serif italic text-slate text-base md:text-lg leading-relaxed">
          &ldquo;The right next move is turning field evidence into a scope
          that can survive scrutiny.&rdquo;
        </p>
      </div>
    </section>
  );
}
