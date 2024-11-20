"use client";

import { useContext } from "react";
import Chat from "@/components/chat.server";
import Start from "@/components/start.client";
import { StateContext } from "@/contexts/state.context";

export default function Home() {
  const { isChatting } = useContext(StateContext);
  return (
    <div
      className="bg-repeat bg-cover w-full h-full font-sans"
      style={{ backgroundImage: "url(/static/bg.png)" }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="max-w-[800px] relative z-20 shadow-lg after:content-[' '] after:z-[-1] after:h-full after:bg-slate-100 after:border after:border-slate-200 after:absolute after:left-2.5 after:right-2.5 after:top-0 after:mt-2 after:rounded">
          <div className="bg-white border border-slate-200 p-6 rounded">
            {isChatting ? <Chat /> : <Start />}
          </div>
        </div>
      </div>
    </div>
  );
}
