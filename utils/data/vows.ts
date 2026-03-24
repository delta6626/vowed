import "server-only";
import { adminDb } from "../firebase/admin";
import { Vow } from "@/types/Vow";
import { User } from "@/types/User";

export const getActiveVowCount = async (userId: string) => {
  const snapshot = await adminDb
    .collection("vows")
    .where("authorId", "==", userId)
    .get();

  const vows: Vow[] = snapshot.docs.map((doc) => doc.data() as Vow);
  const activeCount = vows.filter((vow) => vow.status === "waiting").length;
  return activeCount;
};

export const getFulfillmentRate = async (userId: string) => {
  const snapshot = await adminDb.collection("users").doc(userId).get();
  const userRecord = snapshot.data() as User;
  const vowsFulfilled = userRecord.vowsFulfilled;
  const vowsCreated = userRecord.vowsCreated;

  if (!vowsCreated) return 0;
  else {
    return Math.floor((vowsFulfilled / vowsCreated) * 100);
  }
};

export const getTotalVows = async (userId: string) => {
  const snapshot = await adminDb.collection("users").doc(userId).get();
  const userRecord = snapshot.data() as User;
  return userRecord.vowsCreated;
};
