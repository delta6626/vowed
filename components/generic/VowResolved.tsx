export interface VowResolvedProps {
  resolutionTimestamp: number;
  resolutionNote: string;
}

export const VowResolved = ({
  resolutionTimestamp,
  resolutionNote,
}: VowResolvedProps) => {
  return (
    <>
      <div className="bg-base-200 w-full p-8 border border-success/10 rounded-2xl bg-radial-[at_50%_75%] from-success/50 via-success/20 to-success/10 to-90%">
        <h1 className="text-4xl font-display text-center">Vow fulfilled</h1>
        <p className="mt-4 text-base-content/80 text-center">
          {`Resolved by creator on ${new Date(
            resolutionTimestamp,
          ).toLocaleString("en-US", {
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

      {resolutionNote && (
        <div className="mt-4 bg-base-200 border border-base-300 w-full p-4 rounded-2xl">
          <h1 className="text-accent font-medium">Creator's note</h1>
          <p className="italic text-base-content/80">{resolutionNote}</p>
        </div>
      )}
    </>
  );
};
