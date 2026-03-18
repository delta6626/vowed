import "server-only";
import { CACHE_KEYS } from "@/constants/CACHE_KEYS";
import { NEXT_TAGS } from "@/constants/NEXT_TAGS";
import { unstable_cache } from "next/cache";
import { adminDb } from "../firebase/admin";
import { Vow } from "@/types/Vow";
import { User } from "@/types/User";

export const getActiveVowCount = (userId: string) =>
  unstable_cache(
    async () => {
      const snapshot = await adminDb
        .collection("vows")
        .where("authorId", "==", userId)
        .get();

      const vows: Vow[] = snapshot.docs.map((doc) => doc.data() as Vow);
      const activeCount = vows.filter((vow) => vow.status === "waiting").length;
      return activeCount;
    },
    [CACHE_KEYS.ACTIVE_VOWS, userId],
    { tags: [`${NEXT_TAGS.DASHBOARD_STATS}-${userId}`] },
  );

export const getFulfillmentRate = (userId: string) =>
  unstable_cache(
    async () => {
      const snapshot = await adminDb.collection("users").doc(userId).get();
      const userRecord = snapshot.data() as User;
      const vowsFulfilled = userRecord.vowsFulfilled;
      const vowsCreated = userRecord.vowsCreated;

      if (!vowsCreated) return 0;
      else {
        return Math.floor((vowsFulfilled / vowsCreated) * 100);
      }
    },

    [CACHE_KEYS.FULFILLMENT_RATE, userId],
    { tags: [`${NEXT_TAGS.DASHBOARD_STATS}-${userId}`] },
  );

export const getTotalVows = (userId: string) =>
  unstable_cache(
    async () => {
      const snapshot = await adminDb.collection("users").doc(userId).get();
      const userRecord = snapshot.data() as User;
      return userRecord.vowsCreated;
    },
    [CACHE_KEYS.TOTAL_VOWS, userId],
    {
      tags: [`${NEXT_TAGS.DASHBOARD_STATS}-${userId}`],
    },
  );
