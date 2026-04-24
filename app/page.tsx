import Navbar from "@/components/navigation/Navbar";
import HeroCTA from "@/components/landing/HeroCTA";
import Pill from "@/components/generic/Pill";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="absolute inset-0 landingGradient pointer-events-none"></div>
      <header className="flex flex-col flex-1">
        <Navbar />

        <div className="w-full text-center paddingContainer">
          <div className="w-full flex justify-center mt-16">
            <Pill
              variant="primary"
              text={"Public commitment platform"}
              className="uppercase"
              icon={
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              }
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
      </header>

      <Footer />
    </div>
  );
}
