import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="w-full text-center paddingContainer">
        <div className="font-display flex flex-col gap-8 mt-16">
          <h1 className="text-7xl leading-[1.1]">
            You <span className="text-primary italic">vowed</span> it.
            <br />
            Now prove it.
          </h1>

          <h3 className="text-3xl italic text-accent">
            Set a deadline. Share the link. <br />
            The world is watching.
          </h3>
        </div>
      </div>
    </div>
  );
}
