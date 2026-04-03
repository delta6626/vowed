import { create } from "zustand";

export interface VowDetails {
  vowId: string;
  vowTitle: string;
}

export interface SelectedVowStore {
  vowDetails: VowDetails;
  setVowDetails: (updatedVowDetails: VowDetails) => void;
}

export const useSelectedVowStore = create<SelectedVowStore>((set) => ({
  vowDetails: {
    vowId: "",
    vowTitle: "",
  },

  setVowDetails: (updatedVowDetails) => {
    set({ vowDetails: updatedVowDetails });
  },
}));
