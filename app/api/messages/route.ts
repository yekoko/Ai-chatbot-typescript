import { NextRequest } from "next/server";
import { getLatestMessages } from "@/utils/openai/get-messages.utils";
import { assistant, client } from "@/utils/openai/openai.utils";

export async function GET(request: NextRequest) {
  const cookies = request.cookies;
  const threadId = cookies.get("next-thread-id")?.value;
  const runId = cookies.get("next-run-id")?.value;

  if (!threadId || !runId) {
    return;
  }
  const data = await getLatestMessages(threadId, runId);
  return Response.json({ data });
}

export async function POST(request: NextRequest) {
  const cookies = request.cookies;
  const threadId = cookies.get("next-thread-id")?.value;

  if (!threadId) {
    return;
  }

  const { message } = await request.json();
  //return Response.json({ message });

  await client.beta.threads.messages.create(threadId, {
    role: "user",
    content: message?.toString() ?? "",
  });

  const run = await client.beta.threads.runs.create(threadId, {
    assistant_id: assistant,
  });

  const data = await getLatestMessages(threadId, run.id);
  return Response.json({ data });
}
