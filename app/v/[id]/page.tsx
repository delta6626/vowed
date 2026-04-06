import Navbar from "@/components/navigation/Navbar";
import { adminDb } from "@/utils/firebase/admin";
import { notFound } from "next/navigation";

interface VowPageProps {
  params: {
    id: string;
  };
}

export default async function Vow({ params }: VowPageProps) {
  const { id } = await params;
  const vowSnaphsot = await adminDb.collection("vows").doc(id).get();

  if (!vowSnaphsot.exists) {
    notFound();
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>
    </div>
  );
}
