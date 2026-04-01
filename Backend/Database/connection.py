import os
import certifi
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import urllib.parse

load_dotenv()
MONGO_URL=os.getenv("MONGO_URL")

# Add these two flags: tlsAllowInvalidCertificates and tlsInsecure
client = AsyncIOMotorClient(
    MONGO_URL,
    tlsCAFile=certifi.where(),
    tlsAllowInvalidCertificates=True, 
    serverSelectionTimeoutMS=5000     
)
db = client.echo_thoughts_db
journal_collection = db.get_collection("journals")