import type { StatBoxType } from "@/types/StatBoxType";

export const getFormattedStatBoxName = (statBoxType: StatBoxType) => {
  switch (statBoxType) {
    case "total":
      return "Total";
    case "fulfillment":
      return "Fulfillment";
    case "waiting":
      return "Open";
  }
};
