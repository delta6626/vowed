"use client";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardStatsLoading } from "@/components/dashboard/DashboardStatsLoading";
import { VowManager } from "@/components/dashboard/VowManager";
import Navbar from "@/components/navigation/Navbar";
import { QUERY_KEYS } from "@/constants/QUERY_KEYS";
import { User } from "@/types/User";
import { getGreeting } from "@/utils/functions/getGreeting";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function Dashboard() {
  const {
    data: user,
    isLoading: userLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.USER_PROFILE],
    queryFn: async () => {
      const res = await fetch("/api/user");
      if (!res.ok) {
        throw new Error("Failed to fetch user.");
      }
      return res.json() as Promise<User>;
    },
  });

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="doublePaddingContainer">
        <div className="flex items-center justify-between mt-16">
          <div>
            <h1 className="font-display text-4xl">
              {getGreeting() + ", "}
              <span className="text-primary italic">
                {user?.displayName.split(" ")[0]}.
              </span>
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

        <DashboardStats />
        <VowManager />
      </div>
    </div>
  );
}
