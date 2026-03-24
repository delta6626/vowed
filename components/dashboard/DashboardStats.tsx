import {
  getActiveVowCount,
  getFulfillmentRate,
  getTotalVows,
} from "@/utils/data/vows";
import { currentUser } from "@clerk/nextjs/server";
import DashboardStatBox from "../generic/DashboardStatBox";

export const DashboardStats = async () => {
  const user = (await currentUser())!;

  let activeVowCount = 0;
  let fulfillmentRate = 0;
  let totalVows = 0;

  try {
    const [activeCount, rate, total] = await Promise.all([
      getActiveVowCount(user.id),
      getFulfillmentRate(user.id),
      getTotalVows(user.id),
    ]);

    activeVowCount = activeCount;
    fulfillmentRate = rate;
    totalVows = total;
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
  }

  return (
    <div className="flex gap-4 mt-8">
      <DashboardStatBox statBoxType={"active"} mainText={activeVowCount} />
      <DashboardStatBox
        statBoxType={"fulfillment"}
        mainText={`${fulfillmentRate}%`}
      />
      <DashboardStatBox statBoxType={"total"} mainText={totalVows} />
    </div>
  );
};
