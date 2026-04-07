"use client";

import Navbar from "@/components/navigation/Navbar";
import type { Vow } from "@/types/Vow";
import { useParams } from "next/navigation";

export default function Vow() {
  const params = useParams();

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>

      <div className="w-full h-full doublePaddingContainer mt-16">
        <h1 className="font-display text-4xl">Title</h1>
      </div>
    </div>
  );
}
