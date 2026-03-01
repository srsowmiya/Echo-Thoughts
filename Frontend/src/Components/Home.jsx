import React from 'react'
import { useState } from 'react';

const Home = () => {
 const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="bg-slate-950 p-12 rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] text-center w-full max-w-md border border-white/5">
      <h2 className="text-white text-xs font-black uppercase tracking-[0.4em] mb-12 opacity-50">
        {isRecording ? "Recording Thought..." : "Ready to Echo"}
      </h2>

      <div className="relative flex justify-center items-center">
        {/* The Animated Glow Rings (Only visible when recording) */}
        {isRecording && (
          <>
            <div className="absolute w-32 h-32 bg-[#FA8112]/30 rounded-full animate-ping"></div>
            <div className="absolute w-40 h-40 bg-[#FA8112]/10 rounded-full animate-pulse"></div>
          </>
        )}

        {/* The Main Trigger Button */}
        <button 
          onClick={() => setIsRecording(!isRecording)}
          className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
            isRecording 
            ? 'bg-white scale-90' 
            : 'bg-[#FA8112] hover:scale-110 active:scale-95'
          }`}
        >
          {isRecording ? (
            <div className="w-8 h-8 bg-[#FA8112] rounded-sm"></div> // Stop Icon
          ) : (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          )}
        </button>
      </div>

      <div className="mt-12 text-[#FA8112] font-mono text-sm tracking-widest">
        00:00:00
      </div>
    </div>
  );
}

export default Home
