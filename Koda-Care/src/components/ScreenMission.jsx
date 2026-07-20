import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenMission() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full flex-1 relative text-white flex flex-col justify-between font-serif bg-slate-900">
      {/* Community / Mission Background */}
      <img 
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" 
        alt="Community Mission" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="relative z-10 flex flex-col justify-between flex-1">
        <div className="flex justify-between px-4 pt-3 text-xs opacity-80 text-black font-bold">
          <span>12:45</span>
          <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
        </div>

        {/* Banner Overlay */}
        <div className="my-auto transform -rotate-12 bg-gray-200/90 text-black py-3 px-6 text-center border-y border-gray-400 shadow-lg">
          <h3 className="font-bold tracking-widest text-sm uppercase">
            WE MAKE A DIFFERENCE
          </h3>
        </div>

        <div className="p-6 flex justify-start">
          <button 
            onClick={() => setCurrentScreen('landing-cta')}
            className="bg-[#b3b6d8] text-[#1e1a5a] px-6 py-1.5 rounded-full text-xs font-bold shadow-lg hover:bg-white"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}