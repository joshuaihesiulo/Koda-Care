import { create } from 'zustand'

const useAppStore = create((set) => ({
  screen: 'splash',
  user: null,
  patients: [],
  setScreen: (screen) => set({ screen }),
  setUser: (user) => set({ user }),
  setPatients: (patients) => set({ patients }),
}))

export default useAppStore
