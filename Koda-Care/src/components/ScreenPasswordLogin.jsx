import React, { useState } from 'react';
import { PhoneCall, ShieldCheck } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenPasswordLogin() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const [password, setPassword] = useState('36559087');

  const handleNext = (e) => {
    e?.preventDefault();
    setCurrentScreen('login-splash');
  };

  return (
    <div className="w-full h-full flex-1 relative text-white flex flex-col justify-between font-serif bg-gradient-to-b from-[#1b186b] via-[#141154] to-[#0b0933] overflow-hidden">
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-5 pt-3 text-xs text-white/90 font-sans">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">12:45</span>
            <span className="w-2.5 h-2.5 border border-white rounded-full inline-block ml-0.5" />
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 my-auto text-center py-4 flex flex-col items-center max-w-sm mx-auto w-full">
          {/* KODA Winged Logo */}
          <div className="flex flex-col items-center mb-6">
            <svg className="w-20 h-20 text-white drop-shadow-md mb-2" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M44 22h12v8h8v12h-8v8H44v-8h-8V30h8v-8z" fill="currentColor" />
              <path d="M38 52 C22 42, 10 32, 4 22 C14 36, 24 48, 38 58 C32 62, 28 68, 32 74 C36 78, 44 72, 48 64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M62 52 C78 42, 90 32, 96 22 C86 36, 76 48, 62 58 C68 62, 72 68, 68 74 C64 78, 56 72, 52 64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="tracking-[0.2em] text-lg font-bold text-white">KODA</h2>
            <span className="text-[11px] tracking-widest text-gray-300">care..........</span>
          </div>

          {/* Heading */}
          <h3 className="font-sans font-extrabold text-xs sm:text-sm tracking-wide text-white uppercase mb-5">
            INPUT YOUR 8-DIGIT PASSWORD
          </h3>

          {/* Input & NEXT Button Row */}
          <form onSubmit={handleNext} className="w-full flex justify-center items-center gap-2 mb-1">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="e.g 45768893" 
              className="border border-white/70 rounded-full px-4 py-1.5 bg-transparent text-xs text-white placeholder-gray-400 outline-none w-48 text-center font-sans tracking-widest focus:border-white transition-colors"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-gray-200 to-gray-300 text-[#141154] px-5 py-1.5 rounded-full font-sans font-extrabold text-xs shadow-md hover:bg-white transition-all active:scale-95"
            >
              NEXT
            </button>
          </form>

          {/* Subtext */}
          <p className="text-[10px] text-gray-300 font-sans mb-6 text-left w-full max-w-[240px]">
            Number must be a total of 8 or more digits .
          </p>

          {/* Forgot Password Link */}
          <button 
            type="button" 
            className="text-xs text-gray-200 hover:underline font-serif mb-12 block"
          >
            Forgot password ??
          </button>

          {/* Signup Prompt */}
          <div className="text-left w-full max-w-[240px] font-serif text-xs">
            <p className="text-gray-300">Don't have an account</p>
            <button 
              type="button" 
              onClick={() => setCurrentScreen('phone')}
              className="text-lime-400 font-sans font-extrabold text-xs tracking-wider uppercase hover:underline mt-0.5"
            >
              SIGNUP
            </button>
          </div>
        </div>

        {/* Footer Toolbar */}
        <div className="bg-[#d8d8d8] py-2.5 px-5 flex justify-between items-center text-black">
          <div className="p-1 border border-black/80 rounded">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div className="w-5 h-6 bg-black rounded-b-full flex items-center justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}