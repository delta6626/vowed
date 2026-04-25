import { ReactNode } from "react";

export type PillVariant =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "generic";

export interface PillProps {
  text: string;
  icon?: ReactNode;
  className?: string;
  variant: PillVariant;
}

export default function Pill({ text, icon, className, variant }: PillProps) {
  let style: string;

  switch (variant) {
    case "primary":
      style =
        "px-4 py-2 bg-primary/20 rounded-full text-sm font-semibold text-primary";
      break;
    case "secondary":
      style =
        "px-4 py-2 bg-secondary/20 rounded-full text-sm font-semibold text-secondary";
      break;
    case "success":
      style =
        "px-4 py-2 bg-success/20 rounded-full text-sm font-semibold text-success";
      break;
    case "error":
      style =
        "px-4 py-2 bg-error/20 rounded-full text-sm font-semibold text-error";
      break;
    case "generic":
      style =
        "uppercase px-4 py-2 bg-base-200 border border-base-300 text-base-content/60 rounded-full text-sm font-semibold w-fit";
      break;
  }

  return (
    <div className={`flex items-center gap-2 ${style} ${className}`}>
      {icon}
      {text}
    </div>
  );
}
