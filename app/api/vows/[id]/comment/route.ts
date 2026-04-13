import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const [{ id: vowId }, { userId }] = await Promise.all([params, auth()]);
}
