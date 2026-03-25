"use client";

import { useEffect, useState } from "react";
import { VowManagerTabs } from "./VowManagerTabs";
import { Vow } from "@/types/Vow";
import { VowList } from "./VowList";

export type VowManagerTab = "active" | "moment-of-truth" | "resolved";

export const VowManager = () => {
  const [activeTab, setActiveTab] = useState<VowManagerTab>("active");
  const [vows, setVows] = useState<Vow[]>();

  useEffect(() => {
    const fetchVows = async () => {
      try {
        const res = await fetch("/api/vows/");
        const data = await res.json();
        setVows(data.vows as Vow[]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVows();
  }, []);

  if (!vows || vows.length === 0) {
    return <div>No vows.</div>;
  } else {
    return (
      <div>
        <VowManagerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8"></div>
        <VowList vows={vows} activeTab={activeTab} />
      </div>
    );
  }
};
