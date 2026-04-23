# Christ Church | Oak Brook · Proposal Microsite (V4)

**Purpose:** Board members self-educate as if Jon Strand were pitching in person.

## Current architecture · 14 sections
1. Hero · steeple video · Contractor · Scope · Begin
2. **Alignment** · copy-first · FAC-roof video + Jon presenting photo
3. Problem · Polycam · "Roof is at the end of useful life."
4. Field Inspection · 5 featured + 42-tile rail · 5× hover + lightbox magnifiers
5. Repair vs Replace · 5+6 bullets · **central 3.14x ↔ 16.76x cost-multiple viz**
6. Today's Cedar · bg video · lifecycle bars · **roofing-cost timeline** · **3-ring lifespan graphic**
7. Lasting Beauty · drone · Laskey reveal · Why-Brava product photo + split copy · 22-tile gallery · 3 quote cards (Amy · Hickman pull-quote · Faith Apostolic)
8. **Light Study** · Color-for-Life slide · **contained draggable time-slider** (dawn → evening)
9. Roof System · etymology headline · L&L ↔ Brava toggle · **hover-to-highlight 6-layer** · **click-popover Standards** · Partners · 2 expandable panels (Low-e · Grace IWS with real photos)
10. Attention to Detail · Snape sliders + 3 uncaptioned tiles
11. Our Approach · vertical music video with audio
12. Christ Church Success Road Map · 7 steps with lucide icons + Step 04 crew photo
13. FAQ · 5 expandable Q&A
14. Human Close · flag video · sign-off block · PDF

## Global controls
- **Scroll-progress bar** at top (no mix-blend, fixed ghosting)
- Header theme toggle + side-nav toggle (desktop)
- **Mobile hamburger** → full-screen sheet with all 14 sections

## New assets this iter
- FAC video of Jon on a church roof (compressed 8.5 → 2.6 MB)
- Jon presenting still
- Brava cedar shake product photo (why-brava)
- Grace IWS installed on an L&L job + generic IWS product photo
- L&L crew flat-roof photos (Road Map)

## Copy→viz implementations (POCs live)
- #1 Roofing-cost timeline (Today's Cedar)
- #2 Click-popover Standards with plain-English explainers (Roof System)
- #3 Hover-to-highlight 6-layer + SVG lift (Roof System)
- #4 Road Map per-step lucide icons
- #5 Central 3.14x vs 16.76x cost-multiple viz (Repair vs Replace)
- #6 3-ring lifespan graphic · Generic cedar / Certi-label / Brava (Today's Cedar)

## Outstanding asset requests
- Jon's Dad with Billy Graham (Alignment right slot)
- Additional Hickman/Laskey full-house-scale AFTER shot
- Faith Apostolic Church exterior (only if it fits without lengthening page)

## Iteration history
- iter_5 17/17 · iter_6 27/27 · iter_7 14/14 · iter_8 11/11 · iter_9 smoke · iter_10 14/14 · iter_11 11/11 · **iter_12 13/14 → 14/14 after one-line Standards fix**

## Testing
- iter_12: 13/14 first pass; StandardBadge component was defined but the .map wasn't wired to use it. Fixed in one search_replace, verified via screenshot (Class A popover text confirmed). PDF endpoint 200/6.19MB. 0 console errors at 1920 and 390 viewports. Mobile hamburger verified at 390x844.
