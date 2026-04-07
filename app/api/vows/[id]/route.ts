import { GetVowResponse } from "@/types/GetVowRespsonse";
import { User } from "@/types/User";
import { Vow } from "@/types/Vow";
import { adminDb } from "@/utils/firebase/admin";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // Note: Vows can be seen without being authenticated. Hence, no auth checks.
  const { id: vowId } = await params;

  const vowSnapshot = await adminDb.collection("vows").doc(vowId).get();

  if (!vowSnapshot.exists) {
    return NextResponse.json(
      { error: "This vow does not exist." },
      { status: 404 },
    );
  }

  const vowData = vowSnapshot.data() as Vow;

  if (vowData.visibility === "private") {
    return NextResponse.json(
      { error: "This vow is private and cannot be accessed." },
      { status: 403 },
    );
  }

  const [vowCommentsSnapshot, vowCreator] = await Promise.all([
    adminDb.collection("vows").doc(vowId).collection("comments").get(),
    adminDb.collection("users").doc(vowData.authorId).get(),
  ]);

  const vowCreatorData = vowCreator.data() as User;
  const now = Date.now();

  let vowStatusFormatted;

  if (vowData.status === "waiting" && now < vowData.deadlineTimestampUTC) {
    vowStatusFormatted = "Waiting";
  } else if (
    vowData.status === "waiting" &&
    now >= vowData.deadlineTimestampUTC
  ) {
    vowStatusFormatted = "Moment of truth";
  } else if (vowData.status === "fulfilled") {
    vowStatusFormatted = "Fulfilled";
  } else {
    vowStatusFormatted = "Not fulfilled";
  }

  const vowComments = vowCommentsSnapshot.empty
    ? []
    : vowCommentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

  const vowResolution =
    vowData.status === "fulfilled" || vowData.status === "not-fulfilled"
      ? vowData.resolution
      : null;

  const vowCreatorFulfillmentRate =
    vowCreatorData.vowsCreated === 0
      ? 0
      : Math.round(
          (vowCreatorData.vowsFulfilled / vowCreatorData.vowsCreated) * 100,
        );

  const response = {
    vowId: vowId,
    currentTimestampUTC: now,
    vowStatus: vowData.status,
    vowStatusFormatted: vowStatusFormatted,
    vowCreationDate: vowData.createdAt,
    vowTitle: vowData.title,
    vowDescription: vowData.description,
    vowDeadlineTimestampUTC: vowData.deadlineTimestampUTC,
    vowCommentCount: vowData.commentCount,
    vowViewCount: vowData.viewCount,
    vowComments: vowComments,
    vowResolution: vowResolution,
    vowCreatorProfilePhoto: vowCreatorData.avatarURL,
    vowCreatorName: vowCreatorData.displayName,
    vowCreatorFulfillmentRate: vowCreatorFulfillmentRate,
  } as GetVowResponse;

  return NextResponse.json(response, { status: 200 });
}
