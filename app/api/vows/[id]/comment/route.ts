import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const [{ id: vowId }, { userId, sessionClaims }, { commentText }] =
    await Promise.all([params, auth(), request.json()]);

  const vowReference = await adminDb.collection("vows").doc(vowId);
  const vowSnapshot = await vowReference.get();

  if (!userId) {
    return NextResponse.json(
      { error: "User must be authenticated to leave a comment." },
      { status: 401 },
    );
  }

  if (!vowId) {
    return NextResponse.json(
      { error: "vowId is required to create a comment." },
      { status: 400 },
    );
  }

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
    return NextResponse.json(
      { message: "Comment created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An internal error occured." },
      { status: 500 },
    );
  }
}
