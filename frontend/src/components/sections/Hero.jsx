import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-paper-warm"
    >
      {/* Steeple image — near full bleed, anchored right */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.25, 1, 0.5, 1] }}
          src="/assets/photos/projects/christ-church/dark-steeple-ne-leak.jpg"
          alt="The Christ Church Oak Brook steeple"
          className="w-full h-full object-cover object-[65%_30%]"
          data-testid="hero-steeple-image"
        />
        {/* Warm, welcoming wash — keeps left-side headline legible without killing the steeple */}
        <div className="absolute inset-0 bg-gradient-to-r from-paper-warm via-paper-warm/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-warm/30 via-transparent to-paper-warm/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 md:pt-36 pb-16 min-h-[100svh] flex flex-col justify-between">
        {/* Upper lockup */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="eyebrow text-warm-gold">Proposal · V4</span>
          </div>
          <span className="hidden sm:inline-block h-3 w-px bg-ink/25" />
          <div className="eyebrow text-ink/60">Prepared by Locke &amp; Ladder</div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-[1100px]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="font-serif font-light display-tight text-ink text-[13vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.92]"
            data-testid="hero-headline"
          >
            An icon of
            <br />
            <span className="italic text-ink">Oak Brook.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 max-w-xl font-serif italic text-lg md:text-xl text-ink/75 leading-relaxed"
          >
            Worth preserving well — for the generations who know its steeple
            before they know the address.
          </motion.p>
        </div>

        {/* Bottom lockup */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-end pt-8 border-t border-ink/15"
        >
          <div>
            <div className="eyebrow text-ink/50">Client</div>
            <div className="mt-2 font-serif text-base md:text-lg text-ink">
              Christ Church <span className="text-ink/40">|</span> Oak Brook
            </div>
          </div>
          <div>
            <div className="eyebrow text-ink/50">Scope</div>
            <div className="mt-2 font-serif text-base md:text-lg text-ink">
              Sanctuary &amp; Steeple <span className="italic text-ink/50">· Mansard (opt.)</span>
            </div>
          </div>
          <div>
            <div className="eyebrow text-ink/50">Priority</div>
            <div className="mt-2 font-serif text-base md:text-lg text-ink">Stop the leak</div>
          </div>
          <div className="flex md:justify-end">
            <button
              onClick={() => document.getElementById("diagnosis")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="hero-scroll-button"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink/70 hover:text-ink transition-colors"
            >
              Begin
              <span className="relative inline-block w-10 h-px bg-ink/50 group-hover:bg-ink transition-colors">
                <span className="absolute -right-1 -top-[3px] w-[7px] h-[7px] border-r border-t border-ink/60 group-hover:border-ink rotate-45" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
