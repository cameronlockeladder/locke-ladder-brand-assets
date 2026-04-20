# Christ Church | Oak Brook · Proposal Microsite (V4)

**Client:** Christ Church | Oak Brook (Board of Trustees)
**Built by:** Locke & Ladder (Jon Strand)
**Agent:** E1

## Current architecture · 13 sections (DOM order)
1. **Hero** (`#hero`) · steeple video · CC + L&L lockup · mission quote "Gather communities of disciples…" · Scope = Sanctuary, Steeple & Mansard
2. **Relationship / Local Experts** (`#relationship`) · "Impact is our rally cry." + verbatim ethos body + team photo
3. **Roof End of Life** (`#roof-eol`) · verbatim end-of-useful-life body + embedded Polycam 3D viewer
4. **Field Inspection Report** (`#field-inspection`) · 4 curated featured tiles **with desktop-only hover magnifier (220×220 lens, 3× zoom)** + 42-tile JobNimbus rail (no captions)
5. **Repair vs Replace** (`#repair-vs-replace`)
6. **Today's Cedar** (`#todays-cedar`) · lighter bg-video overlay (bg-ink/45 + gradient from-ink/15→/35→/85) · 15–20yr shake line · native 5-row lifecycle chart side-by-side with Brava's own lifecycle-cost slide image
7. **Brava Proof** (`#brava-proof`) · `christ-church-brava-drone-montage.mp4` drone opener ▸ Laskey side-by-side reveal ▸ **Why we chose Brava** now has LEFT vertical 9:16 Hickman-POV video + RIGHT split copy (3 paragraphs) ▸ 22-tile gallery ▸ Beauty with a Conscience panel ▸ **TWO** quote cards (Amy + Gilda Hickman verbatim)
8. **Light Study** (`#light-study`) · Color-for-Life panel with Brava's `07-color-for-life-mineral-pigments.webp` slide ▸ 90-frame Aspen scroll scrubber
9. **Roof System** (`#system`) · etymology headline ("ROOF SYSTEM" + italic-serif definition **directly underneath** as a semantically linked sibling `role="definition"`) · 6-layer system · 5-badge Standards row · Partners row
10. **Attention to Detail** (`#attention`) · Snape before/after sliders + 3 detail tiles (**no captions**)
11. **Our Approach** (`#new-approach`) · vertical 9:16 "new approach to contracting with music" video · click-to-play
12. **Christ Church Success Road Map** (`#roadmap`) · 7 steps · Step 04 has BRAVA-installer pill
13. **Human Close** (`#human-close`) · full-bleed Coppergate flag video loop · PDF packet download preserved

## Tech stack
- React SPA · Lenis · Framer Motion · react-compare-slider · yet-another-react-lightbox
- Termina (brand) + Inter (display/body) + Fraunces (italic serif)
- FastAPI: `POST /api/proposal/interest` · `GET /api/proposal/packet.pdf`

## Asset audit (iter-7)
- **Live-page payload: 61 MB** (was 91 MB — saved **29.6 MB, 33%** via compression)
- Heaviest remaining: drone-montage 6.7MB, new-approach 4.6MB, snape-bg 2.3MB, hero-timeline 2.3MB, hickman-9s 2.3MB
- Compression wins:
  - `christ-church-brava-drone-montage.mp4`: 17.1MB → 6.7MB (-61%)
  - `hickman-brava-during-v1-first-9s.mp4`: 8.5MB → 2.3MB (-73%)
  - `new-approach-to-contracting-with-music.mp4`: 7.3MB → 4.6MB (-37%)
  - `team-photo.webp`: 8.5MB → 0.7MB (-91%, resized 6000px → 2400px)
  - `steeple-closeup.mp4`: 2.6MB → 0.9MB (-65%)
- All originals backed up at `/app/.asset-originals/`
- Method: `ffmpeg -crf 25 -preset slow -b:v <br> -vf scale='min(<w>,iw):-2' -an -movflags +faststart`

## Iteration history
- Iter 1–4: 7-section architecture scaffolding
- Iter 5: 12-section verbatim copy rewrite (17/17)
- Iter 6: 13-section architecture w/ GitHub assets, etymology headline, standards row, new approach section (27/27)
- **Iter 7 (current)**: polish. Magnifier, vertical Hickman-POV video in Why-we-chose-Brava, Hickman quote card, Brava slides integrated natively, toned-down gold, heavy compression pass. **14/14 checks pass.**

## Backlog
- **P1:** Potential further compression: `hero-timeline.mp4` (2.3MB) and `snape-bg` (2.3MB) could drop another 40-50% if needed
- **P1:** Convert `.jpg` hero assets to `.webp` for an additional ~30% size win on photos
- **P2:** Engagement beacons hitting `/api/proposal/engagement`
- **P2:** Per-recipient share URLs with unique analytics signatures
- **P2:** "Present mode" URL param to hide side-nav + PDF chip during live Board readthrough

## Testing
- iter_5 17/17 · iter_6 27/27 · **iter_7 14/14** · 0 console errors · 0 broken assets · PDF endpoint verified 200 application/pdf
