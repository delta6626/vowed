import { Vow } from "./Vow";

export type PublicVowResponse = { vowId: string } & Pick<
  Vow,
  "title" | "commentCount" | "viewCount" | "createdAt"
>;
