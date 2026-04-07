"use client";

import Navbar from "@/components/navigation/Navbar";
import { GetVowResponse } from "@/types/GetVowRespsonse";
import type { Vow } from "@/types/Vow";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Vow() {
  const params = useParams();

  const {
    data: getVowResponse,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`vow-${params.id}`],
    queryFn: async () => {
      const res = await fetch(`/api/vows/${params.id}`);

      if (!res.ok) {
        const error = new Error("Failed to fetch this vow.");
        error.name = res.status.toString();
        throw error;
      }

      return res.json() as Promise<GetVowResponse>;
    },
    retry: 3,
  });

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
