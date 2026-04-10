"use client";

import Pill, { PillVariant } from "@/components/generic/Pill";
import { VowResolved } from "@/components/generic/VowResolved";
import { VowWaiting } from "@/components/generic/VowWaiting";
import { VowLoading } from "@/components/loading-skeletons/VowLoading";
import Navbar from "@/components/navigation/Navbar";
import { GetVowResponse } from "@/types/GetVowRespsonse";
import type { Vow } from "@/types/Vow";
import { useQuery } from "@tanstack/react-query";
import { Check, Dot, X } from "lucide-react";
import { useParams } from "next/navigation";

export default function Vow() {
  const params = useParams();

  const {
    data: vowResponse,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`vow-${params.id}`],
    queryFn: async () => {
      const res = await fetch(`/api/vows/${params.id}`);

      if (!res.ok) {
        const error = new Error("Failed to fetch this vow.");
        error.name = res.status.toString();
        throw error;
      }

      return res.json() as Promise<GetVowResponse>;
    },
    retry: 3,
  });

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <VowLoading />
      </div>
    );
  }

  if (isError || !vowResponse) {
    return; // TO DO: Show error component
  }

  const vowStatus = vowResponse.vowStatus;
  const pillVariant: PillVariant =
    vowStatus === "waiting"
      ? vowResponse.vowDeadlineTimestampUTC > vowResponse.currentTimestampUTC
        ? "primary"
        : vowResponse.vowDeadlineTimestampUTC < vowResponse.currentTimestampUTC
          ? "secondary"
          : "primary" // optional fallback if x === y
      : vowStatus === "fulfilled"
        ? "success"
        : "error";
  const pillIcon =
    vowStatus === "not-fulfilled" ? (
      <X className="text-error" size={20} />
    ) : vowStatus === "fulfilled" ? (
      <Check className="text-success" size={20} />
    ) : (
      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    );

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>

      <div className="w-full h-full doublePaddingContainer mt-16">
        <div className="flex items-center gap-4">
          <Pill
            variant={pillVariant}
            text={vowResponse.vowStatusFormatted}
            className="w-fit"
            icon={pillIcon}
          />

          {vowStatus != "waiting" && (
            <p className="text-accent">{`Resolved on ${new Date(
              vowResponse.vowResolution!.resolutionTimestamp,
            ).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}`}</p>
          )}
        </div>

        <div>
          <h1 className="text-4xl mt-8 font-display">{vowResponse.vowTitle}</h1>
          <p className="text-lg text-base-content/80 mt-2">
            {vowResponse.vowDescription ?? "No description provided."}
          </p>
        </div>

        <div className="flex gap-2 mt-8">
          <img
            className="w-7 h-7 rounded-full"
            src={vowResponse.vowCreatorProfilePhoto}
            alt="Vow creator's profile photo"
          />

          <p className="font-medium flex items-center">
            {vowResponse.vowCreatorName}{" "}
            <Dot className="text-accent" size={20} />
            <span className="text-accent">
              {`${vowResponse.vowCreatorFulfillmentRate}% Fulfillment rate`}
            </span>
          </p>
        </div>

        <div className="mt-8">
          {vowStatus === "waiting" ? (
            <VowWaiting
              initialCurrentTimestampUTC={vowResponse.currentTimestampUTC}
              deadlineTimestampUTC={vowResponse.vowDeadlineTimestampUTC}
            />
          ) : (
            <VowResolved
              resolutionTimestamp={
                vowResponse.vowResolution!.resolutionTimestamp
              }
              resolutionNote={vowResponse.vowResolution!.resolutionNote}
            />
          )}
        </div>
      </div>
    </div>
  );
}
