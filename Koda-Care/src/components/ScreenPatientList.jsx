import React from 'react';
import { User } from 'lucide-react';
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
    <div className="w-full flex-1 bg-[#1e176b] text-white flex flex-col justify-between font-serif">
      <div>
        <div className="flex justify-between px-4 pt-3 text-xs opacity-80">
          <span>12:45</span>
          <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
        </div>

        <div className="bg-[#2a247a] px-4 py-2.5 flex justify-between items-center text-xs font-bold border-b border-purple-900 mt-2">
          <span>Patient Records</span>
          <span className="cursor-pointer" onClick={() => setCurrentScreen('dashboard')}>☰</span>
        </div>
      </div>

      <div className="overflow-y-auto px-3 py-2 space-y-2 flex-1 my-2">
        {patients.map((p, idx) => (
          <div 
            key={idx}
            onClick={() => handleSelect(p)}
            className="bg-white text-black rounded p-2.5 flex justify-between items-center cursor-pointer border border-blue-900 hover:bg-gray-100 transition-colors shadow-sm"
          >
            <div>
              <h4 className="font-bold text-xs text-[#2a247a]">{p.name}</h4>
              <p className="text-[11px] text-gray-700 mt-0.5">Age : {p.age}</p>
              <span className="text-[9px] text-gray-500 block mt-1">Click for more details</span>
            </div>
            <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center bg-gray-50">
              <User className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}