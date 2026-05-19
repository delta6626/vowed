import { PublicVowResponse } from "@/types/PublicVowResponse";
import { Check, Eye, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import Pill from "./Pill";

export const PublicVowContainer = ({
  vowId,
  statusFormatted,
  title,
  commentCount,
  viewCount,
  createdAt,
}: PublicVowResponse) => {
  return (
    <div className="font-body px-8 py-4 rounded-2xl border border-base-300 bg-base-200">
      <div className="flex gap-4 justify-between">
        <Link href={`/v/${vowId}`} className="text-base-content/80 max-w-lg">
          {title}
        </Link>

        <Pill
          className="w-fit h-fit"
          text={statusFormatted}
          variant={
            statusFormatted === "Waiting"
              ? "primary"
              : statusFormatted === "Moment of truth"
                ? "secondary"
                : statusFormatted === "Fulfilled"
                  ? "success"
                  : "error"
          }
          icon={
            statusFormatted === "Not fulfilled" ? (
              <X className="text-error" size={20} />
            ) : statusFormatted === "Fulfilled" ? (
              <Check className="text-success" size={20} />
            ) : (
              <div
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusFormatted === "Waiting" ? "bg-primary" : "bg-secondary"}`}
              />
            )
          }
        />
      </div>

      <div className="mt-4 flex text-base justify-between text-accent">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Eye size={20} />
            <p>{viewCount ?? 0}</p>
          </div>

          <div className="flex gap-2 items-center">
            <MessageCircle size={20} />
            <p>{commentCount ?? 0}</p>
          </div>
        </div>

        <p className="text-accent">{`Vowed on ${new Date(
          createdAt,
        ).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}`}</p>
      </div>
    </div>
  );
};
