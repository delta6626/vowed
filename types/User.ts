import { Plan } from "./Plan";

export interface User {
  clerkId: string;
  emailAddresses: string[];
  displayName: string;
  avatarURL: string;
  plan: Plan;
  vowsCreated: number;
  vowsFulfilled: number;
}
