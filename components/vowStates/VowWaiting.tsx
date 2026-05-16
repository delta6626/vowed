import { getCountdown } from "@/utils/functions/getCountdown";
import { getElapsedTime } from "@/utils/functions/getElapsedTime";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";

export interface VowWaitingProps {
  initialCurrentTimestampUTC: number;
  deadlineTimestampUTC: number;
}

export const VowWaiting = ({
  initialCurrentTimestampUTC,
  deadlineTimestampUTC,
}: VowWaitingProps) => {
  const [currentTimestampUTC, setCurrentTimestampUTC] = useState<number>();

  const countdown = currentTimestampUTC
    ? getCountdown(deadlineTimestampUTC, currentTimestampUTC)
    : undefined;

  const tPlus =
    countdown === "DEADLINE_PASSED" &&
    currentTimestampUTC &&
    getElapsedTime(currentTimestampUTC, deadlineTimestampUTC);

  useEffect(() => {
    if (initialCurrentTimestampUTC !== undefined) {
      setCurrentTimestampUTC(initialCurrentTimestampUTC);
    }
  }, [initialCurrentTimestampUTC]);

  useEffect(() => {
    if (!currentTimestampUTC) return;
    const timeSyncInterval = setInterval(() => {
      setCurrentTimestampUTC((prev) => prev! + 1000);
    }, 1000);

    return () => clearInterval(timeSyncInterval);
  }, [currentTimestampUTC === undefined]);

  if (countdown === undefined) {
    return <div></div>;
  }

  if (countdown === "DEADLINE_PASSED") {
    return (
      <div className="bg-base-200 w-full p-8 border border-secondary/10 rounded-2xl bg-radial-[at_50%_75%] from-secondary/50 via-secondary/20 to-secondary/10 to-90%">
        <h1 className="text-center font-medium text-4xl font-display">
          The deadline has passed
        </h1>

        {tPlus != "DEADLINE_NOT_PASSED" && tPlus && (
          <p className="mt-8 text-base-content/80 flex items-center gap-4 w-full justify-center text-xl font-mono tabular-nums">
            {tPlus.years !== 0 && (
              <>
                <span>{tPlus.years}y</span>
                <Dot />
              </>
            )}

            {tPlus.days !== 0 && (
              <>
                <span>{tPlus.days}d</span>
                <Dot />
              </>
            )}

            <span>{tPlus.hours}h</span>
            <Dot />

            <span>{tPlus.minutes}m</span>
            <Dot />

            <span>{tPlus.seconds}s</span>

            <span className="">since deadline</span>
          </p>
        )}

        <p className="text-base-content/80 text-center">
          {`Was due on ${new Date(deadlineTimestampUTC).toLocaleString(
            "en-US",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            },
          )}`}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-base-200 w-full p-8 border border-primary/10 rounded-2xl bg-radial-[at_50%_75%] from-primary/50 via-primary/30 to-primary/10 to-90%">
      <h1 className="text-center uppercase font-medium text-base-content/80">
        Time remaining
      </h1>

      <p className="mt-4 flex flex-wrap items-center gap-2 md:gap-4 w-full justify-center text-4xl md:text-5xl font-mono tabular-nums">
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

      <p className="mt-4 text-base-content/80 text-center font-medium">
        {`Due ${new Date(deadlineTimestampUTC).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}`}
      </p>
    </div>
  );
};
