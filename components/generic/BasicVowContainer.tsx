import { VowStatus } from "@/types/VowStatus";
import Pill from "./Pill";
import { vowStatusToDisplayText } from "@/utils/functions/vowStatusToDisplayText";

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
      className={`font-body border border-base-300 bg-base-200 p-4 ${className}`}
    >
      <p>{vowText}</p>
      <Pill text={vowStatusToDisplayText(vowStatus)} variant={vowStatus} />
    </div>
  );
}
