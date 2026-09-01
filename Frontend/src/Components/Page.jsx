import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Image as ImageIcon, Mic, X, ShieldCheck } from 'lucide-react';
import axios from 'axios';

const Page = () => {
  const [thoughts, setThoughts] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // Handle Image Selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // The Main "Analyze" Logic
  const handleAnalyze = async () => {
  // Add a check to match your Pydantic rule!
  if (thoughts.length < 15) {
    return alert("A journal needs a bit more depth, Bean! (Min 15 chars)");
  }

  try {
    const response = await axios.post("http://127.0.0.1:8000/journal", {
      content: thoughts,      // Must be 'content', not 'thoughts'
      mood_score: 5.0         // Matches your float field
    });
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Validation Error:", error.response?.data);
  }
};

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col items-center justify-center p-6">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl border border-white overflow-hidden flex flex-col lg:flex-row">
        
        {/* LEFT SIDE: Writing Space */}
        <div className="flex-1 p-8 lg:p-12 border-r border-slate-50 relative">
          
          {/* HEADER */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#1A1A1A] rounded-2xl -rotate-6 shadow-lg">
              <Sparkles className="text-[#F57799]" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-tight">
                Daily <span className="text-[#F57799]">Echo</span>
              </h2>
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">
                {currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>

          {/* TEXT AREA WRAPPER */}
          <div className="relative group">
            <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-black uppercase tracking-widest text-[#F57799] z-10">
              Enter your thoughts
            </label>
            
            <textarea 
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
              placeholder="What's happening in your world today, dear?"
              className="w-full h-96 bg-slate-50 border-2 border-transparent focus:border-[#F57799] focus:bg-white 
                         rounded-[2rem] p-8 outline-none transition-all duration-500 font-medium text-slate-700 
                         leading-relaxed resize-none shadow-inner"
            ></textarea>

            {/* IMAGE PREVIEW OVERLAY */}
            {selectedImage && (
              <div className="absolute bottom-28 left-8 group/img">
                <div className="relative">
                  <img src={selectedImage} alt="Preview" className="w-20 h-20 object-cover rounded-2xl border-4 border-white shadow-xl rotate-3" />
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-2 -right-2 bg-[#1A1A1A] text-white rounded-full p-1 shadow-lg hover:bg-red-500 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>
            )}

            {/* ACTION BAR (Bottom Left) */}
            <div className="absolute bottom-8 left-8 flex items-center gap-3">
              <label className="cursor-pointer p-3 bg-white hover:bg-slate-100 rounded-2xl border border-slate-100 shadow-sm transition-all group/btn">
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                <ImageIcon size={20} className="text-slate-400 group-hover/btn:text-[#F57799]" />
              </label>

              <button 
                onClick={() => setIsRecording(!isRecording)}
                className={`p-3 rounded-2xl border border-slate-100 shadow-sm transition-all group/btn 
                ${isRecording ? 'bg-red-50 animate-pulse' : 'bg-white hover:bg-slate-100'}`}
              >
                <Mic size={20} className={isRecording ? 'text-red-500' : 'text-slate-400 group-hover/btn:text-[#F57799]'} />
              </button>
              
              {isRecording && <span className="text-[8px] font-black uppercase text-red-500 tracking-tighter">Live Voice Sync</span>}
            </div>

            {/* SEND BUTTON (Bottom Right) */}
            <button 
              onClick={handleAnalyze}
              disabled={loading}
              className="absolute bottom-8 right-8 bg-[#1A1A1A] text-white px-6 py-4 rounded-2xl shadow-xl 
                         hover:bg-[#F57799] hover:-translate-y-1 active:scale-95 transition-all duration-300 group flex items-center gap-2"
            >
              <span className="text-[10px] font-black uppercase tracking-widest pl-2">
                {loading ? "Syncing..." : "Analyze"}
              </span>
              <Send size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Stats Panel */}
        <div className="w-full lg:w-80 bg-slate-50 p-10 flex flex-col justify-start gap-8">
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Journal Intelligence</h3>
            
            {/* Word Counter */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 group hover:border-[#F57799] transition-colors">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Words Captured</p>
               <p className="text-3xl font-black text-[#1A1A1A]">
                 {thoughts.trim() === "" ? 0 : thoughts.trim().split(/\s+/).length}
               </p>
            </div>

            {/* Privacy Shield */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Security Status</p>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                 <p className="text-[10px] font-black text-[#1A1A1A] uppercase italic">End-to-End Encrypted</p>
               </div>
            </div>

            {/* AI Prompt of the Day */}
            <div className="mt-8 p-6 bg-[#F57799]/10 rounded-[2rem] border border-[#F57799]/20">
              <p className="text-[10px] font-bold text-[#F57799] leading-relaxed">
                "Small steps lead to big changes. What's one thing that made you smile today?"
              </p>
            </div>
          </div>
        </div>

      </div>
      
      {/* FOOTER */}
      <p className="mt-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
        Echo-Thoughts <span className="text-[#F57799]">AI</span> • {currentDate.getFullYear()}
      </p>
    </div>
  );
};

export default Page;