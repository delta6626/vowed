import { VowComment } from "@/types/VowComment";
import Link from "next/link";

export interface VowCommentContainerProps {
  comment: VowComment;
}

export const VowCommentContainer = ({ comment }: VowCommentContainerProps) => {
  return (
    <div className="bg-base-200 p-4 rounded-xl">
      <div className="flex items-center w-full justify-between">
        <Link
          href={`u/${comment.commenterId}`}
          className="text-base-content/80 font-medium"
        >
          {comment.commenterName}
        </Link>

        <p className="text-accent">
          {new Date(comment.commentCreationTimestamp).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <p className="mt-2">{comment.commentText}</p>
    </div>
  );
};
