import { MODALS } from "@/constants/MODALS";
import { QUERY_KEYS } from "@/constants/QUERY_KEYS";
import { useModalStore } from "@/store/modalStore";
import { useSelectedVowStore } from "@/store/selectedVowStore";
import { VowStatus } from "@/types/VowStatus";
import { closeModal, openModal } from "@/utils/functions/modalActions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowRight, Check, X } from "lucide-react";
import { ChangeEvent, useState } from "react";

export const ResolveVowModal = () => {
  const queryClient = useQueryClient();

  const { vowDetails } = useSelectedVowStore();
  const { setModalInformation } = useModalStore();

  const [vowResolutionOutcome, setVowResolutionOutcome] =
    useState<Extract<VowStatus, "fulfilled" | "not-fulfilled">>();
  const [vowResolutionNote, setVowResolutionNote] = useState<string>("");

  const { isPending, mutate: submitResolution } = useMutation({
    mutationFn: async () => {
      const reqBody = {
        vowId: vowDetails.vowId,
        vowResolutionOutcome: vowResolutionOutcome,
        vowResolutionNote: vowResolutionNote.trim(),
      };

      const res = await fetch("/api/vows/resolve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to resolve vow.");
      }

      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_PROFILE],
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_VOWS],
      });

      queryClient.invalidateQueries({
        queryKey: [`vow-${vowDetails.vowId}`],
      });

      closeModal(MODALS.RESOLVE_VOW_MODAL.ID);
    },
    onError: () => {
      setModalInformation({
        modalType: "error",
        modalTitle: "Failed to resolve vow",
        modalText:
          "We could not resolve this vow at this moment. Please try again later.",
        primaryButtonText: "Okay",
        onPrimaryButtonClick: () => {
          closeModal(MODALS.GENERIC_MODAL.ID);
        },
      });

      openModal(MODALS.GENERIC_MODAL.ID);
      closeModal(MODALS.RESOLVE_VOW_MODAL.ID);
    },
  });

  const handleOutcomeChange = (
    outcome: Extract<VowStatus, "fulfilled" | "not-fulfilled">,
  ) => {
    setVowResolutionOutcome(outcome);
  };

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setVowResolutionNote(e.target.value);
  };

  const handleSubmitClick = () => {
    submitResolution();
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
          <h1 className="text-xl font-display text-base-content/90">
            {MODALS.RESOLVE_VOW_MODAL.TITLE}
          </h1>
          <p className="text-base-content/60 italic">{`"${vowDetails.vowTitle}"`}</p>
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
              <p className="text-sm text-base-content/60">
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
              <p className="text-sm text-base-content/60">
                This event did not happen.
              </p>
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
            disabled={isPending}
            onClick={() => {
              closeModal(MODALS.RESOLVE_VOW_MODAL.ID);
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmitClick}
            className="btn btn-primary flex shrink-0"
            disabled={vowResolutionOutcome === undefined || isPending}
          >
            Submit
            <span className="w-5 h-5 flex items-center justify-center">
              {isPending ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                <ArrowRight size={20} />
              )}
            </span>
          </button>
        </div>
      </div>
    </dialog>
  );
};
