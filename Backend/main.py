from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from Database.connection import journal_collection, client
from Database.model import JournalEntry

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Standard Vite/React port
    allow_credentials=True,
    allow_methods=["*"],  # Allows GET, POST, DELETE, etc.
    allow_headers=["*"],  # Allows all headers
)

@app.on_event("startup")
async def startup_event():
    try:
        await client.admin.command("ping")
        print("✅ SUCCESS: Connected to MongoDB Atlas, Bean!")
    except Exception as e:
        print(f"❌ ERROR: Connection failed! Check your .env: {e}")



@app.post('/journal')
async def create_new_journal(entry:JournalEntry):
    try:
        journal = entry.dict()
        result= await journal_collection.insert_one(journal)
        return {
            "message": "Thought captured! 🚀",
            "db_id": str(result.inserted_id)
        }
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to save your thought: {str(e)}"
        )

@app.get("/")
async def root():
    return {"message": "Echo-Thoughts Backend is Online, Bean!"}

