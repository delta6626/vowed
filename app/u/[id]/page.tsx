"use client";

import { UserLoading } from "@/components/loading-skeletons/UserLoading";
import Navbar from "@/components/navigation/Navbar";
import { GetRequestedUserResponse } from "@/types/GetRequestedUserResponse";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function UserProfile() {
  const params = useParams();

  const {
    data: requestedUserResponse,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`user-${params.id}`],
    queryFn: async () => {
      const res = await fetch(`/api/user/${params.id}`);

      if (!res.ok) {
        const error = new Error("Failed to fetch this vow.");
        error.name = res.status.toString();
        throw error;
      }

      return res.json() as Promise<GetRequestedUserResponse>;
    },
    staleTime: 10 * 60 * 1000,
    refetchInterval: 60 * 60 * 1000,
    retry: 3,
  });

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <UserLoading />
      </div>
    );
  }

  if (isError || !requestedUserResponse) {
    return (
      <div className="">
        {
          // TO DO
        }
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden">
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>

      <div className="w-full h-full doublePaddingContainer mt-16">
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 rounded-full"
            src={requestedUserResponse.profilePhotoURL}
            alt="User's profile photo"
          />

          <div className="">
            <h1 className="text-3xl font-display">
              {requestedUserResponse.displayName}
            </h1>
            <p className="text-accent">{`Member since ${new Date(
              requestedUserResponse.creationTimestamp,
            ).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}`}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <div className="rounded-xl border border-base-300 bg-base-200 p-4 min-w-40 flex flex-col items-center justify-center">
            <h1 className="text-xl font-medium">
              {requestedUserResponse.totalVows}
            </h1>
            <p className="text-accent">Total vows</p>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-200 p-4 min-w-40 flex flex-col items-center justify-center">
            <h1 className="text-xl font-medium">
              {requestedUserResponse.waitingVows}
            </h1>
            <p className="text-accent">Active vows</p>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-200 p-4 min-w-40 flex flex-col items-center justify-center">
            <h1 className="text-xl font-medium">
              {requestedUserResponse.fulfilledVows}
            </h1>
            <p className="text-accent">Fulfilled vows</p>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-200 p-4 min-w-40 flex flex-col items-center justify-center">
            <h1 className="text-xl font-medium">
              {`${
                requestedUserResponse.fulfilledVows != 0 &&
                Math.round(
                  (requestedUserResponse.fulfilledVows /
                    requestedUserResponse.totalVows) *
                    100,
                )
              }%`}
            </h1>
            <p className="text-accent">Fulfillment rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
