import { User } from "@/types/User";
import DashboardStatBox from "../generic/DashboardStatBox";

export const DashboardStats = ({
  vowsWaiting,
  vowsFulfilled,
  vowsCreated,
}: Pick<User, "vowsWaiting" | "vowsFulfilled" | "vowsCreated">) => {
  return (
    <div className="flex gap-4 mt-8">
      <DashboardStatBox statBoxType={"waiting"} mainText={vowsWaiting} />
      <DashboardStatBox
        statBoxType={"fulfillment"}
        mainText={`${vowsCreated === 0 ? 0 : (vowsFulfilled / vowsCreated) * 100}%`}
      />
      <DashboardStatBox statBoxType={"total"} mainText={vowsCreated} />
    </div>
  );
};
