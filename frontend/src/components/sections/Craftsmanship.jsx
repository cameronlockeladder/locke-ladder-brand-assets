import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { SectionTag, Caption, VerifyTag } from "@/components/primitives";

export default function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      data-testid="section-craftsmanship"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionTag number="05 / 07" title="Craft — Snape Residence" />
            <h2 className="mt-6 font-serif font-light display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]">
              The details other
              <br />
              <span className="italic">crews can&rsquo;t replicate.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-base leading-relaxed">
              Snape is a nearby residence that asked us to solve what other roofers walked
              away from. Custom metals, copper flashing, hand-dressed valleys. The same
              shop that will treat the Christ Church steeple.
            </p>
          </div>
        </div>

        {/* Before/after using a clean field shot vs detail to convey craftsmanship delta */}
        <div className="mt-16 space-y-10">
          <figure data-testid="snape-compare" className="fade-in">
            <div className="relative overflow-hidden bg-ink/5">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/assets/photos/projects/snape/front-elevation.jpg"
                    alt="Field elevation"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/assets/photos/projects/snape/chimney-detail.jpg"
                    alt="Detail — chimney metalwork"
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
                style={{ height: "clamp(380px, 72vh, 820px)" }}
              />
              <span className="absolute top-4 left-4 bg-ink/70 text-paper text-[11px] uppercase tracking-[0.22em] px-3 py-1 backdrop-blur-sm">
                Field
              </span>
              <span className="absolute top-4 right-4 bg-paper/80 text-ink text-[11px] uppercase tracking-[0.22em] px-3 py-1 backdrop-blur-sm">
                Detail
              </span>
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between">
              <span className="font-serif italic text-ink/80 text-base">
                Snape — field elevation vs. hand-dressed chimney metalwork
              </span>
              <Caption>Drag ← / →</Caption>
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DetailTile src="/assets/photos/projects/snape/copper-detail.jpg" label="Copper loop — entry" />
            <DetailTile src="/assets/photos/projects/snape/dormer-detail.jpg" label="Dormer — step flashing" />
            <DetailTile src="/assets/photos/projects/snape/aerial-tight.jpg" label="Aerial — field composure" />
          </div>
        </div>
      </div>
    </section>
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
      <figcaption className="mt-3 flex items-baseline justify-between">
        <span className="font-serif italic text-ink/75 text-sm">{label}</span>
      </figcaption>
    </figure>
  );
}
