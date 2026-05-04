# Locke & Ladder · Design System & Voice Guide
**Codified from the Christ Church | Oak Brook proposal microsite (V4 · iter_15)**
**Purpose:** Source of truth for any LLM or designer picking up future Locke & Ladder web work.
**Last updated:** Feb 2026

> Read this before making any design or copy decision on an L&L deliverable. The constraints that produced a good Christ Church deck should also produce a good Snape deck, a good Hickman case study, or a good "Next Deliverable." This document is the *why*, not just the *what*.

---

## 1 · First principles (don't break these)

### Audience-first
- **Primary reader:** older church-board members, stewardship-minded committee chairs, homeowners writing six-figure checks. They are not impressed by UI flourishes. They are reassured by craft, specificity, and restraint.
- **Not the audience:** design-award juries, LinkedIn, other agencies. If a decision would only impress a peer designer, reject it.

### Plainspoken, never promotional
- No fabricated quotes. No made-up statistics. No adjectives doing a verb's job ("premium, luxurious, world-class" → delete, replace with a number or a fact).
- When in doubt, cut the sentence. Visual-led > text-heavy.
- Specificity is the voice. **"Class 4 impact rated"** beats **"built to last"**. **"$800K in 2026"** beats **"expensive later"**. **"188 mph · 211 w/ screws"** beats **"wind resistant"**.

### Needs-based narrative, not a pitch
The Christ Church deck is structured as a **self-education path**, not a sell:
> 1. Here is the problem (your roof is dying). 2. Here is why repair won't work (underlayment failing). 3. Here is why new wood cedar is a bad bet (expensive, short-lived, maintenance-heavy). 4. Here is the material we chose and why (Brava). 5. Here is proof (field photos, same-house comparisons, warranty math). 6. Here is the team and the system. 7. Ask questions.

The visitor arrives at the conclusion by walking the evidence, not by being told. Copy that *argues* is copy that the Board will resist. Copy that *shows* earns the nod.

### Image-led, not text-led
- Every section should work with the copy stripped out. If it doesn't, the visual is doing less than its fair share.
- Copy density rule of thumb: if a paragraph runs past **4 lines on desktop**, either break it, replace it with a chart, or delete it.

### Design discipline — no AI slop
- No purple/violet gradients on white. No Inter-Roboto defaults. No centered-everything layouts. No generic card grids.
- Left-aligned or asymmetric compositions. 2–3× more whitespace than feels comfortable. Dark backgrounds *solid*, not gradiented (gradients muddy dark palettes).
- Zero emoji icons. Lucide-react or inline SVG only.

---

## 2 · Color system

All colors are declared in `/app/frontend/tailwind.config.js` + `/app/frontend/src/index.css` as CSS variables so night-mode can flip them without touching component code.

### Day palette (primary)
| Token | Hex | Role |
|---|---|---|
| `paper` | `#F9F8F6` | Page background. Slightly warm off-white. **Never pure white.** |
| `paper-warm` | `#F1EDE5` | Hover state for interactive rows, secondary surfaces. |
| `ink` | `#1A1C20` | Primary text + dark-section background. **Never pure black.** |
| `ink-soft` | `#2B2D32` | Elevated dark surfaces (cards on dark bg). |
| `slate` | `#50636F` | Body-adjacent text, muted labels, captions. |
| `slate-light` | `#8A98A1` | Tertiary text, icon borders, rare. |
| `body` | `#404040` | Body paragraph text on paper. Reads darker than slate. |
| `warm-gold` | `#857650` | **Brand accent · use sparingly.** Highlights, eyebrows, primary-state toggles, active gallery rings, critical data points. |
| `bronze` | `#9A5B3E` | Warning / decay / cedar tone. Used for "generic cedar" bars, verify tags, decay indicators. |
| `deep-navy` | `#003B5C` | Reserved. Not used in Christ Church. Available for future deliverables. |
| `action-blue` | `#316997` | Reserved. Interactive accent alt. |
| `rule` | `#D9D4CA` | Hairline dividers, section borders. |

