"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { IMessage } from "@/types";

interface StateContextType {
  isChatting: boolean;
  setIsChatting: Dispatch<SetStateAction<boolean>>;
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

export const StateContext = createContext<StateContextType>({
  isChatting: false,
  setIsChatting: () => {},
  messages: [],
  setMessages: () => {},
});

interface StateProviderProps {
  children: ReactNode;
}
export const StateProvider = ({ children }: StateProviderProps) => {
  const [isChatting, setIsChatting] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const value = {
    isChatting,
    setIsChatting,
    messages,
    setMessages,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
