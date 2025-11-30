import React, { useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
import CharacterBubble from "./ui/CharacterBubble";
import useChatAssistant from "../hooks/useChatAssistant";

export default function ChatPanel({ question = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isLoading, error, sendMessage, resetChat } =
    useChatAssistant(question);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="w-full rounded-[32px] border-2 border-sky-100 bg-white/90 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Chat with Tali
          </p>
          <p className="text-base font-semibold text-sky-900">
            Need help? Type a message.
          </p>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-sm font-semibold text-sky-600 underline decoration-dotted"
        >
          {isOpen ? "Hide" : "Open"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-3">
          <div className="max-h-60 overflow-y-auto rounded-3xl bg-sky-50/70 p-3">
            {messages.map((message, index) => (
              <CharacterBubble
                key={`${message.role}-${index}`}
                tone={message.role === "assistant" ? "success" : "default"}
                className={`mb-2 text-sm ${
                  message.role === "assistant" ? "bg-white" : "bg-emerald-50"
                }`}
              >
                <span className="block text-xs font-semibold uppercase tracking-wide text-emerald-500">
                  {message.role === "assistant" ? "Tali" : "You"}
                </span>
                {message.content}
              </CharacterBubble>
            ))}
            {messages.length === 0 && (
              <p className="text-center text-sm text-sky-600">
                Say hi to start chatting!
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Hey Tali, I need help..."
              className="flex-1 rounded-2xl border-2 border-sky-200 px-4 py-3 text-base outline-none focus:border-sky-400"
              disabled={isLoading}
            />
            <PrimaryButton
              type="submit"
              className="whitespace-nowrap bg-sky-500 text-base hover:bg-sky-600"
              disabled={isLoading}
            >
              {isLoading ? "Thinking..." : "Send"}
            </PrimaryButton>
          </form>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <button
              type="button"
              onClick={resetChat}
              className="font-semibold text-rose-500 underline"
            >
              Reset chat
            </button>
            {error && <p className="text-rose-600">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

