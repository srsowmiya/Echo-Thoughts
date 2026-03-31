from pydantic import BaseModel,Field
from datetime import datetime
from typing import Optional

class JounralEntry(BaseModel):
    content:str=Field(...,min_length=15,description="The text body of the journal")
    mood_score: float=Field(default=5.0, ge=1.0, le=10.0)
    created_at: datetime = Field(default_factory=datetime.utcnow)

   
    image_url: Optional[str] = None
    voice_note_url: Optional[str] = None  

