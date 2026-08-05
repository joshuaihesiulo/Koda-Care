import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenPatientList() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const setSelectedPatient = useAppStore((state) => state.setSelectedPatient);

  const patients = [
    { name: "Johnson Ebubechi", age: 28 },
    { name: "Favor Michael", age: 32 },
    { name: "Chukwuemeka Chuks", age: 36 },
    { name: "Delight Nwankwo", age: 26 },
    { name: "Janet Inyama", age: 26 },
    { name: "Christian Iheanacho", age: 29 },
    { name: "Chidera Anita", age: 30 },
  ];

  const handleSelect = (patient) => {
    setSelectedPatient(patient);
    setCurrentScreen('patient-details');
  };

  return (
    <div className="w-full h-full min-h-screen sm:min-h-0 bg-[#7173b9] text-white flex flex-col justify-between font-serif overflow-hidden select-none">
      {/* Fixed Mobile Top Header */}
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

        {/* Banner */}
        <div className="mt-2 px-4 py-2 bg-[#252872] flex justify-between items-center shadow-md">
          <h2 className="font-serif font-bold text-xs sm:text-sm tracking-wide text-white">
            Patient Records
          </h2>
          <button 
            onClick={() => setCurrentScreen('dashboard')} 
            className="text-lg text-white active:scale-90 transition-transform p-1"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Scrollable Patient List Container */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5">
        {patients.map((p, idx) => (
          <div 
            key={idx}
            onClick={() => handleSelect(p)}
            className="bg-white text-[#2a247a] p-3 flex justify-between items-center cursor-pointer border-2 border-[#1e176b] shadow-sm active:bg-gray-100 transition-colors"
          >
            <div className="space-y-0.5">
              <h4 className="font-serif font-bold text-xs text-[#353780]">{p.name}</h4>
              <p className="font-serif text-[11px] text-[#353780]">Age : {p.age}</p>
              <p className="font-serif text-[10px] text-[#5558aa] pt-0.5">Click for more details</p>
            </div>
            
            {/* User Avatar Circle */}
            <div className="w-10 h-10 rounded-full border-2 border-black/80 bg-gray-100 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Solid Bottom Navbar */}
      <div className="bg-[#1a1752] h-10 w-full shrink-0" />
    </div>
  );
}