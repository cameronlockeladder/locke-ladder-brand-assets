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

        {/* Copy FIRST · so the section reads even without photos */}
        <div className="mt-10 max-w-3xl space-y-5 text-body text-lg leading-relaxed" data-testid="alignment-body">
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

        {/* Two visuals · Jon on a church roof (FAC video) + Jon teaching */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <figure
            data-testid="alignment-photo-jon"
            className="relative overflow-hidden bg-ink/5 aspect-[4/5]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              data-testid="alignment-jon-video"
            >
              <source
                src="/assets/videos/projects/faith-apostolic-church/v2-0001-jon-at-fac-faith-apostolic-church-full.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent pointer-events-none" />
            <figcaption className="absolute bottom-5 left-5 font-brand text-[10px] uppercase tracking-[0.24em] bg-ink/60 backdrop-blur-sm text-paper px-2.5 py-1">
              Jon &middot; Faith Apostolic Church, on the roof
            </figcaption>
          </figure>

          <figure
            data-testid="alignment-photo-dad-graham"
            className="relative overflow-hidden bg-ink/5 aspect-[4/5]"
          >
            <img
              src="/assets/photos/team/jon-dad-billy-graham.webp"
              alt="Jon's father and Billy Graham · framed photograph"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent pointer-events-none" />
            <figcaption className="absolute bottom-5 left-5 font-brand text-[10px] uppercase tracking-[0.24em] bg-ink/60 backdrop-blur-sm text-paper px-2.5 py-1">
              Jon&rsquo;s father with Billy Graham
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
