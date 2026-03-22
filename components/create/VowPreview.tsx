import { Vow } from "@/types/Vow";
import Pill from "../generic/Pill";

export type VowPreviewProps = Pick<Vow, "title"> & {
  deadlineDate: string;
  deadlineTime: string;
};

export const VowPreview = ({
  title,
  deadlineDate,
  deadlineTime,
}: VowPreviewProps) => {
  const dateTime = new Date(`${deadlineDate}T${deadlineTime}`);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="w-full p-4 bg-base-200 rounded-xl flex items-end justify-between">
      <div className="flex flex-col gap-2 min-w-0">
        <Pill
          text="Waiting"
          variant="waiting"
          className="w-fit"
          icon={
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          }
        ></Pill>

        <h1
          className={`font-display text-lg italic line-clamp-2 wrap-break-word ${!title ? "text-accent" : ""}`}
        >
          {title ? title : "Your vow will appear here.."}
        </h1>

        <p className="text-accent text-sm">
          {deadlineDate && deadlineTime && (
            <>
              Due{" "}
              <span className="font-semibold text-base-content/80">{`${formattedDate} at ${formattedTime}`}</span>
            </>
          )}

          {(!deadlineDate || !deadlineTime) && "Set a deadline above"}
        </p>
      </div>

      <kbd className="text-accent">vowed.cc/v/..</kbd>
    </div>
  );
};
