import React, { useState } from 'react';
import { Mic, Palette, ImageIcon, MessageSquare, Zap } from 'lucide-react';

// Your local assets
import theme1 from '../assets/theme1.jpg';
import theme2 from '../assets/theme2.jpg';
import voice from '../assets/voice.jpg';
import voiceTotext from '../assets/voiceToText.jpg';
import photos from '../assets/photos.jpg';

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: "Voice-to-Text",
      desc: "Real-time AI transcription of your raw thoughts.",
      icon: <Mic size={24} />,
      images: [voiceTotext] 
    },
    {
      id: 2,
      title: "Dynamic Themes",
      desc: "Switch between Sage, Tiger, and Pink instantly.",
      icon: <Palette size={24} />,
      // This will trigger the 2-column split view
      images: [theme1, theme2]
    },
    {
      id: 3,
      title: "Visual Memories",
      desc: "Embed photos directly into your digital timeline.",
      icon: <ImageIcon size={24} />,
      images: [photos]
    },
    {
      id: 4,
      title: "Voice Notes",
      desc: "Keep the original audio for deep emotional reflection.",
      icon: <MessageSquare size={24} />,
      images: [voice]
    }
  ];

  const [activeFeature, setActiveFeature] = useState(featureData[0]);

  return (
    <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white p-6 lg:p-20 rounded-[3rem] lg:rounded-[4rem] shadow-2xl border border-[#F57799]/10">
        
        {/* LEFT: The Interactive List */}
        <div className="space-y-6">
          <div className="mb-10">
            <h2 className="text-4xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter uppercase italic leading-none">
              The <span className="text-[#F57799]">Echo</span> <br/> Experience
            </h2>
            <p className="text-slate-400 font-bold mt-4 uppercase tracking-[0.3em] text-[10px]">
              Hover to explore features
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {featureData.map((feature) => (
              <div 
                key={feature.id}
                onMouseEnter={() => setActiveFeature(feature)}
                className={`group p-6 rounded-3xl cursor-pointer transition-all duration-500 border-2 flex items-center gap-6 ${
                  activeFeature.id === feature.id 
                  ? 'bg-[#1A1A1A] border-[#1A1A1A] shadow-2xl lg:translate-x-6' 
                  : 'bg-transparent border-transparent opacity-40 hover:opacity-100'
                }`}
              >
                <div className={`p-4 rounded-2xl transition-colors ${
                  activeFeature.id === feature.id ? 'bg-[#F57799] text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className={`text-lg lg:text-xl font-black uppercase tracking-tight ${
                    activeFeature.id === feature.id ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-xs lg:text-sm font-medium leading-tight ${
                    activeFeature.id === feature.id ? 'text-slate-400' : 'text-slate-400'
                  }`}>
                    {feature.desc}
                  </p>
                </div>

                {activeFeature.id === feature.id && (
                  <Zap className="ml-auto text-[#F57799] animate-pulse" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: The Dynamic Visual Box */}
        <div className="relative h-full flex items-center justify-center min-h-[400px]">
          {/* Background Aura */}
          <div className="absolute inset-0 bg-[#F57799]/10 rounded-full blur-[100px] -z-10"></div>
          
          <div className="relative w-full aspect-square bg-[#1A1A1A] rounded-[2.5rem] lg:rounded-[3.5rem] p-3 lg:p-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
            
            {/* Dynamic Grid Logic */}
            <div className={`grid h-full w-full gap-3 transition-all duration-700 ${
              activeFeature.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
            }`}>
              {activeFeature.images.map((img, idx) => (
                <div key={`${activeFeature.id}-${idx}`} className="relative h-full w-full overflow-hidden rounded-[1.5rem] lg:rounded-[2rem]">
                  <img 
                    src={img} 
                    alt={activeFeature.title}
                    className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
                  />
                  {activeFeature.images.length > 1 && (
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                       <span className="text-[8px] font-black text-white uppercase tracking-widest">
                         Vibe {idx + 1}
                       </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Floating Label */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full shadow-2xl">
               <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Live Preview</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;