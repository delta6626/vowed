import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const [{ id: vowId }, { userId }] = await Promise.all([params, auth()]);

  if (!userId) {
    return NextResponse.json(
      { error: "User must be authenticated to leave a comment." },
      { status: 401 },
    );
  }
}
