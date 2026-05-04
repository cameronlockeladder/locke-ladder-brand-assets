import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";

import Picture from "@/components/Picture";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { SectionTag, Caption } from "@/components/primitives";
import BravaEducation from "@/components/sections/hinsdale/BravaEducation";
import SnapeProofBand from "@/components/sections/hinsdale/SnapeProofBand";
import PolycamSingle from "@/components/sections/hinsdale/PolycamSingle";
import NextSteps from "@/components/sections/hinsdale/NextStepsShared";

/* Public Polycam URL · click-to-launch in new tab */
const POLYCAM_BOWLES = "https://poly.cam/capture/e3017c4a-4360-4ca1-b472-67b32ce1dc02";

/* Eric public estimate · customer-facing only · NO internal cost / margin / profit referenced */
const TOTAL = 107712.68;
/*
 * Math reconciliation:
 *   Brava Shake Roofing System    $80,993.05
 *   Copper & Snow Retention       $12,592.08   ← W-valley $5,658.00 + ST9 snow guards $6,934.08
 *   Skylights                     $11,509.47
 *   Accessories                    $2,618.08
 *   ──────────────────────────────────────────
 *   Total                        $107,712.68 ✓
 */
const SCOPE_GROUPS = [
  {
    key: "system",
    title: "Brava Shake Roofing System",
    total: 80993.05,
    items: [
      { name: "Brava Multi Width Synthetic Cedar Shake", spec: "36.4 SQ", line: 59420.09 },
      { name: "Tear off · existing wood shake", spec: "33 SQ", line: 6906.90 },
      { name: "Top Shield synthetic underlayment", spec: "full coverage", line: null },
      { name: "Drip edge & gutter apron", spec: "perimeter", line: null },
      { name: "Roof-to-wall trim board · step flashing R&R", spec: "as required", line: null },
      { name: "Ultimate pipe boots, nails, sealant, dumpsters", spec: "all penetrations · 2 loads", line: null },
    ],
  },
  {
    key: "copper",
    title: "Copper & Snow Retention",
    total: 12592.08,
    items: [
      { name: "Copper Double W-Valley", spec: "138 LF", line: 5658.0 },
      { name: "ST9 copper snow guards", spec: "496 count", line: 6934.08, note: "diagram and count sent to Rocky Mountain · April 22, 2026" },
    ],
  },
  {
    key: "skylights",
    title: "Skylights",
    total: 11509.47,
    items: [
      { name: "Velux fixed skylights", spec: "7 count", line: 9993.41 },
      { name: "Velux flashing kits", spec: "7 count", line: 1516.06 },
    ],
  },
  {
    key: "accessories",
    title: "Accessories",
    total: 2618.08,
    items: [
      { name: "Custom-fab edge metals, fasteners, sealants, sundries", spec: "as required", line: null },
    ],
  },
];

const DRIVERS = [
  { key: "system", label: "Brava Shake roofing system", amount: 80993.05, note: "Shake, install, underlayment, drip edge, accessories" },
  { key: "copper", label: "Copper & snow retention", amount: 12592.08, note: "Double W-valley (138 LF) · 496 ST9 copper snow guards" },
  { key: "skylights", label: "Skylights", amount: 11509.47, note: "7× Velux fixed + flashing kits" },
  { key: "accessories", label: "Accessories", amount: 2618.08, note: "Edge metals, fasteners, sealants, sundries" },
];

