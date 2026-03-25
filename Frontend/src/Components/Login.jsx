import React, { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import loginBg from '../assets/login.png';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.password === '' || formData.password !== 'pakka123') {
      setIsError(true);
    } else {
      setIsError(false);
      console.log("Login Success");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (isError) setIsError(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Wrapper */}
      <div className="relative flex items-center justify-center w-full max-w-[950px]">
        
        {/* LEFT SIDE: Login Card */}
        <div className={`bg-white p-10 lg:p-12 border border-white z-20 shadow-2xl transition-all duration-700 ease-in-out ${
          isError ? 'rounded-l-[3rem] lg:translate-x-[-150px]' : 'rounded-[3rem] translate-x-0'
        } w-[450px] flex-shrink-0`}>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#1A1A1A] rounded-2xl -rotate-6 shadow-xl">
              <Lock className="text-[#F57799]" size={28} />
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-tight">
              Welcome <span className="text-[#F57799]">Back</span>
            </h2>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Your echoes are waiting for you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
              <input 
                type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
                className={`w-full bg-slate-50 border-2 rounded-2xl px-6 py-4 outline-none transition-all font-bold ${
                  isError && formData.email === '' ? 'border-red-400 bg-red-50 animate-shake' : 'border-transparent focus:border-[#F57799] focus:bg-white'
                }`}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-4">
                <label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
                <span className="text-[9px] font-black text-[#F57799] uppercase cursor-pointer hover:underline underline-offset-4">Forgot?</span>
              </div>
              <input 
                type="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••"
                className={`w-full bg-slate-50 border-2 rounded-2xl px-6 py-4 outline-none transition-all font-bold ${
                  isError ? 'border-red-400 bg-red-50 animate-shake' : 'border-transparent focus:border-[#F57799] focus:bg-white'
                }`}
              />
            </div>

            <button type="submit" className="w-full bg-[#1A1A1A] text-white py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-[#F57799] transition-all duration-300 mt-4 flex items-center justify-center gap-2 group">
              Login <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: The Animation Area */}
        <div className={`absolute right-0 transition-all duration-700 ease-in-out flex items-center justify-center ${
          isError ? 'opacity-100 translate-x-20 w-[500px]' : 'opacity-0 translate-x-40 w-0 pointer-events-none'
        }`}>
          <div className="relative flex items-center justify-center">
            
            {/* THE TEXT: Shifted up to 20% from top (approx 2cm more) */}
            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border-2 border-[#F57799] animate-pulse w-max">
              <p className="text-[10px] font-black text-[#F57799] uppercase tracking-[0.2em] text-center">
                Missing details or <br /> incorrect password!
              </p>
            </div>
            
            <img src={loginBg} alt="Echo" className="absolute inset-0 w-full h-full object-contain opacity-20 animate-ping" />
            <img src={loginBg} alt="Login Girl" className="relative z-10 w-full h-full object-contain drop-shadow-2xl" />
          </div>
        </div>

      </div>

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

export default Login;