import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenSplash() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div 
      onClick={() => setCurrentScreen('mission')}
      className="w-full h-full flex-1 relative text-white flex flex-col justify-between font-serif cursor-pointer select-none overflow-hidden bg-slate-900"
    >
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
        alt="Doctor and Baby" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#6c63b5]/95 via-[#6c63b5]/40 to-transparent z-0" />

      {/* Content Canvas */}
      <div className="relative z-10 flex flex-col justify-between h-full py-5 px-6">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-xs text-white/90 font-sans pt-1">
          <span className="font-semibold tracking-tight">12:45</span>
          <div className="flex items-center gap-2 text-[11px]">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Center Winged Logo */}
        <div className="flex flex-col items-center my-auto text-center py-8">
          <div className="mb-3 transform hover:scale-105 transition-transform duration-300">
            <svg className="w-24 h-24 sm:w-28 sm:h-28 text-white drop-shadow-lg" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M44 22h12v8h8v12h-8v8H44v-8h-8V30h8v-8z" fill="currentColor" />
              <path d="M38 52 C22 42, 10 32, 4 22 C14 36, 24 48, 38 58 C32 62, 28 68, 32 74 C36 78, 44 72, 48 64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M62 52 C78 42, 90 32, 96 22 C86 36, 76 48, 62 58 C68 62, 72 68, 68 74 C64 78, 56 72, 52 64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="tracking-[0.25em] text-2xl sm:text-3xl font-bold text-white drop-shadow">KODA</h2>
          <span className="text-xs sm:text-sm tracking-widest text-gray-200 mt-1">care..........</span>
        </div>

        {/* Tap Prompt Indicator */}
        <div className="text-center pb-2">
          <span className="text-[10px] uppercase tracking-widest text-white/70 font-sans animate-pulse">
            Tap anywhere to continue
          </span>
        </div>
      </div>
    </div>
  );
}