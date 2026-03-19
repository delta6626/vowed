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
    </form>
  );
};
