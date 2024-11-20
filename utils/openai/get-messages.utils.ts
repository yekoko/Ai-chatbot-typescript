import { client } from "./openai.utils";

export const getLatestMessages = async (threadId: string, runId: string) => {
  let run = await client.beta.threads.runs.retrieve(threadId, runId);
  
  while (run.status != "completed") {
    await new Promise((resolve) => setTimeout(resolve, 500));
    run = await client.beta.threads.runs.retrieve(threadId, runId);
  }

  return await client.beta.threads.messages.list(threadId);
};
