import { VowResolution } from "@/types/VowResolution";
import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export interface VowResolutionPayload {
  vowId: string;
  vowResolutionOutcome: Pick<VowResolution, "outcome">;
  vowResolutionNote: Pick<VowResolution, "resolutionNote">;
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
    const vowSnaphot = await adminDb.collection("vows").doc(vowId);
    const vowDocument = await vowSnaphot.get();

    if (!vowDocument.exists)
      return NextResponse.json(
        { error: "Vow does not exist." },
        { status: 404 },
      );

    await vowSnaphot.update({
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
    return NextResponse.json(
      {
        error: "An error occured in the server.",
      },
      { status: 500 },
    );
  }
}
