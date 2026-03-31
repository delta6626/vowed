"use client";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardStatsLoading } from "@/components/dashboard/DashboardStatsLoading";
import { VowManager } from "@/components/dashboard/VowManager";
import Navbar from "@/components/navigation/Navbar";
import { QUERY_KEYS } from "@/constants/QUERY_KEYS";
import { User } from "@/types/User";
import { getGreeting } from "@/utils/functions/getGreeting";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function Dashboard() {
  const {
    data: user,
    isLoading: userLoading,
    isError: userLoadingError,
  } = useQuery({
    queryKey: [QUERY_KEYS.USER_PROFILE],
    queryFn: async () => {
      const res = await fetch("/api/user1");
      if (!res.ok) {
        throw new Error("Failed to fetch user.");
      }
      return res.json() as Promise<User>;
    },
    retry: 3,
  });

  if (userLoading) {
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

  if (userLoadingError) {
    return (
      <div className="w-screen h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-col flex-1 font-body items-center justify-center paddingContainer w-screen">
          <p className="flex items-center gap-2 text-xl">
            <AlertCircle size={20} className="text-error" /> Something went
            wrong.
          </p>

          <p className="text-accent text-center">
            An error occured while trying to load your profile.
            <br></br>
            {userLoadingError}
          </p>
        </div>
      </div>
    );
  }

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
