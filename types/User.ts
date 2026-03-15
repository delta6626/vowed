import { Plan } from "./Plan";

export interface User {
  clerkId: string;
  displayName: string;
  emailAddress: string;
  avatarURL: string;
  plan: Plan;
  vowsCreated: number;
  vowsFulfilled: number;
}
