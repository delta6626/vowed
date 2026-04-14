import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { FieldValue } from "firebase-admin/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const [{ id: vowId }, { userId, sessionClaims }, { commentText }] =
    await Promise.all([params, auth(), request.json()]);

  if (!userId) {
    return NextResponse.json(
      { error: "User must be authenticated to leave a comment." },
      { status: 401 },
    );
  }

  const vowReference = await adminDb.collection("vows").doc(vowId);
  const vowSnapshot = await vowReference.get();

  if (!vowSnapshot.exists) {
    return NextResponse.json(
      { error: "This vow does not exist." },
      { status: 404 },
    );
  }

  const vowComment = {
    commenterId: userId,
    commenterName: sessionClaims.fullName, // Fetch froms session token. `fullName` is not a default property of the sessionClaims object. Set up required in Clerk dashboard.
    commentText: commentText,
    commentCreationTimestamp: Date.now(),
  };

  try {
    await vowReference.collection("comments").add(vowComment);
    await vowReference.update({ commentCount: FieldValue.increment(1) });

    return NextResponse.json(
      { message: "Comment created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An internal error occurred." },
      { status: 500 },
    );
  }
}
