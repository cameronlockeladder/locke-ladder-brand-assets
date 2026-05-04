import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";

import Picture from "@/components/Picture";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import WhatWeSaw from "@/components/sections/hinsdale/WhatWeSaw";
import BravaStrip from "@/components/sections/hinsdale/BravaStrip";
import BowlesAllocation from "@/components/sections/hinsdale/BowlesAllocation";
import SnapeApprovedBand from "@/components/sections/hinsdale/SnapeApprovedBand";
import PolycamSplatBand from "@/components/sections/hinsdale/PolycamSplatBand";
import NextStepCompact from "@/components/sections/hinsdale/NextStepCompact";

const POLYCAM_BOWLES_EMBED = "https://poly.cam/capture/e3017c4a-4360-4ca1-b472-67b32ce1dc02/embed";
const POLYCAM_BOWLES_FALLBACK = "https://poly.cam/capture/e3017c4a-4360-4ca1-b472-67b32ce1dc02";

export default function BowlesPage() {
  useEffect(() => {
    document.title = "Eric Bowles · 404 N Vine St, Hinsdale · Locke & Ladder";
    setMeta("description", "Customer-facing scope walkthrough for 404 N Vine St, Hinsdale. Brava cedar shake, copper, skylights. Locke & Ladder, April 2026.");

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
    <div className="App paper-grain bg-paper text-ink overflow-x-hidden" data-testid="bowles-root">
      <ScrollProgress />
      <main>
        <BowlesHero />
        <WhatWeSaw
          number="02 / 07"
          src="/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-context.webp"
          alt="404 N Vine St · Hinsdale · cedar shake home and surrounding canopy from above"
          captionAddress="404 N Vine St · Hinsdale, IL"
          captionDate="April 28, 2026"
          callouts={[
            { title: "Roof complexity",  detail: "Multiple gables, hips, dormer transitions. Each transition is a place water has to be redirected." },
            { title: "Steep & two-story", detail: "10/12 to 12/12 pitches with stretches over 12/12. Real labor, not a markup." },
            { title: "Adjacent canopy",   detail: "Mature trees pressed into the eaves. Drives debris load and access cost." },
            { title: "Copper & skylights",detail: "Copper W-valley, 7 Velux skylights, 496 ST9 copper snow guards." },
          ]}
          testId="what-we-saw"
        />
        <BravaStrip number="03 / 07" />
        <BowlesAllocation number="04 / 07" />
        <SnapeApprovedBand number="05 / 07" />
        <PolycamSplatBand
          number="06 / 07"
          client="Eric Bowles"
          address="404 N Vine St · Hinsdale, IL"
          embedUrl={POLYCAM_BOWLES_EMBED}
          fallbackUrl={POLYCAM_BOWLES_FALLBACK}
          testId="polycam-bowles"
        />
        <NextStepCompact
          number="07 / 07"
          clientLine="Eric Bowles · 404 N Vine St, Hinsdale, IL"
        />
      </main>
      <Footer />
    </div>
  );
}

/* ──────────────────────── HERO ──────────────────────── */
function BowlesHero() {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Picture
          src="/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-detail.webp"
          alt="404 N Vine St · Hinsdale · cedar shake home from above, April 2026"
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
            Locke &amp; Ladder &middot; April 28, 2026 field review
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
            For Eric.
            <br />
            <span className="text-paper/80">404 N Vine Street.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 max-w-2xl font-serif italic text-paper/85 text-base md:text-xl leading-relaxed"
          >
            Walked, droned, and scoped. Here is what your $107,712.68 actually buys.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="pt-8 border-t border-paper/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-6">
            <HeroCell label="For" value="Eric Bowles" />
            <HeroCell label="Property" value="404 N Vine St · Hinsdale, IL" />
            <HeroCell label="Estimate" value="#4798 · April 22, 2026 (draft)" />
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
