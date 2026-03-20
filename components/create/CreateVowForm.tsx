import { VowVisibility } from "@/types/VowVisibility";
import { ArrowRight, Globe, GlobeLock, Link } from "lucide-react";
import { ChangeEvent, useState } from "react";

export const CreateVowForm = () => {
  const [vowTitle, setVowTitle] = useState<string>("");
  const [vowDescription, setVowDescription] = useState<string>("");
  const [vowDeadlineDate, setVowDeadlineDate] = useState<string>("");
  const [vowDeadlineTime, setVowDeadlineTime] = useState<string>("");
  const [vowVisibility, setVowVisibility] = useState<VowVisibility>("public");

  const handleVowTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVowTitle(e.target.value);
  };

  const handleVowDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setVowDescription(e.target.value);
  };

  const handleVowDeadlineDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVowDeadlineDate(e.target.value);
  };

  const handleVowDeadlineTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVowDeadlineTime(e.target.value);
  };

  const handleVowVisibilityChange = () => {};

  return (
    <form className="w-2xl flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">What do you vow?</p>
        <input
          required={true}
          value={vowTitle}
          onChange={handleVowTitleChange}
          className="input text-xl px-4 py-8 font-display w-full bg-base-200 rounded-xl border border-base-300"
          placeholder={"I will..."}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">
          Description <span className="text-accent text-xs">(Optional)</span>
        </p>
        <textarea
          value={vowDescription}
          onChange={handleVowDescriptionChange}
          className="textarea resize-none w-full p-4 bg-base-200 rounded-xl border border-base-300 min-h-25 max-h-25"
          placeholder={
            "Add context, stakes or other relevant details. Viewers will see this."
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">Deadline</p>
        <div className="flex gap-2">
          <input
            required={true}
            value={vowDeadlineDate}
            onChange={handleVowDeadlineDateChange}
            type={"date"}
            className="input px-4 py-8 bg-base-200 w-full rounded-xl border border-base-300"
          />
          <input
            required={true}
            value={vowDeadlineTime}
            onChange={handleVowDeadlineTimeChange}
            type={"time"}
            className="input px-4 py-8 bg-base-200 w-full rounded-xl border border-base-300"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">Visibility</p>
        <div className="flex gap-2">
          <button className="flex items-center gap-4 bg-base-200 px-4 py-8 rounded-xl w-full border border-base-300 text-left">
            <Globe size={20} />
            <p>
              Public
              <br />
              <span className="text-accent">Visible to all</span>
            </p>
          </button>

          <button className="flex items-center gap-4 bg-base-200 px-4 py-8 rounded-xl w-full border border-base-300 text-left">
            <Link size={20} />
            <p>
              Unlisted
              <br />
              <span className="text-accent">Link access only</span>
            </p>
          </button>

          <button className="flex items-center gap-4 bg-base-200 px-4 py-8 rounded-xl w-full border border-base-300 text-left">
            <GlobeLock size={20} />
            <p>
              Private
              <br />
              <span className="text-accent">Only you</span>
            </p>
          </button>
        </div>
      </div>

      <div className="border-b border-base-300"></div>

      <div>
        <p className="text-accent">Preview</p>

        <div className="flex w-full items-center justify-between">
          <p className="text-accent">
            Once submitted, this vow is{" "}
            <span className="text-base-content/80">permanent.</span>
            <br />
            There is no delete - only resolution.
          </p>

          <button className="btn btn-primary">
            Publish vow <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};
