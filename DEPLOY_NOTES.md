# Deploy Notes · iter_15 → `Emergent-Exports-v3`
**Christ Church | Oak Brook · Locke & Ladder proposal microsite**
**For:** Codex deploy agent
**From:** Emergent main agent
**Date:** Feb 2026

---

## TL;DR for Codex

This export contains 14 user-requested UI/UX fixes (iter_15) plus a Bucket-A asset cleanup (–32 MB / 15 files). Verified frontend-clean: no console errors, 0 `/assets/*` 404s, mobile + tablet have 0 px horizontal overflow.

**One architectural decision needs your call at deploy:** the Polycam 3D scan section. Currently shipping as a "launch in new tab" tile (works on every browser, instant). If you want an inline iframe instead, you need to add two HTTP headers to `vercel.json` and swap one component file. Both options are documented below — pick whichever you want to deploy.

---

## What changed in this export (iter_15)

### Source files modified
| File | Change |
|---|---|
| `frontend/src/App.js` | `overflow-x-hidden` on root `.App` div (fixes tablet/mobile horizontal overflow — was 382 px on iPad) |
| `frontend/src/components/sections/Hero.jsx` | Restored "Christ Church / Oak Brook." display headline (was incorrectly removed iter_14) |
| `frontend/src/components/sections/Relationship.jsx` | H2 changed: "We speak your language." → "Alignment." |
| `frontend/src/components/sections/RoofEndOfLife.jsx` | Polycam iframe replaced with launch-in-new-tab tile · see Polycam section below |
| `frontend/src/components/sections/FieldInspection.jsx` | Featured photos reset to user's 4-photo core group (jn-010, jn-032, jn-035, jn-095 with 180° rotation). 2×2 grid replaces 5-photo asymmetric layout. New `rotate` prop on `MagnifierTile`. |
| `frontend/src/components/sections/TodaysCedar.jsx` | Heavy copy trim · all `$X00,000` → `$X00K` · serif `leading` increased from `1.05` → `1.18-1.2` (desktop collision fix) · 3-ring concentric SVG replaced with new `ReplacementCycles` 50-yr horizontal-timeline visual |
| `frontend/src/components/sections/BravaProof.jsx` | Removed Mundelein photo · removed 2 paragraphs in why-we-chose-Brava block · added round prev/next gallery arrows |
| `frontend/src/components/sections/LightStudy.jsx` | "Mineral pigments..." paragraph deleted, replaced with single-line copy + "vespers" → "dusk" carry-over from iter_14 |
| `frontend/src/components/sections/RoofSystem.jsx` | DetailPanel subtitles deleted (Low-e + Grace IWS); component now conditionally renders subtitle only if non-empty |
| `frontend/src/components/sections/FAQ.jsx` | "Questions the Board has asked before." H2 + intro paragraph fully removed; SectionTag is now the only header |

### Assets deleted (Bucket A · 15 files / 32.3 MB)
Verified zero references in source. Full audit method + manifest at `/app/orphan_delete_manifest.txt` (not exported, but listed here for traceability):

```
6× christ-church/*-brava-{aspen,natural-cedar}.png       (cut color-toggle variants)   17.6 MB
3× christ-church/{front-entrance,hero-campus,side-entry}.mp4   (orphaned hero alts)   14.6 MB
5× README.md scattered across asset directories                                          ~0 MB
1× brand/locke-ladder/locke-ladder-wordmark.png          (.webp version is the one used) 0.07 MB
                                                                                  ────────
                                                                          TOTAL:   32.3 MB
```

`/public/assets/` is now ~190 MB (was 222 MB). Buckets B/C/D were intentionally preserved as brand-asset library material per user.

### What was NOT touched (preserved as-is)
- Vercel Analytics, Speed Insights — you re-add these at deploy
- iMessage / OG / share preview meta tags — you re-add
- Social preview image — you re-add
- Board packet PDF endpoint (`/api/proposal/packet.pdf`) — you re-add
- All Bucket B/C/D assets (Snape extras, brava-gallery extras, presentation reference slides, team/extras, oak-brook-streets svg/png, brava-light-study + brava-field-shake-layout-study sequences)

---

## ⚠️ Polycam decision — pick one before deploy

The previous iframe embed was buffering forever in user's browser. Root cause confirmed by direct test: Polycam's 3D viewer requires `SharedArrayBuffer`, which only works inside an iframe when the **parent page is cross-origin isolated** (COOP + COEP headers set). Without those headers, Polycam's embed loads its HTML/CSS/spinner fine — but the WebAssembly mesh decoder silently waits forever for `SharedArrayBuffer` to become available, which it never will.

### Currently shipping: Option B · launch-in-new-tab tile (zero deploy risk)
File: `frontend/src/components/sections/RoofEndOfLife.jsx` · already in source.

Renders the topdown.webp campus image with a "Walk the campus · in 3D · LAUNCH IN A NEW TAB ↗" CTA. On click, opens `https://poly.cam/capture/3c1da4a0-341f-4fa2-b9fc-a1afa6154d36` in a new tab where Polycam's own page IS cross-origin isolated and the 3D viewer loads in ~5 sec with full controls (zoom, pan, walk-through, measure).

**Pros:** works on every browser, including older iPads. Instant. Polycam's full-screen viewer is a better interaction than a 16:9 embed.
**Cons:** breaks the "scroll-and-watch" flow of the deck — board has to come back from a new tab.

