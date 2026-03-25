import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ exists: false });
  }

  const doc = await adminDb.collection("users").doc(userId).get();

  return NextResponse.json({
    exists: doc.exists,
  });
}
