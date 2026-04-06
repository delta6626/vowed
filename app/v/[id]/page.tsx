import Navbar from "@/components/navigation/Navbar";
import { User } from "@/types/User";
import type { Vow } from "@/types/Vow";
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

  const vowData = vowSnaphsot.data() as Vow;
  const associatedUserSnapshsot = await adminDb
    .collection("users")
    .doc(vowData.authorId)
    .get();
  const associatedUserData = associatedUserSnapshsot.data() as User;

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>

      <div className="w-full h-full doublePaddingContainer mt-16">
        <h1 className="font-display text-4xl">{vowData.title}</h1>
      </div>
    </div>
  );
}
