import Image from "next/image";
import MessageForm from "./message-form";

const Chat = () => {
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
      <div className="flex flex-col gap-3.5 py-5 px-3 overflow-y-scroll max-h-[400px]">
        <div className="flex items-end gap-3">
          <Image
            src="/static/bruno.svg"
            alt="user profile"
            width={48}
            height={48}
            className="block overflow-hidden rounded-full border-2 border-slate-200/70"
          />

          <div className="w-3/5 flex flex-col gap-2 border px-4 pt-3 pb-4 rounded-xl bg-slate-50/80 border-slate-200/80">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mollis massa in lacus vulputate scelerisque. Duis ultrices est in
              faucibus porttitor.
            </div>
            <div className="text-xs text-slate-500/70">12:00 AM</div>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-3">
          <div className="flex uppercase items-center justify-center text-xl text-center text-white font-bold bg-gradient-to-t from-sky-500 to-emerald-500 w-12 h-12 overflow-hidden rounded-full border-2 border-slate-200/70">
            KK
          </div>

          <div className="w-3/5 flex flex-col gap-2 border px-4 pt-3 pb-4 rounded-xl bg-slate-50/80 border-slate-200/80">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mollis massa in lacus vulputate scelerisque. Duis ultrices est in
              faucibus porttitor.
            </div>
            <div className="text-xs text-slate-500/70">12:00 AM</div>
          </div>
        </div>
        <div className="flex items-end gap-3">
          <Image
            src="/static/bruno.svg"
            alt="user profile"
            width={48}
            height={48}
            className="block overflow-hidden rounded-full border-2 border-slate-200/70"
          />

          <div className="w-3/5 flex flex-col gap-2 border px-4 pt-3 pb-4 rounded-xl bg-slate-50/80 border-slate-200/80">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mollis massa in lacus vulputate scelerisque. Duis ultrices est in
              faucibus porttitor.
            </div>
            <div className="text-xs text-slate-500/70">12:00 AM</div>
          </div>
        </div>
      </div>
      <MessageForm />
    </section>
  );
};

export default Chat;
