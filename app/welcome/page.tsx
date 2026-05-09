"use client";

import Navbar from "@/components/navigation/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const checkUserExistsInterval = setInterval(async () => {
      const res = await fetch("/api/user/check-existence");
      const data = await res.json();

      if (data.exists) {
        clearInterval(checkUserExistsInterval);
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(checkUserExistsInterval);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />

      <div className="w-full flex flex-col flex-1 items-center justify-center">
        <h1 className="font-display text-4xl">
          <span className="italic text-primary">Hi, </span>
          welcome to Vowed.
        </h1>
        <div className="font-body flex items-center gap-2 mt-2">
          <p className="text-base-content/60 text-xl">
            We're setting things up for you.
          </p>

          <LoaderCircle className="text-accent animate-spin" size={20} />
        </div>
      </div>
    </div>
  );
}
