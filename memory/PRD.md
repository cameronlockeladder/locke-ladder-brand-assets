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
- **iter_13 (current): 10/10 — all 7 targeted fixes green on first pass**

## Outstanding asset requests (optional)
- Faith Apostolic Church exterior (only if it fits without lengthening)
- House-scale Hickman/Laskey AFTER shot

## Backlog
- `?present=1` URL flag for Board-room readthrough
- Engagement beacons / per-recipient share URLs

## Testing
- iter_13: 10/10 pass. PDF endpoint 200/6.19MB. 0 console errors. Two charts visually confirmed as intended (lifecycle=materials, timeline=decades).
