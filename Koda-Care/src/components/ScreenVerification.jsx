import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenVerification() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full flex-1 relative text-white flex flex-col justify-between font-serif bg-slate-800">
      <div className="absolute inset-0 bg-blue-900/60 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594824813566-7885a3964660?auto=format&fit=crop&q=80&w=800" 
          alt="Nurse" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-between flex-1">
        <div className="flex justify-between px-4 pt-3 text-xs opacity-80">
          <span>12:45</span>
          <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
        </div>

        <div className="px-6 my-auto text-center py-8">
          <h3 className="font-bold text-base tracking-wide mb-8 uppercase text-white">
            INPUT VERIFICATION CODE
          </h3>

          <div className="flex justify-center gap-3 mb-4">
            {['9', '5', '9', '9'].map((num, i) => (
              <div key={i} className="w-11 h-11 rounded-full border border-white flex items-center justify-center bg-white/20 text-base font-bold shadow">
                {num}
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-200 mb-8 max-w-xs mx-auto">
            Input verification code sent to the earlier given number
          </p>

          <div className="flex justify-end pr-2">
            <button 
              onClick={() => setCurrentScreen('register')}
              className="bg-[#b3b6d8] text-[#1e1a5a] px-8 py-1.5 rounded-full text-xs font-bold shadow hover:bg-white transition-all"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-[#d1d5db] py-3 px-6 flex justify-between items-center text-black">
        <Phone className="w-5 h-5" />
        <ShieldAlert className="w-5 h-5" />
      </div>
    </div>
  );
}