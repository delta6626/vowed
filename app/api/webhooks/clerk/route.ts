import { User } from "@/types/User";
import { adminDb } from "@/utils/firebase/admin";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
  const payload = await req.json();
  const headersList = await headers();

  const webhook = new Webhook(process.env.CLERK_USER_MODIFIED_WEBHOOK_SECRET!);
  let event: WebhookEvent;

  try {
    event = webhook.verify(JSON.stringify(payload), {
      "svix-id": headersList.get("svix-id")!,
      "svix-timestamp": headersList.get("svix-timestamp")!,
      "svix-signature": headersList.get("svix-signature")!,
    }) as WebhookEvent;
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  switch (event.type) {
    case "user.created": {
      const user: User = {
        clerkId: event.data.id,
        displayName: event.data.first_name + " " + event.data.last_name,
        avatarURL: event.data.image_url,
        plan: "basic",
        vowsWaiting: 0,
        vowsCreated: 0,
        vowsFulfilled: 0,
      };

      await adminDb.collection("users").doc(event.data.id).set(user);
      break;
    }

    case "user.updated":
      const updatedUserProperties: Partial<User> = {
        displayName: event.data.first_name + " " + event.data.last_name,
        avatarURL: event.data.image_url,
      };

      await adminDb
        .collection("users")
        .doc(event.data.id)
        .update(updatedUserProperties);
      break;

    case "user.deleted":
      const batchSize = 500;

      while (true) {
        const snapshot = await adminDb
          .collection("vows")
          .where("authorId", "==", event.data.id!)
          .limit(batchSize)
          .get();

        if (snapshot.empty) break;

        const batch = adminDb.batch();

        snapshot.docs.forEach((doc) => {
          batch.delete(doc.ref);
        });

        await batch.commit();
      }

      await adminDb.collection("users").doc(event.data.id!).delete();
      break;
  }

  return new Response("OK", { status: 200 });
}
