import { useVowManagerTab } from "@/hooks/useVowManagerTab";
import { Vow } from "@/types/Vow";
import BasicVowContainer from "../generic/BasicVowContainer";

export interface VowListProps {
  vows: Vow[];
}

export const VowList = ({ vows }: VowListProps) => {
  const { activeTab } = useVowManagerTab();

  const activeVows = vows.filter((vow) => vow.status === "waiting");

  const momentOfTruthVows = vows.filter(
    (vow) => vow.status === "moment-of-truth",
  );
  const resolvedVows = vows.filter(
    (vow) => vow.status === "fulfilled" || vow.status == "not-fulfilled",
  );

  console.log(activeVows);

  if (activeTab === "active") {
    return (
      <div>
        {activeVows.map((vow) => {
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
      </div>
    );
  }
};
