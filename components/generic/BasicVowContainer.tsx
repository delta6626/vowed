import { VowStatus } from "@/types/VowStatus";
import Pill from "./Pill";
import { getFormattedVowStatusName } from "@/utils/functions/getFormattedVowStatusName";

export interface BasicVowContainerProps {
  vowText: string;
  vowStatus: VowStatus;
  className?: string;
}

export default function BasicVowContainer({
  vowText,
  vowStatus,
  className,
}: BasicVowContainerProps) {
  return (
    <div
      className={`font-body flex items-center justify-between px-8 py-4 rounded-2xl border border-base-300 bg-base-200 ${className}`}
    >
      <p className="text-base-content/70">{vowText}</p>
      <Pill text={getFormattedVowStatusName(vowStatus)} variant={vowStatus} />
    </div>
  );
}
