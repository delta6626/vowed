import { StatBoxType } from "@/types/StatBoxType";
import { getFormattedStatBoxName } from "@/utils/functions/getFormattedStatBoxName";

export interface DashboardStatBoxProps {
  statBoxType: StatBoxType;
  mainText: string | number;
}

export default function DashboardStatBox({
  statBoxType,
  mainText,
}: DashboardStatBoxProps) {
  let mainTextClassName;

  switch (statBoxType) {
    case "total":
      mainTextClassName = "";
      break;
    case "fulfillment":
      mainTextClassName = "text-success";
      break;
    case "active":
      mainTextClassName = "text-primary";
      break;
  }

  return (
    <div className="w-60 min-h-28 p-4 rounded-2xl border border-base-300 bg-base-200 flex flex-col items-center justify-between">
      <div className="flex flex-1 items-center justify-center">
        <h1 className={`text-4xl font-bold ${mainTextClassName}`}>
          {mainText}
        </h1>
      </div>
      <p className="text-accent">{getFormattedStatBoxName(statBoxType)}</p>
    </div>
  );
}
