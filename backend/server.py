from fastapi import FastAPI, APIRouter, HTTPException
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


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

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
    except Exception as e:
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


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
