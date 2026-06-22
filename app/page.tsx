import Navbar from "@/components/navigation/Navbar";
import HeroCTA from "@/components/landing/HeroCTA";
import Pill from "@/components/generic/Pill";
import Footer from "@/components/navigation/Footer";
import {
  ArrowRight,
  Check,
  Globe,
  Handshake,
  Hourglass,
  LayoutDashboard,
  LinkIcon,
  MessageCircle,
  NotebookPen,
  Scale,
  Timer,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { PRODUCT } from "@/constants/PRODUCT";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col w-screen h-screen">
        <Navbar />
        <div className="flex flex-col flex-1 items-center justify-center text-center landingGradient paddingContainer">
          <Pill
            className="uppercase text-xs sm:text-sm"
            variant="generic"
            text={"Public commitment platform"}
            icon={
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            }
          />

          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-display mt-4">
            You <span className="text-primary italic">vowed</span> it.
            <br />
            Now prove it.
          </h1>
          <h3 className="text-lg xs:text-xl sm:text-2xl text-base-content/60 font-display mt-8 mb-8">
            Set a deadline. Share the link. <br />
            The world is watching.
          </h3>

          <HeroCTA />
        </div>
      </div>

      <div className="doublePaddingContainer" id="howItWorks">
        <p className="text-center uppercase text-xs text-accent">
          How it works
        </p>

        <h1 className="text-base-content/90 text-2xl xs:text-3xl sm:text-4xl font-display text-center mt-4">
          Simple. Public.{" "}
          <span className="italic text-primary">Permanent.</span>
        </h1>

        <div className="w-full flex flex-wrap gap-8 items-start justify-center mt-16">
          <div className="flex flex-col items-center max-w-50 text-center">
            <h1 className="font-display aspect-square p-2 bg-primary border border-base-300 rounded-[50%]">
              I
            </h1>
            <NotebookPen className="mt-8 text-base-content/80" size={20} />
            <h1 className="mt-2 font-medium">Make your vow</h1>
            <p className="text-base-content/60 mt-2">
              Write your commitment and set a hard deadline.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-50 text-center">
            <h1 className="font-display aspect-square p-2 bg-base-200 border border-base-300 rounded-[50%]">
              II
            </h1>
            <LinkIcon className="mt-8 text-base-content/80" size={20} />
            <h1 className="mt-2 font-medium">Share the link</h1>
            <p className="text-base-content/60 mt-2">
              A public link is generated instantly. Share it.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-50 text-center">
            <h1 className="font-display aspect-square p-2 bg-base-200 border border-base-300 rounded-[50%]">
              III
            </h1>
            <Hourglass className="mt-8 text-base-content/80" size={20} />
            <h1 className="mt-2 font-medium">The clock ticks</h1>
            <p className="text-base-content/60 mt-2">
              Start working towards your vow. Your countdown runs live.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-50 text-center">
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

        <div className="mt-16 flex flex-col md:flex-row gap-4 justify-center items-stretch">
          <div className="p-4 border border-base-300 w-full md:max-w-sm rounded-xl bg-base-200">
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

          <div className="p-4 border border-base-300 w-full md:max-w-sm rounded-xl bg-base-200">
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

          <div className="p-4 border border-base-300 w-full md:max-w-sm rounded-xl bg-base-200">
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

      <div className="w-full mt-32 doublePaddingContainer flex gap-8 3xl:gap-0 flex-col 3xl:flex-row items-start 3xl:items-center justify-between">
        <div className="max-w-md">
          <p className="uppercase text-xs text-accent">Permanently recorded</p>
          <h1 className="text-base-content/90 text-2xl xs:text-3xl sm:text-4xl font-display mt-4">
            Built for{" "}
            <span className="italic text-primary">accountability.</span>
            <br />
            Not excuses.
          </h1>
          <p className="mt-8 text-base-content/60">
            Vowed isn't a goal tracker. It's a public record. Every vow you make
            is witnessed, every outcome is permanent, and silence is never an
            option.
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2 items-start">
              <ArrowRight className="flex shrink-0 text-primary" size={20} />
              <p className="text-base-content/60">
                No cancellation of vows. Once made, a vow can only be resolved —
                not deleted.
              </p>
            </div>

            <div className="flex gap-2 items-start">
              <ArrowRight className="flex shrink-0 text-primary" size={20} />
              <p className="text-base-content/60">
                Silence is a verdict. Every second past the deadline is visible
                to your viewers.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full 3xl:w-sm p-8 bg-base-200 rounded-xl border border-base-300">
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

      <div className="w-full mt-32 doublePaddingContainer flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="uppercase text-xs text-accent">Everything you need</p>
          <h1 className="text-base-content/90 text-2xl xs:text-3xl sm:text-4xl font-display mt-4">
            Built to keep you{" "}
            <span className="italic text-primary">honest.</span>
          </h1>
        </div>

        <div className="mt-16 w-full grid xl:grid-cols-2 3xl:grid-cols-3 gap-4">
          <div className="bg-base-200 p-8 rounded-xl w-full border border-base-300">
            <Timer className={"text-primary"} size={20} />
            <h1 className="text-lg font-medium font-display mt-4 text-base-content/90">
              Live Countdown Timer
            </h1>
            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                A live clock ticking down to your deadline — second by second
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Every viewer sees the same countdown in real time
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                When time's up, the Moment of Truth begins and every second past
                the deadline is recorded.
              </p>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl w-full border border-base-300">
            <Handshake className={"text-primary"} size={20} />
            <h1 className="text-lg font-medium font-display mt-4 text-base-content/90">
              Public Commitment System
            </h1>
            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                State your vow clearly — title, description, deadline
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                The moment you publish, the world can see it
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Every vow is timestamped and permanently tied to your name
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Deadlines must be real — minimum 15 minutes enforced
              </p>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl w-full border border-base-300">
            <Scale className={"text-primary"} size={20} />
            <h1 className="text-lg font-medium font-display mt-4 text-base-content/90">
              Vow Resolution System
            </h1>
            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                When the deadline passes, you resolve: fulfilled or not
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Say what happened — an optional note for context
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Every resolution is timestamped and locked to the record
              </p>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl w-full border border-base-300">
            <LayoutDashboard className={"text-primary"} size={20} />
            <h1 className="text-lg font-medium font-display mt-4 text-base-content/90">
              Creator Dashboard
            </h1>

            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                See all your vows at a glance — active, pending, resolved
              </p>
            </div>

            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Your fulfillment rate front and center, always
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                One-click resolution when the Moment of Truth arrives
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Real-time counts so nothing slips through
              </p>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl w-full border border-base-300">
            <Globe className={"text-primary"} size={20} />
            <h1 className="text-lg font-medium font-display mt-4 text-base-content/90">
              Public Profile Pages
            </h1>
            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                {`A permanent page at ${PRODUCT.BASE_URL}/u/[id] — yours to share`}
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Every public vow you've ever made, all in one place
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Visitors see your fulfillment rate before they read a word
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Your record, building in public, over time
              </p>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl w-full border border-base-300">
            <MessageCircle className={"text-primary"} size={20} />
            <h1 className="text-lg font-medium font-display mt-4 text-base-content/90">
              Community Engagement
            </h1>
            <div className="mt-4 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Anyone can comment on a vow — before and after resolution
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                Encouragement, skepticism, reactions — all part of the record
              </p>
            </div>

            <div className="mt-2 flex gap-2 items-start">
              <ArrowRight className="flex shrink-0" size={20} />
              <p className="text-base-content/60">
                View counts show exactly how many people are watching
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-32 doublePaddingContainer flex gap-8 3xl:gap-0 flex-col 3xl:flex-row items-start 3xl:items-center justify-between">
        <div className="max-w-md">
          <p className="uppercase text-xs text-accent">Visibility levels</p>
          <h1 className="text-base-content/90 text-2xl xs:text-3xl sm:text-4xl font-display mt-4">
            Your vow, your <br />
            <span className="italic text-primary">audience.</span>
          </h1>

          <p className="mt-8 text-base-content/60">
            Not every commitment needs the whole internet. Choose exactly who
            witnesses your vow — from fully public to completely private.
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2 items-start">
              <ArrowRight className="flex shrink-0 text-primary" size={20} />
              <p className="text-base-content/60">
                Public vows build the most credibility. They are listed on your
                public profile - anyone can find and witness them.
              </p>
            </div>

            <div className="flex gap-2 items-start">
              <ArrowRight className="flex shrink-0 text-primary" size={20} />
              <p className="text-base-content/60">
                Unlisted vows are perfect for sharing with a specific group
                without full exposure.
              </p>
            </div>

            <div className="flex gap-2 items-start">
              <ArrowRight className="flex shrink-0 text-primary" size={20} />
              <p className="text-base-content/60">
                Private vows are for personal accountability - only you can see
                them.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full 3xl:max-w-sm flex flex-col gap-4">
          <div className="border border-base-300 flex flex-col xs:flex-row items-start xs:items-center gap-4 p-4 bg-base-200 rounded-xl">
            <Pill
              text="Public"
              variant={"success"}
              className="w-fit min-w-24 flex-col items-center"
            ></Pill>
            <p className="text-base-content/60">
              Anyone with or without the link. Appears on your profile.
            </p>
          </div>

          <div className="border border-base-300 flex flex-col xs:flex-row items-start xs:items-center gap-4 p-4 bg-base-200 rounded-xl">
            <Pill
              text="Unlisted"
              variant={"secondary"}
              className="w-fit min-w-24 flex-col items-center"
            ></Pill>
            <p className="text-base-content/60">
              Anyone with the direct link. Hidden from your profile.
            </p>
          </div>

          <div className="border border-base-300 flex flex-col xs:flex-row items-start xs:items-center gap-4 p-4 bg-base-200 rounded-xl">
            <Pill
              text="Private"
              variant={"generic"}
              className="w-fit min-w-24 flex-col items-center"
            ></Pill>
            <p className="text-base-content/60">
              Only you. Full accountability with zero public pressure.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-180 flex flex-col items-center justify-center mt-32 text-center landingGradient doublePaddingContainer">
        <h1 className="font-display text-4xl md:text-5xl">Your word.</h1>
        <h1 className="font-display text-4xl md:text-5xl text-primary italic">
          On the record.
        </h1>

        <p className="text-base-content/60 mt-4">
          Make a vow today. The clock starts the moment you hit publish.
        </p>

        <Link className="btn btn-primary mt-8" href={"/create"}>
          Make a vow - it's free
        </Link>
      </div>

      <div className="mt-32"></div>
      <Footer />
    </div>
  );
}
