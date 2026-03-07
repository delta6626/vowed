import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="paddingContainer w-full text-center py-16">
        <h1 className="font-display text-7xl leading-[1.1]">
          You <span className="text-primary italic">vowed</span> it.
          <br />
          Now prove it.
        </h1>
      </div>
    </div>
  );
}