export default function BowlesPage() {
  useEffect(() => {
    document.title = "Eric Bowles · 404 N Vine St, Hinsdale · Locke & Ladder";
    setMeta("description", "Customer-facing scope walkthrough for 404 N Vine St, Hinsdale. Brava cedar shake, copper, skylights. Locke & Ladder, April 2026.");

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true, smoothTouch: false,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    const id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  return (
    <div className="App paper-grain bg-paper text-ink overflow-x-hidden" data-testid="bowles-root">
      <ScrollProgress />
      <main>
        <BowlesHero />
        <BowlesContext />
        <BowlesDrone />
        <PerSquareDrivers drivers={DRIVERS} total={TOTAL} />
        <BowlesScope groups={SCOPE_GROUPS} total={TOTAL} />
        <BravaEducation tone="paper" number="06 / 09" title="Why Brava is on the table" />
        <SnapeProofBand number="07 / 09" />
        <PolycamSingle
          number="08 / 09"
          client="Eric Bowles"
          address="404 N Vine St · Hinsdale, IL"
          embed={POLYCAM_BOWLES}
          poster="/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-context.webp"
          testId="polycam-bowles"
        />
        <NextSteps
          number="09 / 09"
          clientLine="Eric Bowles · 404 N Vine St, Hinsdale, IL"
        />
      </main>
      <Footer />
    </div>
  );
}

/* ──────────────────────── HERO ──────────────────────── */
function BowlesHero() {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Picture
          src="/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-detail.webp"
          alt="404 N Vine St · Hinsdale · cedar shake home from above, April 2026"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/35 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/15 to-ink/50" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 md:pt-36 pb-16 min-h-[100svh] flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-4"
          data-testid="hero-section-tag"
        >
          <span className="font-brand text-xs uppercase tracking-[0.24em] text-warm-gold/85">01 / 09</span>
          <span className="font-brand text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-paper/85">
            Locke &amp; Ladder &middot; April 28, 2026 field review
          </span>
        </motion.div>

        <div className="max-w-[1300px]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="font-display text-paper text-[12vw] sm:text-[9vw] lg:text-[7.4vw] leading-[0.92] display-tight"
            data-testid="hero-headline"
          >
            For Eric.
            <br />
            <span className="text-paper/80">A clear look at what</span>
            <br />
            <span className="text-paper/80">$107,712.68 actually buys.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 max-w-2xl font-serif italic text-paper/85 text-base md:text-xl leading-relaxed"
          >
            404 N Vine Street, Hinsdale. The cedar is at end of life.
            We walked it, droned it, and put a Brava scope on the table.
            Here is the homework.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="pt-8 border-t border-paper/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-6">
            <HeroCell label="For" value="Eric Bowles" />
            <HeroCell label="Property" value="404 N Vine St · Hinsdale, IL" />
            <HeroCell label="Estimate" value="#4798 · April 22, 2026 (draft)" />
            <div className="flex md:justify-end items-end pt-1">
              <button
                onClick={() => document.getElementById("context")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-scroll-button"
                className="group inline-flex items-center gap-3 font-brand text-[11px] uppercase tracking-[0.28em] text-paper/85 hover:text-paper transition-colors"
              >
                Begin
                <span className="relative inline-block w-10 h-px bg-paper/50 group-hover:bg-paper transition-colors">
                  <span className="absolute -right-1 -top-[3px] w-[7px] h-[7px] border-r border-t border-paper/60 group-hover:border-paper rotate-45" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCell({ label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="eyebrow text-paper/55 h-[14px] leading-none">{label}</div>
      <div className="text-base md:text-lg text-paper font-medium leading-snug">{value}</div>
    </div>
  );
}

/* ──────────────────────── 02 · CONTEXT ──────────────────────── */
function BowlesContext() {
  return (
    <section
      id="context"
      data-testid="section-context"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="02 / 09" title="The home" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2
              className="font-display display-tight text-[10vw] sm:text-5xl lg:text-[5vw] leading-[1]"
              data-testid="context-headline"
            >
              Cedar at end of useful life.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4 space-y-5 text-body text-lg leading-relaxed">
            <p>
              The roof at 404 N Vine has done its job. Wood cedar shake
              has a working life. Yours is at the end of it. Now is the
              good moment to decide what comes next, and to make sure
              the next roof is the last one this house needs for a
              generation.
            </p>
            <p className="font-serif italic text-slate">
              Per-square pricing gets misleading quickly. We will show
              you why, with your own numbers.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed front elevation · Eric's home */}
      <figure className="mt-16 relative w-full overflow-hidden bg-ink/10" data-testid="context-front">
        <Picture
          src="/assets/photos/projects/hinsdale-cedar/eric/eric-front.webp"
          alt="404 N Vine St · front elevation · cedar shake home with stone chimney and cupola"
          className="w-full h-[clamp(420px,80vh,920px)] object-cover"
        />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            404 N Vine St &middot; April 28, 2026
          </span>
        </figcaption>
      </figure>
    </section>
  );
}

/* ──────────────────────── 03 · DRONE ──────────────────────── */
function BowlesDrone() {
  return (
    <section
      id="drone"
      data-testid="section-drone"
      className="relative bg-ink text-paper py-28 md:py-36 border-t border-ink"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionTag
          number="03 / 09"
          title="From the air"
          className="[&_.eyebrow]:text-paper/70 [&_*]:text-paper/90"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[12vw] sm:text-5xl lg:text-[5.4vw] text-paper leading-[0.95]"
              data-testid="drone-headline"
            >
              What the drone sees.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4 space-y-4 text-paper/80 text-base md:text-lg leading-relaxed">
            <p>
              Two-story access. Steep pitches. Skylights, copper valleys,
              snow guards, dormers, transitions. The drone is the
              cheapest way to get an honest count of all of it.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed aerial · context */}
      <figure className="mt-16 relative w-full overflow-hidden bg-ink/40">
        <Picture
          src="/assets/photos/projects/hinsdale-cedar/eric/eric-aerial-context.webp"
          alt="Aerial context · 404 N Vine St with surrounding tree canopy and adjacent properties"
          className="w-full h-[clamp(420px,72vh,820px)] object-cover"
        />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            DJI Mavic &middot; 101 frames in Locke &amp; Ladder Drive
          </span>
        </figcaption>
      </figure>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16">
        {/* Contact sheet */}
        <figure className="relative bg-paper/[0.03] border border-paper/10 overflow-hidden">
          <Picture
            src="/assets/photos/projects/hinsdale-cedar/eric/contact-sheet.webp"
            alt="Eric Bowles · 404 N Vine St · drone contact sheet"
            className="w-full h-auto object-cover"
          />
        </figure>
        <Caption className="mt-4 text-paper/45">
          DJI Mavic flight &middot; April 28, 2026 &middot; full-resolution frames stored in Locke &amp; Ladder Drive (101 photos).
        </Caption>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="drone-observations">
          <Observation number="01" title="Roof complexity" body="Multiple gables, hips, valleys, and dormer transitions. Each transition is where water has to be redirected — and where price quietly accumulates." />
          <Observation number="02" title="Adjacent landscaping" body="Mature trees and shrubs pressed into the eaves. Drives debris load and access cost during install." />
          <Observation number="03" title="Steep & two-story access" body="10/12 to 12/12 pitches with stretches over 12/12. This is the &lsquo;steep roof&rsquo; line on the estimate. Real labor, not a markup." />
        </div>
      </div>
    </section>
  );
}

function Observation({ number, title, body }) {
  return (
    <div className="border-t border-paper/15 pt-5">
      <div className="flex items-baseline gap-4">
        <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold">{number}</span>
        <h3 className="font-display text-xl md:text-2xl text-paper font-medium leading-snug">{title}</h3>
      </div>
      <p className="mt-4 text-paper/70 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

/* ──────────────────────── 04 · DRIVERS ──────────────────────── */
function PerSquareDrivers({ drivers, total }) {
  const max = Math.max(...drivers.map((d) => d.amount));
  return (
    <section
      id="drivers"
      data-testid="section-drivers"
      className="relative bg-paper-warm py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="04 / 09" title="What drives the price" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="drivers-headline"
            >
              Per-square pricing <br />gets misleading quickly.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4 space-y-4 text-body text-lg leading-relaxed">
            <p>
              Brava material per square is one part of a Brava roof.
              On your estimate, four drivers move the number.
            </p>
            <p className="font-serif italic text-slate">
              The details that move the number are the details that
              protect the roof.
            </p>
          </div>
        </div>

        <div className="mt-16" data-testid="driver-bars">
          <div className="space-y-5">
            {drivers.map((d, i) => {
              const pct = (d.amount / max) * 100;
              const totalPct = ((d.amount / total) * 100).toFixed(0);
              return (
                <motion.div
                  key={d.key}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="grid grid-cols-12 gap-4 md:gap-6 items-center"
                  data-testid={`driver-${d.key}`}
                >
                  <div className="col-span-12 md:col-span-4 pr-2">
                    <div className="font-display text-base md:text-lg font-medium text-ink leading-snug">{d.label}</div>
                    <div className="mt-1 text-xs md:text-sm text-slate">{d.note}</div>
                  </div>
                  <div className="col-span-9 md:col-span-6 relative h-9 md:h-11 bg-paper border border-rule overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                      className={`absolute inset-y-0 left-0 ${i === 0 ? "bg-warm-gold" : "bg-ink/65"}`}
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center font-brand text-[10px] uppercase tracking-[0.18em] text-ink/55 tabular-nums">
                      {totalPct}% of total
                    </span>
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right font-display text-base md:text-xl tabular-nums text-ink font-medium">
                    {fmt(d.amount)}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-ink/15 flex items-baseline justify-between">
            <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-slate">
              Estimate #4798 &middot; customer-facing total
            </div>
            <div
              className="font-display text-3xl md:text-5xl tabular-nums text-ink font-medium"
              data-testid="drivers-total"
            >
              {fmt(total)}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SecondaryDriver label="10/12 – 12/12 steep" note="Standard steep-roof line. Real labor, not a markup." />
          <SecondaryDriver label="Sections > 12/12" note="Triggers high-pitch line on every estimate this complex." />
          <SecondaryDriver label="Two-story access" note="Stage, ladder, harness. Counted, not assumed." />
        </div>

        <Caption className="mt-10 text-slate/85">
          Source: JobNimbus Estimate #4798 &middot; April 22, 2026 (draft). Customer-facing line totals only.
        </Caption>
      </div>
    </section>
  );
}

function SecondaryDriver({ label, note }) {
  return (
    <div className="border-t border-ink/15 pt-4">
      <div className="font-brand text-[10px] uppercase tracking-[0.22em] text-warm-gold">Access driver</div>
      <div className="mt-2 font-display text-lg md:text-xl text-ink font-medium leading-snug">{label}</div>
      <div className="mt-2 text-sm text-body leading-relaxed">{note}</div>
    </div>
  );
}

/* ──────────────────────── 05 · SCOPE PLAINLY ──────────────────────── */
function BowlesScope({ groups, total }) {
  return (
    <section
      id="scope"
      data-testid="section-scope"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="05 / 09" title="Eric's scope, plainly" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="scope-headline"
            >
              Every line, in plain English.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-body text-lg leading-relaxed">
            <p>
              The same scope the contract carries. Quantities, line totals,
              group totals.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10" data-testid="scope-groups">
            {groups.map((g) => (
              <ScopeGroup key={g.key} group={g} />
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 bg-ink text-paper p-6 md:p-8 border border-ink/10">
              <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/55">Estimate #4798</div>
              <div className="mt-2 font-display text-lg text-paper">404 N Vine St &middot; Hinsdale, IL</div>
              <div className="mt-8 pt-6 border-t border-paper/15">
                <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-warm-gold/85">
                  Customer-facing total
                </div>
                <div
                  className="mt-3 font-display text-4xl md:text-5xl tabular-nums text-paper font-medium"
                  data-testid="scope-total"
                >
                  {fmt(total)}
                </div>
                <div className="mt-3 text-sm text-paper/55">
                  Draft &middot; April 22, 2026 &middot; sales rep Joe DeBias
                </div>
              </div>
              <ul className="mt-8 pt-6 border-t border-paper/15 space-y-3 text-sm">
                {groups.map((g) => (
                  <li key={g.key} className="flex items-baseline justify-between gap-4">
                    <span className="text-paper/75">{g.title}</span>
                    <span className="font-display tabular-nums text-paper">{fmt(g.total)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ScopeGroup({ group }) {
  return (
    <div data-testid={`scope-group-${group.key}`}>
      <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-ink/15">
        <h3 className="font-display text-2xl md:text-3xl text-ink font-medium">{group.title}</h3>
        <span className="font-display text-xl md:text-2xl tabular-nums text-ink font-medium shrink-0">
          {fmt(group.total)}
        </span>
      </div>
      <ul className="mt-4 divide-y divide-ink/10">
        {group.items.map((it) => (
          <li key={it.name} className="grid grid-cols-12 gap-4 py-3 text-sm md:text-base items-baseline">
            <div className="col-span-12 md:col-span-6 text-ink leading-snug">
              {it.name}
              {it.note && <div className="mt-1 text-xs text-slate italic">{it.note}</div>}
            </div>
            <div className="col-span-7 md:col-span-3 text-slate text-xs md:text-sm">{it.spec}</div>
            <div className="col-span-5 md:col-span-3 text-right font-display tabular-nums text-ink/85">
              {it.line ? fmt(it.line) : <span className="text-slate text-xs">included</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* helpers */
function fmt(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
  el.setAttribute("content", content);
}
