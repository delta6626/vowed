import BasicVowContainer from "../generic/BasicVowContainer";

export default function SideSectionContent() {
  return (
    <div className="font-display">
      <h1 className="text-4xl leading-[1.1]">
        Make it <span className="text-primary italic">public.</span>
      </h1>
      <h1 className="text-4xl leading-[1.1]">
        Make it <span className="text-primary italic">count.</span>
      </h1>

      <div className="">
        <BasicVowContainer
          vowText={"Ship our MVP before the Series A"}
          vowStatus={"waiting"}
        />
        <BasicVowContainer
          vowText={"Run a marathon before turning 30"}
          vowStatus={"fulfilled"}
        />
        <BasicVowContainer
          vowText={"Finish my essay before its due"}
          vowStatus={"not-fulfilled"}
        />
      </div>
    </div>
  );
}
