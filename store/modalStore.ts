import { create } from "zustand";

export type ModalType = "error" | "success" | "alert";

export interface ModalInformation {
  modalType: ModalType;
  modalTitle: string;
  modalText: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

export interface ModalStore {
  modalInformation: ModalInformation | null;
  setModalInformation: (updatedModalInformation: ModalInformation) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalInformation: null,
  setModalInformation: (updatedModalInformation) =>
    set({ modalInformation: updatedModalInformation }),
}));
