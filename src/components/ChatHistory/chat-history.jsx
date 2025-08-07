import { useLayoutEffect, useRef } from "react";

export function ChatHistory({ messages }) {
  const chatHistoryEndRef = useRef(null);

  useLayoutEffect(() => {
    if (chatHistoryEndRef.current) {
      chatHistoryEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col gap-3 p-4 overflow-y-auto max-h-[60vh]">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.type === "request" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-xs sm:max-w-sm md:max-w-md px-4 py-2 rounded-2xl shadow
              ${
                msg.type === "request"
                  ? "bg-black text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={chatHistoryEndRef} />
    </div>
  );
}
