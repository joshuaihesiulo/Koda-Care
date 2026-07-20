import React from 'react';
import { Plus, Folder, Cloud, Home, Users } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenDashboard() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  return (
    <div className="w-full flex-1 relative text-white flex flex-col justify-between font-serif bg-slate-900">
      <img 
        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
        alt="Doctor" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      <div className="relative z-10 px-4 pt-3 flex-1 flex flex-col justify-between">
        <div className="flex justify-between text-xs opacity-80">
          <span className="cursor-pointer">☰</span>
          <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
        </div>

        <div className="flex justify-center my-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden bg-gray-300 shadow-md">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt="Dr Okonkwo" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] mt-2 text-center bg-black/50 px-2 py-0.5 rounded font-sans">
              Dr. Okonkwo A.<br/>B.Doctor PHD
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4 px-2 text-center max-w-xs mx-auto">
          <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
            <div className="w-14 h-14 rounded-full border border-white/80 bg-black/40 flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-[10px] mt-1.5">Bookings</span>
          </div>

          <div 
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform" 
            onClick={() => setCurrentScreen('patient-list')}
          >
            <div className="w-14 h-14 rounded-full border border-white/80 bg-black/40 flex items-center justify-center bg-blue-900/60">
              <Folder className="w-6 h-6" />
            </div>
            <span className="text-[10px] mt-1.5 font-bold underline">Patient Records</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
            <div className="w-14 h-14 rounded-full border border-white/80 bg-black/40 flex items-center justify-center">
              <Cloud className="w-6 h-6" />
            </div>
            <span className="text-[10px] mt-1.5">Cloud storage</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
            <div className="w-14 h-14 rounded-full border border-white/80 bg-black/40 flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <span className="text-[10px] mt-1.5">Location</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
            <div className="w-14 h-14 rounded-full border border-white/80 bg-black/40 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-[10px] mt-1.5">Need help ?!</span>
          </div>
        </div>

        <div className="flex flex-col items-center my-4">
          <div className="text-3xl">👐➕👐</div>
          <h2 className="tracking-widest text-xs font-bold">KODA</h2>
          <span className="text-[8px] text-gray-300">care..........</span>
        </div>
      </div>

      <div className="relative z-10 bg-gray-300 text-black text-[10px] py-2 px-4 flex justify-between font-sans">
        <span className="cursor-pointer hover:underline">Contact us</span>
        <span className="cursor-pointer hover:underline">Feedback</span>
        <span className="cursor-pointer hover:underline">About us</span>
      </div>
    </div>
  );
}