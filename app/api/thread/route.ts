import { client, assistant } from "@/utils/openai/openai.utils";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  try {
    const queryParams = request.nextUrl.searchParams;
    const customerName = queryParams.get("customer");

    const thread = await client.beta.threads.create();

    const run = await client.beta.threads.runs.create(thread.id, {
      assistant_id: assistant,
      additional_instructions: `The customer's name is ${customerName}`,
    });

    return Response.json({ thread: thread.id, run: run.id });
  } catch (error) {
    console.error("There is an error", error);
    return Response.json(`Something went wrong ${error}`, {
      status: 500,
    });
  }
}
