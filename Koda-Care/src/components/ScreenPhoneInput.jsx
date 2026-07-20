import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenPhoneInput() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full flex-1 bg-gradient-to-b from-[#2b2787] to-[#1e1a5a] text-white flex flex-col justify-between relative font-serif">
      <div className="flex justify-between px-4 pt-3 text-xs opacity-80">
        <span>12:45</span>
        <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
      </div>

      <div className="flex flex-col items-center px-6 my-auto text-center py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="text-5xl text-white">👐➕👐</div>
          <h2 className="tracking-widest text-xl font-bold mt-2">KODA</h2>
          <span className="text-xs tracking-widest text-gray-300">care..........</span>
        </div>

        <h3 className="font-bold text-sm tracking-wide mb-6 uppercase">
          INPUT YOUR PHONE NUMBER
        </h3>

        <div className="flex items-center gap-2 mb-1 justify-center w-full">
          <div className="flex items-center gap-1 border border-white/60 rounded-full px-3 py-1.5 text-xs">
            <span>🇳🇬</span>
            <span>+234</span>
          </div>
          <input 
            type="text" 
            placeholder="e.g 07067787689" 
            className="border border-white/60 rounded-full px-4 py-1.5 bg-transparent text-xs text-white placeholder-gray-300 outline-none w-44"
          />
        </div>
        <span className="text-[10px] text-red-400 mb-8">Number must be a total of 10 digits</span>

        <button 
          onClick={() => setCurrentScreen('verify')}
          className="bg-[#b3b6d8] text-[#1e1a5a] px-8 py-1.5 rounded-full text-xs font-bold shadow-lg hover:bg-white transition-all"
        >
          NEXT
        </button>
      </div>

      <div className="bg-[#d1d5db] py-3 px-6 flex justify-between items-center text-black mt-auto">
        <Phone className="w-5 h-5" />
        <ShieldAlert className="w-5 h-5" />
      </div>
    </div>
  );
}