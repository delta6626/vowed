import { ChangeEvent, SubmitEvent, useState } from "react";

export const VowCommentForm = () => {
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Comments</h1>

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
            className="btn btn-primary"
            disabled={!comment}
          >
            Post comment
          </button>
        </div>
      </form>
    </>
  );
};
