# Christ Church | Oak Brook · Proposal Microsite (V4)

**Client:** Christ Church | Oak Brook (Board of Trustees)
**Built by:** Locke & Ladder (Jon Strand)
**Agent:** E1

## Current architecture · 13 sections (DOM order)
1. **Hero** (`#hero`) · steeple video · CC + L&L lockup · mission quote "Gather communities of disciples…" · Scope = Sanctuary, Steeple & Mansard
2. **Relationship / Local Experts** (`#relationship`) · "Impact is our rally cry." + verbatim ethos body + team photo
3. **Roof End of Life** (`#roof-eol`) · verbatim end-of-useful-life body + embedded Polycam 3D viewer
4. **Field Inspection Report** (`#field-inspection`) · 4 curated featured tiles (from new `field-inspection-report/`) + 42-tile JobNimbus rail (NO captions, culled from 100)
5. **Repair vs Replace** (`#repair-vs-replace`) · verbatim 5+4 bullets, clean (no [VERIFY])
6. **Today's Cedar** (`#todays-cedar`) · full-bleed `todays-cedar-background-laskey-brava-cedar-carmel…mp4` video · verbatim cedar narrative · "15–20 years wood cedar shake" line · native **lifecycle chart** (Brava 3.14x · Metal 6.29x · Asphalt 7.30x · Concrete 10.94x · Natural Cedar 16.76x) · Source: Brava Roof Tile
7. **Brava Proof** (`#brava-proof`) · real drone montage (`mccue-brava-slate-drone-clip`) ▸ Laskey side-by-side reveal ▸ "Why we chose Brava" with `hickman-brava-during-v1-first-9s.mp4` POV background ▸ 22-tile gallery (9 L&L + 13 Brava precedents; adds hickman-11/13/export-16, laskey-aerial/29) ▸ **Beauty with a Conscience** panel ▸ Amy/Michigan quote card
8. **Light Study** (`#light-study`) · **Color for Life** intro panel (mineral-pigment copy) ▸ 90-frame Aspen scroll scrubber
9. **Roof System** (`#system`) · **etymology headline treatment**: "ROOF SYSTEM" display + italic-serif `<span role="definition">` footnote "system (noun) · a set of components engineered to perform as one." anchored to baseline-right of "SYSTEM" (wraps below on mobile) · 6-layer system table · **Standards badge row** (Class 4 · 188 MPH · Class A · CRRC · Miami-Dade) · Partners row
10. **Attention to Detail** (`#attention`) · verbatim body · Snape before/after sliders + detail tiles (visual proof only)
11. **Our Approach / New Approach to Contracting** (`#new-approach`) · NEW · vertical 9:16 video `new-approach-to-contracting-with-music.mp4` · click-to-play with controls · centered, not full-bleed
12. **Christ Church Success Road Map** (`#roadmap`) · renamed from "Client Success Road Map" · 7 steps · Step 04 includes "Factory-trained, vetted, insured. Locke & Ladder is a certified BRAVA installer." pill
13. **Human Close** (`#human-close`) · full-bleed Coppergate flag video loop · PDF packet download preserved in bottom-right corner

## Tech stack
- React SPA · Lenis · Framer Motion · react-compare-slider · yet-another-react-lightbox
- Termina (brand) + Inter (display/body) + Fraunces (italic serif · used for etymology tag, Color-for-Life & Beauty-with-a-Conscience italic headlines)
- FastAPI: `POST /api/proposal/interest` · `GET /api/proposal/packet.pdf` (reportlab + pillow, 2.5MB)

## Assets added this iteration (from https://github.com/cameronlockeladder/locke-ladder-brand-assets)
- `videos/brand/new-approach-to-contracting/new-approach-to-contracting-with-music.mp4`
- `videos/projects/brava-web-video-assets/` — todays-cedar bg, hickman-brava POV, laskey/mccue drone clips
- `videos/projects/coppergate-window-install/` — 2 flag videos (Human Close)
- `photos/projects/christ-church/field-inspection-report/` — 4 curated inspection photos
- `photos/projects/locke-ladder-brava-cedar-projects/` — hickman-11, hickman-13-scaled, hickman-export-16, laskey-aerial, laskey-pre-painted-29
- `proposal-support/brava-presentation-reference-slides/` — reference for native rebuild (rebuilt, not linked)

## Removed in V4
- GiveBack section
- All `[VERIFY]` and `[ASSET NEEDED]` placeholder tags (present-ready delivery)
- "Class A" claim on the Brava shake row (restored correctly at SYSTEM level in Standards badge row)
- "quiet" copy, Snape case-study narrative, board-clock pressure copy
- Separate Polycam section (embedded in Roof End of Life)

## Iteration history
- Iter 1–4: 7-section arch, PDF, Termina, Laskey reveal
- Iter 5: 12-section rewrite with verbatim copy, `[VERIFY]`/`[ASSET NEEDED]` tags, 17/17 pass
- **Iter 6 (current)**: 13-section arch. Hero first, Relationship second. 6 new videos, 5 new photos, 7 Brava presentation slides rebuilt as native components. Etymology headline on Roof System. **27/27 acceptance checks pass, 100% frontend, 0 console errors, PDF endpoint verified.**

## Backlog (P0 / P1 / P2)
- **P0:** Confirm Christ Church mission statement text (currently "Gather communities of disciples…" truncated)
- **P0:** Confirm Brava lifecycle numbers if board asks for methodology citation
- **P1:** Add more LL project variety to Brava gallery when new shoots come in
- **P1:** Replace Amy/Michigan quote with an attributed Hickman or Laskey quote when collected
- **P1:** Sanity check all 42 curated JobNimbus rail tiles exist on disk
- **P2:** Engagement beacons hitting `/api/proposal/engagement`
- **P2:** Per-recipient share URLs with unique analytics signatures
- **P2:** Optional "present mode" URL param to hide side-nav + PDF chip during live Board readthrough

## Testing
- iter_1 100% · iter_2 100% · iter_3 100% · iter_4 100% · iter_5 100% (17/17) · **iter_6 100% (27/27)**
