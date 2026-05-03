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
  const activeVows = vows
    .filter(
      (vow) =>
        vow.status === "waiting" &&
        vow.deadlineTimestampUTC - currentTimestampUTC >= 0,
    )
    .sort((a, b) => a.deadlineTimestampUTC - b.deadlineTimestampUTC);

  const momentOfTruthVows = vows
    .filter(
      (vow) =>
        vow.deadlineTimestampUTC - currentTimestampUTC < 0 &&
        vow.status === "waiting",
    )
    .sort((a, b) => a.deadlineTimestampUTC - b.deadlineTimestampUTC);

  const resolvedVows = vows
    .filter(
      (vow) => vow.status === "fulfilled" || vow.status === "not-fulfilled",
    )
    .sort(
      (a, b) =>
        b.resolution!.resolutionTimestamp - a.resolution!.resolutionTimestamp,
    );

  if (activeTab === "active") {
    return (
      <div className="flex flex-col gap-2">
        {activeVows.length != 0 &&
          activeVows.map((vow) => {
            return (
              <BasicVowContainer
                key={vow.vowId}
                vowId={vow.vowId!}
                vowTitle={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
                vowVisibility={vow.visibility}
                vowDeadlineTimestampUTC={vow.deadlineTimestampUTC}
                currentTimestampUTC={currentTimestampUTC}
                className="text-xl"
              />
            );
          })}

        {activeVows.length === 0 && (
          <p className="w-full text-base-content/60 text-center">
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
                vowId={vow.vowId!}
                vowTitle={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
                vowVisibility={vow.visibility}
                vowDeadlineTimestampUTC={vow.deadlineTimestampUTC}
                currentTimestampUTC={currentTimestampUTC}
                className="text-xl"
              />
            );
          })}

        {momentOfTruthVows.length === 0 && (
          <p className="w-full text-base-content/60 text-center">
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
                vowId={vow.vowId!}
                vowTitle={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
                vowVisibility={vow.visibility}
                vowDeadlineTimestampUTC={vow.deadlineTimestampUTC}
                currentTimestampUTC={currentTimestampUTC}
                vowResolution={vow.resolution ?? undefined}
                className="text-xl"
              />
            );
          })}

        {resolvedVows.length === 0 && (
          <p className="w-full text-base-content/60 text-center">
            No vows to show here.
          </p>
        )}
      </div>
    );
  }
};
