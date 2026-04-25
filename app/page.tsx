import Navbar from "@/components/navigation/Navbar";
import HeroCTA from "@/components/landing/HeroCTA";
import Pill from "@/components/generic/Pill";
import Footer from "@/components/navigation/Footer";
import {
  Check,
  Hourglass,
  Link,
  NotebookPen,
  PenIcon,
  Scale,
} from "lucide-react";

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

      <div className="paddingContainer" id="howItWorks">
        <p className="text-center uppercase text-xs text-accent">
          How it works
        </p>

        <h1 className="text-base-content/90 text-4xl font-display text-center mt-4">
          Simple. Public.{" "}
          <span className="italic text-primary">Permanent.</span>
        </h1>

        <div className="w-full flex flex-wrap gap-8 items-start justify-center mt-16">
          <div className="flex flex-col items-center max-w-60 text-center">
            <h1 className="font-display aspect-square p-2 bg-primary border border-base-300 rounded-[50%]">
              I
            </h1>
            <NotebookPen className="mt-8 text-base-content/80" size={20} />
            <h1 className="mt-2 font-medium">Make your vow</h1>
            <p className="text-base-content/60 mt-2">
              Write your commitment and set a hard deadline.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-60 text-center">
            <h1 className="font-display aspect-square p-2 bg-base-200 border border-base-300 rounded-[50%]">
              II
            </h1>
            <Link className="mt-8 text-base-content/80" size={20} />
            <h1 className="mt-2 font-medium">Share the link</h1>
            <p className="text-base-content/60 mt-2">
              A public link is generated instantly. Share it.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-60 text-center">
            <h1 className="font-display aspect-square p-2 bg-base-200 border border-base-300 rounded-[50%]">
              III
            </h1>
            <Hourglass className="mt-8 text-base-content/80" size={20} />
            <h1 className="mt-2 font-medium">The clock ticks</h1>
            <p className="text-base-content/60 mt-2">
              Start working towards your vow. Your countdown runs live.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-60 text-center">
            <h1 className="font-display aspect-square p-2 bg-base-200 border border-base-300 rounded-[50%]">
              IV
            </h1>
            <Scale className="mt-8 text-base-content/80" size={20} />
            <h1 className="mt-2 font-medium">Time for the truth</h1>
            <p className="text-base-content/60 mt-2">
              Resolve your vow once the deadline has passed.
            </p>
          </div>
        </div>

        <div className="mt-16 flex gap-8 items-start justify-center">
          <div className="p-4 border border-base-300 max-w-sm rounded-xl bg-base-200">
            <Pill
              className="w-fit"
              variant="primary"
              text="Waiting"
              icon={
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              }
            />
            <h1 className="mt-4 text-lg font-display font-medium text-base-content/80">
              Countdown is live
            </h1>
            <p className="mt-2 text-base-content/60">
              Your vow is out there. Viewers are watching. The clock doesn't
              care.
            </p>
          </div>

          <div className="p-4 border border-base-300 max-w-sm rounded-xl bg-base-200">
            <Pill
              className="w-fit"
              variant="secondary"
              text="Moment of truth"
              icon={
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
              }
            />
            <h1 className="mt-4 text-lg font-display font-medium text-base-content/80">
              Deadline has passed
            </h1>
            <p className="mt-2 text-base-content/60">
              Your time's up. Now comes the part that matters — telling the
              truth.
            </p>
          </div>

          <div className="p-4 border border-base-300 max-w-sm rounded-xl bg-base-200">
            <Pill
              className="w-fit"
              variant="success"
              text="Resolved"
              icon={<Check size={20} />}
            />
            <h1 className="mt-4 text-lg font-display font-medium text-base-content/80">
              Vow resolved
            </h1>
            <p className="mt-2 text-base-content/60">
              Perhaps you fulfilled it. Perhaps you didn't. Either way, it's on
              record.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16"></div>

      <Footer />
    </div>
  );
}
