"use client";

import Navbar from "@/components/navigation/Navbar";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col flex-1 font-body items-center justify-center paddingContainer w-screen">
        <p className="flex items-center gap-2 text-xl">
          <AlertCircle size={20} className="text-error" /> Something went wrong.
        </p>

        <p className="text-accent text-center">
          An error occured while trying to load your profile.
          <br></br>
          {error.message}
        </p>

        <button className="btn btn-primary mt-2" onClick={reset}>
          Reload
        </button>
      </div>
    </div>
  );
}
