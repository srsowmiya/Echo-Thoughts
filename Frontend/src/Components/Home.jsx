import React from 'react'
import Navbar from './Navbar'
import HomeImage from '../assets/Home.webp'
import image from '../assets/image1.jpg'

const Home = () => {
  return(
    <div className="min-h-screen bg-[#FFF5F7] overflow-x-hidden">
      <Navbar />

      {/* Hero Section Container */}
      <main className="max-w-7xl mx-auto px-8 pt-64 lg:pt-80">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Centered Image Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Soft glow behind the image to separate it from the background */}
              <div className="absolute -inset-10 bg-[#F57799]/10 rounded-full blur-[100px] -z-10"></div>
              
              <div className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl">
                <img 
                  src={image} 
                  alt="Journaling Experience" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Styled Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left pb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A] leading-[0.85] tracking-tighter uppercase">
              Your <br/>
              <span className="text-[#F57799]">Digital</span> <br/>
              Mirror.
            </h2>
            
            <p className="text-lg font-bold text-slate-500 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Echo-Thoughts turns your voice into a visual journey. Experience journaling that speaks back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                Start Now
              </button>
              <button className="border-4 border-[#1A1A1A] text-[#1A1A1A] px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all">
                About Us
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Home
