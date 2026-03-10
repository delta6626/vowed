"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="w-full flex justify-center gap-4">
      <Link href={"/sign-up"} className="btn btn-primary">
        Make your first vow <ArrowRight size={20} />
      </Link>
      <button className="btn">See how it works</button>
    </div>
  );
}
