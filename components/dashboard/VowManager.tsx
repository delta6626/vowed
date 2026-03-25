"use client";

import { useEffect, useState } from "react";
import { VowManagerTabs } from "./VowManagerTabs";
import { Vow } from "@/types/Vow";

export const VowManager = () => {
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

  return (
    <div>
      <VowManagerTabs />
      <div className="mt-8"></div>
    </div>
  );
};
