import { VowResolution } from "./VowResolution";
import { VowStatus } from "./VowStatus";
import { VowVisibility } from "./VowVisibility";

export interface Vow {
  authorId: string;
  title: string;
  description: string | null;
  deadline: Date;
  visibility: VowVisibility;
  status: VowStatus;
  resolution: VowResolution | null; // null until deadline
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}
