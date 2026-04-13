import { VowComment } from "@/types/VowComment";

export interface VowCommentContainerProps {
  comment: VowComment;
}

export const VowCommentContainer = ({ comment }: VowCommentContainerProps) => {
  return <div className="">{comment.commentText}</div>;
};
