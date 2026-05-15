import { Vow } from "@/types/Vow";
import Pill from "../generic/Pill";
import { PRODUCT } from "@/constants/PRODUCT";

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
    <div className="w-full p-4 bg-base-200 rounded-xl flex flex-col border border-base-300">
      <div className="flex flex-col gap-2 min-w-0">
        <Pill
          text="Waiting"
          variant="primary"
          className="w-fit"
          icon={
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          }
        ></Pill>

        <h1
          className={`font-display text-lg italic line-clamp-2 wrap-break-word ${!title ? "text-base-content/60" : ""}`}
        >
          {title ? title : "Your vow will appear here.."}
        </h1>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-accent text-sm">
          {deadlineDate && deadlineTime && (
            <>
              Due{" "}
              <span className="font-semibold text-base-content/90">{`${formattedDate} at ${formattedTime}`}</span>
            </>
          )}

          {(!deadlineDate || !deadlineTime) && "Set a deadline above"}
        </p>
        <kbd className="text-accent">{`${PRODUCT.BASE_URL}/v/..`}</kbd>
      </div>
    </div>
  );
};
