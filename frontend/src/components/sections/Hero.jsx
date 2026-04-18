import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Background: hero-timeline video, muted autoplay */}
      <div className="absolute inset-0">
        <video
          data-testid="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/photos/projects/christ-church/steeple-closeup.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/assets/photos/projects/christ-church/hero-timeline.mp4" type="video/mp4" />
          <source src="/assets/photos/projects/christ-church/steeple-closeup.mp4" type="video/mp4" />
        </video>
        {/* Dark wash that keeps the footage rich + headline legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/70" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 md:pt-36 pb-16 min-h-[100svh] flex flex-col justify-between">
        {/* Lockup: L&L + CC logo */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="eyebrow text-warm-gold">Proposal · V4</span>
          </div>
          <span className="hidden sm:inline-block h-3 w-px bg-paper/25" />
          <div className="eyebrow text-paper/70">Prepared by Locke &amp; Ladder</div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-[1200px]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="font-display text-paper text-[13vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.9] display-tight"
            data-testid="hero-headline"
          >
            An icon of
            <br />
            Oak&nbsp;Brook.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 max-w-xl text-lg md:text-xl text-paper/80 leading-relaxed font-light"
          >
            The congregation knows the steeple before they know the address.
            We built this proposal around keeping it that way.
          </motion.p>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-end pt-8 border-t border-paper/20"
        >
          <div>
            <div className="eyebrow text-paper/55">Client</div>
            <div className="mt-2 text-base md:text-lg text-paper font-medium">
              Christ Church <span className="text-paper/40">|</span> Oak Brook
            </div>
          </div>
          <div>
            <div className="eyebrow text-paper/55">Scope</div>
            <div className="mt-2 text-base md:text-lg text-paper font-medium">
              Sanctuary &amp; Steeple <span className="text-paper/55 font-normal">· Mansard (opt.)</span>
            </div>
          </div>
          <div>
            <div className="eyebrow text-paper/55">Priority</div>
            <div className="mt-2 text-base md:text-lg text-paper font-medium">Stop the leak</div>
          </div>
          <div className="flex md:justify-end">
            <button
              onClick={() => document.getElementById("diagnosis")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="hero-scroll-button"
              className="group inline-flex items-center gap-3 font-brand text-[11px] uppercase tracking-[0.28em] text-paper/80 hover:text-paper transition-colors"
            >
              Begin
              <span className="relative inline-block w-10 h-px bg-paper/50 group-hover:bg-paper transition-colors">
                <span className="absolute -right-1 -top-[3px] w-[7px] h-[7px] border-r border-t border-paper/60 group-hover:border-paper rotate-45" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
