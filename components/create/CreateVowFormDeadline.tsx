import { CREATE_VOW } from "@/constants/CREATE_VOW";
import { ChangeEvent, useEffect, useState } from "react";

export interface CreateVowFormDeadlineProps {
  vowDeadlineDate: string;
  vowDeadlineTime: string;
  handleVowDeadlineDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleVowDeadlineTimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CreateVowFormDeadline = ({
  vowDeadlineDate,
  vowDeadlineTime,
  handleVowDeadlineDateChange,
  handleVowDeadlineTimeChange,
}: CreateVowFormDeadlineProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const minDate = `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, "0")}-${currentTime.getDate().toString().padStart(2, "0")}`;
  const minTimeDate = new Date(
    currentTime.getTime() +
      CREATE_VOW.MINIMUM_DEADLINE_TIME_MINUTES * 60 * 1000,
  ); // Push the time ahead by MIN_DEADLINE_TIME_MINUTES minutes;
  const minTime = `${minTimeDate.getHours().toString().padStart(2, "0")}:${minTimeDate.getMinutes().toString().padStart(2, "0")}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60); // every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-base-content/80">
        Deadline
        <span className="text-accent">
          {" "}
          - {CREATE_VOW.MINIMUM_DEADLINE_TIME_MINUTES} minutes from now, at
          least
        </span>
      </p>
      <div className="flex gap-2">
        <input
          required={true}
          min={minDate}
          value={vowDeadlineDate}
          onChange={handleVowDeadlineDateChange}
          type={"date"}
          className="input px-4 py-8 bg-base-200 w-full rounded-xl border border-base-300"
        />
        <input
          required={true}
          min={vowDeadlineDate === minDate ? minTime : undefined}
          value={vowDeadlineTime}
          onChange={handleVowDeadlineTimeChange}
          type={"time"}
          className="input px-4 py-8 bg-base-200 w-full rounded-xl border border-base-300"
        />
      </div>
    </div>
  );
};
