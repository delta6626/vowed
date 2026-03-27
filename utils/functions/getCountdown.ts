export const getCountdown = (
  deadlineTimestampUTC: number,
  currentTimestampUTC: number,
) => {
  const difference = deadlineTimestampUTC - currentTimestampUTC;

  if (difference < 0) return "DEADLINE_PASSED";

  const totalSeconds = Math.floor(difference / 1000);

  const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
  const days = Math.floor(
    (totalSeconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60),
  );
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    years,
    days,
    hours,
    minutes,
    seconds,
  };
};
