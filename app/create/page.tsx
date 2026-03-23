"use client";

import { CreateVowForm } from "@/components/create/CreateVowForm";
import Navbar from "@/components/navigation/Navbar";

export default function Create() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />

      <div className="paddingContainer my-16 flex flex-col items-center justify-center">
        <CreateVowForm />
      </div>
    </div>
  );
}
