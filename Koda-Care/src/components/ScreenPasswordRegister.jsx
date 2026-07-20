import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenPasswordRegister() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full flex-1 bg-gradient-to-b from-[#2b2787] to-[#171343] text-white flex flex-col justify-between font-serif">
      <div className="flex justify-between px-4 pt-3 text-xs opacity-80">
        <span>12:45</span>
        <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
      </div>

      <div className="px-6 my-auto py-4 overflow-y-auto">
        <div className="flex flex-col items-center mb-4 text-center">
          <div className="text-4xl">👐➕👐</div>
          <h2 className="tracking-widest text-base font-bold">KODA</h2>
          <span className="text-[10px] text-gray-300">care..........</span>
        </div>

        <div className="space-y-3 text-left text-xs max-w-xs mx-auto">
          <div>
            <label className="block font-bold uppercase text-xs mb-1">INPUT AN 8-DIGIT PASSWORD</label>
            <input type="password" placeholder="e.g 457688932" className="w-full border border-white/60 rounded-full px-4 py-1 bg-transparent text-xs placeholder-gray-400 outline-none" />
          </div>

          <p className="text-[10px] text-gray-300">Number must be a total of 8 or more digits .</p>

          <div>
            <input type="password" placeholder="e.g 457688932" className="w-full border border-white/60 rounded-full px-4 py-1 bg-transparent text-xs placeholder-gray-400 outline-none" />
            <span className="text-[10px] text-gray-300 block mt-1">Confirm Password</span>
          </div>

          <div>
            <label className="block font-bold uppercase text-xs mt-3 mb-1">INPUT YOUR FIRST NAME</label>
            <input type="text" placeholder="e.g Okonkwo" className="w-full border border-white/60 rounded-full px-4 py-1 bg-transparent text-xs placeholder-gray-400 outline-none" />
          </div>

          <div>
            <label className="block font-bold uppercase text-xs mt-3 mb-1">INPUT YOUR LAST NAME</label>
            <input type="text" placeholder="e.g Ejideofor" className="w-full border border-white/60 rounded-full px-4 py-1 bg-transparent text-xs placeholder-gray-400 outline-none" />
          </div>

          <div>
            <label className="block font-bold uppercase text-xs mt-3 mb-1">OTHER NAMES ...IF ANY</label>
            <input type="text" className="w-full border border-white/60 rounded-full px-4 py-1 bg-transparent text-xs outline-none" />
          </div>
        </div>

        <div className="flex justify-end mt-6 max-w-xs mx-auto">
          <button 
            onClick={() => setCurrentScreen('dashboard')} 
            className="bg-[#b3b6d8] text-[#1e1a5a] px-8 py-1.5 rounded-full text-xs font-bold shadow hover:bg-white"
          >
            NEXT
          </button>
        </div>
      </div>

      <div className="bg-[#d1d5db] py-3 px-6 flex justify-between items-center text-black">
        <Phone className="w-5 h-5" />
        <ShieldAlert className="w-5 h-5" />
      </div>
    </div>
  );
}