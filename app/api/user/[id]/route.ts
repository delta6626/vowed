import { User } from "@/types/User";
import { Vow } from "@/types/Vow";
import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const [{ id: requestedUserId }, { userId }] = await Promise.all([
    params,
    auth(),
  ]);

  if (!userId) {
    return NextResponse.json(
      { error: "User must be authenticated" },
      { status: 401 },
    );
  }

  const requestedUserSnapshot = await adminDb
    .collection("users")
    .doc(requestedUserId)
    .get();

  if (!requestedUserSnapshot.exists) {
    return NextResponse.json(
      { error: "This user does not exist." },
      { status: 404 },
    );
  }

  const requestedUserPublicVows = await adminDb
    .collection("vows")
    .where("authorId", "==", requestedUserId)
    .where("visibility", "==", "public")
    .get();

  const requestedUserData = requestedUserSnapshot.data() as User;
  const requestedUserPublicVowsData: Vow[] = requestedUserPublicVows.docs.map(
    (doc) =>
      ({
        vowId: doc.id,
        ...doc.data(),
      }) as Vow,
  );

  const response = {};
  return NextResponse.json(response, { status: 200 });
}
