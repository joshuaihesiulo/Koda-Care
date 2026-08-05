import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenMission() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full h-full flex-1 relative text-white flex flex-col justify-between font-serif bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" 
        alt="Community Mission" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top Right Corner Accent */}
      <div className="absolute top-0 right-0 w-28 h-9 bg-[#8076c5] z-10 rounded-bl-xl shadow-md" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-5 pt-3.5 text-xs text-white font-sans">
          <div className="flex gap-1.5 items-center">
            <span className="w-2.5 h-2.5 border-2 border-white rounded-full inline-block" />
            <span className="w-2.5 h-2.5 border-2 border-white rounded-full inline-block" />
          </div>
          <div className="flex items-center gap-2 text-[11px] pr-20">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Diagonal Rotated Banner */}
        <div className="my-auto transform -rotate-12 bg-[#dedede]/95 text-black py-4 px-6 text-center border-y border-gray-400 shadow-2xl w-[120%] -ml-8">
          <h3 className="font-sans font-black tracking-widest text-xs sm:text-sm uppercase text-gray-800">
            WE MAKE A DIFFERENCE
          </h3>
        </div>

        {/* Bottom Slope Section & Action Button */}
        <div className="relative w-full pb-7 px-6 pt-12">
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 bg-[#8076c5]/85 z-0"
            style={{ clipPath: 'polygon(0 35%, 100% 0, 100% 100%, 0% 100%)' }}
          />

          <button 
            onClick={() => setCurrentScreen('landing-cta')}
            className="relative z-10 border border-white/90 text-white px-8 py-2 rounded-full text-xs font-sans tracking-wider font-bold hover:bg-white hover:text-[#1e1a5a] transition-all bg-black/30 shadow-lg active:scale-95"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}