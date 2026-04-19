import { VowStatus } from "@/types/VowStatus";
import Pill from "./Pill";
import {
  LinkIcon,
  Check,
  Dot,
  Eye,
  Globe,
  Lock,
  MessageCircle,
  X,
} from "lucide-react";
import { getCountdown } from "@/utils/functions/getCountdown";
import { VowResolver } from "../dashboard/VowResolver";
import { VowResolution } from "@/types/VowResolution";
import { VowVisibility } from "@/types/VowVisibility";
import Link from "next/link";

export interface BasicVowContainerProps {
  vowId: string;
  vowTitle: string;
  vowStatus: VowStatus;
  vowViewCount: number;
  vowCommentCount: number;
  vowDeadlineTimestampUTC?: number;
  currentTimestampUTC?: number;
  vowResolution?: VowResolution;
  vowVisibility?: VowVisibility;
  className?: string;
}

export default function BasicVowContainer({
  vowId,
  vowTitle,
  vowStatus,
  vowViewCount,
  vowCommentCount,
  vowDeadlineTimestampUTC,
  currentTimestampUTC,
  vowResolution,
  vowVisibility,
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
        <Link href={`/v/${vowId}`} className="text-base-content/80">
          {vowTitle}
        </Link>
        <div className="text-base flex gap-4 items-center text-accent">
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

      <div className="text-base flex flex-col justify-between items-end gap-4">
        <div className="flex items-center gap-2">
          {vowVisibility === "public" ? (
            <Globe className="text-accent" size={20} />
          ) : vowVisibility === "unlisted" ? (
            <LinkIcon className="text-accent" size={20} />
          ) : vowVisibility === "private" ? (
            <Lock className="text-accent" size={20} />
          ) : null}

          <Pill
            className="w-fit"
            text={
              vowStatus === "waiting" &&
              vowDeadlineTimestampUTC! - currentTimestampUTC! >= 0
                ? "Waiting"
                : vowStatus === "fulfilled"
                  ? "Fulfilled"
                  : vowStatus === "not-fulfilled"
                    ? "Not fulfilled"
                    : "Moment of truth"
            }
            variant={
              vowStatus === "waiting" &&
              vowDeadlineTimestampUTC! - currentTimestampUTC! >= 0
                ? "primary"
                : vowStatus === "fulfilled"
                  ? "success"
                  : vowStatus === "not-fulfilled"
                    ? "error"
                    : "secondary"
            }
            icon={
              vowStatus === "not-fulfilled" ? (
                <X className="text-error" size={20} />
              ) : vowStatus === "fulfilled" ? (
                <Check className="text-success" size={20} />
              ) : vowStatus === "waiting" ||
                vowDeadlineTimestampUTC! - currentTimestampUTC! < 0 ? (
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              ) : null
            }
          />
        </div>

        {typeof countdown !== "string" &&
          countdown &&
          vowStatus === "waiting" && (
            <p className="flex items-center justify-end gap-2 w-full text-base-content/70 font-mono tabular-nums">
              {countdown.years !== 0 && (
                <>
                  <span>{countdown.years}y</span>
                  <Dot />
                </>
              )}

              {countdown.days !== 0 && (
                <>
                  <span>{countdown.days}d</span>
                  <Dot />
                </>
              )}

              <span>{countdown.hours}h</span>
              <Dot />

              <span>{countdown.minutes}m</span>
              <Dot />

              <span>{countdown.seconds}s</span>
            </p>
          )}

        {(vowStatus === "fulfilled" || vowStatus === "not-fulfilled") &&
          vowDeadlineTimestampUTC &&
          currentTimestampUTC &&
          vowResolution && (
            <p className="text-accent">{`Resolved on ${new Date(
              vowResolution.resolutionTimestamp,
            ).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}`}</p>
          )}

        {vowDeadlineTimestampUTC &&
          currentTimestampUTC &&
          vowDeadlineTimestampUTC! - currentTimestampUTC! < 0 &&
          vowStatus === "waiting" && (
            <VowResolver vowId={vowId} vowTitle={vowTitle} />
          )}
      </div>
    </div>
  );
}
