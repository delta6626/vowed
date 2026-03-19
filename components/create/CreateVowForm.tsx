export const CreateVowForm = () => {
  return (
    <form>
      <div className="">
        <p className="">What do you vow?</p>
        <input className="" placeholder={"I will..."} />
      </div>

      <div className="">
        <p className="">
          Description <span className="">optional</span>
        </p>
        <input
          className=""
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
    </form>
  );
};
