import Navbar from "@/components/navigation/Navbar";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen bg-radial from-primary/20 from-5% to-base-100">
      <Navbar />

      <div className="w-fit h-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
        <h1 className="text-9xl font-display text-accent">404</h1>
        <p className="max-w-sm mt-4 text-2xl text-center font-display">
          This page has
          <span className="text-primary italic">{` nothing `}</span>
          to prove.
        </p>

        <p className="text-accent text-center">
          You've wandered somewhere we haven't built yet.
        </p>

        <button className="mt-8 btn btn-primary">Go to homepage</button>
      </div>
    </div>
  );
}
