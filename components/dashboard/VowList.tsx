import { useVowManagerTab } from "@/hooks/useVowManagerTab";
import { Vow } from "@/types/Vow";

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

  if (activeTab === "active") {
    return <div></div>;
  }
};
