import Navbar from "@/components/navigation/Navbar";
import HeroCTA from "@/components/landing/HeroCTA";
import Pill from "@/components/generic/Pill";
import Footer from "@/components/navigation/Footer";
import {
  ArrowRight,
  Check,
  Handshake,
  Hourglass,
  Link,
  Lock,
  NotebookPen,
  PenIcon,
  Scale,
  Timer,
  XIcon,
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

        <div className="mt-16 flex gap-4 items-start justify-center">
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

      <div className="w-full mt-32 paddingContainer flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="uppercase text-xs text-accent">Permanently recorded</p>
          <h1 className="text-base-content/90 text-4xl font-display mt-4">
            Built for{" "}
            <span className="italic text-primary">accountability.</span>
            <br />
            Not excuses.
          </h1>
        </div>

        <div className="w-full flex items-center justify-center mt-16 gap-16">
          <div className="max-w-lg">
            <p className="mt-8 text-base-content/60">
              Vowed isn't a goal tracker. It's a public record. Every vow you
              make is witnessed, every outcome is permanent, and silence is
              never an option.
            </p>

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex gap-2 items-start">
                <ArrowRight className="flex shrink-0 text-primary" size={20} />
                <p className="text-base-content/60">
                  No cancellation of vows. Once made, a vow can only be resolved
                  — not deleted.
                </p>
              </div>

              <div className="flex gap-2 items-start">
                <ArrowRight className="flex shrink-0 text-primary" size={20} />
                <p className="text-base-content/60">
                  Silence is a verdict. Every second past the deadline is
                  visible to your viewers.
                </p>
              </div>
            </div>
          </div>

          <div className="w-sm p-8 bg-base-200 rounded-xl border border-base-300">
            <div className="flex items-center gap-4">
              <h1 className="font-display p-2 bg-primary/75 rounded-[50%] w-10 h-10 flex items-center justify-center border border-base-300">
                TL
              </h1>
              <div className="flex flex-col">
                <h1 className="text-lg font-display font-medium">
                  Tanner Linsley
                </h1>
                <p className="text-base-content/60">90% fillment rate</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <div className="px-4 py-2 rounded-xl w-full bg-base-100 flex justify-between items-center">
                <p className="text-base-content/60">
                  Ship Tanstack Start to production
                </p>
                <Check className="text-success" size={20} />
              </div>
              <div className="px-4 py-2 rounded-xl w-full bg-base-100 flex justify-between items-center">
                <p className="text-base-content/60">Visit the Eiffel Tower</p>
                <Check className="text-success" size={20} />
              </div>
              <div className="px-4 py-2 rounded-xl w-full bg-base-100 flex justify-between items-center">
                <p className="text-base-content/60">Read 12 books this year</p>
                <XIcon className="text-error" size={20} />
              </div>
              <div className="px-4 py-2 rounded-xl w-full bg-base-100 flex justify-between items-center">
                <p className="text-base-content/60">Run a marathon</p>
                <Check className="text-success" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-32 doublePaddingContainer flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="uppercase text-xs text-accent">Everything you need</p>
          <h1 className="text-base-content/90 text-4xl font-display mt-4">
            Built to keep you{" "}
            <span className="italic text-primary">honest.</span>
          </h1>
        </div>

        <div className="mt-16 w-full flex flex-wrap gap-4">
          <div className="p-8 rounded-xl w-xs border border-base-300">
            <Handshake size={20} />
            <h1 className="text-lg font-medium font-display mt-4 text-base-content/90">
              Public Commitment System
            </h1>
            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Time-bound vows with title and description
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Specific deadline — date and time
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Published instantly and visible to the world
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Minimum 15-minute deadline enforced
              </p>
            </div>
          </div>

          <div className="p-8 rounded-xl w-xs border border-base-300">
            <Timer size={20} />
            <h1 className="text-lg font-medium font-display mt-4 text-base-content/90">
              Live Countdown Timer
            </h1>
            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Real-time second-by-second countdown
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Shows elapsed time after deadline passes
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Clock synced live for all viewers
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
