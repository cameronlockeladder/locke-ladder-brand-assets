import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { SectionTag, Caption } from "@/components/primitives";

export default function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      data-testid="section-craftsmanship"
      className="relative bg-paper border-t border-rule"
    >
      {/* Ambient background video — Snape */}
      <div className="relative w-full h-[56vh] md:h-[70vh] overflow-hidden bg-ink">
        <video
          data-testid="craftsmanship-background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/assets/photos/projects/snape/hero-aerial.jpg"
        >
          <source src="/assets/photos/projects/snape/full-bleed-background-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/80" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12 max-w-[1600px] mx-auto">
          <SectionTag
            number="05 / 07"
            title="Craft &mdash; The Snape Residence"
            className="[&_.eyebrow]:text-paper/70 [&_.font-serif]:text-paper/90"
          />
          <h2 className="mt-6 font-serif font-light display-tight text-[12vw] sm:text-5xl lg:text-[5.6vw] text-paper leading-[0.95] max-w-5xl pb-6">
            The details other crews
            <br />
            <span className="italic">walk away from.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-2xl mb-14">
          <p className="text-body text-lg leading-relaxed">
            Snape is a residence down the road that asked us to solve what
            other roofers told them couldn&rsquo;t be solved. Custom metals,
            hand-dressed copper, and a tolerance for work that takes the time
            it takes. The same shop that would treat this steeple.
          </p>
        </div>

        <div className="space-y-14">
          <BeforeAfter
            testId="snape-before-after-dormer"
            beforeSrc="/assets/photos/projects/snape/before-after-slider-dormer-aligned/before-dormer-aligned-1600.webp"
            afterSrc="/assets/photos/projects/snape/before-after-slider-dormer-aligned/after-dormer-1600.webp"
            beforeLabel="Before"
            afterLabel="After"
            caption="Snape dormer &mdash; tear-off to finished copper &amp; slate"
          />

          <BeforeAfter
            testId="snape-before-after-detail"
            beforeSrc="/assets/photos/projects/snape/before-after-slider-dormer/before-dormer-close-up.jpg"
            afterSrc="/assets/photos/projects/snape/before-after-slider-dormer/after-aerial-chimney-slate-roof-detail.jpg"
            beforeLabel="Close-up"
            afterLabel="Aerial detail"
            caption="Snape chimney &amp; slate &mdash; ground view to aerial"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <DetailTile src="/assets/photos/projects/snape/copper-detail.jpg" label="Copper loop &mdash; entry" />
          <DetailTile src="/assets/photos/projects/snape/dormer-detail.jpg" label="Dormer &mdash; step flashing" />
          <DetailTile src="/assets/photos/projects/snape/aerial-tight.jpg" label="Aerial &mdash; field composure" />
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ beforeSrc, afterSrc, beforeLabel, afterLabel, caption, testId }) {
  return (
    <figure data-testid={testId} className="fade-in">
      <div className="relative overflow-hidden bg-ink/5">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={beforeSrc} alt={beforeLabel} style={{ objectFit: "cover" }} />}
          itemTwo={<ReactCompareSliderImage src={afterSrc} alt={afterLabel} style={{ objectFit: "cover" }} />}
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
          style={{ height: "clamp(380px, 72vh, 820px)" }}
        />
        <span className="absolute top-4 left-4 bg-ink/70 text-paper font-brand text-[11px] uppercase tracking-[0.22em] px-3 py-1 backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="absolute top-4 right-4 bg-paper/80 text-ink font-brand text-[11px] uppercase tracking-[0.22em] px-3 py-1 backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between">
        <span
          className="font-serif italic text-ink/80 text-base"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
        <Caption>Drag &larr; / &rarr;</Caption>
      </figcaption>
    </figure>
  );
}

function DetailTile({ src, label }) {
  return (
    <figure className="fade-in group">
      <div className="relative overflow-hidden aspect-[4/5] bg-ink/5">
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="mt-3">
        <span
          className="font-serif italic text-ink/75 text-sm"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </figcaption>
    </figure>
  );
}
