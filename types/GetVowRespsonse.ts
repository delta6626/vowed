import { VowComment } from "./VowComment";
import { VowResolution } from "./VowResolution";
import { VowStatus } from "./VowStatus";

export interface GetVowResponse {
  vowId: string;

  currentTimestampUTC: number;
  vowStatus: VowStatus;
  vowStatusFormatted: string;
  vowCreationDate: Date;
  vowTitle: string;
  vowDescription: string;
  vowDeadlineTimestampUTC: number;
  vowCommentCount: number;
  vowViewCount: number;
  vowComments: VowComment[] | [];
  vowResolution: VowResolution | null;

  vowCreatorProfilePhoto: string;
  vowCreatorName: string;
  vowCreatorFulfillmentRate: number;
}
