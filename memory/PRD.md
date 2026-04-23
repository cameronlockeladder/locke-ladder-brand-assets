# Christ Church | Oak Brook · Proposal Microsite (V4)

**Purpose:** Board members self-educate as if Jon Strand were pitching in person.

## Current architecture · 14 sections
1. **Hero** · steeple video · Contractor · Scope · Begin
2. **Alignment** · "We speak your language." · 2 photo placeholders + Jon Strand copy
3. **Problem** · "Roof is at the end of useful life." · Polycam
4. **Field Inspection** · 5 featured tiles · 42-tile rail · 5× square magnifier + lightbox magnifier
5. **Repair vs Replace** · 5 · 6 bullets
6. **Today's Cedar** · bg video · native lifecycle chart
7. **Lasting Beauty** · drone · Laskey reveal · Why-Brava vertical POV + split copy · 22-tile interwoven gallery (no L&L tagging) · 3 quote cards (Amy · Gilda Hickman pull-quote · Faith Apostolic)
8. **Light Study** · Color-for-Life slide · Aspen scrubber
9. **Roof System** · etymology headline · L&L ↔ Brava toggle · 6-layer table · 5 Standards · Partners · 2 expandable panels (Low-e · Grace IWS vs generic)
10. **Attention to Detail**
11. **Our Approach** · vertical music video with audio
12. **Christ Church Success Road Map** · 7 steps + BRAVA installer pill
13. **Questions (FAQ)** · 5 expandable Q&A on Brava / replace / disruption / church-fit / next-steps
14. **Human Close** · flag video · sign-off block (Jon Strand · PDF · "— end —")

## Global controls
- Sticky **scroll-progress bar** (2px top, warm-gold, mix-blend-difference)
- Header **theme toggle** (day / night) + **side-nav toggle** (hide/show 13-dot navigator)

## Tech
- React SPA · Lenis · Framer Motion · react-compare-slider · yet-another-react-lightbox
- Termina + Inter + Fraunces
- FastAPI: `GET /api/proposal/packet.pdf` 6.2 MB

## Assets
- All photos WebP · live-page payload ~45 MB · originals backed up at `/app/.asset-originals/`

## Outstanding asset requests (ranked, for user to drop in GitHub)
**Tier 1 (highest impact):**
1. Jon Strand teaching at L&L / on a roof (Alignment)
2. Jon's father with Billy Graham (Alignment)
3. Faith Apostolic Church exterior (anchor for 3rd quote)
4. One Hickman or Laskey full house-scale AFTER photo

**Tier 2:**
5. 3 hail-damage Christ Church inspection photos (boss-confirmed)
6. L&L crew-on-a-roof action shot (Road Map)
7. Brava cedar shake product sample photo (Why-Brava)
8. L&L yard sign on completed job (end)

**Tier 3:**
9. Aerial of church/institutional-scale Brava install
10. 5-8s b-roll of EchoShield or ridge-vent install
11. High-res christ-church-logo 2x

## Copy→viz conversions queued
1. Today's Cedar — 4-dot timeline chart for "roofing doubled every 10 years"
2. Standards row — click-popover explainer per badge
3. Roof System 6-layer — hover-row highlights SVG layer
4. Road Map — per-step icons
5. Repair vs Replace — central cost-multiple visual (3.14× vs 16.76×)
6. Today's Cedar — 3-ring cedar-lifespan vs Brava graphic
7. New Approach — autoplay muted + SOUND-ON CTA + key-line quote card

## Iteration history
- iter_5 17/17 · iter_6 27/27 · iter_7 14/14 · iter_8 11/11 · iter_9 smoke · iter_10 14/14 · **iter_11 11/11 after one-line badge removal fix**

## Testing
- iter_11: 10/11 first pass, single remaining Laskey badge fixed in one edit, PDF endpoint 200/6.19MB, 0 console errors
