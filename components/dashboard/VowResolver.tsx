import { MODALS } from "@/constants/MODALS";
import { openModal } from "@/utils/functions/modalActions";
import { ArrowRight } from "lucide-react";

export interface VowResolverProps {
  vowId: string;
}

export const VowResolver = ({ vowId }: VowResolverProps) => {
  const handleResolveButtonClick = () => {};

  return (
    <button className="btn btn-secondary" onClick={handleResolveButtonClick}>
      Resolve <ArrowRight size={20} />
    </button>
  );
};
