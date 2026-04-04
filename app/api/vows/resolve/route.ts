import { VowResolution } from "@/types/VowResolution";
import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export interface VowResolutionPayload {
  vowId: string;
  vowResolutionOutcome: VowResolution["outcome"];
  vowResolutionNote: VowResolution["resolutionNote"];
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "User is not authenticated" },
      { status: 401 },
    );
  }

  try {
    const { vowId, vowResolutionOutcome, vowResolutionNote } =
      (await req.json()) as VowResolutionPayload;

    if (!vowId || !vowResolutionOutcome) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const vowSnapshot = adminDb.collection("vows").doc(vowId);
    const vowDocument = await vowSnapshot.get();

    if (!vowDocument.exists)
      return NextResponse.json(
        { error: "Vow does not exist." },
        { status: 404 },
      );

    await vowSnapshot.update({
      status: {
        outcome: vowResolutionOutcome,
        resolutionNote: vowResolutionNote,
        resolutionTimestamp: Date.now(),
      },
    });

    return NextResponse.json(
      { message: "Vow resolved successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "An error occured in the server.",
      },
      { status: 500 },
    );
  }
}
