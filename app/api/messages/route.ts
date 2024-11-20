import { NextRequest } from "next/server";
import { getLatestMessages } from "@/utils/openai/get-messages.utils";

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
