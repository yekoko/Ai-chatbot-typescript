import Image from "next/image";
import { IMessage } from "@/types";

type ChatLogProps = {
  message: IMessage; // Accept IMessage as the type
};

const ChatLog = ({ message }: ChatLogProps) => {
  return (
    <>
      {message.isBruno ? (
        <div className="flex items-end gap-3">
          <Image
            src="/static/bruno.svg"
            alt="user profile"
            width={48}
            height={48}
            className="block overflow-hidden rounded-full border-2 border-slate-200/70"
          />

          <div className="w-3/5 flex flex-col gap-2 border px-4 pt-3 pb-4 rounded-xl bg-slate-50/80 border-slate-200/80">
            <div>{message.message}</div>
            <div className="text-xs text-slate-500/70">{message.timestamp}</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row-reverse gap-3">
          <div className="flex uppercase items-center justify-center text-xl text-center text-white font-bold bg-gradient-to-t from-sky-500 to-emerald-500 w-12 h-12 overflow-hidden rounded-full border-2 border-slate-200/70">
            {message.name}
          </div>

          <div className="w-3/5 flex flex-col gap-2 border px-4 pt-3 pb-4 rounded-xl bg-slate-50/80 border-slate-200/80">
            <div>{message.message}</div>
            <div className="text-xs text-slate-500/70">{message.timestamp}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatLog;
