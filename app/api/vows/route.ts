import { CREATE_VOW } from "@/constants/CREATE_VOW";
import { Vow } from "@/types/Vow";
import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";

export type ClientVowDetails = Pick<
  Vow,
  "title" | "description" | "deadlineTimestampUTC" | "visibility"
>;

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  try {
    const snapshot = await adminDb
      .collection("vows")
      .where("authorId", "==", userId)
      .get();

    const allVows: Vow[] = snapshot.docs.map(
      (doc) =>
        ({
          vowId: doc.id,
          ...doc.data(),
        }) as Vow,
    );

    const currentTimestampUTC = Date.now();

    return NextResponse.json(
      { vows: allVows, currentTimestampUTC: currentTimestampUTC },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({
      error: "An error occured on the server",
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  try {
    const { title, description, deadlineTimestampUTC, visibility } =
      (await req.json()) as ClientVowDetails;
    const currentTimestampUTC = Date.now();
    const timeStampDifference = deadlineTimestampUTC - currentTimestampUTC;

    if (!title || !deadlineTimestampUTC || !visibility) {
      return NextResponse.json(
        { error: "One or more vow attributes are missing." },
        { status: 400 },
      );
    }

    if (
      timeStampDifference <
      CREATE_VOW.MINIMUM_DEADLINE_TIME_MINUTES * 60 * 1000
    ) {
      return NextResponse.json(
        {
          error: `Vow deadline must be ${CREATE_VOW.MINIMUM_DEADLINE_TIME_MINUTES} minutes in the future, at least.`,
        },
        { status: 400 },
      );
    }

    const vow: Vow = {
      authorId: userId,
      title: title,
      description: description,
      deadlineTimestampUTC: deadlineTimestampUTC,
      visibility: visibility,
      status: "waiting",
      resolution: null,
      viewCount: 0,
      commentCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const createdVow = await adminDb.collection("vows").add(vow);
    await adminDb
      .collection("users")
      .doc(userId)
      .update({ vowsCreated: FieldValue.increment(1) });

    return NextResponse.json(
      { message: "Vow created successfully.", vowId: createdVow.id },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occured on the server." },
      { status: 500 },
    );
  }
}
