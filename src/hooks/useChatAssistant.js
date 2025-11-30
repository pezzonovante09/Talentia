import { useCallback, useEffect, useRef, useState } from "react";

const API_KEY = "AIzaSyA4wX6JQKMklNiJ234kZqsnlMM_aVSVTKU"; 

const initialAssistantMessage = {
  role: "assistant",
  content: "Hi friend! I'm Tali 🦕. Let's start learning together!",
};

export default function useChatAssistant(questionText = "") {
  const [messages, setMessages] = useState([initialAssistantMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const sendMessage = useCallback(async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);

    try {
      setIsLoading(true);
      setError(null);

      const payload = {
        contents: [
          {
            role: "user",
            parts: [
              {
                text:
                  "You are Tali the Dino – a friendly, positive tutor for young children (5–8 years old).\n" +
                  "Your job: help the child solve this task in very SIMPLE and SHORT sentences.\n" +
                  "Always answer in 1–2 sentences only.\n" +
                  "Never use complicated explanations.\n" +
                  "Current task: " + questionText + "\n\n" +
                  "Chat history:\n" +
                  messagesRef.current.map((m) => `${m.role}: ${m.content}`).join("\n") +
                  "\nUser: " +
                  trimmed,

              },
            ],
          },
        ],
      };

      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=" +
          API_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const raw = await res.text();
      console.log("Gemini response:", raw);

      const data = JSON.parse(raw);

      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "Tali is confused 🦕💫";

      const assistantMessage = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setError("Tali cannot think right now 🦕💫");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetChat = useCallback(() => {
    setMessages([initialAssistantMessage]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    resetChat,
  };
}