### Night palette (theme-night override)
| Token | Day | Night |
|---|---|---|
| `paper` | `#F9F8F6` | `#121317` |
| `paper-warm` | `#F1EDE5` | `#1A1B20` |
| `ink` | `#1A1C20` | `#EDE8DC` (flipped) |
| `warm-gold` | `#857650` | `#C3A871` (softer champagne) |
| `bronze` | `#9A5B3E` | `#D48B6B` |
| `rule` | `#D9D4CA` | `#2D2E34` |

Night-mode rule: **accent hues soften but stay recognizable.** The brand voice holds in either mode. `paper` and `ink` flip; `warm-gold` and `bronze` desaturate slightly.

### Usage discipline
- **Gold is precious.** If more than ~8% of a viewport's real estate is gold, you're overusing it. Gold is for the single thing the eye should land on in that viewport — the active step, the punchline number, the CTA.
- **Bronze is warning-adjacent.** It connotes decay, wood-cedar problems, "what to replace." Do not use it for celebratory moments.
- **No shadows over `paper`.** Shadows on warm-white look AI-generated. Use a 1px `border-ink/10` or `border-rule` instead.
- **Grain texture everywhere.** `.paper-grain::before` adds a 5% SVG noise overlay site-wide. Don't remove it — it's what separates this from stock.

---

## 3 · Typography

### Font stack (order matters)

```css
Display / UI / Body:  Termina → Inter → system-ui
Serif accents:         Fraunces → Cormorant Garamond → Georgia
```

**Termina** is the licensed brand face. If a Termina WOFF2 is present under `/assets/fonts/`, it's prepended. Until then, Inter stands in. **Fraunces** handles italic serif editorial moments (section H2s with emotional weight, pull quotes, etymology tags).

### Type classes (defined in `index.css`)
| Class | Used for | Notes |
|---|---|---|
| `.font-display` | Display headlines | Termina/Inter · `font-weight: 500` · `letter-spacing: -0.025em` |
| `.font-serif` | Editorial headlines, italic pull quotes, captions of weight | Fraunces · `font-feature-settings: "ss01", "ss02"` |
| `.font-brand` / `.eyebrow` | Small uppercase labels, section numbers, CTAs, captions | Termina/Inter · `font-weight: 500` |
| `.display-tight` | Tightens big display copy | `letter-spacing: -0.035em` · `line-height: 0.95` |
| `.eyebrow` | The repeating tiny uppercase label | `11px` · `letter-spacing: 0.22em` · `uppercase` |

### Scale rules
| Element | Mobile (default) | Tablet (sm:) | Desktop (lg:) |
|---|---|---|---|
| H1 Hero display | `text-[13vw]` | `text-[10vw]` | `text-[8.5vw]` |
| H2 Section display | `text-[11vw]` or `text-[12vw]` | `text-5xl` | `text-[5.4vw]` or `text-[6vw]` |
| H3 editorial serif italic | `text-[7vw]` | `text-3xl` | `text-[2.8vw]` to `text-[3.4vw]` |
| Body lead | `text-lg` | — | `text-xl` |
| Body | `text-base` | — | `text-lg` |
| Caption / small | `text-sm` or `text-xs` | — | — |
| Eyebrow | `11px` fixed | — | — |

### Line-height rules (the serif-collision lesson)
Christ Church shipped with italic serif h3s at `leading-[1.05]` initially. On desktop, at viewport widths where the headline wraps to 2+ lines, the ascenders of line 2 touched the descenders of line 1. **Italic Fraunces needs air.**

