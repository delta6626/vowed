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

  return <div className="w-full h-20 border border-base-300 rounded-xl"></div>;
};
