import { MODALS } from "@/constants/MODALS";
import { useModalStore } from "@/store/modalStore";
import { closeModal, openModal } from "@/utils/functions/modalActions";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, SubmitEvent, useState } from "react";

export interface VowCommentFormProps {
  vowId: string;
}

export const VowCommentForm = ({ vowId }: VowCommentFormProps) => {
  const router = useRouter();
  const { userId } = useAuth();
  const { setModalInformation } = useModalStore();
  const queryClient = useQueryClient();
  const [comment, setComment] = useState<string>("");

  const { isPending, mutate: submitComment } = useMutation({
    mutationFn: async () => {
      const reqBody = {
        commentText: comment,
      };

      const res = await fetch(`/api/vows/${vowId}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to comment.");
      }

      return data;
    },

    retry: 3,

    onSuccess: () => {
      setComment("");
      queryClient.refetchQueries({ queryKey: [`vow-${vowId}`] });
    },

    onError: () => {
      setModalInformation({
        modalType: "error",
        modalTitle: "Failed to comment",
        modalText: "We could not publish your comment. Please try again later.",
        primaryButtonText: "Okay",
        onPrimaryButtonClick: () => {
          closeModal(MODALS.GENERIC_MODAL.ID);
        },
      });

      openModal(MODALS.GENERIC_MODAL.ID);
      return;
    },
  });

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e: SubmitEvent) => {
    e.preventDefault();
    if (!comment) return;
    if (!userId) {
      setModalInformation({
        modalType: "alert",
        modalTitle: "Sign up or Login",
        modalText: "You need to sign up or login to publish your comment.",
        primaryButtonText: "Login",
        secondaryButtonText: "Cancel",
        onPrimaryButtonClick: () => {
          router.push("/sign-in");
        },
        onSecondaryButtonClick: () => {
          closeModal(MODALS.GENERIC_MODAL.ID);
        },
      });

      openModal(MODALS.GENERIC_MODAL.ID);
      return;
    }
    submitComment();
  };

  return (
    <>
      <form onSubmit={handleSubmitComment}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          maxLength={300}
          className="textarea resize-none w-full p-4 bg-base-200 rounded-xl border border-base-300 min-h-25 max-h-25"
          placeholder={"Leave a comment"}
        />

        <div className="mt-2 gap-x-4 flex flex-col-reverse sm:flex-row items-center justify-between">
          <p className="text-accent w-full sm:max-w-[60%]">
            Comments must follow our community guidelines. Please be respectful.
          </p>
          <button
            type={"submit"}
            className="btn btn-primary flex shrink-0 w-full sm:w-fit"
            disabled={!comment || isPending}
          >
            Post comment
            <span className="w-5 h-5 flex items-center justify-center">
              {isPending ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                <ArrowRight size={20} />
              )}
            </span>
          </button>
        </div>
      </form>
    </>
  );
};
