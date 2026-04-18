from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from pdf_builder import build_board_packet_pdf


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

app = FastAPI(title="Locke & Ladder — Proposal API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ProposalInterestCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    role: Optional[str] = Field(default=None, max_length=200)
    note: Optional[str] = Field(default=None, max_length=4000)


class ProposalInterest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    role: Optional[str] = None
    note: Optional[str] = None
    client: str = "Christ Church | Oak Brook"
    proposal_version: str = "v4"
    received_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class EngagementEvent(BaseModel):
    """Simple analytics ping — section reached, time on site, etc."""
    event: str = Field(min_length=1, max_length=80)
    section: Optional[str] = Field(default=None, max_length=80)
    meta: Optional[dict] = None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {
        "ok": True,
        "service": "Locke & Ladder — Proposal API",
        "proposal": "Christ Church | Oak Brook · v4",
    }


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(client_name=input.client_name)
    doc = status_obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get("timestamp"), str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return rows


@api_router.post("/proposal/interest", response_model=ProposalInterest)
async def capture_proposal_interest(payload: ProposalInterestCreate):
    try:
        obj = ProposalInterest(
            name=payload.name.strip(),
            email=str(payload.email).strip().lower(),
            role=(payload.role or "").strip() or None,
            note=(payload.note or "").strip() or None,
        )
        doc = obj.model_dump()
        doc["received_at"] = doc["received_at"].isoformat()
        await db.proposal_interest.insert_one(doc)
        logger.info("Proposal interest captured: %s <%s>", obj.name, obj.email)
        return obj
    except Exception:
        logger.exception("Failed to capture proposal interest")
        raise HTTPException(status_code=500, detail="Unable to capture interest")


@api_router.get("/proposal/interest", response_model=List[ProposalInterest])
async def list_proposal_interest():
    rows = await db.proposal_interest.find({}, {"_id": 0}).sort("received_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get("received_at"), str):
            try:
                r["received_at"] = datetime.fromisoformat(r["received_at"])
            except ValueError:
                pass
    return rows


@api_router.post("/proposal/engagement")
async def capture_engagement(event: EngagementEvent):
    doc = event.model_dump()
    doc["received_at"] = datetime.now(timezone.utc).isoformat()
    await db.proposal_engagement.insert_one(doc)
    return {"ok": True}


@api_router.get("/proposal/packet.pdf")
async def get_board_packet_pdf(
    recipient: Optional[str] = None,
    role: Optional[str] = None,
    token: Optional[str] = None,
):
    """
    Generate and return the Christ Church | Oak Brook board packet PDF.

    Query params (all optional, POC for per-member packets):
        recipient: display name to print on the cover ("Tom Williams")
        role:      role/title under the name ("Board Chair")
        token:     short id to render + log for open-tracking

    Every download is logged to proposal_packet_opens so the team can see
    which named packets have actually been opened.
    """
    try:
        buf = build_board_packet_pdf(recipient=recipient, role=role, token=token)
    except Exception as exc:
        logger.exception("PDF build failed")
        raise HTTPException(status_code=500, detail=f"PDF build failed: {exc}")

    # Log the open (non-blocking best-effort)
    try:
        await db.proposal_packet_opens.insert_one({
            "id": str(uuid.uuid4()),
            "recipient": (recipient or "").strip() or None,
            "role": (role or "").strip() or None,
            "token": (token or "").strip() or None,
            "opened_at": datetime.now(timezone.utc).isoformat(),
        })
    except Exception:
        logger.warning("Unable to log packet open", exc_info=True)

    # Build a human-friendly filename
    if recipient:
        slug = "".join(ch if ch.isalnum() else "-" for ch in recipient.lower()).strip("-")[:48] or "board-member"
        filename = f"christ-church-oak-brook-board-packet-{slug}.pdf"
    else:
        filename = "christ-church-oak-brook-board-packet.pdf"

    return StreamingResponse(
        buf,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f'inline; filename="{filename}"',
            "Cache-Control": "no-store",
        },
    )


@api_router.get("/proposal/packet/opens")
async def list_packet_opens():
    """Read-back for the team: which personalized packets have been opened."""
    rows = await db.proposal_packet_opens.find({}, {"_id": 0}).sort("opened_at", -1).to_list(500)
    return {"count": len(rows), "opens": rows}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
