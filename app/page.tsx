import Navbar from "@/components/navigation/Navbar";
import HeroCTA from "@/components/landing/HeroCTA";
import Pill from "@/components/generic/Pill";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col w-screen h-screen">
        <Navbar />
        <div className="flex flex-col flex-1 items-center justify-center text-center landingGradient paddingContainer">
          <Pill
            variant="generic"
            text={"Public commitment platform"}
            icon={
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            }
          />

          <h1 className="text-8xl leading-[0.9] font-display mt-4">
            You <span className="text-primary italic">vowed</span> it.
            <br />
            Now prove it.
          </h1>
          <h3 className="text-2xl text-base-content/60 font-display mt-8 mb-8">
            Set a deadline. Share the link. <br />
            The world is watching.
          </h3>

          <HeroCTA />
        </div>
      </div>

      <div className="paddingContainer">
        <p className="text-center uppercase text-xs text-accent">
          How it works
        </p>

        <h1 className="text-base-content/90 text-4xl font-display text-center mt-4">
          Simple. Public.{" "}
          <span className="italic text-primary">Permanent.</span>
        </h1>
      </div>

      <div className="mt-16"></div>

      <Footer />
    </div>
  );
}
