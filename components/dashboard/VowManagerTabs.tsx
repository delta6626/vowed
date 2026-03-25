"use client";

export type VowManagerTab = "active" | "moment-of-truth" | "resolved";

export const VowManagerTabs = () => {
  return (
    <div className="bg-base-200 rounded-xl border border-base-100 w-fit p-2">
      <button className="btn">Active</button>
      <button className="btn">Moment of truth</button>
      <button className="btn">Resolved</button>
    </div>
  );
};
