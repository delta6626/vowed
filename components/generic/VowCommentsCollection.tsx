import { VowComment } from "@/types/VowComment";
import { VowCommentContainer } from "./VowCommentContainer";

export interface VowCommentsCollectionProps {
  commentsCollection: VowComment[];
}

export const VowCommentsCollection = ({
  commentsCollection,
}: VowCommentsCollectionProps) => {
  return (
    <>
      {commentsCollection.map((comment) => {
        return <VowCommentContainer comment={comment} />;
      })}
    </>
  );
};
