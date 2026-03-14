import { VowResolution } from "./VowResolution";
import { VowStatus } from "./VowStatus";

export interface Vow {
  authorId: string;
  title: string;
  description: string | null;
  deadline: Date;
  status: VowStatus;
  resolution: VowResolution | null; // null until deadline
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}
