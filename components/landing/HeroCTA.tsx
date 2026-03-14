"use client";

import { SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="w-full flex justify-center gap-4">
      <SignUpButton>
        <button className="btn btn-primary">
          Make your first vow <ArrowRight size={20} />
        </button>
      </SignUpButton>
      <button className="btn">See how it works</button>
    </div>
  );
}
