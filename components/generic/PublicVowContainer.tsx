import { PublicVowResponse } from "@/types/PublicVowResponse";
import { Eye, MessageCircle } from "lucide-react";
import Link from "next/link";

export const PublicVowContainer = ({
  vowId,
  statusFormatted,
  title,
  commentCount,
  viewCount,
  createdAt,
}: PublicVowResponse) => {
  return (
    <div className="flex justify-between font-body px-8 py-4 rounded-2xl border border-base-300 bg-base-200">
      <div className="flex flex-col gap-4 justify-between">
        <Link href={`/v/${vowId}`} className="text-base-content/70">
          {title}
        </Link>
        <div className="text-base flex gap-4 items-center text-accent">
          <div className="flex gap-2 items-center">
            <Eye size={20} />
            <p>{viewCount ?? 0}</p>
          </div>

          <div className="flex gap-2 items-center">
            <MessageCircle size={20} />
            <p>{commentCount ?? 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
