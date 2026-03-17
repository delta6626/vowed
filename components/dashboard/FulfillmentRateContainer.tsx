import { getFulfillmentRate } from "@/utils/data/vows";
import DashboardStatBox from "../generic/DashboardStatBox";
import { currentUser } from "@clerk/nextjs/server";

export default async function FulfillmentRateContainer() {
  const user = (await currentUser())!;
  let fulfillmentRate = 0;

  try {
    fulfillmentRate = await getFulfillmentRate(user.id)();
  } catch (error) {
    console.error(error);
  }
  return (
    <DashboardStatBox
      statBoxType="fulfillment"
      mainText={`${fulfillmentRate}%`}
    />
  );
}
