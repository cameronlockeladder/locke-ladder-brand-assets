import React from "react";
import { motion } from "framer-motion";
import {
  Clipboard, CalendarDays, HardHat, Eye, Sparkles, Handshake, Heart,
} from "lucide-react";
import { SectionTag } from "@/components/primitives";

const STEPS = [
  {
    n: "01",
    title: "Preproduction Planning",
    body: "Scope, sequencing, materials staging, and a pre-start walk of the sanctuary, steeple, and mansard before a single crew arrives.",
    Icon: Clipboard,
  },
  {
    n: "02",
    title: "Church Calendar Coordination",
    body: "Install sequenced around services and events to minimize disruption to the congregation.",
    Icon: CalendarDays,
  },
  {
    n: "03",
    title: "Safety + Site Protection",
    body: "OSHA protocols, congregation safety, perimeter protection, and fall-arrest systems on every elevation.",
    Icon: HardHat,
  },
  {
    n: "04",
    title: "Installation Oversight",
    body: "Daily jobsite supervision. Locke & Ladder's long-term financial health stands behind the guarantee.",
    Icon: Eye,
    pill: "Factory-trained, vetted, insured. Locke & Ladder is a certified BRAVA installer.",
    photo: "/assets/photos/materials/road-map/flatroof-ivan-crew-pics-11-road-map.webp",
  },
  {
    n: "05",
    title: "Daily Cleanup",
    body: "Magnets across the lawn, trash hauled each evening, campus returned to ready-for-Sunday condition before the crew leaves.",
    Icon: Sparkles,
  },
  {
    n: "06",
    title: "Final Walkthrough",
    body: "Board and Locke & Ladder principals walk the finished roof together. Every concern documented and closed before sign-off.",
    Icon: Handshake,
  },
  {
    n: "07",
    title: "Long-Term Relationship",
    body: "Ongoing communication after install. Seasonal check-ins, fast response when something needs attention, and the same team on the next project.",
    Icon: Heart,
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
        <SectionTag number="12 / 14" title="How the work goes" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.4vw] leading-[0.98]"
              data-testid="roadmap-headline"
            >
              Christ Church
              <br />Success Road Map.
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
              className="relative pl-8 md:pl-16 pb-12 last:pb-0"
              data-testid={`roadmap-step-${s.n}`}
            >
              {/* Icon dot (replaces the bare gold dot) */}
              <span
                data-testid={`roadmap-icon-${s.n}`}
                className="absolute -left-[18px] top-1 w-9 h-9 rounded-full bg-paper ring-4 ring-paper border border-ink/15 flex items-center justify-center text-ink/75"
                aria-hidden="true"
              >
                <s.Icon size={16} strokeWidth={1.6} />
              </span>

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

              {s.photo && (
                <figure className="mt-6 relative overflow-hidden aspect-[16/9] max-w-2xl bg-ink/5" data-testid={`roadmap-photo-${s.n}`}>
                  <img
                    src={s.photo}
                    alt="Locke & Ladder crew on the roof"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                </figure>
              )}

              {s.pill && (
                <div
                  className="mt-5 inline-flex items-center gap-3 bg-ink text-paper font-brand text-[10px] uppercase tracking-[0.24em] px-4 py-2.5"
                  data-testid={`roadmap-pill-${s.n}`}
                >
                  <span className="block w-1.5 h-1.5 bg-warm-gold rounded-full" />
                  {s.pill}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
