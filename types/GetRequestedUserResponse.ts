import { PublicVowResponse } from "./PublicVowResponse";

export interface GetRequestedUserResponse {
  displayName: string;
  profilePhotoURL: string;
  totalVows: number;
  fulfilledVows: number;
  waitingVows: number;
  creationTimestamp: number;
  publicVows: PublicVowResponse[];
}
