"use client";

import { CreateVowForm } from "@/components/create/CreateVowForm";
import Navbar from "@/components/navigation/Navbar";

export default function Create() {
  return (
    <div className="w-screen h-screen">
      <Navbar />

      <div className="doublePaddingContainer">
        <div className="mt-16">
          <h1 className="font-display text-4xl">
            Make your <span className="text-primary">vow.</span>
          </h1>
          <p className="font-body text-accent text-xl mt-2">
            Describe your vow. Set a deadline. It goes public the moment you
            submit.
            <br />
            The world will be watching.
          </p>
        </div>

        <div className="mt-16">
          <CreateVowForm />
        </div>
      </div>
    </div>
  );
}
