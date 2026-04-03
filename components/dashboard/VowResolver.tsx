import { MODALS } from "@/constants/MODALS";
import { useSelectedVowStore } from "@/store/selectedVowStore";
import { openModal } from "@/utils/functions/modalActions";
import { ArrowRight } from "lucide-react";

export interface VowResolverProps {
  vowId: string;
  vowTitle: string;
}

export const VowResolver = ({ vowId, vowTitle }: VowResolverProps) => {
  const { setVowDetails } = useSelectedVowStore();

  const handleResolveButtonClick = () => {
    setVowDetails({ vowId: vowId, vowTitle: vowTitle });
    openModal(MODALS.RESOLVE_VOW_MODAL.ID);
  };

  return (
    <button className="btn btn-secondary" onClick={handleResolveButtonClick}>
      Resolve <ArrowRight size={20} />
    </button>
  );
};
