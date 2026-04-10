export interface VowResolvedProps {
  resolutionTimestamp: number;
  resolutionNote: string;
}

export const VowResolved = ({
  resolutionTimestamp,
  resolutionNote,
}: VowResolvedProps) => {
  return (
    <div className="bg-base-200 w-full p-8 border border-success/10 rounded-2xl bg-radial-[at_50%_75%] from-success/50 via-success/20 to-success/10 to-90%">
      <h1 className="text-4xl font-display text-center">Vow fulfilled.</h1>
    </div>
  );
};
