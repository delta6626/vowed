import { Vow } from "@/types/Vow";
import { adminDb } from "@/utils/firebase/admin";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let activeVowCount = 0;

  try {
    const vowsSnapshot = await adminDb
      .collection("vows")
      .where("authorId", "==", user.id)
      .get();

    const vowsList: Vow[] = vowsSnapshot.docs.map((doc) => {
      return doc.data() as Vow;
    });

    vowsList.forEach((vow) => {
      if (vow.status === "waiting") {
        activeVowCount++;
      }
    });

    return NextResponse.json(
      { activeVowCount: activeVowCount },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch vows", activeVowCount: 0 },
      { status: 500 },
    );
  }
}
