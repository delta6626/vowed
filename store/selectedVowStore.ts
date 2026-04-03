import { create } from "zustand";

export interface SelectedVowStore {
  vowId: string;
  setVowId: (newVowId: string) => void;
}

export const useSelectedVowStore = create<SelectedVowStore>((set) => ({
  vowId: "",
  setVowId: (newVowId) => {
    set({ vowId: newVowId });
  },
}));
