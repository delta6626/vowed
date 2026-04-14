import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { ChangeEvent, SubmitEvent, useState } from "react";

export interface VowCommentFormProps {
  vowId: string;
}

export const VowCommentForm = ({ vowId }: VowCommentFormProps) => {
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

    onSuccess: () => {
      setComment("");
      queryClient.refetchQueries({ queryKey: [`vow-${vowId}`] });
    },

    onError: () => {},
  });

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e: SubmitEvent) => {
    e.preventDefault();
    if (!comment) return;
    submitComment();
  };

  return (
    <>
      <h1 className="font-medium text-accent">Comments</h1>

      <form onSubmit={handleSubmitComment}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          maxLength={300}
          className="mt-4 textarea resize-none w-full p-4 bg-base-200 rounded-xl border border-base-300 min-h-25 max-h-25"
          placeholder={"Leave a comment"}
        />

        <div className="mt-2 flex items-center justify-between">
          <p className="text-accent">
            Comments must follow our community guidelines. Please be respectful.
          </p>
          <button
            type={"submit"}
            className="btn btn-primary flex shrink-0"
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
