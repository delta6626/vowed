import { CREATE_VOW } from "@/constants/CREATE_VOW";
import { ChangeEvent } from "react";

export interface CreateVowFormTitleProps {
  vowTitle: string;
  handleVowTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CreateVowFormTitle = ({
  vowTitle,
  handleVowTitleChange,
}: CreateVowFormTitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base-content/80">What do you vow?</p>
      <input
        required={true}
        value={vowTitle}
        maxLength={CREATE_VOW.MAX_VOW_TITLE_LENGTH}
        minLength={CREATE_VOW.MIN_VOW_TITLE_LENGTH}
        onChange={handleVowTitleChange}
        className="input text-xl px-4 py-8 font-display w-full bg-base-200 rounded-xl border border-base-300"
        placeholder={"I will..."}
      />
      <p className="text-right text-accent">{`${vowTitle.length}/${CREATE_VOW.MAX_VOW_TITLE_LENGTH}`}</p>
    </div>
  );
};
