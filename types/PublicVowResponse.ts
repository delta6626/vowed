import { Vow } from "./Vow";

export type PublicVowResponse = {
  vowId: string;
  statusFormatted:
    | "Waiting"
    | "Moment of truth"
    | "Fulfilled"
    | "Not fulfilled";
} & Pick<Vow, "title" | "commentCount" | "viewCount" | "createdAt">;
