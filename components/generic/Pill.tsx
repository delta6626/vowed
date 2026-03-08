"use client";

import { VowStatus } from "@/types/VowStatus";
import { ReactNode } from "react";

export interface PillProps {
  text: string;
  variant: "generic" | VowStatus;
  icon?: ReactNode;
  className?: string;
}

export default function Pill({ text, variant, icon, className }: PillProps) {
  let style: string;

  switch (variant) {
    case "generic":
      style =
        "px-4 py-2 bg-base-200 w-fit rounded-full text-accent font-bold border border-base-300";
      break;
    case "waiting":
      style = "";
      break;
    case "moment-of-truth":
      style = "";
      break;
    case "fulfilled":
      style = "";
      break;
    case "not-fulfilled":
      style = "";
      break;
  }

  return (
    <div className={`flex items-center gap-2 ${style} ${className}`}>
      {icon}
      {text}
    </div>
  );
}
