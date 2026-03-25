import { Vow } from "@/types/Vow";
import BasicVowContainer from "../generic/BasicVowContainer";
import { VowManagerTab } from "./VowManager";

export interface VowListProps {
  vows: Vow[];
  activeTab: VowManagerTab;
}

export const VowList = ({ vows, activeTab }: VowListProps) => {
  const activeVows = vows.filter((vow) => vow.status === "waiting");

  const momentOfTruthVows = vows.filter(
    (vow) => vow.status === "moment-of-truth",
  );
  const resolvedVows = vows.filter(
    (vow) => vow.status === "fulfilled" || vow.status == "not-fulfilled",
  );

  if (activeTab === "active") {
    return (
      <div>
        {activeVows.length != 0 &&
          activeVows.map((vow) => {
            return (
              <BasicVowContainer
                key={vow.vowId}
                vowText={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
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
      <div>
        {momentOfTruthVows.length != 0 &&
          momentOfTruthVows.map((vow) => {
            return (
              <BasicVowContainer
                key={vow.vowId}
                vowText={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
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
      <div>
        {resolvedVows.length != 0 &&
          resolvedVows.map((vow) => {
            return (
              <BasicVowContainer
                key={vow.vowId}
                vowText={vow.title}
                vowStatus={vow.status}
                vowViewCount={vow.viewCount}
                vowCommentCount={vow.commentCount}
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
