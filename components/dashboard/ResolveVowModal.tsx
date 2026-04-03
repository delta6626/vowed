import { MODALS } from "@/constants/MODALS";
import { useSelectedVowStore } from "@/store/selectedVowStore";
import { VowStatus } from "@/types/VowStatus";
import { closeModal } from "@/utils/functions/modalActions";
import { ArrowRight, Check, X } from "lucide-react";
import { ChangeEvent, useState } from "react";

export const ResolveVowModal = () => {
  const { vowDetails } = useSelectedVowStore();
  const [vowResolutionOutcome, setVowResolutionOutcome] =
    useState<Extract<VowStatus, "fulfilled" | "not-fulfilled">>();
  const [vowResolutionNote, setVowResolutionNote] = useState<string>();

  const handleOutcomeChange = (
    outcome: Extract<VowStatus, "fulfilled" | "not-fulfilled">,
  ) => {
    setVowResolutionOutcome(outcome);
  };

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setVowResolutionNote(e.target.value);
  };

  const handleModalClose = () => {
    setVowResolutionOutcome(undefined);
    setVowResolutionNote("");
  };

  return (
    <dialog
      id={MODALS.RESOLVE_VOW_MODAL.ID}
      className="modal"
      onClose={handleModalClose}
    >
      <div className="modal-box border border-base-300 rounded-xl">
        <div className="">
          <h1 className="text-xl font-display text-base-content/80">
            {MODALS.RESOLVE_VOW_MODAL.TITLE}
          </h1>
          <p className="text-accent italic">{`"${vowDetails.vowTitle}"`}</p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={() => {
              handleOutcomeChange("fulfilled");
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
              handleOutcomeChange("not-fulfilled");
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

        <div className="mt-4">
          <p className="text-base-content/80">
            Resolution note - <span className="text-accent">Optional</span>
          </p>
          <textarea
            value={vowResolutionNote}
            onChange={handleNoteChange}
            maxLength={300}
            minLength={0}
            className="textarea resize-none w-full p-4 bg-base-200 rounded-xl border border-base-300 min-h-25 max-h-25 mt-2"
            placeholder={
              "Say something about the outcome. Viewers will see this."
            }
          />
        </div>

        <div className="mt-4 w-full flex justify-end gap-2">
          <button
            className="btn"
            onClick={() => {
              closeModal(MODALS.RESOLVE_VOW_MODAL.ID);
            }}
          >
            Cancel
          </button>
          <button className="btn btn-primary">
            Submit <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </dialog>
  );
};
