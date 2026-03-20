"use client";

import { CreateVowForm } from "@/components/create/CreateVowForm";
import Navbar from "@/components/navigation/Navbar";

export default function Create() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />

      <div className="paddingContainer my-16 flex flex-col items-center justify-center">
        <div className="w-2xl">
          <h1 className="font-display text-4xl">
            Make your <span className="text-primary">vow.</span>
          </h1>
          <p className="font-body text-accent text-xl mt-2">
            Describe your vow. Set a deadline. It goes public the moment you
            submit. The world will be watching.
          </p>
        </div>

        <div className="mt-16">
          <CreateVowForm />
        </div>
      </div>
    </div>
  );
}
