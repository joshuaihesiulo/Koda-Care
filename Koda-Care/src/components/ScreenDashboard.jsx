import React from 'react';
import { Plus, Folder, Cloud, MapPin, Users } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenDashboard() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full h-full min-h-screen sm:min-h-0 flex flex-col justify-between relative text-white font-serif bg-slate-900 overflow-hidden select-none">
      {/* Mobile Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
        alt="Medical Team" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
      />
      
      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-0" />

      <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-md mx-auto">
        {/* Mobile Header */}
        <div className="pt-2">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 text-xs text-white/90 font-sans">
            <span className="font-semibold text-[11px]">12:45</span>
            <span className="w-2.5 h-2.5 border border-white rounded-full inline-block" />
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Menu Icon */}
          <div className="px-5 pt-2">
            <button className="text-2xl text-white active:scale-90 transition-transform p-1 -ml-1">
              ☰
            </button>
          </div>
        </div>

        {/* Center Mobile Canvas */}
        <div className="flex flex-col items-center justify-center px-4 my-auto space-y-4">
          {/* Doctor Badge */}
          <div className="flex flex-col items-center border border-white/40 bg-black/40 backdrop-blur-md rounded-2xl py-2 px-5 text-center max-w-[200px] shadow-lg">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white mb-1 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" 
                alt="Dr. Okonkwo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[10px] font-serif leading-tight text-gray-200">
              <p>Dr. Okonkwo</p>
              <p>A.</p>
              <p>Ejideofor PhD</p>
            </div>
          </div>

          {/* Icon Grid */}
          <div className="w-full max-w-[280px]">
            {/* Top Row */}
            <div className="grid grid-cols-3 gap-2 text-center mb-3">
              <button onClick={() => setCurrentScreen('bookings')} className="flex flex-col items-center group active:scale-95 transition-transform">
                <div className="w-13 h-13 w-12 h-12 rounded-full bg-white/90 text-black border border-black flex items-center justify-center shadow-md">
                  <Plus className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-[9px] text-white mt-1 font-sans font-semibold">Bookings</span>
              </button>

              <button onClick={() => setCurrentScreen('patient-list')} className="flex flex-col items-center group active:scale-95 transition-transform">
                <div className="w-12 h-12 rounded-full bg-white/90 text-black border border-black flex items-center justify-center shadow-md">
                  <Folder className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[9px] text-white mt-1 font-sans font-semibold leading-tight">Patient<br/>Records</span>
              </button>

              <button onClick={() => setCurrentScreen('cloud')} className="flex flex-col items-center group active:scale-95 transition-transform">
                <div className="w-12 h-12 rounded-full bg-white/90 text-black border border-black flex items-center justify-center shadow-md">
                  <Cloud className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[9px] text-white mt-1 font-sans font-semibold">Cloud storage</span>
              </button>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-center gap-6 text-center">
              <button onClick={() => setCurrentScreen('location')} className="flex flex-col items-center group active:scale-95 transition-transform">
                <div className="w-12 h-12 rounded-full bg-white/90 text-black border border-black flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[9px] text-white mt-1 font-sans font-semibold">Location</span>
              </button>

              <button onClick={() => setCurrentScreen('help')} className="flex flex-col items-center group active:scale-95 transition-transform">
                <div className="w-12 h-12 rounded-full bg-white/90 text-black border border-black flex items-center justify-center shadow-md">
                  <Users className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[9px] text-white mt-1 font-sans font-semibold">Need help?!</span>
              </button>
            </div>
          </div>

          {/* Winged Cross Logo */}
          <div className="flex flex-col items-center pt-1">
            <svg className="w-16 h-16 text-white drop-shadow-md" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M44 22h12v8h8v12h-8v8H44v-8h-8V30h8v-8z" fill="currentColor" />
              <path d="M38 52 C22 42, 10 32, 4 22 C14 36, 24 48, 38 58 C32 62, 28 68, 32 74 C36 78, 44 72, 48 64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M62 52 C78 42, 90 32, 96 22 C86 36, 76 48, 62 58 C68 62, 72 68, 68 74 C64 78, 56 72, 52 64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="tracking-[0.2em] text-xs font-bold text-white">KODA</h2>
            <span className="text-[8px] tracking-widest text-gray-200">care..........</span>
          </div>
        </div>

        {/* Mobile Sticky Bottom Bar */}
        <div className="bg-[#cfd2d6] text-black py-2 px-3 flex justify-around items-center text-[10px] font-sans font-medium border-t border-gray-400">
          <button onClick={() => setCurrentScreen('contact')} className="p-1 active:opacity-60">Contact us</button>
          <button onClick={() => setCurrentScreen('feedback')} className="p-1 active:opacity-60">Feedback</button>
          <button onClick={() => setCurrentScreen('about')} className="p-1 active:opacity-60">About us</button>
        </div>
      </div>
    </div>
  );
}