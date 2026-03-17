import { NEXT_TAGS } from "@/constants/NEXT_TAGS";
import DashboardStatBox from "../generic/DashboardStatBox";

export default async function ActiveVowsContainer() {
  const req = await fetch("api/user/vow-count", {
    next: { tags: [NEXT_TAGS.DASHBOARD_STATS] },
  });
  const res = await req.json();

  const activeVows = res.activeVowCount;

  return <DashboardStatBox statBoxType="active" mainText={activeVows} />;
}
