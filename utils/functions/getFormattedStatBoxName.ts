import type { StatBoxType } from "@/types/StatBoxType";

export const getFormattedStatBoxName = (statBoxType: StatBoxType) => {
  switch (statBoxType) {
    case "total":
      return "Total vows";
    case "fulfillment":
      return "Fulfillment rate";
    case "waiting":
      return "Open vows";
  }
};
