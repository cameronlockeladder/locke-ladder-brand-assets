import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";

import Picture from "@/components/Picture";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import WhatWeSaw from "@/components/sections/hinsdale/WhatWeSaw";
import BravaStrip from "@/components/sections/hinsdale/BravaStrip";
import LindahlChecklist from "@/components/sections/hinsdale/LindahlChecklist";
import SnapeApprovedBand from "@/components/sections/hinsdale/SnapeApprovedBand";
import PolycamSplatBand from "@/components/sections/hinsdale/PolycamSplatBand";
import NextStepCompact from "@/components/sections/hinsdale/NextStepCompact";

const POLYCAM_LINDAHL_EMBED = "https://poly.cam/capture/8838e077-87c7-4f9c-8ea7-53708ecbc7f9/embed";
const POLYCAM_LINDAHL_FALLBACK = "https://poly.cam/capture/8838e077-87c7-4f9c-8ea7-53708ecbc7f9";

export default function LindahlPage() {
  useEffect(() => {
    document.title = "Mark Lindahl · 903 Middleton, Inverness · Locke & Ladder";
    setMeta("description", "Inspection-first walkthrough for 903 Middleton, Inverness. Brava rationale and scope-in-progress. Locke & Ladder, April 2026.");

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true, smoothTouch: false,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    const id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  return (
    <div className="App paper-grain bg-paper text-ink overflow-x-hidden" data-testid="lindahl-root">
      <ScrollProgress />
      <main>
        <LindahlHero />
        <WhatWeSaw
          number="02 / 07"
          src="/assets/photos/projects/hinsdale-cedar/mark/aerial-pair.webp"
          alt="903 Middleton · Inverness · cedar shake home from above with surrounding properties"
          captionAddress="903 Middleton · Inverness, IL"
          captionDate="April 28, 2026"
          callouts={[
            { title: "Roof geometry",     detail: "Multiple gables and dormers. Every transition is a scoping decision." },
            { title: "Two-story access",  detail: "Steep pitches and elevation changes. Counted, not assumed." },
            { title: "Mature landscaping", detail: "Trees pressed into the eaves. Affects debris and access cost." },
            { title: "Field evidence in", detail: "75 DJI frames in Drive · 99 photos in JobNimbus." },
          ]}
          testId="what-we-saw"
        />
        <BravaStrip number="03 / 07" />
        <LindahlChecklist number="04 / 07" />
        <SnapeApprovedBand number="05 / 07" />
        <PolycamSplatBand
          number="06 / 07"
          client="Mark Lindahl"
          address="903 Middleton · Inverness, IL"
          embedUrl={POLYCAM_LINDAHL_EMBED}
          fallbackUrl={POLYCAM_LINDAHL_FALLBACK}
          testId="polycam-lindahl"
        />
        <NextStepCompact
          number="07 / 07"
          clientLine="Mark Lindahl · 903 Middleton, Inverness, IL"
        />
      </main>
      <Footer />
    </div>
  );
}

/* ──────────────────────── HERO ──────────────────────── */
function LindahlHero() {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Picture
          src="/assets/photos/projects/hinsdale-cedar/mark/aerial-context-with-truck.webp"
          alt="903 Middleton · Inverness · cedar shake home from above, with Locke & Ladder field truck on site"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/35 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/15 to-ink/50" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 md:pt-36 pb-16 min-h-[100svh] flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-4"
          data-testid="hero-section-tag"
        >
          <span className="font-brand text-xs uppercase tracking-[0.24em] text-warm-gold/85">01 / 07</span>
          <span className="font-brand text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-paper/85">
            Locke &amp; Ladder &middot; April 28, 2026 inspection
          </span>
        </motion.div>

        <div className="max-w-[1300px]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="font-display text-paper text-[12vw] sm:text-[9vw] lg:text-[7.4vw] leading-[0.92] display-tight"
            data-testid="hero-headline"
          >
            For Mark.
            <br />
            <span className="text-paper/80">903 Middleton.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 max-w-2xl font-serif italic text-paper/85 text-base md:text-xl leading-relaxed"
          >
            Inspection in, photos in. The right next move is a scope that
            survives scrutiny &mdash; not a fast number.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="pt-8 border-t border-paper/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-6">
            <HeroCell label="For" value="Mark Lindahl" />
            <HeroCell label="Property" value="903 Middleton · Inverness, IL" />
            <HeroCell label="Status" value="Inspection report sent" />
            <div className="flex md:justify-end items-end pt-1">
              <button
                onClick={() => document.getElementById("what-we-saw")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-scroll-button"
                className="group inline-flex items-center gap-3 font-brand text-[11px] uppercase tracking-[0.28em] text-paper/85 hover:text-paper transition-colors"
              >
                Begin
                <span className="relative inline-block w-10 h-px bg-paper/50 group-hover:bg-paper transition-colors">
                  <span className="absolute -right-1 -top-[3px] w-[7px] h-[7px] border-r border-t border-paper/60 group-hover:border-paper rotate-45" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCell({ label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="eyebrow text-paper/55 h-[14px] leading-none">{label}</div>
      <div className="text-base md:text-lg text-paper font-medium leading-snug">{value}</div>
    </div>
  );
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
  el.setAttribute("content", content);
}
