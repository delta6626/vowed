"use client";

import { useVowManagerTab } from "@/hooks/useVowManagerTab";

export type VowManagerTab = "active" | "moment-of-truth" | "resolved";

export const VowManagerTabs = () => {
  const { activeTab, setActiveTab } = useVowManagerTab();

  return (
    <div className="bg-base-200 rounded-xl border border-base-300 w-fit p-2 flex gap-2">
      <button
        onClick={() => {
          setActiveTab("active");
        }}
        className={`btn ${activeTab === "active" ? "btn-primary" : "text-accent"}`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setActiveTab("moment-of-truth");
        }}
        className={`btn ${activeTab === "moment-of-truth" ? "btn-primary" : "text-accent"}`}
      >
        Moment of truth
      </button>
      <button
        onClick={() => {
          setActiveTab("resolved");
        }}
        className={`btn ${activeTab === "resolved" ? "btn-primary" : "text-accent"}`}
      >
        Resolved
      </button>
    </div>
  );
};
