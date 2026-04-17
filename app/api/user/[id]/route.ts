import { GetRequestedUserResponse } from "@/types/GetRequestedUserResponse";
import { PublicVowResponse } from "@/types/PublicVowResponse";
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
  const requestedUserPublicVowsData: PublicVowResponse[] =
    requestedUserPublicVows.docs.map((doc) => {
      const vowData = doc.data() as Vow;
      const now = Date.now();
      const vowStatusFormatted =
        vowData.status === "waiting" && vowData.deadlineTimestampUTC > now
          ? "Waiting"
          : vowData.status === "waiting" && vowData.deadlineTimestampUTC < now
            ? "Moment of truth"
            : vowData.status === "fulfilled"
              ? "Fulfilled"
              : "Not fulfilled";
      return {
        vowId: doc.id,
        title: vowData.title,
        statusFormatted: vowStatusFormatted,
        commentCount: vowData.commentCount,
        viewCount: vowData.viewCount,
        createdAt: vowData.createdAt,
      };
    });

  const response: GetRequestedUserResponse = {
    displayName: requestedUserData.displayName,
    profilePhotoURL: requestedUserData.avatarURL,
    totalVows: requestedUserData.vowsCreated,
    fulfilledVows: requestedUserData.vowsFulfilled,
    waitingVows: requestedUserData.vowsWaiting,
    publicVows: requestedUserPublicVowsData,
  };

  return NextResponse.json(response, { status: 200 });
}
