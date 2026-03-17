import { getActiveVowCount } from "@/utils/data/vows";
import DashboardStatBox from "../generic/DashboardStatBox";
import { currentUser } from "@clerk/nextjs/server";

export default async function ActiveVowsContainer() {
  const user = (await currentUser())!;

  let activeVowCount = 0;

  try {
    activeVowCount = await getActiveVowCount(user.id);
  } catch (error) {
    console.error(error);
  }

  return <DashboardStatBox statBoxType="active" mainText={activeVowCount} />;
}
