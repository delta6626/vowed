import { Plan } from "./Plan";

export interface User {
  clerkId: string;
  displayName: string;
  avatarURL: string;
  plan: Plan;
  vowsWaiting: number;
  vowsCreated: number;
  vowsFulfilled: number;
}
