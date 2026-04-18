import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

const TEAM_IMAGES = [
  { src: "/assets/photos/team/team-photo.webp", span: "col-span-2 md:col-span-3 row-span-2 aspect-[4/5] md:aspect-[4/5]", label: "The crew" },
  { src: "/assets/photos/team/crew-measure.webp", span: "col-span-1 md:col-span-2 aspect-[4/5]", label: "On-site measure" },
  { src: "/assets/photos/team/roofers-de-sol.webp", span: "col-span-1 md:col-span-2 aspect-[4/5]", label: "Roofers at work" },
  { src: "/assets/photos/team/truck-bw.webp", span: "col-span-2 md:col-span-4 aspect-[16/9]", label: "The company, every morning" },
  { src: "/assets/photos/team/crew-window-install.webp", span: "col-span-1 md:col-span-2 aspect-[4/5]", label: "Window install" },
  { src: "/assets/photos/team/crew-siding-install.webp", span: "col-span-1 md:col-span-2 aspect-[4/5]", label: "Siding install" },
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
              We are not bidding
              <br />
              <span className="italic">on a project.</span>
            </h2>
            <p className="mt-8 max-w-xl text-body text-base leading-relaxed">
              We are asking to be trusted with the building. The steeple first, then the
              sanctuary, then the mansard when it is time — and the decades of small,
              uninteresting, essential decisions in between. That is the work we came for.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border-t border-ink/15 pt-6 space-y-5">
              <Line k="Accountable lead" v="Jon Locke, Founder" sub="Pastor's son. Art student. Builder." />
              <Line k="Metal shop" v="In-house" sub="We fabricate, we don't sub it out" />
              <Line k="Founding principle" v="Say no to the wrong product" sub="The list of materials we refuse is long" />
              <Line k="Long game" v="Roofing → siding → windows → gutters" sub="Trusted on the next thing, not just this one" />
            </div>
          </div>
        </div>

        {/* Editorial team grid */}
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
          A Locke &amp; Ladder truck has been parked at Christ Church Oak Brook. Our
          crews are Chicagoland-based, same-team every morning, and trained on the
          metals this building will need.
        </Caption>
      </div>
    </section>
  );
}

function Line({ k, v, sub }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-ink/10 pb-5">
      <div>
        <div className="font-serif text-ink text-base md:text-lg">{v}</div>
        {sub && <div className="text-xs text-slate mt-0.5">{sub}</div>}
      </div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-slate sm:text-right">{k}</div>
    </div>
  );
}
