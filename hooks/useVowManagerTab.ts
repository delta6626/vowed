import { VowManagerTab } from "@/components/dashboard/VowManagerTabs";
import { useState } from "react";

export const useVowManagerTab = () => {
  const [activeTab, setActiveTab] = useState<VowManagerTab>("active");
  return { activeTab, setActiveTab };
};
