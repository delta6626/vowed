import { CREATE_VOW } from "@/constants/CREATE_VOW";
import { VowVisibility } from "@/types/VowVisibility";
import { ArrowRight, Globe, GlobeLock, Link } from "lucide-react";
import { ChangeEvent, SubmitEvent, useEffect, useState } from "react";
import { VowPreview } from "./VowPreview";
import { CreateVowHeader } from "./CreateVowHeader";
import { CreateVowFormTitle } from "./CreateVowFormTitle";
import { CreateVowFormDescription } from "./CreateVowFormDescription";
import { CreateVowFormDeadline } from "./CreateVowFormDeadline";

export const CreateVowForm = () => {
  const [vowTitle, setVowTitle] = useState<string>("");
  const [vowDescription, setVowDescription] = useState<string>("");
  const [vowDeadlineDate, setVowDeadlineDate] = useState<string>("");
  const [vowDeadlineTime, setVowDeadlineTime] = useState<string>("");
  const [vowVisibility, setVowVisibility] = useState<VowVisibility>("public");
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleFormSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const dateTime = new Date(`${vowDeadlineDate}T${vowDeadlineTime}:00.000Z`);
    const deadlineTimestampUTC = dateTime.getTime();

    try {
      setLoading(true);
      const res = await fetch("/api/vow/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: vowTitle.trim(),
          description: vowDescription.trim(),
          deadlineTimestampUTC: deadlineTimestampUTC,
          visibility: vowVisibility,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setVowTitle("");
      setVowDescription("");
      setVowDeadlineDate("");
      setVowDeadlineTime("");
      setVowVisibility("public"); // Default
      setLoading(false);
    }
  };

  return (
    <>
      <CreateVowHeader />
      <form
        className="mt-16 w-2xl flex flex-col gap-12"
        onSubmit={handleFormSubmit}
      >
        <CreateVowFormTitle
          vowTitle={vowTitle}
          handleVowTitleChange={handleVowTitleChange}
        />

        <CreateVowFormDescription
          vowDescription={vowDescription}
          handleVowDescriptionChange={handleVowDescriptionChange}
        />

        <CreateVowFormDeadline
          vowDeadlineDate={vowDeadlineDate}
          vowDeadlineTime={vowDeadlineTime}
          handleVowDeadlineDateChange={handleVowDeadlineDateChange}
          handleVowDeadlineTimeChange={handleVowDeadlineTimeChange}
        />

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
          <p className="text-accent mb-4">Preview</p>

          <VowPreview
            title={vowTitle}
            deadlineDate={vowDeadlineDate}
            deadlineTime={vowDeadlineTime}
          />

          <div className="flex w-full items-center justify-between mt-8">
            <p className="text-accent">
              Once submitted, this vow is{" "}
              <span className="text-base-content/80">permanent.</span>
              <br />
              There is no delete - only resolution.
            </p>

            <button type={"submit"} className="btn btn-primary flex shrink-0">
              Publish vow
              <span className="w-5 h-5 flex items-center justify-center">
                {loading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <ArrowRight size={20} />
                )}
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
