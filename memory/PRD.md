# Christ Church | Oak Brook — Proposal Microsite V4

**Client:** Christ Church | Oak Brook (Board of Trustees)
**Built by:** Locke & Ladder (Cameron / Jon)
**Agent:** E1
**Scope:** A board-facing, image-led proposal experience for a roofing recommendation. Long-scroll React editorial site + light FastAPI analytics/contact backend.

## Original Problem Statement (summary)
Build V4 of a proposal microsite from first principles. Not a marketing page — a board packet brought to life. Minimal copy, maximum visuals, calm/trustworthy/premium tone. Sale is needs-based: leak → repair-vs-replace honesty → cedar honesty → Brava reveal → roof system → team/relationship → GiveBack → close. 6–8 sections. Bosses said V1 was "too much info without a break" — V4 prioritizes visuals and breathing room.

## User Persona
Older church board (low–moderate tech literacy, high sensitivity to clarity and tone). Needs to understand the roofing decision without being pressured, and feel the company they're trusting has taste and ethics.

## Core Requirements (static)
- Steeple-led hero (brighter, more welcoming than prior versions)
- Diagnosis section that explains underlayment failure + repair-vs-replace plainly
- JobNimbus-style evidence wall (featured tiles + horizontal rail + lightbox)
- Honest cedar conversation → Brava reveal → hero-changing Brava gallery (17 installed) → cedar-to-Brava church visualizer (3 before/afters)
- Aspen light study scrubber (90-frame webp, currently 5 uploaded)
- Roof system as an editorial exploded study + named partners
- Snape craftsmanship before/after slider
- Team / relationship-first chapter with real crew photography
- GiveBack: 1% to **future** congregation-member projects, not current
- Conviction closing + contact form

## What's Been Implemented (Apr 18, 2026)
- **Full-scroll React experience** with 12 sections (Hero → Diagnosis → Evidence → CedarBrava → Gallery → Visualizer → Aspen → System → Craftsmanship → Team → GiveBack → Closing)
- **Typography:** Fraunces (display serif) + Manrope (sans) via Google Fonts
- **Color:** warm paper #F9F8F6 / ink #1A1C20 / warm-gold accents; deep-navy #003B5C for GiveBack; dark ink section rhythm (Evidence, Gallery, Aspen) for contrast
- **Interactions:** Lenis smooth scroll, Framer Motion reveals/scrubber, react-compare-slider (4 instances), yet-another-react-lightbox (evidence), hero-changing Brava gallery with 17 real installed photos, sticky side section-nav with 12 dots + top header
- **Assets:** 151 MB of real assets copied to `/app/frontend/public/assets/` from locke-ladder-brand-assets repo (Christ Church campus, steeple, bell tower, roof-rot, Brava renders, Snape craftsmanship, team/crew, brand marks, Brava gallery, Oak Brook streets SVG)
- **Aspen scrubber:** 5 of 90 frames in place; gracefully labeled with a VERIFY tag; structure ready for drop-in of remaining frames at `/app/frontend/public/assets/aspen/frame-XXX.webp`
- **Backend:** FastAPI on `/api/` with Mongo — `/api/proposal/interest` (POST validates email / GET lists), `/api/proposal/engagement` (POST ping), `/api/status`. Contact form on Closing section hits interest endpoint
- **Testing:** Backend 8/8 pass. Frontend 95% — all critical functionality verified (sections render, lightbox, gallery toggles, sliders drag, form submits). Two low-priority nits fixed: lightbox data-testid + mobile hero subtitle contrast. No console errors. No emoji characters.

## Deployment Notes (user deploys to Vercel manually)
- Frontend: `cd /app/frontend && yarn build` → static build in `/app/frontend/build`. Deploy to Vercel as static. Set `REACT_APP_BACKEND_URL` to point at the FastAPI host (e.g., Railway/Fly/Render) OR leave empty — the contact form fails gracefully and logs to console.
- Backend (optional for static deploy): the page works completely without it; only the contact form writes to Mongo. If the board replies by email, the backend is not strictly needed.
- Domain/DNS handled by client manually.

## Backlog (P0 / P1 / P2)

### P0 (user-supplied, drop-in)
- **Aspen light study:** user uploading remaining 85 webp frames to `/assets/aspen/frame-006.webp` … `frame-090.webp`. Scrubber auto-scales — change `FRAME_COUNT = 90` in `/app/frontend/src/components/sections/AspenLightStudy.jsx` and remove the VerifyTag
- **JobNimbus proof (top 10 + 50):** currently using the 9 Christ Church documentation photos as the evidence wall. When the strongest 10 + next 50 JobNimbus tiles are ready, replace `FEATURED` and `RAIL` arrays in `/app/frontend/src/components/sections/EvidenceWall.jsx`
- **Final copy from Jon:** headlines and supporting copy are board-friendly placeholders matching original intent

### P1
- Add scroll-progress bar or chapter indicator at page edge
- Replace SystemDiagram SVG with a real architectural exploded-view illustration
- Swap Snape before/after (Field vs Detail) with an actual craftsmanship before/after pair if available
- Preload critical images for faster LCP

### P2
- Engagement event beacon (time on section, scroll depth) hitting `/api/proposal/engagement`
- Printable/PDF "board packet" export version
- `nofollow` share link for board circulation with a dedicated analytics signature

## Files of Interest
- Frontend sections: `/app/frontend/src/components/sections/*.jsx`
- Nav/footer: `/app/frontend/src/components/{Nav,Footer,primitives}.jsx`
- Main scaffold: `/app/frontend/src/App.js`
- Styles: `/app/frontend/src/index.css` + `/app/frontend/tailwind.config.js`
- Backend: `/app/backend/server.py`
- Assets: `/app/frontend/public/assets/`
