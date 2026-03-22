import { Vow } from "@/types/Vow";
import { NextRequest, NextResponse } from "next/server";

export type ClientVowDetails = Pick<
  Vow,
  "title" | "description" | "deadlineTimestampUTC" | "visibility"
>;

export async function POST(req: NextRequest) {
  try {
    const vowDetails = (await req.json()) as ClientVowDetails;

    if (
      !vowDetails.title ||
      !vowDetails.deadlineTimestampUTC ||
      !vowDetails.visibility
    ) {
      return NextResponse.json(
        { error: "One or more vow attributes are missing." },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "An error occured on the server." },
      { status: 500 },
    );
  }
}
