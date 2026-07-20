import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenSplash() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div 
      onClick={() => setCurrentScreen('mission')}
      className="w-full flex-1 relative text-white flex flex-col justify-between font-serif bg-purple-900 cursor-pointer"
    >
      {/* Background Image with Light Purple Overlay */}
      <div className="absolute inset-0 bg-purple-600/30 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
          alt="Doctor and Baby" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-between flex-1">
        <div className="flex justify-between px-4 pt-3 text-xs opacity-80">
          <span>12:45</span>
          <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
        </div>

        {/* Center Winged Logo */}
        <div className="flex flex-col items-center my-auto text-center px-6">
          <div className="text-6xl text-white">👐➕👐</div>
          <h2 className="tracking-widest text-xl font-bold mt-2">KODA</h2>
          <span className="text-xs tracking-widest text-gray-200">care..........</span>
        </div>
      </div>
    </div>
  );
}