"use server";

import { adminDb } from "@/utils/firebase/admin";
import { currentUser } from "@clerk/nextjs/server";

export const checkUserRecordExists = async (): Promise<boolean> => {
  const user = (await currentUser())!;
  const doc = await adminDb.collection("users").doc(user.id).get();
  return doc.exists;
};
