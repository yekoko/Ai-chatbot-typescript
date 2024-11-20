"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { IMessage } from "@/types";
import Cookies from "js-cookie";

interface StateContextType {
  isChatting: boolean;
  setIsChatting: Dispatch<SetStateAction<boolean>>;
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
  getCustomerInitials: () => string | undefined;
}

export const StateContext = createContext<StateContextType>({
  isChatting: false,
  setIsChatting: () => {},
  messages: [],
  setMessages: () => {},
  getCustomerInitials: () => undefined,
});

interface StateProviderProps {
  children: ReactNode;
}
export const StateProvider = ({ children }: StateProviderProps) => {
  const [isChatting, setIsChatting] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const getCustomerInitials = (): string | undefined => {
    const customerName = Cookies.get("customerName");

    if (!customerName) return undefined;

    const names = customerName.split(" ");
    if (names.length < 2) {
      return names[0]?.substring(0, 2);
    }

    return `${names[0][0]}${names[1][0]}`.toUpperCase();
  };

  const value = {
    isChatting,
    setIsChatting,
    messages,
    setMessages,
    getCustomerInitials,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
