"use client";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardStatsLoading } from "@/components/loading-skeletons/DashboardStatsLoading";
import { ResolveVowModal } from "@/components/modals/ResolveVowModal";
import { VowManager } from "@/components/dashboard/VowManager";
import { VowManagerLoading } from "@/components/loading-skeletons/VowManagerLoading";
import Navbar from "@/components/navigation/Navbar";
import { QUERY_KEYS } from "@/constants/QUERY_KEYS";
import { User } from "@/types/User";
import { Vow } from "@/types/Vow";
import { getGreeting } from "@/utils/functions/getGreeting";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/navigation/Footer";
import { GenericModal } from "@/components/generic/GenericModal";

export default function Dashboard() {
  const {
    data: user,
    isLoading: userLoading,
    isError: userLoadingError,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEYS.USER_PROFILE],
    queryFn: async () => {
      const res = await fetch("/api/user");
      if (!res.ok) {
        throw new Error("Failed to fetch user.");
      }
      return res.json() as Promise<User>;
    },
    retry: 3,
  });

  const {
    data: vowDetails,
    isError: vowDetailsError,
    isLoading: vowDetailsLoading,
  } = useQuery({
    queryKey: [QUERY_KEYS.USER_VOWS],
    queryFn: async () => {
      const res = await fetch("/api/vows/");

      if (!res.ok) {
        throw new Error("Failed to fetch vows.");
      }

      return res.json() as Promise<{
        vows: Vow[];
        currentTimestampUTC: number;
      }>;
    },
    retry: 3,
  });

  if (userLoading || vowDetailsLoading) {
    return (
      <>
        <Navbar />
        <div className="doublePaddingContainer h-screen py-16">
          <div className="skeleton w-full h-20 rounded-xl"></div>
          <DashboardStatsLoading />
          <VowManagerLoading />
        </div>
      </>
    );
  }

  if (!user || !vowDetails || userLoadingError || vowDetailsError) {
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

          <button
            className="btn btn-primary mt-4"
            onClick={() => {
              refetch();
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <GenericModal />
      <ResolveVowModal />
      <div className="w-screen h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <div className="doublePaddingContainer">
          <div className="flex flex-col mt-16">
            <h1 className="font-display text-3xl sm:text-4xl">
              {getGreeting() + ", "}
              <span className="text-primary italic">
                {user.displayName.split(" ")[0]}.
              </span>
            </h1>

            <p className="font-body text-base-content/60 text-xl mt-2">
              {" Here's where your vows stand today."}
            </p>
          </div>

          <DashboardStats
            vowsWaiting={user.vowsWaiting}
            vowsFulfilled={user.vowsFulfilled}
            vowsCreated={user.vowsCreated}
          />

          <VowManager
            vows={vowDetails.vows}
            initialCurrentTimestampUTC={vowDetails.currentTimestampUTC}
          />
        </div>

        <div className="flex grow items-end mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}
