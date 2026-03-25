import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardStatsLoading } from "@/components/dashboard/DashboardStatsLoading";
import { VowManager } from "@/components/dashboard/VowManager";
import Navbar from "@/components/navigation/Navbar";
import { getGreeting } from "@/utils/functions/getGreeting";
import { currentUser } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Dashboard() {
  const user = (await currentUser())!;

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="doublePaddingContainer">
        <div className="flex items-center justify-between mt-16">
          <div>
            <h1 className="font-display text-4xl">
              {getGreeting() + ", "}
              <span className="text-primary italic">{user.firstName}.</span>
            </h1>

            <p className="font-body text-accent text-xl mt-2">
              {" Here's where your vows stand today."}
            </p>
          </div>

          <Link className="btn btn-primary" href={"/create"}>
            <Plus size={20} />
            New vow
          </Link>
        </div>

        <Suspense fallback={<DashboardStatsLoading />}>
          <DashboardStats />
        </Suspense>

        <VowManager />
      </div>
    </div>
  );
}
