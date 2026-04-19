import { VowComment } from "./VowComment";
import { VowResolution } from "./VowResolution";
import { VowStatus } from "./VowStatus";

export interface GetVowResponse {
  vowId: string;

  currentTimestampUTC: number;
  vowStatus: VowStatus;
  vowStatusFormatted: string;
  vowCreationTimestamp: number;
  vowTitle: string;
  vowDescription: string;
  vowDeadlineTimestampUTC: number;
  vowCommentCount: number;
  vowViewCount: number;
  vowComments: VowComment[] | [];
  vowResolution: VowResolution | null;

  vowCreatorId: string;
  vowCreatorProfilePhoto: string;
  vowCreatorName: string;
  vowCreatorFulfillmentRate: number;
}
