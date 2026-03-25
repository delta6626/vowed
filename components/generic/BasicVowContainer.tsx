import { VowStatus } from "@/types/VowStatus";
import Pill from "./Pill";
import { getFormattedVowStatusName } from "@/utils/functions/getFormattedVowStatusName";
import { Eye, MessageCircle } from "lucide-react";

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
  vowViewCount,
  vowCommentCount,
  vowDeadlineTimestampUTC,
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

      <div className="mt-4">
        {vowViewCount && vowCommentCount && (
          <div className="flex gap-4 text-accent cursor-default">
            <div className="flex gap-2 items-center">
              <Eye size={20} />
              <p>{vowViewCount}</p>
            </div>

            <div className="flex gap-2 items-center">
              <MessageCircle size={20} />
              <p>{vowCommentCount}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
