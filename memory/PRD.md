# Christ Church | Oak Brook · Proposal Microsite (V4)

**Purpose:** Board members "self-educate" as if Jon Strand were pitching in person.

## Current architecture · 13 sections
1. **Hero** · steeple video · Contractor/Scope/Begin (Client + Priority cells removed)
2. **Alignment** · "We speak your language." · 2 photo placeholders (Jon teaching/roof · Jon's Dad with Billy Graham) + verbatim Jon Strand copy (Billy Graham / Grace / Mercy Road / facilities manager / LIFT 10,000)
3. **Problem** · "Roof is at the end of useful life." · Polycam "3D Scan created from Locke & Ladder site visit"
4. **Field Inspection Report** · 5 curated feature tiles with real-report captions (Wind-lifted shakes / Impact indentations / Moss & algae / Previous leak damage) + 39-tile rail + 5× square hover magnifier + lightbox magnifier
5. **Repair vs Replace** · 5 Repair bullets / **6 Replace bullets** (+ Low-e underlayment + Renewed architectural beauty)
6. **Today's Cedar** · bg video · full-width native lifecycle chart
7. **Lasting Beauty** · Christ Church Brava drone montage · Laskey reveal · Hickman POV vertical video + 3-paragraph split copy · 22-tile gallery (Brava precedents lead, L&L close) · Amy + Gilda Hickman quote cards directly under gallery · *Beauty-with-a-Conscience deleted*
8. **Light Study** · Color-for-Life slide (click-to-enlarge) · Aspen scrubber (headline only, paragraph removed)
9. **Roof System** · etymology headline · L&L view ↔ Brava reference toggle · 6-layer table · 5-badge Standards · Partners · **2 new expandable panels**: Low-e Synthetic Underlayment + Grace IWS vs Generic IWS comparison
10. **Attention to Detail** · before/after + 3 uncaptioned detail tiles
11. **Our Approach** · vertical "with-music" video (audio restored) · paragraph under header deleted
12. **Christ Church Success Road Map** · 7 steps + BRAVA-installer pill
13. **Human Close** · Coppergate flag loop · PDF download

## Header controls (iter-9)
- Sun/moon **theme toggle** (day ↔ night, persisted)
- Eye **side-nav toggle** (hide/show 13-dot navigator, persisted)

## Footer
- Only L&L mark + verbatim copy: "Locke & Ladder is a Chicagoland exterior company specializing in performance roofing, high efficiency windows, siding, doors and gutter systems."

## Tech
- React SPA · Lenis · Framer Motion · react-compare-slider · yet-another-react-lightbox
- Termina + Inter + Fraunces
- FastAPI: `POST /api/proposal/interest` · `GET /api/proposal/packet.pdf`

## Assets
- All photos now WebP (42 JPGs converted, 90% size saved on disk)
- Live-page payload ~45 MB
- `with-music` video re-encoded with audio preserved (iter-7 bug fixed)
- Originals backed up at `/app/.asset-originals/`

## Iteration history
- iter_5 17/17 · iter_6 27/27 · iter_7 14/14 · iter_8 11/11 · iter_9 smoke
- **iter_10 (current)**: 13/14 first pass → 14/14 after single-line fix on BravaProof SectionTag title

## Backlog
- **P0:** Swap placeholders in Alignment with real photos of Jon teaching/on a roof + Jon's Dad with Billy Graham
- **P1:** Field Inspection — if user wants, I can pull additional hail-specific shots from the rail into the feature tier once a few are marked as hail-hit confirmed
- **P1:** Compress the last two heavy videos (`hero-timeline.mp4`, `snape-bg.mp4`) for ~2MB savings
- **P2:** Engagement beacons · per-recipient share URLs · `?present=1` mode

## Testing
- iter_10 testing: 13/14 on first pass; missed single prop (SectionTag title="Proof" vs "Lasting Beauty") flagged by testing agent, fixed in one search_replace, verified via screenshot. PDF endpoint 200 OK, 0 console errors.
