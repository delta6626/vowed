import { ArrowRight, Globe, GlobeLock, Link } from "lucide-react";

export const CreateVowForm = () => {
  return (
    <form className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">What do you vow?</p>
        <input
          className="input text-xl px-4 py-8 font-display w-full bg-base-200 rounded-xl border border-base-300"
          placeholder={"I will..."}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">
          Description <span className="text-accent text-xs">(Optional)</span>
        </p>
        <textarea
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
            type={"date"}
            className="input px-4 py-8 bg-base-200 w-full rounded-xl border border-base-300"
          />
          <input
            type={"time"}
            className="input px-4 py-8 bg-base-200 w-full rounded-xl border border-base-300"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-content/80">Visibility</p>
        <div className="flex gap-2">
          <div className="flex items-center gap-4 bg-base-200 px-4 py-8 rounded-xl w-full border border-base-300">
            <Globe size={20} />
            <p>
              Public
              <br />
              <span className="text-accent">Visible on your profile</span>
            </p>
          </div>

          <div className="flex items-center gap-4 bg-base-200 px-4 py-8 rounded-xl w-full border border-base-300">
            <Link size={20} />
            <p>
              Unlisted
              <br />
              <span className="text-accent">Accessible with link only</span>
            </p>
          </div>

          <div className="flex items-center gap-4 bg-base-200 px-4 py-8 rounded-xl w-full border border-base-300">
            <GlobeLock size={20} />
            <p>
              Private
              <br />
              <span className="text-accent">Visible to you only</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-base-300"></div>

      <div>
        <p className="text-accent">Preview</p>

        <div className="flex w-full items-center justify-between">
          <p>
            Once submitted, this vow is <span className="">permanent.</span>
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
