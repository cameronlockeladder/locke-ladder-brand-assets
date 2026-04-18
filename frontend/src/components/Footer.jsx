import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      data-testid="footer"
      className="bg-ink text-paper/80 py-16 px-6 lg:px-12 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <img
              src="/assets/brand/locke-ladder/ll-icon.webp"
              alt="Locke & Ladder"
              className="h-8 w-auto invert brightness-0"
            />
            <span className="font-brand text-xl tracking-[0.08em] uppercase text-paper font-semibold">
              Locke &amp; Ladder
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed max-w-md text-paper/60">
            A Chicagoland exterior company started by an art student. Roofing,
            siding, windows and doors, and gutters, with a standard for beauty
            and a memory for every detail we install.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow text-paper/50">Prepared For</div>
          <div className="mt-3 text-lg text-paper font-medium">Christ Church | Oak Brook</div>
          <div className="mt-1 text-sm text-paper/60">The Board of Trustees</div>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow text-paper/50">Your point of contact</div>
          <div className="mt-3 text-lg text-paper font-medium">Jon Strand</div>
          <div className="mt-1 text-sm text-paper/60">Founder &amp; Project Principal</div>
          <div className="mt-4 text-sm text-paper/60">Pastor&rsquo;s son. Art student. Builder.</div>
        </div>

        <div className="md:col-span-12 pt-8 mt-8 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-4 font-brand text-[11px] uppercase tracking-[0.2em] text-paper/45">
          <span>&copy; {new Date().getFullYear()} Locke &amp; Ladder</span>
          <span>Proposal · Confidential</span>
        </div>
      </div>
    </footer>
  );
}
