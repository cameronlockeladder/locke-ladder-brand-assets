import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

const TEAM_IMAGES = [
  { src: "/assets/photos/team/team-photo.webp", span: "col-span-2 md:col-span-3 row-span-2 aspect-[4/5] md:aspect-[4/5]", label: "The crew" },
  { src: "/assets/photos/team/crew-measure.webp", span: "col-span-1 md:col-span-2 aspect-[4/5]", label: "On-site measure" },
  { src: "/assets/photos/team/roofers-de-sol.webp", span: "col-span-1 md:col-span-2 aspect-[4/5]", label: "Roofers at work" },
  { src: "/assets/photos/team/truck-bw.webp", span: "col-span-2 md:col-span-4 aspect-[16/9]", label: "Every morning" },
  { src: "/assets/photos/team/crew-window-install.webp", span: "col-span-1 md:col-span-2 aspect-[4/5]", label: "Window install" },
  { src: "/assets/photos/team/crew-siding-install.webp", span: "col-span-1 md:col-span-2 aspect-[4/5]", label: "Siding install" },
  { src: "/assets/photos/team/trucks-irving.webp", span: "col-span-2 md:col-span-3 aspect-[4/3]", label: "Trucks, Irving Park" },
  { src: "/assets/photos/team/window-install-house.webp", span: "col-span-2 md:col-span-3 aspect-[4/3]", label: "House-side detail" },
];

export default function Team() {
  return (
    <section
      id="team"
      data-testid="section-team"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="06 / 07" title="Relationship" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif font-light display-tight text-[11vw] sm:text-5xl lg:text-[5.2vw] leading-[0.98]">
              We came here for a
              <br />
              <span className="italic">long relationship.</span>
            </h2>
            <p className="mt-8 max-w-xl text-body text-base leading-relaxed">
              The steeple first. Then the sanctuary. Then the mansard when
              its time comes &mdash; and the decades of small, uninteresting,
              essential decisions in between. To us, that is the work. Not
              a single bid, won once, then gone.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border-t border-ink/15 pt-6 space-y-5">
              <Line k="Accountable lead" v="Jon Strand, Founder" sub="Pastor&rsquo;s son. Art student. Builder." />
              <Line k="Metal shop" v="In-house" sub="We fabricate our own. We don&rsquo;t sub it out." />
              <Line k="Founding principle" v="Say no to the wrong product" sub="The list of materials we refuse is long." />
              <Line k="Long game" v="Roofing &rarr; siding &rarr; windows &rarr; gutters" sub="Trusted on the next project, not just this one." />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {TEAM_IMAGES.map((t, i) => (
            <figure key={i} className={`relative group overflow-hidden bg-ink/5 ${t.span}`} data-testid={`team-image-${i}`}>
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-paper">
                <span className="bg-ink/60 backdrop-blur-sm px-2 py-1 font-serif italic text-xs">{t.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <Caption className="mt-10 max-w-2xl">
          Our trucks already know the way to Christ Church. We are Chicagoland-based,
          same-team every morning, and trained on the metals a building like this
          actually needs.
        </Caption>
      </div>
    </section>
  );
}

function Line({ k, v, sub }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-ink/10 pb-5">
      <div>
        <div
          className="font-serif text-ink text-base md:text-lg"
          dangerouslySetInnerHTML={{ __html: v }}
        />
        {sub && (
          <div
            className="text-xs text-slate mt-0.5"
            dangerouslySetInnerHTML={{ __html: sub }}
          />
        )}
      </div>
      <div className="font-brand text-[11px] uppercase tracking-[0.22em] text-slate sm:text-right">
        {k}
      </div>
    </div>
  );
}
