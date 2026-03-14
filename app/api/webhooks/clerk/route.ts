import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
  const payload = req.json();
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
    case "user.created":
      break;
    case "user.updated":
      break;
    case "user.deleted":
      break;
  }
}
