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
    activeVowCount = await getActiveVowCount(user.id)();
    fulfillmentRate = await getFulfillmentRate(user.id)();
    totalVows = await getTotalVows(user.id)();
  } catch (error) {
    console.error(error);
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
