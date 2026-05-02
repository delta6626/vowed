import { CREATE_VOW } from "@/constants/CREATE_VOW";
import { ChangeEvent } from "react";

export interface CreateVowFormDescriptionProps {
  vowDescription: string;
  handleVowDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CreateVowFormDescription = ({
  vowDescription,
  handleVowDescriptionChange,
}: CreateVowFormDescriptionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base-content/60">
        Description <span className="text-accent">- Optional</span>
      </p>
      <textarea
        value={vowDescription}
        onChange={handleVowDescriptionChange}
        maxLength={CREATE_VOW.MAX_VOW_DESCRIPTION_LENGTH}
        minLength={CREATE_VOW.MIN_VOW_DESCRIPTION_LENGTH}
        className="textarea resize-none w-full p-4 bg-base-200 rounded-xl border border-base-300 min-h-25 max-h-25"
        placeholder={
          "Add context, stakes or other relevant details. Viewers will see this."
        }
      />
      <p className="text-right text-accent">{`${vowDescription.length}/${CREATE_VOW.MAX_VOW_DESCRIPTION_LENGTH}`}</p>
    </div>
  );
};