### If you want the inline iframe instead: Option A · COEP/COOP headers + iframe restore

**Step 1.** Add to `vercel.json` (project root):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Cross-Origin-Opener-Policy", "value": "same-origin" },
        { "key": "Cross-Origin-Embedder-Policy", "value": "require-corp" }
      ]
    }
  ]
}
```

**Compatibility check before you do this:**
- All our `/assets/*` are same-origin → no CORP header needed on them ✅
- Vercel Analytics + Speed Insights scripts: served from `va.vercel-scripts.com` and `vercel-analytics.com` — both serve with `Cross-Origin-Resource-Policy: cross-origin` already, so they're fine under `require-corp`
- If you add any third-party widget later (Intercom, GA, etc.), you'll need to either set `crossorigin="anonymous"` on the script tag and confirm the host returns CORP headers, or switch COEP from `require-corp` to `credentialless` (slightly looser, broadly supported in modern browsers)

**Step 2.** Replace the launch tile with this iframe in `frontend/src/components/sections/RoofEndOfLife.jsx`. Find the `<Polycam3D>` function and replace its body with:

```jsx
function Polycam3D() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { rootMargin: "600px 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-6 mb-6">
        <div className="eyebrow text-warm-gold">Walk the campus yourself</div>
        <Caption>3D Scan created from Locke &amp; Ladder site visit</Caption>
      </div>

      <div
        ref={ref}
        className="relative bg-ink border border-ink/10 overflow-hidden"
        data-testid="polycam-embed-wrap"
        style={{ aspectRatio: "16 / 9" }}
      >
        {inView ? (
          <iframe
            src="https://poly.cam/capture/3c1da4a0-341f-4fa2-b9fc-a1afa6154d36/embed"
            title="Polycam capture viewer · Christ Church Oak Brook"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            allow="fullscreen; xr-spatial-tracking"
            loading="lazy"
            data-testid="polycam-iframe"
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/photos/projects/christ-church/topdown.webp')" }}
          >
            <div className="absolute inset-0 bg-ink/55 flex items-center justify-center">
              <span className="font-brand text-[11px] uppercase tracking-[0.28em] text-paper/85">
                Loading 3D scan…
              </span>
            </div>
          </div>
        )}
      </div>

      <Caption className="mt-3 text-slate/80">
        Interactive 3D &middot;{" "}
        <a
          href="https://poly.cam/capture/3c1da4a0-341f-4fa2-b9fc-a1afa6154d36"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-ink"
        >
          open in a new tab
        </a>{" "}
        for full-screen controls
      </Caption>
    </div>
  );
}
```

You'll also need to update the imports at the top of the file from:
```jsx
import React from "react";
```
to:
```jsx
import React, { useRef, useState, useEffect } from "react";
```
And remove the unused `POLYCAM_URL` constant.

### Recommendation

For this specific deliverable (one-shot board pitch on iPads), **Option B (current launch-in-new-tab) is the safer call.** Polycam in a full new tab is a better interaction than the constrained iframe embed anyway, and you avoid a 5–15 second loading spinner mid-pitch.

**If user explicitly wants inline:** Option A works cleanly with the snippet above. Test on a real iPad before the board meeting.

---

## Re-verification checklist (post-build, pre-deploy)

Run these in your build environment:

- [ ] `yarn build` completes without errors
- [ ] No `/assets/*` 404s in network panel during full-page scroll
- [ ] body `scrollWidth` == `clientWidth` at 375 px and 768 px viewports (no horizontal overflow)
- [ ] Hero shows "Christ Church Oak Brook." display headline + steeple video
- [ ] Alignment section H2 reads "Alignment." (not "We speak your language.")
- [ ] Field Inspection shows 4 photos in 2×2 grid (jn-095 visibly rotated 180°)
- [ ] Today's Cedar bar graph shows `$100K / $200K / $400K / $800K` (no commas)
- [ ] Today's Cedar bottom-of-section "ReplacementCycles" visual: Generic Cedar = 3 segments, Certi-Label = 2, Brava = 1 solid bar
- [ ] BravaProof gallery has round prev/next arrow buttons that cycle correctly
- [ ] Mundelein photo not present in gallery rotation
- [ ] FAQ section starts directly with the question list (no "Questions the Board has asked before." H2)
- [ ] PDF endpoint `/api/proposal/packet.pdf` returns 200 application/pdf (you re-add this)
- [ ] If you chose Option A: Polycam iframe loads the 3D model after ~10 sec on first scroll-into-view

---

## Live-only items to re-add at deploy (your existing checklist)

These were intentionally NOT included in the export branch:
- Vercel Analytics
- Vercel Speed Insights
- iMessage / Open Graph / Twitter share meta tags
- Social preview image
- Board packet PDF (`/api/proposal/packet.pdf`)
- (Optional) `vercel.json` COEP/COOP headers if Option A chosen

---

## Build context

- Framework: React 19 + Create React App (via craco)
- Build command: `yarn build`
- Output dir: `frontend/build/`
- Asset weight: 190 MB (most large items: aspen sequence ~7.5 MB, brava-web-video-assets ~24 MB used, christ-church/snape mp4s/webps ~80 MB used)
- Backend (`backend/`): FastAPI · used only for PDF endpoint · safe to skip if you re-add PDF as static at deploy

## Questions / blockers
None known. Email back via the user if anything in this export looks off.

— Emergent main agent
