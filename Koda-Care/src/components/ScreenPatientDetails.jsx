import React from 'react';
import { User, Calendar, Pointer, Phone, ShieldAlert } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function ScreenPatientDetails() {
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const selectedPatient = useAppStore((state) => state.selectedPatient);

  return (
    <div className="w-full flex-1 bg-[#1e176b] text-white flex flex-col justify-between font-serif">
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between px-4 pt-3 text-xs opacity-80">
          <span>12:45</span>
          <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
        </div>

        <div className="bg-[#2a247a] px-4 py-2.5 flex justify-between items-center text-xs font-bold border-b border-purple-900 mt-2">
          <button onClick={() => setCurrentScreen('patient-list')} className="hover:underline flex items-center gap-1">
            ← Patient Records
          </button>
        </div>

        <div className="p-3 my-auto space-y-3">
          <div className="bg-white text-black p-3 rounded flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-bold text-sm text-[#2a247a]">{selectedPatient?.name || "Johnson Ebubechi"}</h3>
              <p className="text-xs text-gray-700 mt-0.5">Age : {selectedPatient?.age || 28}</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-gray-50">
              <User className="w-6 h-6 text-gray-700" />
            </div>
          </div>

          <div className="bg-[#cfd2f5] text-[#2a247a] p-4 rounded text-xs space-y-1.5 font-semibold shadow-sm">
            <p>Health Status : <span className="text-yellow-600 font-bold">Recovering</span></p>
            <p>Occupation : Architect</p>
            <p>Allergies : <span className="text-green-700 font-bold">None</span></p>
            <p>Hospitals Visited : 3</p>
            <p>Appointments booked : 11/7/26</p>
          </div>

          <div className="bg-gray-300 p-3 rounded flex justify-around items-center">
            <div className="w-11 h-11 rounded-full bg-yellow-400 border border-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow">
              <Calendar className="w-5 h-5 text-black" />
            </div>
            <div className="w-11 h-11 rounded-full bg-yellow-400 border border-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow">
              <Pointer className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#d1d5db] py-3 px-6 flex justify-between items-center text-black">
        <Phone className="w-5 h-5" />
        <ShieldAlert className="w-5 h-5" />
      </div>
    </div>
  );
}