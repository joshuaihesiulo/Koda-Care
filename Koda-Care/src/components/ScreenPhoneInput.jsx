import React, { useState } from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenPhoneInput() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const [phone, setPhone] = useState('07067787689');

  return (
    <div className="w-full h-full min-h-screen sm:min-h-0 bg-[#282578] text-white flex flex-col justify-between font-serif overflow-hidden select-none">
      {/* Top Status Bar */}
      <div className="flex justify-between items-center px-4 pt-2 text-[11px] text-white/90 font-sans shrink-0">
        <span className="font-semibold">12:45</span>
        <span className="w-2.5 h-2.5 border border-white rounded-full inline-block" />
        <div className="flex items-center gap-1.5 text-[10px]">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 my-auto w-full max-w-sm mx-auto">
        {/* Winged Hands KODA Logo */}
        <div className="flex flex-col items-center mb-8 text-center">
          <svg className="w-24 h-24 text-white drop-shadow-md mb-2" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M44 22h12v8h8v12h-8v8H44v-8h-8V30h8v-8z" fill="currentColor" />
            <path d="M38 52 C22 42, 10 32, 4 22 C14 36, 24 48, 38 58 C32 62, 28 68, 32 74 C36 78, 44 72, 48 64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M62 52 C78 42, 90 32, 96 22 C86 36, 76 48, 62 58 C68 62, 72 68, 68 74 C64 78, 56 72, 52 64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="tracking-[0.25em] text-base font-bold text-white">KODA</h2>
          <span className="text-[10px] tracking-widest text-gray-300 mt-0.5">care..........</span>
        </div>

        {/* Input Heading */}
        <h3 className="font-serif font-bold text-xs tracking-wider uppercase mb-5 text-white text-center">
          INPUT YOUR PHONE NUMBER
        </h3>

        {/* Input Controls Row */}
        <div className="w-full flex items-center justify-center gap-1.5 mb-1">
          <span className="text-base leading-none">🇳🇬</span>
          <div className="border border-white/80 rounded-full px-3 py-1 text-xs font-sans text-white bg-transparent">
            +234
          </div>
          <input 
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g 07067787689"
            className="border border-white/80 rounded-full px-4 py-1 text-xs font-sans text-white placeholder-gray-300 bg-transparent outline-none w-44 tracking-wider focus:border-white"
          />
        </div>

        {/* Validation Error Hint */}
        <p className="text-[10px] text-red-400 font-sans mb-8 text-center">
          Number must be a total of 11 digits .
        </p>

        {/* Glossy Metallic NEXT Button */}
        <div className="w-full flex justify-end pr-2">
          <button 
            onClick={() => setCurrentScreen('verify')}
            className="bg-gradient-to-r from-[#b5b8dc] to-[#dcdff5] text-[#1c185a] px-7 py-1.5 rounded-full font-serif font-bold text-xs shadow-md border border-white/50 active:scale-95 transition-transform"
          >
            NEXT
          </button>
        </div>
      </div>

      {/* Bottom Light Gray Navigation Toolbar */}
      <div className="bg-[#d5d7dc] py-2 px-5 flex justify-between items-center text-black shrink-0 border-t border-gray-400">
        <div className="w-7 h-7 border border-black rounded flex items-center justify-center p-1 bg-transparent">
          <Phone className="w-4 h-4 text-black stroke-[2.2]" />
        </div>
        <div className="w-6 h-7 bg-black rounded-b-lg flex items-center justify-center shadow">
          <ShieldAlert className="w-4 h-4 text-white fill-black" />
        </div>
      </div>
    </div>
  );
}