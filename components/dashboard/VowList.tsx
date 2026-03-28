import { Vow } from "@/types/Vow";
import BasicVowContainer from "../generic/BasicVowContainer";
import { VowManagerTab } from "./VowManager";

export interface VowListProps {
  vows: Vow[];
  activeTab: VowManagerTab;
  currentTimestampUTC: number;
}

export const VowList = ({
  vows,
  activeTab,
  currentTimestampUTC,
}: VowListProps) => {
  const activeVows = vows.filter((vow) => vow.status === "waiting");

  const momentOfTruthVows = vows.filter(
    (vow) => vow.deadlineTimestampUTC - currentTimestampUTC < 0,
  );
  const resolvedVows = vows.filter(
    (vow) => vow.status === "fulfilled" || vow.status == "not-fulfilled",
  );

  if (activeTab === "active") {
    return (
      <div className="flex flex-col gap-2">
        {activeVows.length != 0 &&
          activeVows.map((vow) => {
            return (
              <BasicVowContainer
                key={vow.vowId}
                vowText={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
                vowDeadlineTimestampUTC={vow.deadlineTimestampUTC}
                currentTimestampUTC={currentTimestampUTC}
                className="text-xl"
              />
            );
          })}

        {activeVows.length === 0 && (
          <p className="w-full text-accent text-center">
            No vows to show here.
          </p>
        )}
      </div>
    );
  }

  if (activeTab === "moment-of-truth") {
    return (
      <div className="flex flex-col gap-2">
        {momentOfTruthVows.length != 0 &&
          momentOfTruthVows.map((vow) => {
            return (
              <BasicVowContainer
                key={vow.vowId}
                vowText={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
                vowDeadlineTimestampUTC={vow.deadlineTimestampUTC}
                currentTimestampUTC={currentTimestampUTC}
                className="text-xl"
              />
            );
          })}

        {momentOfTruthVows.length === 0 && (
          <p className="w-full text-accent text-center">
            No vows to show here.
          </p>
        )}
      </div>
    );
  }

  if (activeTab === "resolved") {
    return (
      <div className="flex flex-col gap-2">
        {resolvedVows.length != 0 &&
          resolvedVows.map((vow) => {
            return (
              <BasicVowContainer
                key={vow.vowId}
                vowText={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
                vowDeadlineTimestampUTC={vow.deadlineTimestampUTC}
                currentTimestampUTC={currentTimestampUTC}
                vowResolution={vow.resolution ?? undefined}
                className="text-xl"
              />
            );
          })}

        {resolvedVows.length === 0 && (
          <p className="w-full text-accent text-center">
            No vows to show here.
          </p>
        )}
      </div>
    );
  }
};
