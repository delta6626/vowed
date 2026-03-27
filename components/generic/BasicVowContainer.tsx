import { VowStatus } from "@/types/VowStatus";
import Pill from "./Pill";
import { getFormattedVowStatusName } from "@/utils/functions/getFormattedVowStatusName";
import { Check, Eye, MessageCircle, X } from "lucide-react";

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
        <Pill
          text={getFormattedVowStatusName(vowStatus)}
          variant={vowStatus}
          icon={
            vowStatus === "waiting" ? (
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            ) : vowStatus === "moment-of-truth" ? (
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            ) : vowStatus === "fulfilled" ? (
              <Check className="text-success" size={20} />
            ) : (
              <X className="text-error" size={20} />
            )
          }
        />
      </div>

      <div className="mt-4">
        <div className="flex gap-4 text-accent cursor-default">
          <div className="flex gap-2 items-center">
            <Eye size={20} />
            <p>{vowViewCount ?? 0}</p>
          </div>

          <div className="flex gap-2 items-center">
            <MessageCircle size={20} />
            <p>{vowCommentCount ?? 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
