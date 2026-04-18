# Christ Church | Oak Brook - Proposal Microsite V4

**Client:** Christ Church | Oak Brook (Board of Trustees)
**Built by:** Locke & Ladder (Cameron / Jon Strand)
**Agent:** E1

## Sections (13 total)
1. Hero (hero-timeline.mp4 video, sans display, CC + L&L lockup)
2. Diagnosis (leak + repair-vs-replace + roof-rot eyesore tile C)
3. Polycam 3D walkthrough (click-to-load iframe)
4. EvidenceWall (100 JobNimbus tiles, all captions = VERIFY COPY gold badge)
5. CedarBrava (Cedar vs. Synthetic + 3 cedar cards + Brava reveal + spec grid)
6. **LaskeyReveal** (full-bleed Real cedar / Brava cedar compare slider, Laskey residence)
7. BravaGallery (4 L&L installs first with gold badge, then 17 Brava precedents; only section using Fraunces serif)
8. AspenLightStudy (90-frame scroll scrubber, Brava Aspen)
9. RoofSystem (7 layers + **Brava install slider** 121-frame range control, no scroll hijack + 5 partners)
10. Craftsmanship (Snape bg video + 2 before/after sliders + 3 detail tiles)
11. Team (18-tile dense scattered mosaic, includes extras/collage-people, bitners, travis)
12. GiveBack (1% back headline + **Faith Apostolic precedent photo** + **Oak Brook map with Christ Church pin** + CC logo)
13. Closing (form POSTs to /api/proposal/interest, signed "Jon Strand & the Locke & Ladder team")

## Iterations
- **Iter 1:** Initial build (12 sections, placeholder aspen).
- **Iter 2:** Visualizer removed · Polycam added · BravaGallery L&L-first with gold badges · 90 real aspen frames · Snape video · 100 JobNimbus · Jon Strand (fix) · Archivo brand font · em-dashes still present at that point.
- **Iter 3 (this):** LaskeyReveal inserted · Inter replaces Fraunces as default (serif reserved to BravaGallery only) · ALL JobNimbus captions to VERIFY COPY · Christ Church logo in nav · Faith Apostolic photo + Oak Brook map + CC logo added to GiveBack · denser Team mosaic · Brava install 121-frame range-slider in RoofSystem · words "quiet" and "tired" removed · all em-dashes removed (replaced with · separators or restructured prose) · hero-timeline.mp4 video in Hero.

## Tech
- React SPA, Lenis smooth scroll, Framer Motion, react-compare-slider, yet-another-react-lightbox
- Inter (default display + body) + Fraunces (gallery only) + Manrope (fallback)
- Brand-font slot reserves Termina when WOFF2 licensed
- FastAPI: /api/proposal/interest (POST/GET), /api/proposal/engagement (POST), /api/status

## Deployment (Vercel manual)
`cd /app/frontend && yarn build` → push `build/` to Vercel.
`REACT_APP_BACKEND_URL` points to wherever FastAPI is hosted (optional — form degrades silently).

## Assets in /app/frontend/public/assets
- `brand/` (L&L icon + wordmark, CC logo + oak-brook-streets SVG, Brava logos)
- `photos/projects/christ-church/` including hero-timeline.mp4, steeple-closeup.mp4, 100 JobNimbus captures
- `photos/projects/faith-apostolic-church/` (GiveBack precedent)
- `photos/projects/locke-ladder-brava-cedar-projects/` (Hickman x2, Laskey x2)
- `photos/projects/snape/` (video + 2 before/after pairs + 3 detail tiles)
- `photos/materials/brava-gallery/` (17 Brava precedents)
- `photos/team/` + `photos/team/extras/` (18 team photos)
- `aspen/` (90 webp frames)
- `brava-install/` (121 webp frames)
- `proposal-support/christ-church/roof-rot.webp`

## Backlog (P0 / P1 / P2)
- **P0:** Drop licensed Termina Medium WOFF2 under `/public/assets/fonts/` and prepend `"Termina"` in `--font-brand` / `.font-display` in `index.css`
- **P0:** Jon supplies final captions for all VERIFY COPY spots (EvidenceWall FEATURED + RAIL descriptions)
- **P0:** Jon supplies final prose rewrites throughout (voice direction in repo's docs/locke-copy-direction.md)
- **P1:** Choose the best 10 JobNimbus featured images (edit FEATURED array in EvidenceWall.jsx)
- **P1:** Replace SystemDiagram SVG with real architectural exploded-view illustration
- **P2:** Engagement beacons hitting /api/proposal/engagement (time on section, scroll depth)
- **P2:** Per-recipient share URLs with unique analytics signatures

## Testing
iter_1 100% pass · iter_2 100% pass · iter_3 100% pass (one LOW/INFO note about React `muted` boolean attribute reflection, not functional).

---
## Iteration 4 (this round)
- Termina Medium + Heavy WOFF2 loaded via `/public/fonts.css` (linked from index.html; keeps CRA happy)
- Laskey side-by-side single-image reveal moved INSIDE CedarBrava between the 3 cedar cards and the Brava reveal (no slider any more)
- Separate LaskeyReveal section and .jsx file removed
- All "V4" references removed from user-facing text
- Craftsmanship headline: "Work that takes the time it takes."
- Team rebuilt as sticky scroll-scatter (Framer Motion useScroll/useTransform, 18 absolutely-positioned tiles with varied rotations and parallax entries). No captions, no grid, no masonry.
- GiveBack: full-bleed Faith Apostolic photo with huge 1% overlay; Christ Church pin has two radiating .ll-pulse-ring gradients on infinite animation; added serif italic community impact pull-quote
- Hero: Client/Scope/Priority row rebuilt as a 4-column grid of HeroCell components (eyebrow + value) so baselines align
- **PDF board packet endpoint**: GET /api/proposal/packet.pdf (reportlab, pure Python + Pillow for image downsizing). ~2.5MB, 7 pages (cover + 6). Download button wired into the Closing section.

## Deployment reminder (Vercel manual)
Frontend:
  cd /app/frontend && yarn build
  deploy ./build to Vercel.
Termina WOFF2 files already ship under /public/assets/fonts and /public/fonts.css — no additional config needed.
For the PDF button to work, REACT_APP_BACKEND_URL must point at a live FastAPI host with reportlab + pillow installed.

## Testing history
iter_1: 100% · iter_2: 100% · iter_3: 100% · iter_4: 100% (28/28 verified items)
