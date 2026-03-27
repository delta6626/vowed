"use client";

import { useEffect, useState } from "react";
import { VowManagerTabs } from "./VowManagerTabs";
import { Vow } from "@/types/Vow";
import { VowList } from "./VowList";
import Link from "next/link";
import { VowManagerLoading } from "./VowManagerLoading";

export type VowManagerTab = "active" | "moment-of-truth" | "resolved";

export const VowManager = () => {
  const [activeTab, setActiveTab] = useState<VowManagerTab>("active");
  const [vows, setVows] = useState<Vow[]>();
  const [currentTimestampUTC, setCurrentTimestampUTC] = useState<number>();

  useEffect(() => {
    const fetchVows = async () => {
      try {
        const res = await fetch("/api/vows/");
        const data = await res.json();
        setVows(data.vows as Vow[]);
        setCurrentTimestampUTC(data.currentTimestampUTC as number);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVows();
  }, []);

  useEffect(() => {
    if (!currentTimestampUTC) return;
    const timeSyncInterval = setInterval(() => {
      setCurrentTimestampUTC((prev) => prev! + 1000);
    }, 1000);

    return () => clearInterval(timeSyncInterval);
  }, [currentTimestampUTC === undefined]);

  if (!vows) {
    return <VowManagerLoading />;
  } else if (vows.length === 0) {
    return (
      <div className="w-full text-center">
        <p className="text-accent">You have not made any vows.</p>
        <Link href={"/create"} className="btn btn-primary">
          Make your first vow
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <VowManagerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8"></div>
        <VowList
          vows={vows}
          activeTab={activeTab}
          currentTimestampUTC={currentTimestampUTC ?? 0}
        />
      </div>
    );
  }
};
