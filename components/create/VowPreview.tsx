import { Vow } from "@/types/Vow";

export type VowPreviewProps = Pick<Vow, "title"> & {
  deadlineDate: string;
  deadlineTime: string;
};

export const VowPreview = ({ title }: VowPreviewProps) => {
  return <div></div>;
};
