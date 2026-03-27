import { VowStatus } from "@/types/VowStatus";
import Pill from "./Pill";
import { getFormattedVowStatusName } from "@/utils/functions/getFormattedVowStatusName";
import { Check, Eye, MessageCircle, X } from "lucide-react";
import { getCountdown } from "@/utils/functions/getCountdown";
import { p } from "motion/react-m";
import { count } from "node:console";

export interface BasicVowContainerProps {
  vowText: string;
  vowStatus: VowStatus;
  vowViewCount?: number;
  vowCommentCount?: number;
  vowDeadlineTimestampUTC?: number;
  currentTimestampUTC?: number;
  className?: string;
}

export default function BasicVowContainer({
  vowText,
  vowStatus,
  vowViewCount,
  vowCommentCount,
  vowDeadlineTimestampUTC,
  currentTimestampUTC,
  className,
}: BasicVowContainerProps) {
  const countdown =
    vowDeadlineTimestampUTC && currentTimestampUTC
      ? getCountdown(vowDeadlineTimestampUTC, currentTimestampUTC)
      : undefined;

  return (
    <div
      className={`flex justify-between font-body px-8 py-4 rounded-2xl border border-base-300 bg-base-200 ${className}`}
    >
      <div className="flex flex-col gap-4 justify-between">
        <p className="text-base-content/70">{vowText}</p>
        <div className="flex gap-4 items-center text-accent">
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

      <div className="flex flex-col items-end gap-4">
        <Pill
          className="w-fit"
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

        {typeof countdown != "string" && typeof countdown != "undefined" && (
          <p>{`${countdown.years} y ${countdown.days} d ${countdown.hours} h ${countdown.minutes} m ${countdown.seconds} s`}</p>
        )}
      </div>
    </div>
  );
}
