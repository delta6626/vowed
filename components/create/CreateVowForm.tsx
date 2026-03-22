import { CREATE_VOW } from "@/constants/CREATE_VOW";
import { VowVisibility } from "@/types/VowVisibility";
import { ArrowRight, Globe, GlobeLock, Link } from "lucide-react";
import { ChangeEvent, SubmitEvent, useEffect, useState } from "react";
import { VowPreview } from "./VowPreview";

export const CreateVowForm = () => {
  const [vowTitle, setVowTitle] = useState<string>("");
  const [vowDescription, setVowDescription] = useState<string>("");
  const [vowDeadlineDate, setVowDeadlineDate] = useState<string>("");
  const [vowDeadlineTime, setVowDeadlineTime] = useState<string>("");
  const [vowVisibility, setVowVisibility] = useState<VowVisibility>("public");
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleVowTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (title.length > CREATE_VOW.MAX_VOW_TITLE_LENGTH) return;
    setVowTitle(title);
  };

  const handleVowDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    if (description.length > CREATE_VOW.MAX_VOW_DESCRIPTION_LENGTH) return;
    setVowDescription(description);
  };

  const handleVowDeadlineDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVowDeadlineDate(e.target.value);
  };

  const handleVowDeadlineTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVowDeadlineTime(e.target.value);
  };

  const handleFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    // console.log(vowTitle, vowDescription, vowDeadlineDate, vowDeadlineTime, vowVisibility)
  };

  const minDate = `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, "0")}-${currentTime.getDate().toString().padStart(2, "0")}`;
  const minTimeDate = new Date(
    currentTime.getTime() + CREATE_VOW.MNIMUM_DEADLINE_TIME_MINUTES * 60 * 1000,
  ); // Push the time ahead by MIN_DEADLINE_TIME_MINUTES minutes;
  const minTime = `${minTimeDate.getHours().toString().padStart(2, "0")}:${minTimeDate.getMinutes().toString().padStart(2, "0")}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60); // every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <form className="w-2xl flex flex-col gap-12" onSubmit={handleFormSubmit}>
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

      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">
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

      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">
          Deadline
          <span className="text-accent">
            {" "}
            - {CREATE_VOW.MNIMUM_DEADLINE_TIME_MINUTES} minutes from now, at
            least
          </span>
        </p>
        <div className="flex gap-2">
          <input
            required={true}
            min={minDate}
            value={vowDeadlineDate}
            onChange={handleVowDeadlineDateChange}
            type={"date"}
            className="input px-4 py-8 bg-base-200 w-full rounded-xl border border-base-300"
          />
          <input
            required={true}
            min={vowDeadlineDate === minDate ? minTime : undefined}
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

        <VowPreview
          title={vowTitle}
          deadlineDate={vowDeadlineDate}
          deadlineTime={vowDeadlineTime}
        />

        <div className="flex w-full items-center justify-between">
          <p className="text-accent">
            Once submitted, this vow is{" "}
            <span className="text-base-content/80">permanent.</span>
            <br />
            There is no delete - only resolution.
          </p>

          <button type={"submit"} className="btn btn-primary">
            Publish vow <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};
