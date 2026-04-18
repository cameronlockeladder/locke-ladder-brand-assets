import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { SectionTag, Caption } from "@/components/primitives";

/**
 * The Laskey Residence full-bleed side by side.
 * Left = real cedar. Right = Brava cedar. Taken from our own project.
 */
export default function LaskeyReveal() {
  return (
    <section
      id="laskey-reveal"
      data-testid="section-laskey-reveal"
      className="relative bg-ink text-paper"
    >
      <div className="px-6 lg:px-12 pt-20 pb-10 max-w-[1600px] mx-auto">
        <SectionTag
          number=""
          title="A side by side from our Laskey project"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />
        <div className="mt-6 flex flex-col lg:flex-row items-end lg:items-baseline gap-6 lg:gap-16">
          <h2 className="font-display display-tight text-[10vw] sm:text-5xl lg:text-[4.6vw] leading-[1] text-paper max-w-4xl">
            Real cedar on the left. Brava cedar on the right.
          </h2>
          <p className="max-w-md text-paper/70 text-base leading-relaxed">
            Both halves are the same house at Laskey, captured the same day.
            Drag the divider to compare them in the same light.
          </p>
        </div>
      </div>

      <div className="relative w-full" data-testid="laskey-compare">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-15.jpg"
              alt="Laskey residence, real cedar side"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="/assets/photos/projects/locke-ladder-brava-cedar-projects/laskey-pre-painted-16.jpg"
              alt="Laskey residence, Brava cedar side"
            />
          }
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backdropFilter: "blur(6px)",
                background: "rgba(26,28,32,0.55)",
                border: "1px solid rgba(249,248,246,0.85)",
                color: "#F9F8F6",
                height: 58,
                width: 58,
              }}
              linesStyle={{ background: "#F9F8F6", opacity: 0.95, width: 1 }}
            />
          }
          style={{ height: "clamp(420px, 82vh, 960px)" }}
        />
        <span className="absolute top-5 left-5 md:top-8 md:left-8 bg-ink/70 text-paper font-brand text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 backdrop-blur-sm">
          Real cedar
        </span>
        <span className="absolute top-5 right-5 md:top-8 md:right-8 bg-warm-gold text-ink font-brand text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 font-semibold">
          Brava cedar · Locke &amp; Ladder client
        </span>
        <span className="absolute bottom-5 left-5 md:bottom-8 md:left-8 font-brand text-[10px] uppercase tracking-[0.22em] text-paper/75">
          Laskey Residence
        </span>
      </div>

      <div className="px-6 lg:px-12 pt-8 pb-20 max-w-[1600px] mx-auto">
        <Caption className="text-paper/60">
          Drag left or right. The tell is in the shadow, not the texture.
        </Caption>
      </div>
    </section>
  );
}
