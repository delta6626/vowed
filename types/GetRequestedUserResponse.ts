import { PublicVowResponse } from "./PublicVowResponse";

export interface GetRequestedUserResponse {
  displayName: string;
  profilePhotoURL: string;
  totalVows: number;
  fulfilledVows: number;
  waitingVows: number;
  publicVows: PublicVowResponse[];
}
