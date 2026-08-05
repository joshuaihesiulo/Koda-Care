import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenPatientDetails() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const selectedPatient = useAppStore((state) => state.selectedPatient);

  return (
    <div className="w-full h-full min-h-screen sm:min-h-0 bg-[#7173b9] text-white flex flex-col justify-between font-serif overflow-hidden select-none">
      {/* Header */}
      <div className="flex flex-col shrink-0">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 pt-2 text-[11px] text-white/90 font-sans">
          <span className="font-semibold">12:45</span>
          <span className="w-2.5 h-2.5 border border-white rounded-full inline-block" />
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Back Title Banner */}
        <div className="mt-2 px-4 py-2 bg-[#252872] flex justify-between items-center shadow-md">
          <button 
            onClick={() => setCurrentScreen('patient-list')}
            className="font-serif font-bold text-xs sm:text-sm tracking-wide text-white active:opacity-70"
          >
            Patient Records
          </button>
        </div>
      </div>

      {/* Details Mobile Body */}
      <div className="px-4 py-3 flex-1 flex flex-col space-y-2.5 justify-start overflow-y-auto">
        {/* Card 1: Patient Header */}
        <div className="bg-white text-[#2a247a] p-3.5 flex justify-between items-center border-2 border-[#1e176b] shadow-sm">
          <div className="space-y-0.5">
            <h3 className="font-serif font-bold text-xs text-[#353780]">
              {selectedPatient?.name || "Johnson Ebubechi"}
            </h3>
            <p className="font-serif text-[11px] text-[#353780]">
              Age : {selectedPatient?.age || 28}
            </p>
          </div>

          <div className="w-10 h-10 rounded-full border-2 border-black/80 bg-gray-100 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>

        {/* Card 2: Medical Info */}
        <div className="bg-[#b4b7dd] text-[#2a247a] p-3.5 text-xs font-serif font-bold space-y-1 border border-purple-900/20 shadow-sm leading-relaxed">
          <p>
            Health Status : <span className="text-yellow-500 font-bold">Recovering</span>
          </p>
          <p>Occupation : Architect</p>
          <p>
            Allergies : <span className="text-emerald-600 font-bold">None</span>
          </p>
          <p>Hospitals Visited : 3</p>
          <p>Appointments booked : 11/7/26</p>
        </div>

        {/* Card 3: Action Buttons */}
        <div className="bg-[#dcdcdc] p-5 flex justify-around items-center border border-gray-400 shadow-sm min-h-[100px]">
          {/* Calendar Button */}
          <button className="w-12 h-12 rounded-full bg-[#fdd835] border-2 border-black flex items-center justify-center shadow-md active:scale-90 transition-transform">
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="8" y1="14" x2="8.01" y2="14" strokeWidth="3" />
              <line x1="12" y1="14" x2="12.01" y2="14" strokeWidth="3" />
              <line x1="16" y1="14" x2="16.01" y2="14" strokeWidth="3" />
            </svg>
          </button>

          {/* Pointer/Touch Button */}
          <button className="w-12 h-12 rounded-full bg-[#fdd835] border-2 border-black flex items-center justify-center shadow-md active:scale-90 transition-transform">
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 0 1 2 2v4a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Fixed Bottom Navbar */}
      <div className="bg-[#1a1752] h-10 w-full shrink-0" />
    </div>
  );
}