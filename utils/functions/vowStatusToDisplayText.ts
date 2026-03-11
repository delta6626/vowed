import { VowStatus } from "@/types/VowStatus";

export const vowStatusToDisplayText = (vowStatus: VowStatus) => {
  switch (vowStatus) {
    case "waiting":
      return "Waiting";
    case "moment-of-truth":
      return "Moment of Truth";
    case "fulfilled":
      return "Fulfilled";
    case "not-fulfilled":
      return "Not Fulfilled";
  }
};
