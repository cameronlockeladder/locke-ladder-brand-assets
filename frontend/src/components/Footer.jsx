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
              className="h-8 w-auto invert brightness-0 opacity-0"
              style={{ display: "none" }}
            />
            <span className="font-serif text-2xl text-paper">Locke <span className="italic">&amp;</span> Ladder</span>
          </div>
          <p className="mt-6 text-sm leading-relaxed max-w-md text-paper/60">
            A Chicagoland exterior company founded by an art student. Roofing, siding,
            windows &amp; doors, and gutters — with a standard for beauty and a memory for detail.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow text-paper/50">Prepared For</div>
          <div className="mt-3 font-serif text-lg text-paper">Christ Church | Oak Brook</div>
          <div className="mt-1 text-sm text-paper/60">The Board of Trustees</div>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow text-paper/50">Accountable Lead</div>
          <div className="mt-3 font-serif text-lg text-paper">Jon Locke</div>
          <div className="mt-1 text-sm text-paper/60">Founder &amp; Project Principal</div>
          <div className="mt-4 text-sm text-paper/60">Pastor&rsquo;s son. Art student. Builder.</div>
        </div>

        <div className="md:col-span-12 pt-8 mt-8 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-paper/45">
          <span>© {new Date().getFullYear()} Locke &amp; Ladder</span>
          <span>Proposal v4 &nbsp;·&nbsp; Confidential</span>
        </div>
      </div>
    </footer>
  );
}
