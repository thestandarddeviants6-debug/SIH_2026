import React, { useEffect, useRef, useState } from "react";
import { Bot, X, Send, User } from "lucide-react";
import { getAssistantReply, AssistantTemplates } from "../../services/officerAssistant";

interface Message {
  from: "user" | "bot";
  text: string;
}

interface AIAssistantWidgetProps {
  labels: {
    title: string;
    placeholder: string;
    greeting: string;
    launcherLabel: string;
    typing: string;
  };
  templates: AssistantTemplates;
  chips: string[];
}

/**
 * Floating AI virtual assistant for the Officer dashboard. Purely a
 * frontend mock: replies are matched against a small set of intents and
 * formatted from the officer's own mock dashboard data (see
 * services/officerAssistant.ts) — there is no real model or backend call.
 * Messages are revealed one at a time (with a brief "typing" pause before
 * the bot's reply) rather than appearing all at once.
 */
const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ labels, templates, chips }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: labels.greeting }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  function sendText(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const reply = getAssistantReply(trimmed, templates);
      setMessages((m) => [...m, { from: "bot", text: reply }]);
      setTyping(false);
    }, 650);
  }

  function handleSend() {
    sendText(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={labels.launcherLabel}
        aria-expanded={open}
        className="focus-ring fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brandBlue text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-xl"
      >
        {open ? <X size={22} aria-hidden="true" /> : <Bot size={24} aria-hidden="true" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-40 flex h-[520px] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#EAEFF5] bg-white shadow-2xl sm:right-6">
          <div className="flex items-center gap-2.5 border-b border-[#EAEFF5] bg-skyFaint px-4 py-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brandBlue">
              <Bot size={18} className="text-white" aria-hidden="true" />
            </span>
            <p className="text-sm font-extrabold text-navy">{labels.title}</p>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 ${m.from === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    m.from === "user" ? "bg-navy" : "bg-brandBlue"
                  }`}
                >
                  {m.from === "user" ? <User size={12} className="text-white" aria-hidden="true" /> : <Bot size={12} className="text-white" aria-hidden="true" />}
                </span>
                <p
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user" ? "rounded-br-sm bg-brandBlue text-white" : "rounded-bl-sm border border-[#EAEFF5] bg-skyFaint text-navy"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex items-end gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brandBlue">
                  <Bot size={12} className="text-white" aria-hidden="true" />
                </span>
                <p className="rounded-2xl rounded-bl-sm border border-[#EAEFF5] bg-skyFaint px-3.5 py-2.5 text-xs font-semibold text-[#8AA0BF]">{labels.typing}</p>
              </div>
            )}
          </div>

          {messages.length <= 1 && !typing && (
            <div className="flex flex-wrap gap-1.5 border-t border-[#EAEFF5] px-3 py-2.5">
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => sendText(chip)}
                  className="focus-ring rounded-full border border-[#DCE9F7] bg-white px-3 py-1.5 text-xs font-semibold text-brandBlue transition hover:bg-skyFaint"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 border-t border-[#EAEFF5] p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={labels.placeholder}
              className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2 text-sm text-navy outline-none focus:border-brandBlue"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim() || typing}
              aria-label="Send"
              className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandBlue text-white transition hover:bg-brandBlue-bright disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistantWidget;
