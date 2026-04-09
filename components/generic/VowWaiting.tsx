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
    countdown === "DEADLINE_PASSED" && currentTimestampUTC
      ? getElapsedTime(currentTimestampUTC, deadlineTimestampUTC)
      : undefined;

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
      <div className="w-full h-20 border border-base-300 rounded-2xl"></div>
    );
  }

  return (
    <div className="bg-base-200 w-full p-8 border border-base-300 rounded-2xl bg-radial-[at_50%_75%] from-primary/40 via-primary/20 to-base-200 to-90%">
      <h1 className="text-center uppercase font-medium text-accent">
        Time remaining
      </h1>

      <p className="mt-4 flex items-center gap-4 w-full justify-center text-5xl font-mono tabular-nums">
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
