import { ArrowRight } from "lucide-react";

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

      <div className="">
        <p className="">Deadline</p>
        <div className="">
          <input type={"date"} />
          <input type={"time"} />
        </div>
      </div>

      <div>
        <p className="">Visibility</p>
        <div>
          <div>
            <p>Public</p>
            <p>Visible on your profile</p>
          </div>
          <div>
            <p>Unlisted</p>
            <p>Accessible with link only</p>
          </div>
          <div>
            <p>Private</p>
            <p>Accessible to you only</p>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <p>Preview</p>
      </div>

      <div>
        <p>
          Once submitted, this vow is <span className="">permanent.</span>
          <br />
          There is no delete - only resolution.
        </p>

        <button>
          Publish vow <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
};
