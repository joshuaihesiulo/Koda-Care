import React, { useState } from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenVerification() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const [code, setCode] = useState(['9', '5', '9', '9']);

  return (
    <div className="w-full h-full min-h-screen sm:min-h-0 bg-[#1d1b5e] text-white flex flex-col justify-between font-serif relative overflow-hidden select-none">
      {/* Healthcare Background Image with Overlay Tint */}
      <img 
        src="https://images.unsplash.com/photo-1594824813566-7885a3964660?auto=format&fit=crop&q=80&w=800" 
        alt="Nurse background" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay z-0"
      />
      <div className="absolute inset-0 bg-[#231f6e]/70 z-0" />

      <div className="relative z-10 flex flex-col justify-between h-full w-full">
        {/* Top Status Bar */}
        <div className="flex justify-between items-center px-4 pt-2 text-[11px] text-white/90 font-sans shrink-0">
          <span className="font-semibold">12:45</span>
          <span className="w-2.5 h-2.5 border border-white rounded-full inline-block" />
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Verification Card Body */}
        <div className="px-6 my-auto py-4 w-full max-w-sm mx-auto">
          <h3 className="font-serif font-bold text-xs sm:text-sm tracking-wider uppercase mb-8 text-white text-left drop-shadow">
            INPUT VERIFICATION CODE
          </h3>

          {/* 4 Circular Digit Badges */}
          <div className="flex justify-start gap-3 mb-4">
            {code.map((num, i) => (
              <div 
                key={i} 
                className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center bg-white/20 text-white font-serif font-bold text-base shadow-inner ring-2 ring-yellow-400/40"
              >
                {num}
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gray-200 mb-8 max-w-xs leading-tight font-serif opacity-90">
            Input verification code sent to the earlier given number
          </p>

          {/* Glossy Metallic NEXT Button */}
          <div className="flex justify-end pr-2">
            <button 
              onClick={() => setCurrentScreen('register')}
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
    </div>
  );
}