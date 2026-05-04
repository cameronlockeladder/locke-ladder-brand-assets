import React from "react";
import { motion } from "framer-motion";

export default function HinsdaleHero() {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-detail.webp"
          alt="Cedar shake roofs in Hinsdale and Inverness, photographed by drone, April 2026"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/40 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/20 to-ink/55" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 md:pt-36 pb-16 min-h-[100svh] flex flex-col justify-between">
        {/* Top row · L&L lockup + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-4">
            <img
              src="/assets/brand/locke-ladder/ll-icon.webp"
              alt="Locke & Ladder"
              data-testid="hero-ll-icon"
              className="h-7 md:h-8 w-auto invert brightness-0 opacity-95"
            />
            <span className="font-brand text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-paper/85">
              Locke &amp; Ladder &middot; Field review, April 2026
            </span>
          </div>
        </motion.div>

        {/* Big plain headline */}
        <div className="max-w-[1300px]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="font-display text-paper text-[12vw] sm:text-[9vw] lg:text-[7.4vw] leading-[0.92] display-tight"
            data-testid="hero-headline"
          >
            Two cedar roofs.
            <br />
            <span className="text-paper/80">One better way to look</span>
            <br />
            <span className="text-paper/80">at the decision.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 max-w-2xl font-serif italic text-paper/85 text-base md:text-xl leading-relaxed"
            data-testid="hero-subhead"
          >
            Hinsdale Cedar, plainly. A walk-through of what we saw at
            Eric Bowles&rsquo; home and Mark Lindahl&rsquo;s home, what
            drives the price, and what Brava actually changes.
          </motion.p>
        </div>

        {/* Scope bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="pt-8 border-t border-paper/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-6">
            <HeroCell label="For" value="Eric Bowles &middot; Mark Lindahl" />
            <HeroCell label="Field review" value="April 28, 2026" />
            <HeroCell label="Sales rep" value="Joe DeBias" />
            <div className="flex md:justify-end items-end pt-1">
              <button
                onClick={() => document.getElementById("two-homes")?.scrollIntoView({ behavior: "smooth" })}
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
      <div className="text-base md:text-lg text-paper font-medium leading-snug">
        <span dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
}
