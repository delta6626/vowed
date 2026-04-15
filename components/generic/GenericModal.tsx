import { MODALS } from "@/constants/MODALS";
import { useModalStore } from "@/store/modalStore";
import { AlertCircle, Check, XCircle } from "lucide-react";

export const GenericModal = () => {
  const { modalInformation, setModalInformation } = useModalStore();
  return (
    <dialog id={MODALS.RESOLVE_VOW_MODAL.ID} className="modal">
      <div className="modal-box border border-base-300 rounded-xl">
        <div className="flex items-center gap-2">
          {modalInformation?.modalType === "alert" ? (
            <AlertCircle className="text-primary" size={20} />
          ) : modalInformation?.modalType === "error" ? (
            <XCircle className="text-error" size={20} />
          ) : (
            <Check className="text-success" size={20} />
          )}

          <h1 className="text-xl font-display text-base-content/80">
            {modalInformation?.modalTitle}
          </h1>
        </div>
      </div>
    </dialog>
  );
};
