# Christ Church | Oak Brook · Proposal Microsite (V4)

**Client:** Christ Church | Oak Brook (Board of Trustees)
**Built by:** Locke & Ladder (Jon Strand)
**Agent:** E1

## Current architecture · 13 sections (DOM order)
1. Hero · steeple video
2. Relationship / Local Experts · "Impact is our rally cry."
3. Roof End of Life · Polycam
4. Field Inspection Report · 4 featured with square 5× magnifier + lightbox magnifier + 42-tile rail
5. Repair vs Replace
6. Today's Cedar · background video · full-width native lifecycle bars
7. Brava Proof · drone montage · Laskey reveal · Why-we-chose-Brava w/ vertical Hickman POV + split copy · gallery · Beauty-with-a-Conscience · Amy + Hickman quotes
8. Light Study · Color-for-Life (click-to-enlarge) · Aspen scrubber
9. Roof System · etymology headline · L&L view ↔ Brava reference toggle · 6-layer · 5 Standards · Partners
10. Attention to Detail · before/after + 3 detail tiles
11. Our Approach · vertical music video
12. Christ Church Success Road Map · 7 steps + BRAVA installer pill
13. Human Close · Coppergate flag loop + PDF download

## Header controls (iter-9)
- **Theme toggle** (`data-testid="theme-toggle"`) · sun / moon icon · flips `<html>` class `theme-night` · persisted in `localStorage.cc_theme` · accent palette hand-tuned for dark
- **Side-nav toggle** (`data-testid="side-nav-toggle"`) · eye / eye-off icon · desktop only · hides the 13-dot section navigator via opacity + slide · persisted in `localStorage.cc_nav_hidden`

## Tech stack
- React SPA · Lenis · Framer Motion · react-compare-slider · yet-another-react-lightbox
- Termina + Inter + Fraunces
- FastAPI: `POST /api/proposal/interest` · `GET /api/proposal/packet.pdf`

## Night mode PoC notes
- Implementation: `html.theme-night` class + ~30 CSS overrides for the most-used utilities (`bg-paper`, `bg-paper-warm`, `text-ink`, `border-rule`, etc.). Keeps hot-path source files untouched.
- Persisted via `localStorage`.
- Sections that already used `bg-ink` stay dark (video sections are unaffected · good).
- Sections that used `bg-paper` (Relationship, Repair/Replace, Roof System, RoadMap) flip cleanly with readable contrast.
- Accent tone: warm-gold shifts from `#857650` → `#C3A871` (softer champagne) and bronze → `#D48B6B` for legibility on dark.
- Time cost: ~15 min build, ~20 lines of Nav JSX, ~30 lines of CSS.
- **Verdict:** worth it if the Board will view this at night or in a dim sanctuary. A more thorough polish pass would refine lifecycle-chart bar colors, partner-row hover states, and a few SVG accents — but the PoC proves the juice is worth the squeeze.

## Asset inventory
- 42 JPGs → WebP (iter-8): −90% on disk, −29MB on live page
- Heaviest live assets: drone-montage 6.7MB · new-approach 4.6MB · snape-bg 2.3MB
- Live-page payload ≈ 45 MB · Originals backed up at `/app/.asset-originals/`

## Iteration history
- iter_5 17/17 · iter_6 27/27 · iter_7 14/14 · iter_8 11/11 · **iter_9 (current) header controls PoC — theme toggle + nav-hide toggle**

## Backlog
- **P1:** compress `hero-timeline.mp4` + `snape-bg.mp4` another 40-50% if desired
- **P1:** promote night-mode PoC to production polish if user green-lights
- **P2:** engagement beacons, per-recipient share URLs, `?present=1` URL param

## Testing
- Live smoke test (iter-9): theme toggle flips all 13 sections cleanly, nav-hide animates out + persists, PDF endpoint still 200 OK
