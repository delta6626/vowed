import { VowComment } from "@/types/VowComment";
import { VowCommentContainer } from "./VowCommentContainer";

export interface VowCommentsCollectionProps {
  commentsCollection: VowComment[];
}

export const VowCommentsCollection = ({
  commentsCollection,
}: VowCommentsCollectionProps) => {
  const sortedComments = commentsCollection.sort(
    (a, b) => b.commentCreationTimestamp - a.commentCreationTimestamp,
  );

  return (
    <div className="flex flex-col gap-2">
      {sortedComments.map((comment) => {
        return (
          <VowCommentContainer key={comment.commentId} comment={comment} />
        );
      })}
    </div>
  );
};
