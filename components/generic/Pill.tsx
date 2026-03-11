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
        "px-4 py-2 bg-base-200 w-fit rounded-full text-accent text-sm font-semibold border border-base-300";
      break;
    case "waiting":
      style =
        "px-4 py-2 bg-primary/20 rounded-full text-sm font-semibold text-primary";
      break;
    case "moment-of-truth":
      style =
        "px-4 py-2 bg-secondary/20 rounded-full text-sm font-semibold text-secondary";
      break;
    case "fulfilled":
      style =
        "px-4 py-2 bg-success/20 rounded-full text-sm font-semibold text-success";
      break;
    case "not-fulfilled":
      style =
        "px-4 py-2 bg-error/20 rounded-full text-sm font-semibold text-error";
      break;
  }

  return (
    <div className={`flex items-center gap-2 ${style} ${className}`}>
      {icon}
      {text}
    </div>
  );
}
