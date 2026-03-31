import { User } from "@/types/User";
import { adminDb } from "@/utils/firebase/admin";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "User is not authenticated." },
      { status: 401 },
    );
  }

  const doc = await adminDb.collection("users").doc(userId).get();
  const user = doc.data() as User;

  return NextResponse.json({ ...user }, { status: 200 });
}
