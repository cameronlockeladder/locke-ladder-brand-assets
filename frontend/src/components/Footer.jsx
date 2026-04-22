import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      data-testid="footer"
      className="bg-ink text-paper/80 py-16 px-6 lg:px-12 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto">
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
        <p
          className="mt-6 text-sm leading-relaxed max-w-2xl text-paper/60"
          data-testid="footer-ll-copy"
        >
          Locke &amp; Ladder is a Chicagoland exterior company specializing in
          performance roofing, high efficiency windows, siding, doors and
          gutter systems.
        </p>

        <div className="pt-8 mt-8 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-4 font-brand text-[11px] uppercase tracking-[0.2em] text-paper/45">
          <span>&copy; {new Date().getFullYear()} Locke &amp; Ladder</span>
          <span>Proposal &middot; Confidential</span>
        </div>
      </div>
    </footer>
  );
}
