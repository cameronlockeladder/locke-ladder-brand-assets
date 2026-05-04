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

const POLYCAM_LINDAHL = "https://poly.cam/capture/8838e077-87c7-4f9c-8ea7-53708ecbc7f9";

const EVIDENCE = [
  { tag: "On-site walk", value: "Inspection", note: "April 28, 2026 · Joe DeBias" },
  { tag: "Drone", value: "75 frames", note: "DJI Mavic · full elevation set · Drive" },
  { tag: "JobNimbus", value: "99 photos", note: "uploaded · April 28, 2026" },
  { tag: "Estimate", value: "Pending", note: "field evidence in · scope being finalized" },
];

const SCOPE_QUESTIONS = [
  {
    n: "01",
    title: "Wood cedar tear-off, accurately counted",
    body: "Total square footage of wood shake to remove, drive measured against the drone aerials. Tear-off is paid by SQ. Do not eyeball it.",
  },
  {
    n: "02",
    title: "Underlayment system",
    body: "Top Shield synthetic in the field. Ice & water shield where the local code requires it (eaves, valleys, penetrations). Decisions are made in the inspection report, not the bid.",
  },
  {
    n: "03",
    title: "Copper or aluminum at the valleys",
    body: "Copper holds longer, looks better as it patinas, costs more. Aluminum is the value path. Either is honest if specified clearly.",
  },
  {
    n: "04",
    title: "Snow retention, by elevation",
    body: "Snow guard count is a function of pitch and roof-load above living space. Same approach used at 404 N Vine: count the slopes that need it, not a flat per-square multiplier.",
  },
  {
    n: "05",
    title: "Skylights · keep, replace, or eliminate",
    body: "Existing skylights either get reflashed or replaced. The conversation we want to have before, not during, the install.",
  },
  {
    n: "06",
    title: "Steep / two-story access",
    body: "Honest count of pitches over 10/12 and any 12/12+ stretches. Real labor on this house, just like at 404 N Vine.",
  },
];

export default function LindahlPage() {
  useEffect(() => {
    document.title = "Mark Lindahl · 903 Middleton, Inverness · Locke & Ladder";
    setMeta("description", "Inspection and scoping walkthrough for 903 Middleton, Inverness. Wood cedar shake review, Brava rationale, scope-in-progress. Locke & Ladder, April 2026.");

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
    <div className="App paper-grain bg-paper text-ink overflow-x-hidden" data-testid="lindahl-root">
      <ScrollProgress />
      <main>
        <LindahlHero />
        <LindahlContext />
        <LindahlDrone />
        <LindahlEvidence />
        <LindahlScopeQuestions />
        <BravaEducation tone="paper" number="06 / 09" title="Why Brava is on the table" />
        <SnapeProofBand number="07 / 09" />
        <PolycamSingle
          number="08 / 09"
          client="Mark Lindahl"
          address="903 Middleton · Inverness, IL"
          embed={POLYCAM_LINDAHL}
          poster="/assets/photos/projects/hinsdale-cedar/mark/aerial-context-with-truck.webp"
          testId="polycam-lindahl"
        />
        <NextSteps
          number="09 / 09"
          clientLine="Mark Lindahl · 903 Middleton, Inverness, IL"
        />
      </main>
      <Footer />
    </div>
  );
}

/* ──────────────────────── HERO ──────────────────────── */
function LindahlHero() {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Picture
          src="/assets/photos/projects/hinsdale-cedar/mark/aerial-context-with-truck.webp"
          alt="903 Middleton · Inverness · cedar shake home from above with Locke & Ladder field truck on site"
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
            Locke &amp; Ladder &middot; April 28, 2026 inspection
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
            For Mark.
            <br />
            <span className="text-paper/80">An honest look</span>
            <br />
            <span className="text-paper/80">before a number.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="mt-8 max-w-2xl font-serif italic text-paper/85 text-base md:text-xl leading-relaxed"
          >
            903 Middleton, Inverness. The inspection is in. The photos are
            in. The right next move is turning field evidence into a scope
            that can survive scrutiny &mdash; not putting a fast number on
            the table.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="pt-8 border-t border-paper/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-6">
            <HeroCell label="For" value="Mark Lindahl" />
            <HeroCell label="Property" value="903 Middleton · Inverness, IL" />
            <HeroCell label="Status" value="Inspection report sent" />
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
function LindahlContext() {
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
              Honest beats fast.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4 space-y-5 text-body text-lg leading-relaxed">
            <p>
              903 Middleton has its share of work to be done. We have
              walked it, droned it, and put it through inspection. What
              we have not done is rush a number to the table.
            </p>
            <p className="font-serif italic text-slate">
              If this were ours, we would not put a number on it before
              we put eyes on every transition.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed front elevation */}
      <figure className="mt-16 relative w-full overflow-hidden bg-ink/10" data-testid="context-front">
        <Picture
          src="/assets/photos/projects/hinsdale-cedar/mark/903-middleton-front.webp"
          alt="903 Middleton · Inverness · front elevation · existing wood cedar shake roof, April 2026"
          className="w-full h-[clamp(420px,80vh,920px)] object-cover"
        />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            903 Middleton &middot; April 28, 2026
          </span>
        </figcaption>
      </figure>
    </section>
  );
}

