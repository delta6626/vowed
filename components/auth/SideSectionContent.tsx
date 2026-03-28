import BasicVowContainer from "../generic/BasicVowContainer";

export default function SideSectionContent() {
  return (
    <div className="flex flex-col gap-16">
      <div className="font-display text-4xl leading-[1.1]">
        <h1>
          Make it <span className="text-primary italic">public.</span>
        </h1>
        <h1>
          Make it <span className="text-primary italic">count.</span>
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <BasicVowContainer
          vowText={"Ship our MVP before the Series A"}
          vowStatus={"waiting"}
          className="w-xl bg-base-200/60"
          vowViewCount={12000}
          vowCommentCount={120}
        />
        <BasicVowContainer
          vowText={"Run a marathon before turning 30"}
          vowStatus={"fulfilled"}
          className="w-xl bg-base-200/60"
          vowViewCount={9000}
          vowCommentCount={70}
        />
        <BasicVowContainer
          vowText={"Finish my essay before its due"}
          vowStatus={"not-fulfilled"}
          className="w-xl bg-base-200/60"
          vowViewCount={1200}
          vowCommentCount={40}
        />
      </div>
    </div>
  );
}
