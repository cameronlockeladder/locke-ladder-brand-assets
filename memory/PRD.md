# Christ Church | Oak Brook — Proposal Microsite V4

**Client:** Christ Church | Oak Brook (Board of Trustees)
**Built by:** Locke & Ladder (Cameron / Jon Strand)
**Agent:** E1
**Scope:** Board-facing, image-led long-scroll React proposal + light FastAPI backend.

## What's in the page (12 sections)
1. Hero — steeple-led poster
2. Diagnosis — leak + repair-vs-replace, incl. roof-rot tile ("why spot repairs look bad")
3. **Polycam 3D walkthrough** (click-to-load iframe, NEW in iteration 2)
4. Evidence Wall — 100 real JobNimbus captures (6 featured + 94 rail, lightbox)
5. Cedar vs. Synthetic — honest cedar take + "Why we chose Brava" reveal
6. Brava Gallery — 4 Locke & Ladder installs (Hickman, Laskey) with gold "LOCKE & LADDER CLIENT" badge, then 17 Brava precedents
7. Aspen Light Study — 90-frame scroll scrubber (brava-light-study sequence)
8. Roof System — exploded study + 5 named partners
9. Craftsmanship — Snape ambient background video + 2 real before/after sliders + 3 detail tiles
10. Team — 8 crew photos editorial grid, "Jon Strand, Founder"
11. GiveBack — clear 1% explainer (future congregation projects only)
12. Closing — form POSTs to `/api/proposal/interest`

## Iteration history
- **Iter 1 (first build):** 12 sections built with placeholder aspen (5 frames) + visualizer section.
- **Iter 2 (user feedback):**
  - REMOVED: Visualizer section
  - ADDED: Polycam 3D iframe (click-to-load)
  - CHANGED: Brand font to Archivo (free stand-in for Termina Medium)
  - CHANGED: "A cedar that acts like stone" → "Cedar vs. Synthetic"
  - CHANGED: Evidence Wall now uses 100 real JobNimbus captures
  - CHANGED: BravaGallery leads with 4 L&L installs, clearly labeled
  - CHANGED: Aspen scrubber wired to real 90-frame sequence
  - CHANGED: Craftsmanship uses 2 real Snape before/after pairs + background video
  - CHANGED: Copy rewrites to avoid "not X — Y" AI-slop patterns
  - FIXED: Name — Jon Strand (not Jon Locke)

## Tech
- React SPA (long-scroll editorial)
- Fraunces (display) + Manrope (body) + Archivo (brand/eyebrow, Termina substitute)
- Lenis smooth scroll, Framer Motion, react-compare-slider, yet-another-react-lightbox
- FastAPI `/api/proposal/interest` (POST/GET), `/api/proposal/engagement` (POST), `/api/status`

## Deployment (user deploys to Vercel manually)
- Frontend static build: `cd /app/frontend && yarn build` → `build/` deploys to Vercel
- Backend optional; page works without it (form fails gracefully)
- Aspen frames (90), JobNimbus (100), L&L installs (4), Brava precedents (17), Snape video (2.7MB) are all in `/app/frontend/public/assets/`

## Backlog (P0 / P1 / P2)
- **P0:** Swap Archivo → actual Termina Medium when user provides WOFF2 (drop files under `/public/assets/fonts/` and update `--font-brand` in `index.css`)
- **P0:** Final copy from Jon (current copy is board-friendly placeholder matching voice direction in repo's `docs/locke-copy-direction.md` — "tableside, direct, opinionated, 'We refuse…', 'It is important to us…'")
- **P1:** Replace SystemDiagram SVG with a real architectural exploded-view illustration
- **P1:** Select the actual top-10 JobNimbus tiles for the featured grid (currently using jn-001..006 as featured — easy to reorder by changing the FEATURED array in EvidenceWall.jsx)
- **P2:** Engagement beacon hitting `/api/proposal/engagement`
- **P2:** Share-link generator with per-recipient signature

## Testing
Both iterations pass 100% backend and frontend via testing_agent_v4.

## Files of Interest
- Sections: `/app/frontend/src/components/sections/*.jsx`
- Nav/Footer/primitives: `/app/frontend/src/components/{Nav,Footer,primitives}.jsx`
- Main scaffold: `/app/frontend/src/App.js`
- Styles: `/app/frontend/src/index.css` + `/app/frontend/tailwind.config.js`
- Backend: `/app/backend/server.py`
- Assets: `/app/frontend/public/assets/`
