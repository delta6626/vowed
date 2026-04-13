import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const [{ id: vowId }, { userId }, { commenterName, commentId, commentText }] =
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
}
