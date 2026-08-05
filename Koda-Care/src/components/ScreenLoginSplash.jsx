import React, { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenLoginSplash() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  // Auto-redirect to dashboard after 1.5 seconds, or on click
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('dashboard'); // <-- Fixed: Changed from 'login-welcome' to 'dashboard'
    }, 1500);
    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  return (
    <div 
      onClick={() => setCurrentScreen('dashboard')} // <-- Fixed: Changed to 'dashboard'
      className="w-full h-full flex-1 relative text-white flex flex-col justify-between font-serif bg-gradient-to-b from-[#1b186b] via-[#141154] to-[#0b0933] overflow-hidden cursor-pointer select-none"
    >
      <div className="relative z-10 flex flex-col justify-between h-full py-4">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-5 pt-1 text-xs text-white/90 font-sans">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">12:45</span>
            <span className="w-2.5 h-2.5 border border-white rounded-full inline-block ml-0.5" />
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Winged Cross Logo */}
        <div className="flex flex-col items-center my-auto text-center px-6">
          <div className="mb-3 transform hover:scale-105 transition-transform duration-300">
            <svg className="w-28 h-28 text-white drop-shadow-xl" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M44 22h12v8h8v12h-8v8H44v-8h-8V30h8v-8z" fill="currentColor" />
              <path d="M38 52 C22 42, 10 32, 4 22 C14 36, 24 48, 38 58 C32 62, 28 68, 32 74 C36 78, 44 72, 48 64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M62 52 C78 42, 90 32, 96 22 C86 36, 76 48, 62 58 C68 62, 72 68, 68 74 C64 78, 56 72, 52 64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="tracking-[0.25em] text-2xl font-bold text-white drop-shadow">KODA</h2>
          <span className="text-xs tracking-widest text-gray-200 mt-1">care..........</span>
        </div>
      </div>
    </div>
  );
}