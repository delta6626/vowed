import { adminDb } from "@/utils/firebase/admin";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ exists: false });
  }

  const doc = await adminDb.collection("users").doc(user.id).get();

  return NextResponse.json({
    exists: doc.exists,
  });
}
