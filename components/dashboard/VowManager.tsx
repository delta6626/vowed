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
export interface VowManagerProps {
  vows: Vow[];
  initialCurrentTimestampUTC: number;
}

export const VowManager = ({
  vows,
  initialCurrentTimestampUTC,
}: VowManagerProps) => {
  const [activeTab, setActiveTab] = useState<VowManagerTab>("active");
  const [currentTimestampUTC, setCurrentTimestampUTC] = useState<number>();

  useEffect(() => {
    if (initialCurrentTimestampUTC !== undefined) {
      setCurrentTimestampUTC(initialCurrentTimestampUTC);
    }
  }, [initialCurrentTimestampUTC]);

  useEffect(() => {
    if (!currentTimestampUTC) return;
    const timeSyncInterval = setInterval(() => {
      setCurrentTimestampUTC((prev) => prev! + 1000);
    }, 1000);

    return () => clearInterval(timeSyncInterval);
  }, [currentTimestampUTC === undefined]);

  return (
    <div className="mt-8">
      <VowManagerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-8"></div>
      <VowList
        vows={vows}
        activeTab={activeTab}
        currentTimestampUTC={currentTimestampUTC ?? 0}
      />
    </div>
  );
};
