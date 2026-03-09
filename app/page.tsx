import Navbar from "@/components/navigation/Navbar";
import HeroCTA from "@/components/landing/HeroCTA";
import Pill from "@/components/generic/Pill";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="w-full text-center paddingContainer">
          <div className="w-full flex justify-center mt-16">
            <Pill
              variant="generic"
              icon={<div className="w-2 h-2 rounded-full bg-primary"></div>}
              text={"Public commitment platform"}
              className="uppercase"
            />
          </div>

          <div className="font-display flex flex-col gap-8 mt-16">
            <h1 className="text-6xl leading-[1.1]">
              You <span className="text-primary italic">vowed</span> it.
              <br />
              Now prove it.
            </h1>

            <h3 className="text-2xl italic text-accent">
              Set a deadline. Share the link. <br />
              The world is watching.
            </h3>

            <HeroCTA />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
