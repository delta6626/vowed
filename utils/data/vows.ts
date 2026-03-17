import "server-only";
import { CACHE_KEYS } from "@/constants/CACHE_KEYS";
import { NEXT_TAGS } from "@/constants/NEXT_TAGS";
import { unstable_cache } from "next/cache";
import { adminDb } from "../firebase/admin";
import { Vow } from "@/types/Vow";

export const getActiveVowCount = unstable_cache(
  async (userId: string) => {
    const snapshot = await adminDb
      .collection("vows")
      .where("authorId", "==", userId)
      .get();

    const vows: Vow[] = snapshot.docs.map((doc) => doc.data() as Vow);
    const activeCount = vows.filter((vow) => vow.status === "waiting").length;
    return activeCount;
  },
  [CACHE_KEYS.ACTIVE_VOWS],
  {
    tags: [NEXT_TAGS.DASHBOARD_STATS],
  },
);
