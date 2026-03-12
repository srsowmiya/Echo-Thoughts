import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Imported local asset
import boyInConfusion from '../assets/signup_image.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmpassword: '' });
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyFields = Object.values(formData).some(val => val === '');
    
    if (hasEmptyFields) {
      setIsError(true);
    } else {
      setIsError(false);
      console.log("Form Submitted Successfully", formData);
      alert("Welcome to Echo-Thoughts! Proceeding to Dashboard...");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (isError) setIsError(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#F57799]/10 rounded-full blur-[150px] -z-10"></div>

      {/* PARENT CONTAINER: Controls the overall layout shift and stabilization */}
      <div className={`transition-all duration-1000 ease-in-out flex flex-col lg:flex-row items-stretch justify-center ${
        isError ? 'lg:w-[950px]' : 'lg:w-[450px]'
      }`}>
        
        {/* LEFT SIDE: The Signup Card 
            min-w-[450px] and flex-shrink-0 are the 'Hero' properties here.
            They prevent the browser from recalculating the width during animation.
        */}
        <div className={`bg-white p-10 lg:p-12 border border-white transition-all duration-1000 z-20 flex-shrink-0 shadow-2xl ${
          isError ? 'w-[450px] min-w-[450px] rounded-l-[3rem] rounded-r-none' : 'w-[450px] min-w-[450px] rounded-[3rem]'
        }`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-tight">Join the Echo</h2>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Start your digital legacy
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {['username', 'email', 'password', 'confirmpassword'].map((field) => (
              <div key={field} className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{field}</label>
                <input 
                  type={field.includes('password') ? 'password' : 'text'}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field}`}
                  className={`w-full bg-slate-50 border-2 rounded-2xl px-6 py-4 outline-none transition-all font-bold ${
                    isError && formData[field] === '' ? 'border-red-400 bg-red-50 animate-shake' : 'border-transparent focus:border-[#F57799] focus:bg-white'
                  }`}
                />
              </div>
            ))}

            <button type="submit" className="w-full bg-[#1A1A1A] text-white py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-[#F57799] transition-all duration-300 mt-4 flex items-center justify-center gap-2 group">
              Sign Up <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: The Boy Animation (FULL RIGHT - NO SHADOW) */}
        <div className={`transition-all duration-1000 flex lg:justify-end lg:items-end bg-white relative overflow-hidden lg:rounded-r-[3rem] border-l border-slate-50 ${
          isError ? 'w-[500px] lg:flex opacity-100 translate-x-0' : 'w-0 h-0 opacity-0 translate-x-20 overflow-hidden'
        }`}>
          
          <div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:items-end lg:justify-end lg:p-0 p-12">
             
             {/* The "Boy" Animation - Pushed Fully Right */}
             <div className="w-full h-full max-w-sm lg:max-w-md aspect-square lg:aspect-auto lg:p-0 p-10 relative z-10 flex items-end justify-end">
                <img 
                  src={boyInConfusion} 
                  alt="Waiting Boy" 
                  className="w-full lg:w-auto lg:h-[90%] object-contain animate-bounce lg:mr-8"
                  style={{ animationDuration: '4s' }}
                />
             </div>
             
             {/* Thinking Bubble */}
             <div className="absolute top-10 left-10 lg:top-12 lg:left-12 bg-white p-5 rounded-3xl shadow-2xl border-2 border-[#F57799] animate-pulse z-20">
                <p className="text-[10px] font-black text-[#F57799] uppercase tracking-tighter">Wait, check the red fields!</p>
             </div>
          </div>
          
        </div>

      </div>

      {/* Tailwind Custom Animation (Shake) */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
};

export default Signup;