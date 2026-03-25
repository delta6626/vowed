import { VowStatus } from "@/types/VowStatus";
import Pill from "./Pill";
import { getFormattedVowStatusName } from "@/utils/functions/getFormattedVowStatusName";

export interface BasicVowContainerProps {
  vowText: string;
  vowStatus: VowStatus;
  vowViewCount?: number;
  vowCommentCount?: number;
  vowDeadlineTimestampUTC?: number;
  className?: string;
}

export default function BasicVowContainer({
  vowText,
  vowStatus,
  className,
}: BasicVowContainerProps) {
  return (
    <div
      className={`font-body px-8 py-4 rounded-2xl border border-base-300 bg-base-200 ${className}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-base-content/70">{vowText}</p>
        <Pill text={getFormattedVowStatusName(vowStatus)} variant={vowStatus} />
      </div>
    </div>
  );
}
