"use client";

import { Show, SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="w-fit sm:w-full flex flex-col sm:flex-row justify-center gap-4">
      <Show when={"signed-out"}>
        <SignUpButton>
          <button className="btn btn-primary">
            Make your first vow <ArrowRight size={20} />
          </button>
        </SignUpButton>
      </Show>

      <Show when={"signed-in"}>
        <Link href={"/dashboard"} className="btn btn-primary">
          Go to Dashboard
        </Link>
      </Show>
      <button
        className="btn"
        onClick={() => {
          document
            .getElementById("howItWorks")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        See how it works
      </button>
    </div>
  );
}
