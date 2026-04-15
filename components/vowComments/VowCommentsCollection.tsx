import { VowComment } from "@/types/VowComment";
import { VowCommentContainer } from "./VowCommentContainer";

export interface VowCommentsCollectionProps {
  commentsCollection: VowComment[];
}

export const VowCommentsCollection = ({
  commentsCollection,
}: VowCommentsCollectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      {commentsCollection.map((comment) => {
        return (
          <VowCommentContainer key={comment.commentId} comment={comment} />
        );
      })}
    </div>
  );
};
