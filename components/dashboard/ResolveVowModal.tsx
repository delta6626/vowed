import { MODALS } from "@/constants/MODALS";
import { useSelectedVowStore } from "@/store/selectedVowStore";
import { VowStatus } from "@/types/VowStatus";
import { Check, X } from "lucide-react";
import { useState } from "react";

export const ResolveVowModal = () => {
  const { vowDetails } = useSelectedVowStore();
  const [vowResolutionOutcome, setVowResolutionOutcome] =
    useState<Extract<VowStatus, "fulfilled" | "not-fulfilled">>();
  const [vowResolutionNote, setVowResolutionNote] = useState<"string">();

  const handleModalClose = () => {
    setVowResolutionOutcome(undefined);
    setVowResolutionNote(undefined);
  };

  return (
    <dialog
      id={MODALS.RESOLVE_VOW_MODAL.ID}
      className="modal"
      onClose={handleModalClose}
    >
      <div className="modal-box border border-base-300">
        <div className="">
          <h1 className="text-xl font-display stext-base-content/80">
            {MODALS.RESOLVE_VOW_MODAL.TITLE}
          </h1>
          <p className="text-accent italic mt-2">{`"${vowDetails.vowTitle}"`}</p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={() => {
              setVowResolutionOutcome("fulfilled");
            }}
            className={`${vowResolutionOutcome === "fulfilled" ? "bg-success/20" : "bg-base-200"} rounded-xl w-full flex gap-4 items-center justify-start p-4 border border-base-300 hover:border-success/20`}
          >
            <Check className="text-success" />
            <div className="flex flex-col items-start">
              <h1>Fulfilled</h1>
              <p className="text-sm text-accent">
                This event happened as vowed.
              </p>
            </div>
          </button>

          <button
            onClick={() => {
              setVowResolutionOutcome("not-fulfilled");
            }}
            className={`${vowResolutionOutcome === "not-fulfilled" ? "bg-error/20" : "bg-base-200"} rounded-xl w-full flex gap-4 items-center justify-start p-4 border border-base-300 hover:border-error/20`}
          >
            <X className="text-error" />
            <div className="flex flex-col items-start">
              <h1>Not fulfilled</h1>
              <p className="text-sm text-accent">This event did not happen.</p>
            </div>
          </button>
        </div>
      </div>
    </dialog>
  );
};
