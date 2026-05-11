import { User } from "@/types/User";
import DashboardStatBox from "./DashboardStatBox";

export const DashboardStats = ({
  vowsWaiting,
  vowsFulfilled,
  vowsCreated,
}: Pick<User, "vowsWaiting" | "vowsFulfilled" | "vowsCreated">) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-8">
      <DashboardStatBox statBoxType={"waiting"} mainText={vowsWaiting} />
      <DashboardStatBox statBoxType={"total"} mainText={vowsCreated} />
      <DashboardStatBox
        statBoxType={"fulfillment"}
        mainText={`${vowsCreated === 0 ? 0 : Math.round((vowsFulfilled / vowsCreated) * 100)}%`}
      />
    </div>
  );
};
