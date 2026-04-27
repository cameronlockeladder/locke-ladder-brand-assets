# Christ Church | Oak Brook · Proposal Microsite (V4)

**Purpose:** Board members self-educate as if Jon Strand were pitching in person.

## Current architecture · 14 sections
1. Hero · steeple video · Contractor · Scope · Begin
2. **Alignment** · copy-first · FAC-roof video (left) + Jon's Dad with Billy Graham framed photo (right)
3. Problem · Polycam · "Roof is at the end of useful life."
4. Field Inspection · 5 featured + 42-tile rail · 5× hover + lightbox magnifiers
5. Repair vs Replace · 5+6 bullets · central 3.14x ↔ 16.76x cost-multiple viz
6. **Today's Cedar** · bg video · lifecycle bars (materials) · **roofing-cost $ timeline with scaled bars showing $100K → $800K doubling** · 3-ring lifespan graphic
7. Lasting Beauty · drone · Laskey reveal · **Why-Brava now full-bleed darkened Hickman POV video with copy overlaid** · 22-tile gallery · 3 quote cards
8. Light Study · Color-for-Life slide · **contained draggable time-slider with cleanly-cropped aspen frames (no Brava logo visible)**
9. Roof System · etymology headline · L&L ↔ Brava toggle · hover-to-highlight 6-layer · click-popover Standards · Partners · 2 expandable panels (**Grace IWS panel auto-opens by default with real install vs generic product photos; Low-e closed by default**) · **Bone Roofing Supply link fixed to boneroofingsupply.com**
10. Attention to Detail
11. Our Approach · vertical music video with audio
12. Christ Church Success Road Map · 7 steps with lucide icons + Step 04 crew photo
13. FAQ · 5 expandable Q&A · **first answer properly padded (was clipping at top)**
14. Human Close · flag video · sign-off block · PDF

## Global controls
- Scroll-progress bar (no mix-blend, no ghosting)
- Theme toggle + side-nav toggle (desktop)
- Mobile hamburger full-screen sheet

## Assets this iter
- `jon-dad-billy-graham.webp` (2400×2596) — Alignment right slot
- 65 aspen frames physically cropped from 1600×790 → 1600×695 (originals backed up at `/app/.asset-originals/aspen/`)

## Iteration history
- iter_5..iter_12: 17/17, 27/27, 14/14, 11/11, smoke, 14/14, 11/11, 14/14
- iter_13 (claimed 10/10 but iter_14 retest revealed 3 missed items)
- iter_14 — 3 P0 fixes after testing-agent regression (Hero headline, vespers, mobile/tablet overflow) + Bucket A asset cleanup (32 MB / 15 files)
- **iter_15 (current — Feb 2026): 14-item batch from user**
  - Hero "Christ Church / Oak Brook." headline RESTORED (per user request after iter_14 removal)
  - Alignment H2: "We speak your language." → "Alignment." (matches SectionTag)
  - Field Inspection core group reset: 4 photos selected by user (jn-010, jn-032, jn-035, jn-095 with 180° rotation). 2×2 grid replaces previous 5-photo asymmetric layout.
  - **Polycam fixed** — replaced iframe (was buffering forever due to Polycam's `cross-origin-embedder-policy: require-corp` requiring cross-origin isolation we don't ship) with click-to-launch-in-new-tab tile using the topdown.webp hero image
  - TodaysCedar copy trimmed: removed body-2 paragraph entirely; body-1 cut from 8 sentences to 1 sentence; let visuals do the talking
  - All `$X00,000` → `$X00K` (mobile bar graph no longer overflowing on 375px)
  - Desktop serif headlines: increased line-height from `leading-[1.05]`/`leading-[0.98]` to `leading-[1.18-1.2]` for italic serif h3s in TodaysCedar — fixes "running into each other" issue
  - **Lifespan visual rethink** — replaced confusing 3-ring concentric SVG with `ReplacementCycles` component: 50-year horizontal timeline with 3 rows (Generic Cedar = 3 segments, Certi-Label = 2 segments, Brava = 1 solid bar). New headline "One Brava roof outlasts three wood-cedar roofs." Tells the story in 2 seconds.
  - RoofSystem detail panels: deleted "a second skin..." (Low-e) and "Where cheap membranes fail..." (Grace IWS) subtitles. `DetailPanel` component now conditionally renders subtitle only if non-empty.
  - BravaProof "Why we chose Brava": deleted "We refused every synthetic..." and "Molded from real cedar masters..." paragraphs. Kept only the "introduce a material to the Board we would specify on our own homes" line.
  - BravaProof gallery: removed "Lake Forest Shake · Mundelein, IL" photo from BRAVA_PROJECTS + GALLERY interleave (gallery index re-numbered). Added `brava-gallery-prev` and `brava-gallery-next` round arrow buttons (positioned mid-height left/right) for navigation.
  - LightStudy: deleted "Mineral pigments have held color..." paragraph, replaced with single-line copy connecting to the Color-for-Life slide visual.
  - FAQ: deleted full H2 "Questions the Board has asked before." block + intro paragraph. SectionTag remains as the only header.

## Iter_15 verified deliveries (Feb 2026)
- Hard JS-metric checks confirmed: hero-headline present; alignment-headline reads "Alignment."; faq-headline absent; polycam-launch present pointing to https://poly.cam/capture/3c1da4a0-...; lifespan-cycles section with 3 rows; brava-gallery-prev + brava-gallery-next present; "Mundelein", "vespers", "Mineral pigments", "We refused", "Molded from real", "second skin", "Questions the Board", "Everything else lives", "We speak" — all 0 hits in body text; dollars format = ['$100K', '$200K', '$400K', '$800K']; field-featured-* count = 4
- Visual screenshots (1440 desktop + 375 mobile) confirm: serif headlines no longer collide on desktop; $K bars fit cleanly on 375px; replacement-cycle visual reads instantly; Polycam launch tile renders the topdown hero with proper CTA

## Outstanding asset requests (optional)
- Faith Apostolic Church exterior (only if it fits without lengthening)
- House-scale Hickman/Laskey AFTER shot

## Backlog
- `?present=1` URL flag for Board-room readthrough
- Engagement beacons / per-recipient share URLs
- Optional Bucket B trim (~60MB Snape extras, christ-church orphan webps) — left intact as future-project library
- Optional Bucket C archive review (team/extras, brava-gallery extras, presentation reference slides) — preserved as library material per user direction
- Optional centralization of horizontal rails into a single `<HorizontalRail>` component with built-in overflow:hidden to prevent future regressions

## Deployment context (Feb 2026 fork)
- Repo: `cameronlockeladder/locke-ladder-brand-assets` · branch `Emergent-Exports-v3`
- Vercel project: `christchurch-lockeladder` · domain `christchurch.lockeladder.com`
- Codex agent handles fetch → patch live-only items (Vercel Analytics, Speed Insights, OG/share tags, social preview, board packet PDF) → local build → manual Vercel deploy
- Emergent's role: ship the cleanest possible export branch when user clicks "Save to GitHub"
- Asset deletion manifest preserved at `/app/orphan_delete_manifest.txt` for Codex audit

## Testing
- iter_14: 3/3 P0 fixes verified live on preview URL with hard metrics (scrollW==clientW, no hero-headline element, no "vespers" string). 0 console errors. PDF endpoint 200. Asset 404s = 0 after Bucket A cleanup.
