"use client";

import Navbar from "@/components/navigation/Navbar";
import { checkUserRecordExists } from "../actions/checkUserRecordExists";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const checkUserExistsInterval = setInterval(async () => {
      const userExists = await checkUserRecordExists();
      if (userExists) {
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
        <h1 className="font-display">Welcome to Vowed.</h1>
        <p className="font-body text-accent">
          We're setting things up for you.
          <span className="text-base-content loading loading-spinner"></span>
        </p>
      </div>
    </div>
  );
}
