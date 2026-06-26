import { User } from "@/types/User";
import DashboardStatBox from "./DashboardStatBox";
import Link from "next/link";

export const DashboardStats = ({
  vowsWaiting,
  vowsFulfilled,
  vowsCreated,
}: Pick<User, "vowsWaiting" | "vowsFulfilled" | "vowsCreated">) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-8">
      <Link className="xs:hidden btn btn-primary w-full" href={"/create"}>
        Make a vow
      </Link>
      <DashboardStatBox statBoxType={"waiting"} mainText={vowsWaiting} />
      <DashboardStatBox statBoxType={"total"} mainText={vowsCreated} />
      <DashboardStatBox
        statBoxType={"fulfillment"}
        mainText={`${vowsCreated === 0 ? 0 : Math.round((vowsFulfilled / vowsCreated) * 100)}%`}
      />
    </div>
  );
};
