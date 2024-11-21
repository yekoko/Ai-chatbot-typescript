import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useContext,
  useState,
} from "react";
import { StateContext } from "@/contexts/state.context";

interface FormValues {
  message: string;
}
const defaultFormfields = {
  message: "",
};
const MessageForm = () => {
  const { messages, setMessages, getCustomerInitials } =
    useContext(StateContext);
  const customerName = getCustomerInitials() || "";
  const [formFields, setFormFields] = useState<FormValues>(defaultFormfields);
  const { message } = formFields;

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleMessageFormSubmit(event);
    }
  };

  const handleMessageFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setFormFields(defaultFormfields);
    setMessages([
      ...messages,
      {
        name: customerName,
        message,
        isBruno: false,
        timestamp: new Date().toLocaleString([], {
          timeStyle: "short",
        }),
      },
    ]);
  };
  return (
    <form className="relative" onSubmit={handleMessageFormSubmit}>
      <textarea
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        name="message"
        className="transition p-4 w-full text-sm border border-slate-300/60 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 pr-16 rounded-xl resize-none"
        placeholder="Enter your message..."
      ></textarea>
      <button
        type="submit"
        className="absolute top-2 right-2 h-10 w-10 flex items-center justify-center bg-gradient-to-t from-sky-500 to-emerald-500 rounded-full text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-send"
          viewBox="0 0 16 16"
        >
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
        </svg>
      </button>
    </form>
  );
};

export default MessageForm;