/* ──────────────────────── 03 · DRONE ──────────────────────── */
function LindahlDrone() {
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
              Two-story access. Steep pitches. Mature landscaping right at
              the eaves. Skylights, snow retention, valleys to evaluate.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed aerial pair */}
      <figure className="mt-16 relative w-full overflow-hidden">
        <Picture
          src="/assets/photos/projects/hinsdale-cedar/mark/aerial-pair.webp"
          alt="Aerial · 903 Middleton with neighboring property in frame · April 28, 2026"
          className="w-full h-[clamp(420px,72vh,820px)] object-cover"
        />
        <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-ink/65 backdrop-blur-sm px-3 py-1.5">
          <span className="font-brand text-[10px] uppercase tracking-[0.24em] text-paper/85">
            903 Middleton &middot; aerial &middot; April 28, 2026
          </span>
        </figcaption>
      </figure>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16">
        <figure className="relative bg-paper/[0.03] border border-paper/10 overflow-hidden">
          <Picture
            src="/assets/photos/projects/hinsdale-cedar/mark/contact-sheet.webp"
            alt="Mark Lindahl · 903 Middleton · drone contact sheet"
            className="w-full h-auto object-cover"
          />
        </figure>
        <Caption className="mt-4 text-paper/45">
          DJI Mavic flight &middot; 75 optimized frames in Drive &middot; 99 photos uploaded to JobNimbus.
        </Caption>
      </div>
    </section>
  );
}

/* ──────────────────────── 04 · EVIDENCE ──────────────────────── */
function LindahlEvidence() {
  return (
    <section
      id="evidence"
      data-testid="section-evidence"
      className="relative bg-paper-warm py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="04 / 09" title="The evidence we have" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="evidence-headline"
            >
              The inspection is done. <br />The number isn&rsquo;t.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-body text-lg leading-relaxed">
            <p>
              The right answer is not to invent a fast number. Below is
              what we have collected, and what still has to happen before
              a scope is locked.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-ink/15" data-testid="lindahl-evidence">
          {EVIDENCE.map((e, i) => (
            <div
              key={e.tag}
              className={`p-6 md:p-8 ${i !== EVIDENCE.length - 1 ? "lg:border-r border-ink/15" : ""} ${i !== 0 ? "border-t lg:border-t-0 border-ink/15" : ""}`}
            >
              <div className="font-brand text-[10px] uppercase tracking-[0.24em] text-slate">{e.tag}</div>
              <div className="mt-3 font-display text-2xl md:text-3xl text-ink font-medium leading-none">{e.value}</div>
              <div className="mt-3 text-sm text-body leading-snug">{e.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── 05 · SCOPE QUESTIONS ──────────────────────── */
function LindahlScopeQuestions() {
  return (
    <section
      id="scope-questions"
      data-testid="section-scope-questions"
      className="relative bg-paper py-28 md:py-36 px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionTag number="05 / 09" title="What scope has to answer first" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display display-tight text-[11vw] sm:text-5xl lg:text-[5vw] leading-[0.98]"
              data-testid="scope-questions-headline"
            >
              Six questions <br />to answer before a number.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-body text-lg leading-relaxed">
            <p>
              These are the same questions that produced the $107,712.68
              total at 404 N Vine. They are how we keep the estimate
              honest.
            </p>
          </div>
        </div>

        <ol className="mt-14 divide-y divide-rule border-y border-rule" data-testid="scope-questions-list">
          {SCOPE_QUESTIONS.map((q) => (
            <li
              key={q.n}
              data-testid={`scope-q-${q.n}`}
              className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline"
            >
              <span className="col-span-2 md:col-span-1 font-brand text-xs uppercase tracking-[0.22em] text-warm-gold">
                {q.n}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-display text-xl md:text-2xl text-ink font-medium leading-snug">
                {q.title}
              </h3>
              <p className="col-span-12 md:col-span-7 text-body text-base md:text-lg leading-relaxed">
                {q.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-2xl font-serif italic text-slate text-base md:text-lg leading-relaxed">
          &ldquo;If this were ours, we would not put a number on it before
          we put eyes on every transition.&rdquo;
        </p>
      </div>
    </section>
  );
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
  el.setAttribute("content", content);
}
