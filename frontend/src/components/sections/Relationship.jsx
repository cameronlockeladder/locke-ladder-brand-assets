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
        <SectionTag number="02 / 12" title="Local Experts" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.4vw] leading-[0.98]"
              data-testid="relationship-headline"
            >
              Impact is our
              <br />rally cry.
            </motion.h2>

            <p className="mt-10 max-w-2xl text-body text-lg leading-relaxed" data-testid="relationship-body">
              Locke &amp; Ladder&rsquo;s core ethos revolves around &ldquo;impact&rdquo;.
              That rally cry dictates our culture, our expectation of excellence,
              and requires building long-term trusted relationships in the
              communities we serve. Christ Church will benefit from Locke &amp;
              Ladder&rsquo;s long-term stability, local presence, quick response,
              and honest evaluations and expertise.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <figure
              className="relative overflow-hidden bg-ink/5 aspect-[4/5]"
              data-testid="relationship-visual"
            >
              <img
                src="/assets/photos/team/team-photo.webp"
                alt="Locke & Ladder team"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
