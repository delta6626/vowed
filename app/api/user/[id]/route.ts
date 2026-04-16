import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const [{ id: requestedUserId }, { userId }] = await Promise.all([
    params,
    auth(),
  ]);

  if (!userId) {
    return NextResponse.json(
      { error: "User must be authenticated" },
      { status: 401 },
    );
  }
}
