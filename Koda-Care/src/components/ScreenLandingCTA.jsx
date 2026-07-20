import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenLandingCTA() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full flex-1 relative text-white flex flex-col justify-between font-serif bg-slate-900">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800" 
        alt="Clinic Platform" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 flex flex-col justify-between flex-1">
        <div className="flex justify-between px-4 pt-3 text-xs opacity-80">
          <span>12:45</span>
          <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
        </div>

        <div className="px-6 my-auto text-center py-6">
          <h2 className="font-extrabold text-base tracking-wide uppercase text-white mb-8 drop-shadow-md">
            DIGITIZE YOUR HEALTH TODAY
          </h2>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <button 
              onClick={() => setCurrentScreen('dashboard')}
              className="border-2 border-white rounded-full px-6 py-1.5 text-xs font-bold bg-white/20 hover:bg-white hover:text-black transition-colors"
            >
              LOG IN
            </button>
            <button 
              onClick={() => setCurrentScreen('phone')}
              className="border-2 border-white rounded-full px-6 py-1.5 text-xs font-bold bg-white/20 hover:bg-white hover:text-black transition-colors"
            >
              SIGN UP
            </button>
          </div>

          <p className="text-xs text-gray-200 text-left max-w-xs mx-auto leading-relaxed">
            An E-platform<br/>for better patient<br/>care......
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#d1d5db] py-3 px-6 flex justify-between items-center text-black">
        <Phone className="w-5 h-5" />
        <ShieldAlert className="w-5 h-5" />
      </div>
    </div>
  );
}