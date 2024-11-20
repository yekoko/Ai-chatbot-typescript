import Image from "next/image";
import MessageForm from "./message-form";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "@/contexts/state.context";
import ChatLog from "./chat-log";
import { IMessage } from "@/types";
import { fetchLatestMessages } from "@/lib/latest-messages";

const Chat = () => {
  const { getCustomerInitials, messages, setMessages } =
    useContext(StateContext);
  const [isLoading, setIsLoading] = useState(false);
  const customerName = getCustomerInitials() || "";
  useEffect(() => {
    const getAllMessages = async () => {
      setIsLoading(true);
      const latestMessages = await fetchLatestMessages();
      latestMessages.forEach((msg: { content: any[]; role: string }) => {
        const content = msg.content[0];
        if (content?.type === "text") {
          setMessages([
            {
              name: msg.role === "assistant" ? "Bruno" : customerName,
              message: content.text.value,
              isBruno: msg.role === "assistant" ? true : false,
              timestamp: new Date().toLocaleString([], {
                timeStyle: "short",
              }),
            },
          ]);
        }
      });
      setIsLoading(false);
    };

    getAllMessages();
  }, []);

  return (
    <section className="flex flex-col min-w-[520px] w-full">
      <div className="flex items-center gap-3.5 pb-4 border-b border-dashed">
        <div>
          <div className="w-12 h-12 overflow-hidden rounded-full image-fit border-2 border-slate-200/70">
            <Image
              src="/static/bruno.svg"
              alt="profile image"
              width={48}
              height={48}
            />
          </div>
        </div>
        <div>
          <div className="font-medium truncate max-w-[9rem] md:max-w-none">
            Bruno
          </div>
          <div className="text-slate-500 mt-0.5 truncate max-w-[9rem] md:max-w-none">
            Customer Support Agent
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="text-center text-2xl py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 mx-auto animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      ) : (
        <div className="flex flex-col gap-3.5 py-5 px-3 overflow-y-scroll max-h-[400px]">
          {Array.isArray(messages) &&
            messages.map((message: IMessage, idx: number) => (
              <ChatLog key={idx} message={message} />
            ))}
        </div>
      )}
      <MessageForm />
    </section>
  );
};

export default Chat;
