import { StatBoxType } from "@/types/StatBoxType";

export interface DashboardStatBoxProps {
  statBoxType: StatBoxType;
  mainText: string;
}

export default function DashboardStatBox({
  statBoxType,
  mainText,
}: DashboardStatBoxProps) {
  return <div></div>;
}
