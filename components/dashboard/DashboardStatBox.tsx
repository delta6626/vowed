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
      mainTextClassName = "";
      break;
    case "waiting":
      mainTextClassName = "";
      break;
  }

  return (
    <div className="w-60 min-h-28 p-4 rounded-xl border border-base-300 bg-base-200 flex flex-col items-center justify-between">
      <div className="flex flex-1 items-center justify-center">
        <h1
          className={`text-3xl font-display font-semibold ${mainTextClassName}`}
        >
          {mainText}
        </h1>
      </div>
      <p className="text-base-content/60">
        {getFormattedStatBoxName(statBoxType)}
      </p>
    </div>
  );
}
