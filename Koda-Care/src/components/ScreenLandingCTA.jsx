import React from 'react';
import { User, Lock, PhoneCall, ShieldCheck, ChevronDown } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenLandingCTA() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full h-full flex-1 relative text-white flex flex-col justify-between font-serif bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800" 
        alt="Clinic Platform" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#2b2b52]/80 z-0" />

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

        {/* Center Actions Section */}
        <div className="px-6 my-auto text-center py-6 flex flex-col items-center">
          {/* Feature Badges */}
          <div className="flex justify-center items-center gap-6 mb-8">
            {/* Blue Face/User Badge */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2b3bbd] rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
              <div className="relative flex items-center justify-center">
                <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                <div className="absolute -inset-1.5 border-2 border-dashed border-white/70 rounded-lg" />
              </div>
            </div>

            {/* Green Lock Badge */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#34a853] rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
              <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h2 className="font-extrabold text-sm sm:text-base tracking-wider text-white uppercase drop-shadow-md max-w-[220px] mx-auto leading-snug">
              DIGITIZE YOUR HEALTH TODAY
            </h2>
            <ChevronDown className="w-5 h-5 mx-auto mt-2 text-white/80 animate-bounce" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center gap-4 mb-8 w-full max-w-xs">
            <button 
              onClick={() => setCurrentScreen('login-welcome')}
              className="flex-1 border-2 border-white/90 rounded-full py-2 text-xs font-bold text-white bg-white/10 hover:bg-white hover:text-black transition-all shadow-md active:scale-95"
            >
              LOG IN
            </button>
            <button 
              onClick={() => setCurrentScreen('phone')}
              className="flex-1 border-2 border-white/90 rounded-full py-2 text-xs font-bold text-white bg-white/10 hover:bg-white hover:text-black transition-all shadow-md active:scale-95"
            >
              SIGN UP
            </button>
          </div>

          {/* Subtext */}
          <p className="text-xs text-gray-200 text-left w-full max-w-xs leading-relaxed font-sans opacity-90">
            An E-platform<br />for better patient<br />care......
          </p>
        </div>

        {/* Footer Toolbar */}
        <div className="relative z-10 bg-[#d8d8d8] py-3 px-6 flex justify-between items-center text-black shadow-inner">
          <div className="p-1 border border-black/80 rounded hover:bg-black/10 transition-colors cursor-pointer">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div className="w-6 h-7 bg-black rounded-b-full flex items-center justify-center cursor-pointer shadow">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}