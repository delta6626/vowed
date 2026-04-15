import { create } from "zustand";

export type ModalType = "error" | "success" | "alert";

export interface ModalStore {
  modalType: ModalType;
  modalTitle: string;
  modalText: string;
}

export const useModalStore = create(() => {});
