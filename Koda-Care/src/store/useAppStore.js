import { create } from 'zustand';

export const useAppStore = create((set) => ({
  currentScreen: 'splash', // Options: 'splash', 'mission', 'landing-cta', 'phone', 'verify', 'register', 'dashboard', 'patient-list', 'patient-details'
  selectedPatient: null,

  setCurrentScreen: (screen) => set({ currentScreen: screen }),
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
}));