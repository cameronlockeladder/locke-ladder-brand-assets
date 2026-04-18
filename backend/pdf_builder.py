"""
Board-packet PDF generator for the Christ Church | Oak Brook proposal.

Produces a compact, print-quality PDF from real assets shipped in
/app/frontend/public/assets. Pure reportlab, no system deps.
"""
from __future__ import annotations

from io import BytesIO
from pathlib import Path
from datetime import datetime, timezone

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.pdfgen import canvas as rl_canvas
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER


ASSETS = Path(__file__).resolve().parent.parent / "frontend" / "public" / "assets"

INK = colors.HexColor("#1A1C20")
PAPER = colors.HexColor("#F9F8F6")
GOLD = colors.HexColor("#857650")
SLATE = colors.HexColor("#50636F")
NAVY = colors.HexColor("#003B5C")
RULE = colors.HexColor("#D9D4CA")

PAGE_W, PAGE_H = letter
MARGIN = 0.6 * inch


def _safe(path: Path) -> Path | None:
    """Accept only files that actually exist under the assets tree."""
    try:
        p = path.resolve()
        if str(p).startswith(str(ASSETS.resolve())) and p.exists():
            return p
    except Exception:
        pass
    return None


def _style(name: str, **kwargs) -> ParagraphStyle:
    return ParagraphStyle(name=name, **kwargs)


STYLES = {
    "cover_title": _style(
        "cover_title", fontName="Helvetica-Bold", fontSize=46, leading=48,
        textColor=PAPER, alignment=TA_LEFT, spaceAfter=16,
    ),
    "cover_sub": _style(
        "cover_sub", fontName="Helvetica", fontSize=13, leading=18,
        textColor=PAPER, alignment=TA_LEFT,
    ),
    "h1": _style(
        "h1", fontName="Helvetica-Bold", fontSize=30, leading=34,
        textColor=INK, spaceAfter=14, alignment=TA_LEFT,
    ),
    "h2": _style(
        "h2", fontName="Helvetica-Bold", fontSize=15, leading=19,
        textColor=INK, spaceBefore=10, spaceAfter=6, alignment=TA_LEFT,
    ),
    "body": _style(
        "body", fontName="Helvetica", fontSize=10.5, leading=15,
        textColor=INK, spaceAfter=8, alignment=TA_LEFT,
    ),
    "caption": _style(
        "caption", fontName="Helvetica-Oblique", fontSize=8.5, leading=11,
        textColor=SLATE, alignment=TA_LEFT, spaceAfter=4,
    ),
    "eyebrow": _style(
        "eyebrow", fontName="Helvetica-Bold", fontSize=8, leading=10,
        textColor=GOLD, alignment=TA_LEFT, spaceAfter=4,
    ),
    "pull": _style(
        "pull", fontName="Helvetica-Oblique", fontSize=20, leading=26,
        textColor=PAPER, alignment=TA_LEFT, spaceAfter=8,
    ),
}


