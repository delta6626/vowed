"use client";

import { CreateVowForm } from "@/components/create/CreateVowForm";
import { GenericModal } from "@/components/generic/GenericModal";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";

export default function Create() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <GenericModal />
      <Navbar />

      <div className="paddingContainer my-16 flex flex-col items-center justify-center">
        <CreateVowForm />
      </div>

      <div className="flex grow items-end">
        <Footer />
      </div>
    </div>
  );
}
