import React from 'react';
import { Github, Linkedin, Twitter, Heart, Mail } from 'lucide-react';

const Footer = () => {
  return (
    /* We use 'relative' and 'w-full' to ensure it stays in the natural scroll flow */
    <footer className="relative w-full mt-40">
      
      {/* The Ultra-Deep Pink Wave - Dragged Downer! */}
      <div 
        className="bg-[#F57799] pt-40 pb-20 px-12 shadow-[0_-30px_60px_rgba(245,119,153,0.3)]"
        /* This clipPath creates the signature curve at the top of the footer */
        style={{ clipPath: 'ellipse(160% 100% at 50% 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Top Row: Brand, Socials, and CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-[#1A1A1A]/10 pb-16">
            
            {/* LEFT: Branding */}
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-16 h-16 bg-[#1A1A1A] rounded-[2rem] flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-all duration-500 shadow-2xl">
                <span className="text-[#F57799] font-black text-4xl italic">E</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-4xl font-black tracking-tighter text-[#1A1A1A] uppercase leading-none">
                  Echo-Thoughts
                </h2>
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#1A1A1A]/60 font-black mt-2">
                  Your Soul, Digitized.
                </p>
              </div>
            </div>

            {/* CENTER: Social Icons */}
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-4 bg-[#1A1A1A] text-[#F57799] rounded-[1.5rem] hover:bg-white hover:scale-110 transition-all shadow-xl"
                >
                  <Icon size={24} strokeWidth={2.5} />
                </a>
              ))}
            </div>

            {/* RIGHT: Big Call to Action */}
            <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-[2rem] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all shadow-2xl">
              Get Started
            </button>
          </div>

          {/* BOTTOM: Signature Bar */}
          <div className="pt-12 flex flex-col items-center gap-3">
            <p className="text-[#1A1A1A]/40 text-[11px] font-black uppercase tracking-[0.5em]">
              © 2026 Echo-Thoughts // Stay Creative
            </p>
            <div className="flex items-center gap-2 text-[#1A1A1A] text-[11px] font-black uppercase tracking-widest">
              Made with <Heart size={14} className="fill-[#1A1A1A] animate-pulse" /> by <span className="underline decoration-2 underline-offset-4">Sowmiya Sundaram</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;