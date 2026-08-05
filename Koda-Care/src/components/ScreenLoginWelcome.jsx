import React from 'react';
import { PhoneCall, ShieldCheck } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenLoginWelcome() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div 
      onClick={() => setCurrentScreen('login-password')}
      className="w-full h-full flex-1 relative text-white flex flex-col justify-between font-serif bg-slate-900 overflow-hidden cursor-pointer select-none"
    >
      {/* Background Image - Medical Professionals */}
      <img 
        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
        alt="Welcome Back Healthcare Workers" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top Purple Gradient Tint */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#7871bc]/90 to-transparent z-0" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-5 pt-3 text-xs text-white/90 font-sans">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">12:45</span>
            <span className="w-2.5 h-2.5 border border-white rounded-full inline-block ml-0.5" />
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Center Banner Overlay */}
        <div className="my-auto w-full px-2">
          <div className="bg-[#dedede]/95 border-y-2 border-slate-400 py-3 px-6 text-center shadow-2xl">
            <h3 className="font-sans font-bold tracking-widest text-xs sm:text-sm text-black">
              WELCOME BACK..............
            </h3>
          </div>
        </div>

        {/* Footer Toolbar */}
        <div className="bg-[#d8d8d8] py-2.5 px-5 flex justify-between items-center text-black">
          <div className="p-1 border border-black/80 rounded">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div className="w-5 h-6 bg-black rounded-b-full flex items-center justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}