import React from "react";
import { motion } from "framer-motion";
import { SectionTag } from "@/components/primitives";

export default function Relationship() {
  return (
    <section
      id="relationship"
      data-testid="section-relationship"
      className="relative bg-paper pt-28 md:pt-36 pb-28 md:pb-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="02 / 14" title="Alignment" />

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="mt-8 font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.4vw] leading-[0.98] max-w-5xl"
          data-testid="alignment-headline"
        >
          We speak
          <br />your language.
        </motion.h2>

        {/* Two-photo layout · Jon teaching + Jon's Dad with Billy Graham */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <PhotoPlaceholder
            testId="alignment-photo-jon"
            label="Jon Strand · teaching / on a roof"
            aspect="aspect-[4/5]"
          />
          <PhotoPlaceholder
            testId="alignment-photo-dad-graham"
            label="Jon's father with Billy Graham"
            aspect="aspect-[4/5]"
          />
        </div>

        {/* Copy block */}
        <div className="mt-14 max-w-3xl space-y-5 text-body text-lg leading-relaxed" data-testid="alignment-body">
          <p>
            Founder Jon Strand grew up traveling the world with Billy Graham.
            His father has been on staff as Outreach Pastor at Grace Community
            Church (Noblesville, Indiana) and currently Mercy Road Church
            (Carmel Campus). Jon served as a facilities manager at Grace for
            3 years.
          </p>
          <p>As such we approach your project with a unique understanding.</p>
          <p>
            We understand the dynamics, challenges, and considerations when
            undergoing large scale construction inside of an active and
            vibrant church community. We understand the responsibility of
            stewardship of resources. We understand that getting this project
            right will free up those resources for generations to come.
          </p>
          <p>
            Locke &amp; Ladder was founded on a desire for impact &mdash; on
            the lives of our own people first, followed by a larger community
            impact. Christ Church&rsquo;s vision to <em>&ldquo;LIFT 10,000
            toward their God-given potential&rdquo;</em> resonates.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhotoPlaceholder({ testId, label, aspect }) {
  return (
    <figure
      data-testid={testId}
      className={`relative overflow-hidden bg-ink/5 border border-dashed border-ink/20 ${aspect} flex items-center justify-center`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-8">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-ink/40" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <circle cx="8.5" cy="10" r="1.5" />
          <path d="M21 16l-5-5-9 9" />
        </svg>
        <div className="font-brand text-[11px] uppercase tracking-[0.24em] text-ink/55">
          Photo pending
        </div>
        <div className="font-serif italic text-ink/70 text-sm leading-snug max-w-[240px]">
          {label}
        </div>
      </div>
    </figure>
  );
}
