import { VowResolution } from "./VowResolution";
import { VowStatus } from "./VowStatus";
import { VowVisibility } from "./VowVisibility";

export interface Vow {
  authorId: string;
  title: string;
  description: string | null;
  deadlineTimestampUTC: number;
  visibility: VowVisibility;
  status: VowStatus;
  resolution: VowResolution | null; // null until deadline
  viewCount: number;
  commentCount: number;
  createdAt: Date;
  updatedAt: Date;
}
