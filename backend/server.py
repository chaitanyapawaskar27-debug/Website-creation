from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from pathlib import Path
from datetime import datetime, timezone
import os
import logging
import uuid
import html
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Chaitanya Pawaskar Portfolio")
OWNER_EMAIL = os.environ.get("OWNER_EMAIL")

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=120)
    message: str = Field(min_length=10, max_length=5000)
    website: str = ""  # honeypot, must stay empty


@api_router.get("/")
async def root():
    return {"message": "Chaitanya Pawaskar Portfolio API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/contact")
async def submit_contact(input: ContactMessage):
    if input.website:
        return {"status": "success", "email_sent": False}

    doc = {
        "id": str(uuid.uuid4()),
        "name": input.name,
        "email": input.email,
        "company": input.company,
        "message": input.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.contact_messages.insert_one(doc)

    email_sent = False
    if EMAIL_KEY and OWNER_EMAIL:
        esc = html.escape
        body = f"""
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;color:#1A1A1A;">
          <tr><td style="padding:16px 0;font-size:20px;font-weight:bold;">New portfolio enquiry</td></tr>
          <tr><td style="padding:4px 0;"><strong>Name:</strong> {esc(input.name)}</td></tr>
          <tr><td style="padding:4px 0;"><strong>Email:</strong> {esc(input.email)}</td></tr>
          <tr><td style="padding:4px 0;"><strong>Company:</strong> {esc(input.company or '—')}</td></tr>
          <tr><td style="padding:12px 0;"><strong>Message:</strong><br/>{esc(input.message).replace(chr(10), '<br/>')}</td></tr>
        </table>
        """
        payload = {
            "to": [OWNER_EMAIL],
            "subject": f"Portfolio enquiry from {input.name}",
            "html": body,
            "from_name": EMAIL_FROM_NAME,
            "contact_email": input.email,
        }
        try:
            async with httpx.AsyncClient(timeout=30) as http_client:
                resp = await http_client.post(
                    f"{EMAIL_BASE_URL}/api/v1/email/send",
                    headers={"X-Email-Key": EMAIL_KEY},
                    json=payload,
                )
            email_sent = resp.status_code < 300
            if not email_sent:
                logger.error(f"Email send failed: {resp.status_code} {resp.text}")
        except Exception as e:
            logger.error(f"Email send error: {e}")

    return {"status": "success", "email_sent": email_sent}


RESUME_PATH = ROOT_DIR / "static" / "Chaitanya_Pawaskar_Resume.pdf"


@api_router.get("/resume")
async def download_resume():
    if not RESUME_PATH.exists():
        raise HTTPException(status_code=404, detail="Resume not available")
    return FileResponse(
        RESUME_PATH,
        media_type="application/pdf",
        filename="Chaitanya_Pawaskar_Resume.pdf",
    )


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
