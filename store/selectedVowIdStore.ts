import { create } from "zustand";

export interface SelectedVowIdStore {
  vowId: string;
  setVowId: (newVowId: string) => void;
}

export const useSelectedVowIdStore = create<SelectedVowIdStore>((set) => ({
  vowId: "",
  setVowId: (newVowId) => {
    set({ vowId: newVowId });
  },
}));
