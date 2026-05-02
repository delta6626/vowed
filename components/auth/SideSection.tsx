import { Dot } from "lucide-react";
import Logo from "../navigation/Logo";
import SideSectionContent from "./SideSectionContent";

export default function SideSection() {
  return (
    <div className="flex flex-col justify-between paddingContainer py-4 w-full h-screen bg-base-100 gradientBottomLeft">
      <Logo className="text-3xl" />
      <SideSectionContent />

      <div className="flex items-center">
        <Logo className="text-lg" />
        <Dot className="text-accent" size={20} />
        <p className="text-accent font-display">
          Public commitments - permanently on record.
        </p>
      </div>
    </div>
  );
}
