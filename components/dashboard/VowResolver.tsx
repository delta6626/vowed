import { MODALS } from "@/constants/MODALS";
import { useSelectedVowIdStore } from "@/store/selectedVowIdStore";
import { openModal } from "@/utils/functions/modalActions";
import { ArrowRight } from "lucide-react";

export interface VowResolverProps {
  vowId: string;
  vowTitle: string;
}

export const VowResolver = ({ vowId }: VowResolverProps) => {
  const { setVowId } = useSelectedVowIdStore();

  const handleResolveButtonClick = () => {
    setVowId(vowId);
    openModal(MODALS.RESOLVE_VOW_MODAL.ID);
  };

  return (
    <button className="btn btn-secondary" onClick={handleResolveButtonClick}>
      Resolve <ArrowRight size={20} />
    </button>
  );
};
