import Image from "next/image";
import { FormEventHandler } from "react";

const Start = ({
  handleOnClick,
}: {
  handleOnClick: FormEventHandler<HTMLElement> | undefined;
}) => {
  return (
    <section className="flex flex-col items-center gap-6">
      <Image
        src="/static/bruno.svg"
        alt="bruno Image"
        width={64}
        height={64}
        className="w-64 h-64 rounded-full"
      />
      <h1 className="text-center font-bold text-2xl">
        Bruno&apos;s Customer Support
      </h1>
      <form onSubmit={handleOnClick}>
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            placeholder="Your name"
            className="w-full transition p-2 text-sm border border-slate-300/60 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 pr-16 rounded-xl"
          />
          <small className="text-slate-500 italic">
            Please provide a name so Bruno knows who he&apos;s talkin to.
          </small>
          <button
            type="submit"
            className="transition w-full bg-blue-950 text-slate-300 font-medium py-2 px-3 rounded hover:bg-opacity-90"
          >
            Start a New Chat
          </button>
          <button
            type="button"
            className="transition w-full bg-slate-200 text-slate-600 font-medium py-2 px-3 rounded hover:bg-opacity-90"
          >
            Continue Previous Chat
          </button>
        </div>
      </form>
    </section>
  );
};

export default Start;
