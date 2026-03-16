import React, { useState,useEffect } from 'react';
import { Sparkles, Send } from 'lucide-react';

const Page = () => {
  const [thoughts, setThoughts] = useState("");
  const [currentDate,SetCurrentDate]=useState();

  useEffect(() => {
  const date = new Date();
  SetCurrentDate(date); 
}, []);

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col items-center justify-center p-6">
      

      <div className="w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl border border-white overflow-hidden flex flex-col lg:flex-row">
        
        {/* LEFT SIDE: Writing Space */}
        <div className="flex-1 p-8 lg:p-12 border-r border-slate-50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#1A1A1A] rounded-2xl -rotate-6 shadow-lg">
              <Sparkles className="text-[#F57799]" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-tight">
                Daily <span className="text-[#F57799]">Echo</span>
              </h2>
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">
                {currentDate ? currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
              </p>
            </div>
          </div>

          <div className="relative group">
            <label 
              htmlFor="thoughts" 
              className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-black uppercase tracking-widest text-[#F57799] z-10"
            >
              Enter your thoughts
            </label>
            
            <textarea 
              id="thoughts"
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
              placeholder="What's happening in your world today,dear?"
              className="w-full h-80 bg-slate-50 border-2 border-transparent focus:border-[#F57799] focus:bg-white 
                         rounded-[2rem] p-8 outline-none transition-all duration-500 font-medium text-slate-700 
                         leading-relaxed resize-none shadow-inner"
            ></textarea>

            {/* Floating Action Button */}
            <button className="absolute bottom-6 right-6 bg-[#1A1A1A] text-white p-4 rounded-2xl shadow-xl 
                               hover:bg-[#F57799] hover:-translate-y-1 transition-all duration-300 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-2">Analyze</span>
              <Send size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: AI Status / Tips Panel */}
        <div className="w-full lg:w-72 bg-slate-50 p-8 flex flex-col justify-center gap-6">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Journal Stats</h3>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
               <p className="text-[9px] font-black text-slate-400 uppercase">Words</p>
               <p className="text-xl font-black text-[#1A1A1A]">{thoughts.trim() === "" ? 0 : thoughts.trim().split(/\s+/).length}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
               <p className="text-[9px] font-black text-slate-400 uppercase">Privacy</p>
               <p className="text-[10px] font-black text-green-500 uppercase italic">Encrypted & Secure</p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Branding Footer */}
      <p className="mt-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
        Echo-Thoughts <span className="text-[#F57799]">AI</span>
      </p>
    </div>
  );
};

export default Page;