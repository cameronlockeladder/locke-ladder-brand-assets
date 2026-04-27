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
- iter_13 (claimed 10/10 but iter_14 retest revealed 3 missed items)
- **iter_14 (current — Feb 2026 fork): 3 P0 fixes after testing-agent regression**
  - Hero big "Christ Church / Oak Brook." display headline removed (was never actually applied in iter_13 source despite earlier claim)
  - LightStudy "vespers" wording replaced with "dusk"
  - **CRITICAL** horizontal-overflow on tablet (382px) and mobile (14px) fixed by adding `overflow-x-hidden` to root `.App` div in `App.js` — root cause was BravaProof brava-thumb-* rail and field-rail negative-margin leaking past viewport
  - Bucket A asset cleanup: 15 orphaned files (32.3MB) removed — 6 PNG color-toggle variants, 3 christ-church hero MP4 alternates, 5 README.md, 1 dup wordmark.png. /assets/ is now 190MB (was 222MB).
  - Verified tablet 768 + mobile 375 both report scrollWidth==clientWidth (0px overflow)
  - Verified zero /assets/* 404s after deletion
  - FAQ accordion mobile concern from iter_13 was a false positive (FAQ #0 opens by default)

## Outstanding asset requests (optional)
- Faith Apostolic Church exterior (only if it fits without lengthening)
- House-scale Hickman/Laskey AFTER shot

## Backlog
- `?present=1` URL flag for Board-room readthrough
- Engagement beacons / per-recipient share URLs
- Optional Bucket B trim (~60MB Snape extras, christ-church orphan webps) — left intact as future-project library
- Optional Bucket C archive review (team/extras, brava-gallery extras, presentation reference slides) — preserved as library material per user direction
- Optional centralization of horizontal rails into a single `<HorizontalRail>` component with built-in overflow:hidden to prevent future regressions

## Deployment context (Feb 2026 fork)
- Repo: `cameronlockeladder/locke-ladder-brand-assets` · branch `Emergent-Exports-v3`
- Vercel project: `christchurch-lockeladder` · domain `christchurch.lockeladder.com`
- Codex agent handles fetch → patch live-only items (Vercel Analytics, Speed Insights, OG/share tags, social preview, board packet PDF) → local build → manual Vercel deploy
- Emergent's role: ship the cleanest possible export branch when user clicks "Save to GitHub"
- Asset deletion manifest preserved at `/app/orphan_delete_manifest.txt` for Codex audit

## Testing
- iter_14: 3/3 P0 fixes verified live on preview URL with hard metrics (scrollW==clientW, no hero-headline element, no "vespers" string). 0 console errors. PDF endpoint 200. Asset 404s = 0 after Bucket A cleanup.