- Italic serif headlines: **`leading-[1.18]` to `leading-[1.2]` minimum.**
- Bold display headlines: `leading-[0.95]` to `leading-[1]` is fine (they don't have descenders reaching into the next line).
- Body: `leading-relaxed` (1.625) baseline.

### Micro-typography conventions
- **Em dashes** (`—`), not hyphens with spaces, for sentence-internal breaks.
- **Middle dots** (` · `) as inline separators for metadata (e.g., `"Jon · Faith Apostolic Church, on the roof"`).
- **Curly quotes** (`'` `'` `"` `"`) via HTML entities (`&lsquo;` `&rsquo;` `&ldquo;` `&rdquo;`) — never straight quotes.
- **Non-breaking spaces** in proper nouns where a line break would look ugly (`Christ&nbsp;Church`, `Oak&nbsp;Brook.`).
- **Uppercase tracking** on eyebrows: `tracking-[0.22em]` to `tracking-[0.28em]`. Tiny text needs big letter-spacing to breathe.
- **Italicize etymology and definition callouts.** *system* (noun) · *a set of components engineered to perform as one.*

---

## 4 · Layout system

### Container + max-width
```
max-w-[1600px] mx-auto  ← top-level content cap
px-6 lg:px-12            ← horizontal padding
```
Never exceed 1600px content width. The page *scales out* to bigger displays via video/image bleed, not via wider text columns.

### Section padding (vertical rhythm)
```
py-28 md:py-36   ← standard section block
mt-20            ← intra-section major break
mt-10 / mt-16    ← intra-section minor break
```

### Grid patterns that recur
| Pattern | Grid | Use |
|---|---|---|
| Copy left + visual right (or vice versa) | `grid-cols-1 lg:grid-cols-12` with `lg:col-span-6 / lg:col-span-6` or `lg:col-span-5 / lg:col-span-7` | Default "explain + show" layout |
| Full-bleed media row | `w-full h-[56vh] md:h-[78vh]` | Drone montage, background photo break |
| Horizontal rail | `flex gap-3 md:gap-4 overflow-x-auto -mx-6 px-6 lg:-mx-12 lg:px-12` + `.rail-scroll .no-scrollbar` | Thumbnail galleries, field inspection rail |
| 2×2 featured | `grid-cols-2` with `aspect-[4/3]` | Field inspection core photos |

### Asymmetry rule
**Never center a headline and a paragraph together.** If you have a title + a body, title goes left, body goes right in a 5/7 or 6/6 split. Centered everything = AI slop aesthetic. Asymmetric = editorial.

### Overflow discipline
**Root `.App` div must carry `overflow-x-hidden`.** Horizontal rails with `overflow-x-auto` + negative margins will leak past the viewport on tablet/mobile without a root clip. This was a bug we shipped and had to fix — don't re-introduce it.

---

## 5 · Repeating component primitives

### `<SectionTag number=".. / .." title=".." />`
The section header. Shows `"02 / 14"` gold chip + `ALIGNMENT` eyebrow tag. Every section uses this. It gives the reader orientation + progress sense. Never skip it.

### `<Eyebrow tone="gold|paper|slate">`
Tiny uppercase label with a short rule-mark prefix. Use to label a subsection inside a larger block ("Durability pays dividends", "Why we chose Brava", "Lifespan, plainly"). On dark sections use `tone="gold"` sparingly; on light sections default is slate.

### `<Caption>`
Small slate-colored text for sources, indicative-only disclaimers, image metadata. Typography is `text-xs text-slate leading-relaxed`.

### `<VerifyTag>`
Inline marker for content that needs a final asset review. Should be stripped before ship.

### Etymology headline pattern
On a major "definition" section, precede or follow the H2 with an italic definition block:
> **ROOF SYSTEM** · *system* (noun) · *a set of components engineered to perform as one.*

This is a strong rhetorical move borrowed from editorial print. It works because the headline then *earns* its size — the word is being defined, not just displayed.

### Interactive magnifier tile
5× square-lens magnifier on hover (desktop only), click opens lightbox with a 5× magnifier inside. Use for any inspection or field-detail photo where the board might want to scrutinize.

### DetailPanel (expandable)
Collapsible panel with a number badge, title, optional subtitle, and arbitrary content. `defaultOpen={true}` for a panel you want the board to see immediately. Closed panels are an invitation to curiosity, not a hiding place for shame.

### Pull-quote card
Five gold stars · big Fraunces italic pull-line · smaller italic surrounding context · small-caps attribution. Use 3-up on dark sections. Do not invent quotes; the only quotes that ship are ones the homeowner or client actually said.

---

## 6 · Motion + interaction

### Smooth scroll (Lenis)
```js
duration: 1.25
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
smoothWheel: true, smoothTouch: false
```
Don't touch these values. They're tuned so a board member scrolling casually feels the page glide, and a board member scrolling aggressively doesn't get motion-sick.

### Framer Motion conventions
| Element | Initial | Animate | Transition |
|---|---|---|---|
| Section H2 reveal | `opacity: 0, y: 18` | `opacity: 1, y: 0` | `duration: 1, ease: [0.25, 1, 0.5, 1]` |
| Lead paragraph | `opacity: 0, y: 14` | `opacity: 1, y: 0` | `duration: 1, delay: 0.2` |
| Bar chart fill | `width: 0` | `width: {value}%` | `duration: 1.1, delay: 0.2 + i*0.08` (stagger) |
| Image gallery cross-fade | `opacity: 0, scale: 1.04` | `opacity: 1, scale: 1` | `duration: 1.1, ease: [0.25, 1, 0.5, 1]` |

**Standard cubic-bezier: `[0.25, 1, 0.5, 1]`.** Use this unless you have a specific reason. It's a gentle ease-out that feels natural for the board audience.

### viewport-triggered animations
```jsx
whileInView={{...}}
viewport={{ once: true, margin: "-80px" }}
```
`once: true` — don't re-animate on scroll-back. `margin: "-80px"` — start the animation slightly before the element enters view so it's already in motion by the time the eye gets there.

### Scroll progress bar
Top-fixed 2px gold bar. No mix-blend (causes ghosting on Safari). No shadow blur. `origin-left` with `scaleX` tied to scroll position.

### Hover magnifier (desktop)
- 5× lens, 240×240px on tile / 300×300px in lightbox
- Square with 1px paper ring + long soft shadow
- `hidden md:block` — mobile doesn't get the hover magnifier; mobile gets tap-to-lightbox

### Night mode toggle
Flips `:root.theme-night` on `<html>`. CSS variables do the work. Hand-coded Tailwind utility overrides for `.bg-paper`, `.bg-ink`, `.text-ink`, `.border-rule`, `.text-warm-gold` etc. are stacked in `index.css` (not elegant but pragmatic).

### Scroll-hide side nav
Desktop has a right-edge vertical nav with 14 section dashes + the active section label. Can be toggled off via eye icon in the top bar. This is a *comfort for older viewers* — the eye icon says "I can turn this off if it's distracting," which is an important signal for the demographic.

---

## 7 · Media conventions

### Images
- **WebP preferred** over JPG/PNG for photos. ~60% smaller at visually identical quality. Use `cwebp -q 85` for photos, `-q 90` for text-overlaid / gradient imagery.
- **PNG only for transparent-bg logos** where SVG isn't available.
- **SVG for brand marks and diagrams.** All icons are inline SVG or Lucide-react — never image icons.
- Hero photos: aim for ≤500 KB at `2400×1600` source. Compress aggressively. The grain + night mode + dark gradients mask minor artifacts; don't over-spec.

### Video
- **MP4 only.** H.264 baseline profile for maximum device compatibility.
- **Strip audio unless the piece is specifically a "music moment"** (e.g., `new-approach-to-contracting-with-music.mp4`). Background videos behind text must be silent.
- Target bitrate: **~2.5–4 Mbps for background video, 5–8 Mbps for hero/drone.** The Christ Church site has one ~11MB drone clip — that's on the high end; anything bigger needs justification.
- Videos always: `autoPlay loop muted playsInline preload="metadata"`.
- Poster image: always set `poster="/assets/.../poster.webp"` so there's no black flash before first frame.

### Sequences (aspen frames, shake layout)
Named `frame-NNN.webp` with zero-padding. Built via ffmpeg from source video, then manually cropped/compressed. Loaded via template-string prefix so the audit tool catches them (`/assets/aspen/frame-${idx}.webp`).

### Embeds (third-party)
- **Polycam:** cannot be inline-embedded without `Cross-Origin-Opener-Policy: same-origin` + `Cross-Origin-Embedder-Policy: require-corp` headers on the parent page (3D viewer needs SharedArrayBuffer). **Default pattern: click-to-launch in new tab** with a poster image + CTA.
- **YouTube / Vimeo:** fine to embed, no header requirements.

---

## 8 · Copy voice (the hard part)

### Tone spectrum
```
Too cold:     "Installation commences Q3 2026."
Ours:         "We sequence around the church calendar. Campus is returned to Sunday-ready every evening."
Too warm:     "We can't wait to partner with your amazing community!!!"
```
**Target:** a senior tradesperson who speaks clearly, respects the reader's time, and doesn't need to impress. Think: a 55-year-old master carpenter briefing a foundation board. Direct, grounded, occasionally wry, never saccharine.

### Words and phrases we use
- **"The Board"** (capitalized) — the audience
- **"Specify"** (verb) — "we specify Grace IWS" · "the only cedar to specify is..." · sounds like a tradesperson's vocabulary, not a marketer's
- **"Stewardship"** — echoes how the audience already thinks about resources
- **"Plainly"** — signals we're not hiding behind jargon ("Lifespan, plainly.")
- **"In the field"** — carries weight with a builder audience ("Brava, in the field.")
- **"On our own homes"** — deepest trust signal available: would you do this for yourself?
- **"Generation"** — 50-year roofs sell to a Board thinking about grandchildren
- **"Certified Blue Label 3/4″ Heavies"** — quoted trade spec, not translated down
- Numbers **in figures, not words** (`50 years`, `3 to 4 times`, `$800K`)

### Words and phrases we avoid
- "Premium," "luxurious," "world-class," "best-in-class," "unparalleled" — all show-don't-tell failures
- "Solutions," "partners" (when used as buzzwords), "leveraging," "seamlessly," "empowering"
- "Cutting-edge," "revolutionary" — cedar shake is 400 years old; don't be ridiculous
- "Eco-friendly" — use the number instead ("~95% recycled content")
- "Maintenance-free" — nothing is; say "50-year limited warranty" instead
- Corporate "we" without specificity — if "we" are claiming something, say who "we" is

### Structural tics worth stealing
- **Etymology tag after the H2.** Defines the word that titled the section. Editorial and grown-up.
- **Italic pull-quote from a homeowner** that doubles as the section's emotional anchor ("My satisfaction level hasn't changed in 9 years.")
- **Illustrative baseline** disclaimer under any chart: "Indicative. A comparable roof indexed at $100K in 1996." Board members will catch un-sourced numbers immediately; protect yourself.
- **Source line**: "Source: Brava Roof Tile · 50-year total cost of ownership multipliers." Every stat gets a source.
- **Parallel short sentences when stating principles.** "Class 4 impact rated. Made in Iowa. Backed for fifty years." The rhythm signals seriousness.

### What the Board pushes back on, and how we answered
| Pushback (real) | How we answer |
|---|---|
| "How is Brava different from the synthetic cedars we rejected 10 years ago?" | First paragraph of "Why we chose Brava": *"It is important to us that we only introduce a material to the Board that we would specify on our own homes. Brava is on that list."* + the Hickman Residence POV video beside it |
| "What does this cost?" | Deliberately off-deck. Jon handles price in-person. The deck is self-education so the Board arrives at the in-person conversation already convinced on the why. |
| "Will services be disrupted?" | FAQ #3. Specific answer: no, campus returned to Sunday-ready every evening. |
| "Why replace, not repair?" | FAQ #2. The felt underlayment is at end-of-life; any spot repair leaves that layer compromised. |

---

## 9 · Data-visualization principles

We used charts as copy-replacement in iter_15. The lesson: **a chart that requires a caption to make its point is a chart that failed.**

### Patterns that worked
- **Horizontal bar race** (50-yr lifecycle multiplier) — Brava smallest, wood cedar 5× longest. The eye instantly ranks the options.
- **Scaled bar columns** (Cost of Waiting) — `$100K / $200K / $400K / $800K` with heights doubling literally. Eye sees the exponential curve before reading the year labels.
- **Replacement-cycle timeline** — 50-yr horizontal axis, each material shown as how many roofs the Board would actually buy. Generic Cedar = 3 segments. Certi-Label = 2. Brava = 1 solid gold bar. Punchline headline: *"One Brava roof outlasts three wood-cedar roofs."*
- **Interactive layer SVG** (Roof System) — hover a layer in the list, the diagram responds. Rewards engagement without demanding it.

### Patterns that didn't work
- **Three concentric rings** (previous lifespan visual) — reads as "years" but viewer has to decode "rings = time." Too much cognitive load. Replaced.
- **Any visual requiring > 1 caption to be understood.** Kill or simplify.

### Rules
- **Axis labels in eyebrow type** (`11px uppercase tracking-[0.22em]`). Doesn't compete with the bars.
- **Gold = the point being made.** One bar gold, the rest neutral paper/30. The eye lands on the answer.
- **Indicative disclaimers** under anything that isn't a hard-sourced stat.
- **Animate with stagger.** Bars fill left-to-right with a 0.08-sec delay between them. It reads like reasoning unfolding, not a static infographic.

---

## 10 · The "needs-based sale" structural template

This is the Christ Church information architecture. **Reuse for any L&L deliverable where a decision-maker group needs to be walked to a conclusion.**

| # | Section | Rhetorical role |
|---|---|---|
| 01 | Hero | Orient + set tone |
| 02 | Alignment | Establish trust before pitching anything |
| 03 | Problem | Define the current-state pain, visually |
| 04 | Field evidence | Show the problem, not tell it |
| 05 | Repair vs replace | Kill the cheaper-option instinct |
| 06 | Material critique | Explain why the obvious alternative is also wrong |
| 07 | Our recommendation + proof | Reveal the answer, back it with field photos |
| 08 | Material performance | Let the reader scrutinize (light study, hover magnifier) |
| 09 | Full system + standards | Credentialize with third-party ratings + partner list |
| 10 | Attention to detail | Demonstrate craft (before/after, close-ups) |
| 11 | How we work | Differentiate the contractor, not the material |
| 12 | Process roadmap | De-risk the "then what?" |
| 13 | FAQ | Resolve lingering objections |
| 14 | Human close | Sign off warmly |

**Not every deliverable needs all 14.** A landing page is sections 01, 07, 11, 14. A case study is 01, 04, 08, 10, 11. But the *ordering principle* holds: trust → problem → alternative critique → recommendation → proof → process → close.

---

## 11 · Technical stack (so future work stays consistent)

- **React 19** + **Create React App** (via craco)
- **Tailwind CSS 3.4** with extended theme in `tailwind.config.js`
- **Framer Motion 12** for layout + reveal animations
- **Lenis 1.3** for smooth scroll
- **Lucide-react** for all icons (no FontAwesome, no emoji)
- **yet-another-react-lightbox** for image lightboxes
- **FastAPI + reportlab** backend for PDF generation (optional, re-added at deploy)

Match this stack on future deliverables unless there's a hard reason to change. Consistency lets the same brand feel survive across projects without re-negotiating every decision.

---

## 12 · Checklist for a new L&L deliverable

Before shipping anything that wears the Locke & Ladder name, verify:

- [ ] Color palette is day-only or day+night, never ad-hoc
- [ ] No pure white, no pure black — `paper`/`ink` only
- [ ] Fraunces italic used sparingly (section H2s of emotional weight only)
- [ ] `italic serif leading >= 1.18` on desktop
- [ ] Every section starts with a `<SectionTag>` with number + title
- [ ] `paper-grain::before` noise overlay active
- [ ] Scroll progress bar + scroll-hide side nav + night-mode toggle all wired
- [ ] Zero fabricated quotes / stats — everything has a source or is labeled "Indicative"
- [ ] No purple/violet gradients, no centered headline+body pairs, no generic card grid
- [ ] Hero fits in under 500KB image + one <10MB video
- [ ] Lightbox magnifier enabled for any photo a decision-maker might want to scrutinize
- [ ] `overflow-x-hidden` on root `.App`
- [ ] Tested at 375px (iPhone SE), 768px (iPad portrait), 1440px (MacBook), 1920px (external monitor) with zero horizontal overflow
- [ ] Polycam / other SharedArrayBuffer embeds deferred to new-tab unless COEP/COOP headers are in deploy config
- [ ] Copy cut ruthlessly — each paragraph ≤ 4 lines on desktop, or replaced by visual

---

## 13 · What's sacred (never change without a fight)

1. **Plainspoken voice.** If copy starts sounding like LinkedIn, reject.
2. **Number-first proof.** If a claim isn't a number, find the number or delete the claim.
3. **Image over text.** Visual earns its space. Text pays rent.
4. **Left-aligned editorial layout.** Not centered, not card-grid.
5. **Warm-gold scarcity.** One gold thing per viewport, max.
6. **No emoji. No purple. No generic.**
7. **Grain texture stays on.** 5% opacity SVG noise, site-wide.
8. **Section numbering is non-negotiable.** `02 / 14` format. Tells the reader where they are.

---

## 14 · Appendix: file map of the Christ Church microsite

For any LLM picking up future L&L work starting from this codebase:

```
/app/frontend/
├── src/
│   ├── App.js                                    · Lenis init, 14-section router, IntersectionObserver fades
│   ├── index.css                                 · CSS variables, font classes, night-mode overrides, grain texture
│   ├── components/
│   │   ├── Nav.jsx                               · Side-nav + hamburger + night-mode toggle
│   │   ├── ScrollProgress.jsx                    · 2px top progress bar
│   │   ├── Footer.jsx
│   │   ├── primitives.jsx                        · <SectionTag> <Eyebrow> <Caption> <VerifyTag>
│   │   └── sections/                             · One component per section
│   │       ├── Hero.jsx                          · Full-bleed video + logos + mission + scope + begin
│   │       ├── Relationship.jsx                  · "Alignment" · copy + 2 photos
│   │       ├── RoofEndOfLife.jsx                 · Problem statement + Polycam launch tile
│   │       ├── FieldInspection.jsx               · 4 core photos 2x2 + scrollable rail + lightbox magnifier
│   │       ├── RepairVsReplace.jsx               · Side-by-side benefit lists + cost multiplier
│   │       ├── TodaysCedar.jsx                   · Bg video + trimmed copy + 3 data visualizations
│   │       ├── BravaProof.jsx                    · Drone video + Laskey reveal + Why-Brava block + gallery w/ arrows + quote cards
│   │       ├── LightStudy.jsx                    · Color-for-life slide + aspen frame scrubber
│   │       ├── RoofSystem.jsx                    · Etymology headline + L&L/Brava toggle + 6 layers + standards + partners + DetailPanels
│   │       ├── AttentionToDetail.jsx             · Snape showpiece (before-after sliders)
│   │       ├── NewApproach.jsx                   · Vertical music video
│   │       ├── RoadMap.jsx                       · 7-step process icons
│   │       ├── FAQ.jsx                           · 5 Q&A accordions
│   │       └── HumanClose.jsx                    · Flag video + signoff + PDF link
│   └── ...
├── public/
│   └── assets/                                   · ~190MB · WebP photos, MP4 videos, brand SVGs
└── tailwind.config.js                            · Extended theme (the canonical color + font source)
```

---

*This guide captures the discipline of one shipped project. The next deliverable will test it. If something in here turns out wrong — revise this doc first, then the code.*

**— Maintained by the Locke & Ladder team + their LLM copilots. Last shipped reference: Christ Church Oak Brook proposal microsite (iter_15, Feb 2026).**
