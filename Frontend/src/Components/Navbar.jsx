import React from 'react'
export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50">

      <div 
        className="bg-[#F57799] pt-10 pb-40 px-12 shadow-2xl"
        style={{ clipPath: 'ellipse(150% 100% at 50% 0%)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
        
          <div className="flex items-center gap-4 group cursor-pointer py-4">
            <div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-all duration-500 shadow-xl shadow-black/20">
              <span className="text-[#F57799] font-black text-3xl">E</span>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-black tracking-tighter text-[#1A1A1A] uppercase leading-none">
                Echo-Thoughts
              </h1>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A]/60 font-bold mt-1">
                Your Digital Echo
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Navigation Links */}
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-[0.2em] text-[#1A1A1A]">
              <a href="/" className="hover:text-white transition-all underline-offset-8 hover:underline">Home</a>
              <a href="/about" className="hover:text-white transition-all underline-offset-8 hover:underline">About Us</a>
            </div>
            
            <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all shadow-xl shadow-black/10">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* The Glow underneath to smooth the transition */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#F57799]/15 to-transparent -z-10"></div>
    </nav>
  );
}