# Christ Church | Oak Brook · Proposal Microsite (V4)

**Client:** Christ Church | Oak Brook (Board of Trustees)
**Built by:** Locke & Ladder (Jon Strand)
**Agent:** E1

## Current architecture · 12 sections (DOM order)
1. **Relationship / Local Experts** (`#relationship`) · opens with "Impact is our rally cry." + verbatim ethos body + [ASSET NEEDED: L&L team video]
2. **Hero** (`#hero`) · steeple video · CC + L&L lockup · mission-statement quote "Gather communities of disciples…" [VERIFY EXACT MISSION STATEMENT] · Scope = Sanctuary, Steeple & Mansard (mansard no longer optional). No "A proposal", no "An Icon", no Contact separator.
3. **Roof End of Life** (`#roof-eol`) · verbatim end-of-useful-life body + embedded Polycam click-to-load 3D viewer
4. **Field Inspection Report** (`#field-inspection`) · JobNimbus grid + rail + lightbox · [ASSET NEEDED: hi-res roof-condition closeups] tag · intro/triaging copy removed
5. **Repair vs Replace** (`#repair-vs-replace`) · verbatim 5+4 bullets · only "Reduced insurance premiums." carries [VERIFY]
6. **Today's Cedar** (`#todays-cedar`) · full verbatim cedar narrative · [VERIFY] on "3 decades" stat and [VERIFY terminology] on "3/4″ Heavies"
7. **Brava Proof** (`#brava-proof`) · drone-montage placeholder ▸ Laskey side-by-side reveal ▸ "Why we chose Brava" (Class A removed, now Class 4 · mineral pigmented) ▸ Amy/Michigan [VERIFY] quote + [ASSET NEEDED] quote card ▸ 17-tile gallery (4 L&L + 13 Brava precedents, darker/B&W removed)
8. **Light Study** (`#light-study`) · 90-frame Aspen scrubber · new vespers/October tagline · "board picks on Tuesday" removed
9. **Roof System** (`#system`) · 6 components (no "Seven layers" / "the roof, as a system") · partners row · [VERIFY] on Grace + EchoShield stats
10. **Attention to Detail** (`#attention`) · verbatim body · Snape narrative paragraph removed · before/after sliders preserved as visual proof only
11. **Client Success Road Map** (`#roadmap`) · 7 numbered steps (Preproduction → Calendar → Safety → Oversight → Cleanup → Walkthrough → Long-Term)
12. **Human Close** (`#human-close`) · single full-bleed image · no header, no body · [ASSET NEEDED: L&L team photo or flag] · corner Board Packet PDF download preserved

## Tech stack
- React SPA · Lenis · Framer Motion · react-compare-slider · yet-another-react-lightbox
- Termina (brand) + Inter (display/body) + Fraunces (serif accents)
- FastAPI: `POST /api/proposal/interest` · `GET /api/proposal/packet.pdf` (reportlab + pillow, ~2.5MB)

## Assets preserved
- JobNimbus 100-capture set (`/assets/photos/projects/christ-church/jobnimbus/`)
- Polycam 3D scan (click-to-load iframe inside Roof-End-of-Life)
- 90-frame Brava Aspen scroll scrubber
- Before/after sliders (Snape) inside Attention to Detail
- PDF board packet download (corner overlay on Human Close)

## Removed in V4 rewrite
- GiveBack section (no longer in the 12-section spec)
- Team section (Relationship replaces it at the top)
- Diagnosis / CedarBrava / BravaGallery / AspenLightStudy / Craftsmanship / Closing (renamed + rewritten)
- Polycam as standalone section (embedded inside Roof-End-of-Life)
- Brava install slider (frames not available)
- All "Class A" claims on the Brava shake
- "quiet" copy, "tired roof" copy, board-clock pressure language
- Snape case-study narrative paragraph

## Iteration history
- Iter 1–4: 7-section architecture, PDF, Termina, Laskey reveal, Polycam
- **Iter 5 (current): 12-section rewrite.** All verbatim user copy applied. [ASSET NEEDED] / [VERIFY] tags rendered literally in the UI per spec. 17/17 content checks pass. 0 console errors. PDF endpoint: HTTP 200, application/pdf, 2.5MB.

## Backlog (P0 / P1 / P2)
- **P0:** Supply hi-res roof-condition closeups with proper labels (replaces the 3 [ASSET NEEDED] placeholders in Field Inspection tiles 4–6)
- **P0:** Supply L&L team video / team / crew / flag / house still (replaces placeholder in Relationship + Human Close)
- **P0:** Supply Brava drone-montage edit (replaces drone-montage placeholder at top of Brava Proof)
- **P0:** Confirm exact Christ Church mission statement text (replaces [VERIFY EXACT MISSION STATEMENT])
- **P0:** Verify Certi-label terminology "3/4″ Heavies" and the "roofing doubled every 10 years" stat
- **P0:** Verify insurance-premium claim and Grace Ice & Water Shield "highest performing" claim and EchoShield "97% radiant heat" claim
- **P1:** Add more Hickman detailed closeups to Brava Proof gallery
- **P1:** Sanity-check all 94 rail JobNimbus files exist on disk (per iter-5 reviewer note)
- **P1:** Replace Laskey/Hickman [ASSET NEEDED] quote card with a real attributed 5-star customer quote
- **P2:** Engagement beacons hitting `/api/proposal/engagement`
- **P2:** Per-recipient share URLs with unique analytics signatures

## Testing
- iter_1 100% · iter_2 100% · iter_3 100% · iter_4 100% · **iter_5 100% (17/17 content checks, PDF verified)**
