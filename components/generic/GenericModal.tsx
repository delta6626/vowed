import { MODALS } from "@/constants/MODALS";
import { useModalStore } from "@/store/modalStore";

export const GenericModal = () => {
  const { modalInformation, setModalInformation } = useModalStore();
  return <dialog id={MODALS.RESOLVE_VOW_MODAL.ID} className="modal"></dialog>;
};
