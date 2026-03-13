import DashboardStatBox from "@/components/generic/DashboardStatBox";
import Navbar from "@/components/navigation/Navbar";
import { getGreeting } from "@/utils/functions/getGreeting";
import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = (await currentUser())!;

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="doublePaddingContainer">
        <div className="mt-16">
          <h1 className="font-display text-4xl">
            {getGreeting() + ", "}
            <span className="text-primary italic">{user.firstName}.</span>
          </h1>

          <p className="font-body text-accent text-xl mt-2">
            Here's where your vows stand today.
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <DashboardStatBox statBoxType="active" mainText="7" />
          <DashboardStatBox statBoxType="fulfillment" mainText="92%" />
          <DashboardStatBox statBoxType="total" mainText="17" />
        </div>
      </div>
    </div>
  );
}
