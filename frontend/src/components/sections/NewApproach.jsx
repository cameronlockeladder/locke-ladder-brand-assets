import React from "react";
import { SectionTag } from "@/components/primitives";

export default function NewApproach() {
  return (
    <section
      id="new-approach"
      data-testid="section-new-approach"
      className="relative bg-ink text-paper py-28 md:py-36 px-6 lg:px-12 border-t border-ink overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionTag
              number=""
              title="Our approach"
              className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
            />
            <h2
              className="mt-6 font-display display-tight text-[11vw] sm:text-5xl lg:text-[5.2vw] leading-[0.98] text-paper"
              data-testid="new-approach-headline"
            >
              A new approach
              <br />to contracting.
            </h2>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            {/* Vertical video · centered, NOT full-bleed. Sits like a phone screen against ink. */}
            <div
              className="relative w-full max-w-[420px] aspect-[9/16] overflow-hidden bg-black shadow-[0_40px_120px_-30px_rgba(213,168,80,0.35)] ring-1 ring-paper/10"
              data-testid="new-approach-video-wrap"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="new-approach-video"
              >
                <source
                  src="/assets/videos/brand/new-approach-to-contracting/new-approach-to-contracting-with-music.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
