import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { SectionTag, Caption } from "@/components/primitives";

export default function Visualizer() {
  return (
    <section
      id="visualizer"
      data-testid="section-visualizer"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <SectionTag number="—" title="Christ Church in Brava" />
            <h2 className="mt-6 font-serif font-light display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]">
              Same church.
              <br />
              <span className="italic">Longer memory.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="text-body text-base leading-relaxed">
              Drag the divider to see the campus as it is today — and as it would be with
              Brava Aspen Cedar Shake. The silhouette stays. The posture stays. The
              maintenance story changes.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <BeforeAfter
            beforeSrc="/assets/photos/projects/christ-church/hero-campus.jpg"
            afterSrc="/assets/photos/projects/christ-church/hero-campus-brava-aspen.png"
            beforeLabel="Today"
            afterLabel="Brava Aspen"
            testId="visualizer-campus"
            caption="Campus — south approach"
          />
          <BeforeAfter
            beforeSrc="/assets/photos/projects/christ-church/steeple-closeup.jpg"
            afterSrc="/assets/photos/projects/christ-church/steeple-closeup-brava-aspen.png"
            beforeLabel="Today"
            afterLabel="Brava Aspen"
            testId="visualizer-steeple"
            caption="Steeple — west face"
          />
          <BeforeAfter
            beforeSrc="/assets/photos/projects/christ-church/side-entry.jpg"
            afterSrc="/assets/photos/projects/christ-church/side-entry-brava-aspen.png"
            beforeLabel="Today"
            afterLabel="Brava Aspen"
            testId="visualizer-side"
            caption="Side entry"
          />
        </div>

        <Caption className="mt-8 text-center">
          Renders are directional. Final color is a Board decision we will walk through together.
        </Caption>
      </div>
    </section>
  );
}

function BeforeAfter({ beforeSrc, afterSrc, beforeLabel, afterLabel, caption, testId }) {
  return (
    <figure data-testid={testId} className="fade-in">
      <div className="relative overflow-hidden bg-ink/5">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={beforeSrc}
              alt={beforeLabel}
              style={{ objectFit: "cover" }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={afterSrc}
              alt={afterLabel}
              style={{ objectFit: "cover" }}
            />
          }
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backdropFilter: "blur(6px)",
                background: "rgba(26,28,32,0.45)",
                border: "1px solid rgba(249,248,246,0.8)",
                color: "#F9F8F6",
                height: 52,
                width: 52,
              }}
              linesStyle={{ background: "#F9F8F6", opacity: 0.9, width: 1 }}
            />
          }
          style={{ height: "clamp(360px, 70vh, 820px)" }}
        />
        {/* Labels */}
        <span className="absolute top-4 left-4 bg-ink/70 text-paper text-[11px] uppercase tracking-[0.22em] px-3 py-1 backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="absolute top-4 right-4 bg-paper/80 text-ink text-[11px] uppercase tracking-[0.22em] px-3 py-1 backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between">
        <span className="font-serif italic text-ink/80 text-base">{caption}</span>
        <Caption>Drag ← / →</Caption>
      </figcaption>
    </figure>
  );
}
