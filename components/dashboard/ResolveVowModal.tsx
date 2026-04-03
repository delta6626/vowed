import { MODALS } from "@/constants/MODALS";

export const ResolveVowModal = () => {
  return (
    <dialog id={MODALS.RESOLVE_VOW_MODAL.ID} className="modal">
      <div className="modal-box border border-base-300">
        <h1 className="text-lg text-base-content/80">
          {MODALS.RESOLVE_VOW_MODAL.TITLE}
        </h1>
      </div>
    </dialog>
  );
};
