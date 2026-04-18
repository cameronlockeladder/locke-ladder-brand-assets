import React from "react";
import { SectionTag, Caption } from "@/components/primitives";

// Dense, scattered, human. Shows how we like to work.
const TEAM_IMAGES = [
  { src: "/assets/photos/team/team-photo.webp", label: "The crew" },
  { src: "/assets/photos/team/extras/collage-people-1.jpg", label: "Out on a job" },
  { src: "/assets/photos/team/extras/collage-people-5.jpg", label: "After the pour" },
  { src: "/assets/photos/team/crew-measure.webp", label: "On-site measure" },
  { src: "/assets/photos/team/roofers-de-sol.webp", label: "Roofers at work" },
  { src: "/assets/photos/team/truck-bw.webp", label: "Every morning" },
  { src: "/assets/photos/team/crew-window-install.webp", label: "Window install" },
  { src: "/assets/photos/team/crew-siding-install.webp", label: "Siding install" },
  { src: "/assets/photos/team/crew-window-install-jons-house.webp", label: "Jon's house" },
  { src: "/assets/photos/team/trucks-irving.webp", label: "Trucks, Irving Park" },
  { src: "/assets/photos/team/window-install-house.webp", label: "House-side detail" },
  { src: "/assets/photos/team/extras/examples-messmer-13.jpg", label: "Messmer" },
  { src: "/assets/photos/team/extras/travis-in-ll-truck-gif-6.jpg", label: "Travis, in the truck" },
  { src: "/assets/photos/team/extras/bitners-metal-during-4.jpg", label: "Bitners, metal" },
  { src: "/assets/photos/team/extras/bitners-metal-during-9.jpg", label: "Bitners, metal" },
  { src: "/assets/photos/team/extras/bitners-metal-during-11.jpg", label: "Bitners, metal" },
  { src: "/assets/photos/team/extras/bitners-metal-during-13-1.jpg", label: "Bitners, metal" },
  { src: "/assets/photos/team/extras/team-photo.jpg", label: "A full crew day" },
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
            <h2 className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.2vw] leading-[0.98]">
              We came here for a long relationship.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-body">
              The steeple first. Then the sanctuary. Then the mansard when its
              time comes, and the decades of small, uninteresting, essential
              decisions in between. To us, that is the work. Not a single bid,
              won once, then gone.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border-t border-ink/15 pt-6 space-y-5">
              <Line k="Accountable lead" v="Jon Strand, Founder" sub="Pastor&rsquo;s son. Art student. Builder." />
              <Line k="Metal shop" v="In-house" sub="We fabricate our own. We don&rsquo;t sub it out." />
              <Line k="Founding principle" v="Say no to the wrong product" sub="The list of materials we refuse is long." />
              <Line k="Long game" v="Roofing, siding, windows, gutters" sub="Trusted on the next project, not just this one." />
            </div>
          </div>
        </div>

        {/* Dense, playful mosaic. Many sizes, slight rotations, overlapping rhythm. */}
        <div className="mt-20">
          <div className="flex items-baseline justify-between mb-6">
            <div className="eyebrow text-warm-gold">How we like to work</div>
            <Caption>18 moments · 1 crew</Caption>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 auto-rows-[120px] md:auto-rows-[160px] gap-2 md:gap-3">
            {TEAM_IMAGES.map((t, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden bg-ink/5 ${tileSpan(i)}`}
                data-testid={`team-image-${i}`}
              >
                <img
                  src={t.src}
                  alt={t.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-ink/0 hover:bg-ink/30 transition-colors" />
                <figcaption className="absolute bottom-2 left-2 right-2">
                  <span className="bg-ink/70 backdrop-blur-sm text-paper font-brand text-[9px] uppercase tracking-[0.22em] px-1.5 py-0.5 rounded-[2px]">
                    {t.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <Caption className="mt-10 max-w-2xl">
          Same team every morning. Chicagoland based. Trained on the metals a
          building like this actually needs.
        </Caption>
      </div>
    </section>
  );
}

// A varied tiling pattern: mix of 1x1, 2x1, 1x2, 2x2. Deterministic per index.
function tileSpan(i) {
  const patterns = [
    "col-span-2 row-span-2",     // big
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];
  return patterns[i % patterns.length];
}

function Line({ k, v, sub }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-ink/10 pb-5">
      <div>
        <div className="text-ink text-base md:text-lg font-medium" dangerouslySetInnerHTML={{ __html: v }} />
        {sub && <div className="text-xs text-slate mt-0.5" dangerouslySetInnerHTML={{ __html: sub }} />}
      </div>
      <div className="font-brand text-[11px] uppercase tracking-[0.22em] text-slate sm:text-right">
        {k}
      </div>
    </div>
  );
}
