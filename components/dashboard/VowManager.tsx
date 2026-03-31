"use client";

import { useEffect, useState } from "react";
import { VowManagerTabs } from "./VowManagerTabs";
import { Vow } from "@/types/Vow";
import { VowList } from "./VowList";
import Link from "next/link";
import { VowManagerLoading } from "./VowManagerLoading";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/QUERY_KEYS";

export type VowManagerTab = "active" | "moment-of-truth" | "resolved";

export const VowManager = () => {
  const {
    data: vowDetails,
    isError,
    isLoading,
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
  });

  const [activeTab, setActiveTab] = useState<VowManagerTab>("active");
  const [currentTimestampUTC, setCurrentTimestampUTC] = useState<number>();

  useEffect(() => {
    if (vowDetails?.currentTimestampUTC !== undefined) {
      setCurrentTimestampUTC(vowDetails.currentTimestampUTC);
    }
  }, [vowDetails?.currentTimestampUTC]);

  useEffect(() => {
    if (!currentTimestampUTC) return;
    const timeSyncInterval = setInterval(() => {
      setCurrentTimestampUTC((prev) => prev! + 1000);
    }, 1000);

    return () => clearInterval(timeSyncInterval);
  }, [currentTimestampUTC === undefined]);

  if (!vowDetails) {
    return <VowManagerLoading />;
  } else if (vowDetails.vows.length === 0) {
    return (
      <div className="w-full text-center mt-8">
        <p className="text-accent">You have not made any vows.</p>
        <Link href={"/create"} className="btn btn-primary mt-2">
          Make your first vow
        </Link>
      </div>
    );
  } else {
    return (
      <div className="mt-8">
        <VowManagerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8"></div>
        <VowList
          vows={vowDetails.vows}
          activeTab={activeTab}
          currentTimestampUTC={currentTimestampUTC ?? 0}
        />
      </div>
    );
  }
};
