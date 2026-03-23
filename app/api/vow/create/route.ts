import { CREATE_VOW } from "@/constants/CREATE_VOW";
import { NEXT_TAGS } from "@/constants/NEXT_TAGS";
import { Vow } from "@/types/Vow";
import { adminDb } from "@/utils/firebase/admin";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export type ClientVowDetails = Pick<
  Vow,
  "title" | "description" | "deadlineTimestampUTC" | "visibility"
>;

export async function POST(req: NextRequest) {
  const user = await currentUser();

  if (!user) {
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
      authorId: user.id,
      title: title,
      description: description,
      deadlineTimestampUTC: deadlineTimestampUTC,
      visibility: visibility,
      status: "waiting",
      resolution: null,
      viewCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const createdVow = await adminDb.collection("vows").add(vow);
    revalidateTag(`${NEXT_TAGS.DASHBOARD_STATS}-${user.id}`, "page");

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