# ---------- Page callbacks ----------
def _cover_bg(c: rl_canvas.Canvas, _doc) -> None:
    """Full-bleed dark cover with the hero steeple photo."""
    c.saveState()
    c.setFillColor(INK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    hero = _safe(ASSETS / "photos/projects/christ-church/steeple-closeup.jpg")
    if hero:
        c.drawImage(str(hero), 0, 0, width=PAGE_W, height=PAGE_H, preserveAspectRatio=True, mask="auto")
    # Dark wash for legibility
    c.setFillColorRGB(0.1, 0.11, 0.13, alpha=0.7)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.restoreState()


def _page_chrome(c: rl_canvas.Canvas, doc) -> None:
    """Subtle header + footer on content pages."""
    c.saveState()
    c.setFillColor(SLATE)
    c.setFont("Helvetica", 8)
    c.drawString(MARGIN, PAGE_H - MARGIN + 12,
                 "LOCKE & LADDER  ·  CHRIST CHURCH | OAK BROOK  ·  BOARD PACKET")
    c.drawRightString(PAGE_W - MARGIN, MARGIN - 18, f"PAGE {doc.page}")
    c.setStrokeColor(RULE)
    c.setLineWidth(0.4)
    c.line(MARGIN, PAGE_H - MARGIN + 6, PAGE_W - MARGIN, PAGE_H - MARGIN + 6)
    c.line(MARGIN, MARGIN - 10, PAGE_W - MARGIN, MARGIN - 10)
    c.restoreState()


# ---------- Flowables ----------
def _image_flow(rel: str, w: float) -> Image | None:
    """
    Load an image from disk, downsize it to the target print width
    (~150 DPI equivalent) to keep the PDF compact, and return a reportlab
    Image flowable with aspect-preserved dimensions.
    """
    p = _safe(ASSETS / rel)
    if not p:
        return None
    try:
        from PIL import Image as PILImage
        with PILImage.open(p) as im:
            im = im.convert("RGB")
            iw, ih = im.size
            # Target: roughly 150 DPI for the rendered width (points -> inches -> px)
            target_px_w = int((w / 72.0) * 150)
            if iw > target_px_w:
                new_h = int(ih * (target_px_w / iw))
                im = im.resize((target_px_w, new_h), PILImage.LANCZOS)
                iw, ih = im.size
            buf = BytesIO()
            im.save(buf, format="JPEG", quality=82, optimize=True)
            buf.seek(0)
            h = w * (ih / iw) if iw else w * 9 / 16
            return Image(buf, width=w, height=h)
    except Exception:
        try:
            return Image(str(p), width=w, height=w * 9 / 16)
        except Exception:
            return None


def _section(story, eyebrow: str, title: str) -> None:
    story.append(Paragraph(eyebrow.upper(), STYLES["eyebrow"]))
    story.append(Paragraph(title, STYLES["h1"]))


def _p(story, txt: str) -> None:
    story.append(Paragraph(txt, STYLES["body"]))


def _caption(story, txt: str) -> None:
    story.append(Paragraph(txt, STYLES["caption"]))


def _img(story, rel: str, caption: str | None = None, w: float | None = None) -> None:
    width = w or (PAGE_W - 2 * MARGIN)
    img = _image_flow(rel, width)
    if img is not None:
        story.append(img)
        if caption:
            story.append(Spacer(1, 4))
            _caption(story, caption)
        story.append(Spacer(1, 10))


def build_board_packet_pdf() -> BytesIO:
    """
    Build the Christ Church | Oak Brook board packet PDF. One cover page
    plus six content pages. Rebuilt on every request so edits to copy or
    assets flow through immediately.
    """
    buf = BytesIO()

    content_frame = Frame(
        MARGIN, MARGIN, PAGE_W - 2 * MARGIN, PAGE_H - 2 * MARGIN,
        id="content", showBoundary=0,
    )
    cover_frame = Frame(
        MARGIN, MARGIN, PAGE_W - 2 * MARGIN, PAGE_H - 2 * MARGIN,
        id="cover", showBoundary=0,
    )

    doc = BaseDocTemplate(
        buf,
        pagesize=letter,
        title="Christ Church | Oak Brook · A Proposal by Locke & Ladder",
        author="Locke & Ladder",
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=MARGIN, bottomMargin=MARGIN,
    )
    doc.addPageTemplates([
        PageTemplate(id="cover", frames=[cover_frame], onPage=_cover_bg),
        PageTemplate(id="content", frames=[content_frame], onPage=_page_chrome),
    ])

    story: list = []

    # --- Cover page ---
    story.append(Spacer(1, PAGE_H * 0.45))
    story.append(Paragraph("A Proposal", STYLES["cover_sub"]))
    story.append(Paragraph("An icon of<br/>Oak Brook.", STYLES["cover_title"]))
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "Prepared by Locke &amp; Ladder for the Board of Trustees,<br/>"
        "Christ Church | Oak Brook.",
        STYLES["cover_sub"],
    ))
    story.append(Paragraph(
        datetime.now(timezone.utc).strftime("%B %Y"),
        STYLES["cover_sub"],
    ))

    # Switch to content pages
    story.append(PageBreak())
    doc.handle_nextPageTemplate("content")

    # --- Page 1: The leak / diagnosis ---
    _section(story, "01 · The Leak", "The roof is at the end of a long life.")
    _p(story,
       "Water is making it into the sanctuary. The visible cedar is worn. "
       "What matters is what is happening underneath it, and that layer "
       "has been compromised for a while now.")
    _img(story, "photos/projects/christ-church/bell-tower-primary-leak.jpg",
         "Bell tower, N.E. corner · primary ingress")
    _p(story,
       "Repair fixes the spot. Replacement addresses the system: the "
       "underlayment, vulnerable zones, the steeple-to-sanctuary "
       "transitions. At this age, replacement is the stewardship choice.")
    story.append(PageBreak())

    # --- Page 2: Cedar vs Synthetic ---
    _section(story, "02 · Cedar vs. Synthetic", "Today's cedar is a different material.")
    _p(story,
       "Old-growth cedar is largely gone. Today's stock is thinner, softer, "
       "and ages faster. To get real life out of new cedar you need premium "
       "grade, exacting installation, and an active maintenance program. "
       "It is also vulnerable to fire.")
    _img(story,
         "photos/projects/locke-ladder-brava-cedar-projects/laskey-side-by-side-intro-to-brava-cedar-shot.webp",
         "Laskey Residence · real cedar alongside Brava cedar, same house, same light")
    _p(story,
       "Brava composite shake is the first synthetic we put our name on. "
       "Molded from real cedar masters, mineral pigmented, Class A fire "
       "assembly, Class 4 impact rated, and backed for fifty years.")
    story.append(PageBreak())

    # --- Page 3: The system ---
    _section(story, "03 · The System", "Seven layers. One roof that acts like one thing.")
    _p(story, "A great roof is mostly invisible. What keeps the building dry is everything beneath the shake.")
    layers = [
        ("07", "Brava Composite Shake",     "Class A · Class 4 · mineral pigmented"),
        ("06", "Custom Fabricated Edge Metals", "Our metal shop. Matched profiles."),
        ("05", "Double-W Valley Metal",     "Open-valley, doubled for commercial life."),
        ("04", "Ring-Shank Stainless Nailing", "Resists back-out over decades of movement."),
        ("03", "Grace Ice &amp; Water Shield",  "Eaves, valleys, steeple transitions, penetrations."),
        ("02", "EchoShield Underlayment",   "High-tear, high-temp, UV-stable during install."),
        ("01", "Decking, Inspected &amp; Restored", "Rotted sheathing cut out, sistered, replaced."),
    ]
    for n, name, note in layers:
        story.append(Paragraph(
            f"<font color='#857650'><b>{n}</b></font>  "
            f"<b>{name}</b>  "
            f"<font color='#50636F'>&nbsp;·&nbsp; {note}</font>",
            STYLES["body"],
        ))
    story.append(PageBreak())

    # --- Page 4: Craft ---
    _section(story, "04 · Craft", "Work that takes the time it takes.")
    _img(story, "photos/projects/snape/aerial-tight.jpg",
         "Snape Residence · aerial detail")
    _p(story,
       "Snape is a residence down the road that asked us to solve what "
       "other roofers said couldn't be solved. Custom metals, hand-dressed "
       "copper, tolerance for detail most crews skip. The same shop that "
       "would treat this steeple.")
    story.append(PageBreak())

    # --- Page 5: Relationship / team ---
    _section(story, "05 · Relationship", "We came here for a long relationship.")
    _img(story, "photos/team/team-photo.webp",
         "The crew. Chicagoland based. Same team every morning.")
    _p(story,
       "The steeple first. Then the sanctuary. Then the mansard when its "
       "time comes, and the decades of small, uninteresting, essential "
       "decisions in between. That is the work we came for.")
    story.append(PageBreak())

    # --- Page 6: GiveBack + close ---
    _section(story, "06 · GiveBack", "1% back to Christ Church.")
    _p(story,
       "When a member of the Christ Church congregation hires Locke &amp; "
       "Ladder for their own home (roofing, siding, windows and doors, or "
       "gutters), we return one percent of that project back to the church.")
    _p(story,
       "The GiveBack applies to <b>future</b> congregation-member projects "
       "that reference Christ Church. Not to this proposal. It is how we "
       "invest in a relationship we want to earn.")
    _img(story,
         "photos/projects/faith-apostolic-church/faith-apostolic-church-give-back.webp",
         "Precedent · Faith Apostolic Church, a sister congregation")
    story.append(Spacer(1, 14))
    story.append(Paragraph("CLOSING", STYLES["eyebrow"]))
    story.append(Paragraph(
        "A church should outlast the roofer who installed it.",
        STYLES["h1"],
    ))
    _p(story,
       "Whenever the Board is ready, we are ready.<br/><br/>"
       "<b>Jon Strand</b> &amp; the Locke &amp; Ladder team")

    doc.build(story)
    buf.seek(0)
    return buf
