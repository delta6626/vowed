import { DashboardStatsLoading } from "@/components/dashboard/DashboardStatsLoading";
import Navbar from "@/components/navigation/Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="doublePaddingContainer py-16">
        <div className="skeleton w-full h-20 rounded-xl"></div>
        <DashboardStatsLoading />
      </div>
    </>
  );
}
