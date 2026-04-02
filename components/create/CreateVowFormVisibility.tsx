import { VowVisibility } from "@/types/VowVisibility";
import { Globe, Link, Lock } from "lucide-react";

export interface CreateVowFormVisibilityProps {
  vowVisibility: VowVisibility;
  setVowVisibility: (visibility: VowVisibility) => void;
}

export const CreateVowFormVisibility = ({
  vowVisibility,
  setVowVisibility,
}: CreateVowFormVisibilityProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base-content/80">Visibility</p>
      <div className="flex gap-2">
        <button
          type={"button"}
          className={`flex items-center gap-4 px-4 py-8 rounded-xl w-full border border-base-300 text-left hover:border hover:border-primary/20 ${vowVisibility === "public" ? "bg-primary/20 border border-primary/20" : "bg-base-200"}`}
          onClick={() => {
            setVowVisibility("public");
          }}
        >
          <Globe size={20} />
          <p>
            Public
            <br />
            <span className="text-accent">Visible to all</span>
          </p>
        </button>

        <button
          type={"button"}
          className={`flex items-center gap-4 px-4 py-8 rounded-xl w-full border border-base-300 text-left hover:border hover:border-primary/20 ${vowVisibility === "unlisted" ? "bg-primary/20 border border-primary/20" : "bg-base-200"}`}
          onClick={() => {
            setVowVisibility("unlisted");
          }}
        >
          <Link size={20} />
          <p>
            Unlisted
            <br />
            <span className="text-accent">Link access only</span>
          </p>
        </button>

        <button
          type={"button"}
          className={`flex items-center gap-4 px-4 py-8 rounded-xl w-full border border-base-300 text-left hover:border hover:border-primary/20 ${vowVisibility === "private" ? "bg-primary/20 border border-primary/20" : "bg-base-200"}`}
          onClick={() => {
            setVowVisibility("private");
          }}
        >
          <Lock size={20} />
          <p>
            Private
            <br />
            <span className="text-accent">Only you</span>
          </p>
        </button>
      </div>
    </div>
  );
};
