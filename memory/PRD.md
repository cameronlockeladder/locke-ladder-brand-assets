# Christ Church | Oak Brook · Proposal Microsite (V4)

**Client:** Christ Church | Oak Brook (Board of Trustees)
**Built by:** Locke & Ladder (Jon Strand)
**Agent:** E1

## Current architecture · 13 sections (DOM order)
1. **Hero** · steeple video · CC + L&L lockup · mission quote
2. **Relationship / Local Experts** · "Impact is our rally cry."
3. **Roof End of Life** · Polycam 3D viewer
4. **Field Inspection Report** · 4 featured tiles with **desktop-only SQUARE 5× hover magnifier** + **5× magnifier also active inside lightbox** + 42-tile JobNimbus rail
5. **Repair vs Replace**
6. **Today's Cedar** · background video · verbatim narrative · **full-width native lifecycle bar chart** (Brava slide moved out to Roof System)
7. **Brava Proof** · `christ-church-brava-drone-montage.mp4` drone opener · Laskey side-by-side · Why-we-chose-Brava with LEFT vertical Hickman POV video + split copy RIGHT · 22-tile gallery · Beauty-with-a-Conscience · 2 quote cards (Amy + Hickman)
8. **Light Study** · **Color-for-Life slide (click-to-enlarge in lightbox)** · 90-frame Aspen scrubber
9. **Roof System** · etymology headline + definition · **toggleable System Panel: "L&L view" (native exploded SVG) ↔ "Brava reference" (02 slide · BRAVA Cedar Shake Roofing System, click to enlarge in lightbox)** · 6-layer table · 5 Standards · Partners row
10. **Attention to Detail** · Snape sliders + 3 detail tiles (no captions)
11. **Our Approach** · vertical "new approach to contracting" video
12. **Christ Church Success Road Map** · 7 steps + BRAVA-installer pill at Step 04
13. **Human Close** · Coppergate flag video loop + PDF download

## Tech stack
- React SPA · Lenis · Framer Motion · react-compare-slider · yet-another-react-lightbox (with custom magnifier slide renderer)
- Termina + Inter + Fraunces
- FastAPI: `POST /api/proposal/interest` · `GET /api/proposal/packet.pdf`

## Asset audit · iter-8
- **42 JPGs → WebP** (174.8 MB → 16.9 MB on disk, **-90%**); all code references auto-rewritten; `pdf_builder.py` updated
- Live-page payload approx **45 MB** (was 91 MB before iter-7 compression)
- Largest remaining: drone-montage 6.7MB, new-approach 4.6MB, snape-bg 2.3MB
- Asset originals preserved at `/app/.asset-originals/`

## Iteration history
- Iter 5–6: 12 → 13 sections, GitHub assets, etymology headline, Standards row, New Approach video (27/27)
- Iter 7: magnifier v1, vertical Hickman POV, Hickman quote, Brava slides integrated, gold tone-down, video compression (14/14)
- **Iter 8 (current)**: Brava slide moved from Today's Cedar to Roof System as toggleable panel; magnifier upgraded to SQUARE 5×; lightbox-magnifier added; Color-for-Life click-to-enlarge; global JPG→WebP migration. **11/11 criteria pass after SystemPanel wiring fix.**

## Backlog
- **P1:** `hero-timeline.mp4` (2.3MB) and `snape-bg.mp4` (2.3MB) can compress another 40-50% if needed
- **P2:** Engagement beacons hitting `/api/proposal/engagement`
- **P2:** Per-recipient share URLs
- **P2:** `?present=1` URL param for clean Board readthrough

## Testing
- iter_5 17/17 · iter_6 27/27 · iter_7 14/14 · **iter_8 11/11 after fix** · 0 JPG refs in DOM · PDF endpoint 200 OK
