import { VowStatus } from "./VowStatus";

export interface VowResolution {
  outcome: Extract<VowStatus, "fulfilled" | "not-fulfilled">;
}
