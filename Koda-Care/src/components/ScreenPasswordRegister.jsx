import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenPasswordRegister() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

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

      {/* Form Content Container (Scrollable for mobile height protection) */}
      <div className="flex-1 overflow-y-auto px-6 py-3 my-auto max-w-sm mx-auto w-full">
        {/* Winged Hands KODA Logo */}
        <div className="flex flex-col items-center mb-4 text-center">
          <svg className="w-20 h-20 text-white drop-shadow-md mb-1" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M44 22h12v8h8v12h-8v8H44v-8h-8V30h8v-8z" fill="currentColor" />
            <path d="M38 52 C22 42, 10 32, 4 22 C14 36, 24 48, 38 58 C32 62, 28 68, 32 74 C36 78, 44 72, 48 64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M62 52 C78 42, 90 32, 96 22 C86 36, 76 48, 62 58 C68 62, 72 68, 68 74 C64 78, 56 72, 52 64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="tracking-[0.25em] text-sm font-bold text-white">KODA</h2>
          <span className="text-[9px] tracking-widest text-gray-300">care..........</span>
        </div>

        {/* Input Form Fields */}
        <div className="space-y-2.5 text-left text-xs max-w-xs mx-auto">
          <div>
            <label className="block font-serif font-bold uppercase text-[10px] mb-1 tracking-wider text-white">
              INPUT AN 8-DIGIT PASSWORD
            </label>
            <input 
              type="password" 
              placeholder="e.g 457688932" 
              className="w-full border border-white/80 rounded-full px-4 py-1 bg-transparent text-xs text-white placeholder-gray-400 outline-none focus:border-white"
            />
          </div>

          <p className="text-[9px] text-gray-300 font-sans">
            Number must be a total of 8 or more digits .
          </p>

          <div>
            <input 
              type="password" 
              placeholder="e.g 457688932" 
              className="w-full border border-white/80 rounded-full px-4 py-1 bg-transparent text-xs text-white placeholder-gray-400 outline-none focus:border-white"
            />
            <span className="text-[9px] text-gray-300 block mt-0.5 font-serif">Confirm Password</span>
          </div>

          <div>
            <label className="block font-serif font-bold uppercase text-[10px] mt-2 mb-1 tracking-wider text-white">
              INPUT YOUR FIRST NAME
            </label>
            <input 
              type="text" 
              placeholder="e.g Okonkwo" 
              className="w-full border border-white/80 rounded-full px-4 py-1 bg-transparent text-xs text-white placeholder-gray-400 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block font-serif font-bold uppercase text-[10px] mt-2 mb-1 tracking-wider text-white">
              INPUT YOUR LAST NAME
            </label>
            <input 
              type="text" 
              placeholder="e.g Ejideofor" 
              className="w-full border border-white/80 rounded-full px-4 py-1 bg-transparent text-xs text-white placeholder-gray-400 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block font-serif font-bold uppercase text-[10px] mt-2 mb-1 tracking-wider text-white">
              OTHER NAMES ...IF ANY
            </label>
            <input 
              type="text" 
              className="w-full border border-white/80 rounded-full px-4 py-1 bg-transparent text-xs text-white outline-none focus:border-white"
            />
          </div>
        </div>

        {/* Glossy Metallic NEXT Button */}
        <div className="flex justify-end mt-4 max-w-xs mx-auto pr-1">
          <button 
            onClick={() => setCurrentScreen('dashboard')} 
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