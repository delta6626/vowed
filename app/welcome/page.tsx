"use client";

import Navbar from "@/components/navigation/Navbar";

export default function Welcome() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />

      <div className="w-full flex flex-col flex-1 items-center justify-center">
        <h1 className="font-display">Welcome to Vowed.</h1>
        <p className="font-body text-accent">
          We're setting things up for you.
          <span className="text-base-content loading loading-spinner"></span>
        </p>
      </div>
    </div>
  );
}
