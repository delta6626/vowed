"use client";

import Pill, { PillVariant } from "@/components/generic/Pill";
import { VowCommentForm } from "@/components/vowComments/VowCommentForm";
import { VowCommentsCollection } from "@/components/vowComments/VowCommentsCollection";
import { VowResolved } from "@/components/vowStates/VowResolved";
import { VowWaiting } from "@/components/vowStates/VowWaiting";
import { VowLoading } from "@/components/loading-skeletons/VowLoading";
import Navbar from "@/components/navigation/Navbar";
import { GetVowResponse } from "@/types/GetVowRespsonse";
import type { Vow } from "@/types/Vow";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Check, Dot, Eye, MessageCircle, X } from "lucide-react";
import { useParams } from "next/navigation";
import { GenericModal } from "@/components/generic/GenericModal";
import Link from "next/link";

export default function Vow() {
  const params = useParams();

  const {
    data: vowResponse,
    isLoading,
    isError,
    error,
    refetch,
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
    staleTime: 3 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
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
    return (
      <div className="w-screen h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-col flex-1 font-body items-center justify-center paddingContainer w-screen">
          <p className="flex items-center gap-2 text-xl">
            <AlertCircle size={20} className="text-error" /> Something went
            wrong.
          </p>

          <p className="text-accent text-center">
            An error occured while trying to fetch this vow.
            <br></br>
            {error?.name === "404" ? "Vow does not exist." : ""}
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
    <div className="flex flex-col w-screen h-screen overflow-x-hidden">
      <GenericModal />
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>

      <div className="w-full h-full doublePaddingContainer mt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <Pill
            variant={pillVariant}
            text={vowResponse.vowStatusFormatted}
            className="w-fit"
            icon={pillIcon}
          />

          {vowStatus != "waiting" && (
            <p className="text-accent">{`Was due ${new Date(
              vowResponse.vowDeadlineTimestampUTC,
            ).toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}`}</p>
          )}
        </div>

        <div>
          <h1 className="text-4xl mt-8 font-display">{vowResponse.vowTitle}</h1>
          <p className="text-lg text-base-content/80 mt-2">
            {vowResponse.vowDescription ?? "No description provided."}
          </p>
        </div>

        <Link
          href={`../u/${vowResponse.vowCreatorId}`}
          className="w-full flex gap-2 mt-8"
        >
          <img
            className="w-7 h-7 rounded-full"
            src={vowResponse.vowCreatorProfilePhoto}
            alt="Vow creator's profile photo"
          />

          <p className="font-medium flex flex-wrap items-center">
            {vowResponse.vowCreatorName}{" "}
            <Dot className="text-accent" size={20} />
            <span className="text-accent ">
              {`${vowResponse.vowCreatorFulfillmentRate}% Fulfillment rate`}
            </span>
          </p>
        </Link>

        <div className="mt-8">
          {vowStatus === "waiting" ? (
            <VowWaiting
              initialCurrentTimestampUTC={vowResponse.currentTimestampUTC}
              deadlineTimestampUTC={vowResponse.vowDeadlineTimestampUTC}
            />
          ) : (
            <VowResolved
              vowStatus={vowResponse.vowStatus}
              resolutionTimestamp={
                vowResponse.vowResolution!.resolutionTimestamp
              }
              resolutionNote={vowResponse.vowResolution!.resolutionNote}
            />
          )}
        </div>

        <div className="flex items-center flex-wrap gap-4 mt-4 text-accent sm:hidden">
          <span>{`${vowResponse.vowViewCount} views`}</span>
          <Dot size={20} className="text-accent" />
          <span>{`${vowResponse.vowCommentCount} comments`}</span>
        </div>

        <div className="hidden sm:flex items-center gap-8 justify-center rounded-2xl mt-4 bg-base-200 border border-base-300 w-full p-4">
          <div className="text-accent flex items-center gap-2">
            <Eye size={20} />
            <span className="text-base-content/80 font-medium">
              {vowResponse.vowViewCount}
            </span>
            viewers
          </div>

          <div className="h-6 border-[0.5px] border-base-300"></div>

          <div className="text-accent flex items-center gap-2">
            <MessageCircle size={20} />
            <span className="text-base-content/80 font-medium">
              {vowResponse.vowCommentCount}
            </span>
            comments
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-8 pb-8">
          <h1 className="font-medium text-lg text-accent">Comments</h1>
          {vowStatus === "waiting" && (
            <VowCommentForm vowId={vowResponse.vowId} />
          )}
          <VowCommentsCollection commentsCollection={vowResponse.vowComments} />
        </div>
      </div>
    </div>
  );
}
