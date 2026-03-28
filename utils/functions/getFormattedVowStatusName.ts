import { VowStatus } from "@/types/VowStatus";

export const getFormattedVowStatusName = (
  vowStatus: VowStatus,
  fallback: string,
) => {
  switch (vowStatus) {
    case "waiting":
      return "Waiting";
    case "fulfilled":
      return "Fulfilled";
    case "not-fulfilled":
      return "Not Fulfilled";
  }

  return fallback;
};
