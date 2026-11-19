"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useBobChat } from "@/components/BobChatProvider";
import { bobSuggestions, identifyContainer, type BobAnswer } from "@/lib/bob";

type Attachment = {
  url: string;
  name: string;
};

type Message = {
  id: string;
  from: "bob" | "user";
  text?: string;
  imageUrl?: string;
  answer?: BobAnswer;
};

const welcome: Message = {
  id: "welcome",
  from: "bob",
  text: "Hi, I’m Bob. Send a photo of a container, or tell me what it is, and I’ll tell you if we take it.",
};

export function BeverageBot() {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const promptDismissed = useRef(false);
  const busy = useRef(false);
  const timer = useRef<number | null>(null);
  const idCount = useRef(0);

  const { open, setOpen } = useBobChat();
  const [showPrompt, setShowPrompt] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [presets, setPresets] = useState<string[]>([...bobSuggestions]);
  const [draft, setDraft] = useState("");
  const [attachment, setAttachment] = useState<Attachment | null>(null);
  const [typing, setTyping] = useState(false);
  const [fileError, setFileError] = useState("");

  const chips = presets;

  useEffect(() => {
    const promptTimer = window.setTimeout(() => {
      if (!promptDismissed.current) {
        setShowPrompt(true);
      }
    }, 5000);

    return () => {
      window.clearTimeout(promptTimer);
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    promptDismissed.current = true;
    setShowPrompt(false);
  }, [open]);

  useEffect(() => {
    if (open && !wasOpen.current) {
      const smallScreen = window.matchMedia("(max-width: 639px)").matches;
      if (!smallScreen) {
        inputRef.current?.focus();
      }
    }
    if (!open && wasOpen.current) {
      const active = document.activeElement;
      const fromHeader = active instanceof Element && active.closest("[data-bob-launch]");
      if (!fromHeader) {
        launcherRef.current?.focus();
      }
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    endRef.current?.scrollIntoView({ block: "end" });
  }, [open, messages, typing, chips.length]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const items = [...panelRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), input:not([disabled])")].filter(
        (item) => item.tabIndex !== -1,
      );
      const first = items[0];
      const lastItem = items[items.length - 1];
      if (!first || !lastItem) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        first.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node) || panelRef.current?.contains(target)) {
        return;
      }
      if (target instanceof Element && target.closest("[data-bob-launch]")) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  function nextId() {
    idCount.current += 1;
    return `msg-${idCount.current}`;
  }

  function removeAttachment() {
    setAttachment((current) => {
      if (current) {
        URL.revokeObjectURL(current.url);
      }
      return null;
    });
  }

  function onFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) {
      return;
    }
    if (file.type && !file.type.startsWith("image/")) {
      setFileError("Choose a photo — JPG, PNG, or HEIC.");
      return;
    }
    setFileError("");
    setAttachment((current) => {
      if (current) {
        URL.revokeObjectURL(current.url);
      }
      return { url: URL.createObjectURL(file), name: file.name };
    });
  }

  function send(preset?: string) {
    const text = (preset ?? draft).trim();
    if (busy.current || (!text && !attachment)) {
      return;
    }

    const imageUrl = attachment?.url;
    const imageName = attachment?.name;
    if (preset) {
      setPresets((current) => current.filter((item) => item !== preset));
    }
    const userId = nextId();
    busy.current = true;
    setMessages((current) => [
      ...current,
      { id: userId, from: "user", text: text || undefined, imageUrl },
    ]);
    setDraft("");
    setAttachment(null);
    setFileError("");
    setTyping(true);

    const replyId = nextId();
    timer.current = window.setTimeout(() => {
      const answer = identifyContainer({ text, fileName: imageName, hasImage: Boolean(imageUrl) });
      setMessages((current) => [
        ...current,
        {
          id: replyId,
          from: "bob",
          answer,
        },
      ]);
      setTyping(false);
      busy.current = false;
      timer.current = null;
    }, 700);
  }

  return (
    <>
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="bob-pop fixed z-40 flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_20px_60px_rgba(33,5,87,0.22)] top-[calc(var(--header-height)+0.75rem)] right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 print:hidden sm:top-auto sm:right-auto sm:bottom-6 sm:left-6 sm:h-[min(36rem,calc(100dvh-3rem))] sm:w-[24rem]"
        >
          <div className="flex items-center gap-3 bg-forest px-4 py-3 text-white">
            <BobAvatar size="md" />
            <div className="min-w-0 flex-1" id={titleId}>
              <p className="font-display text-lg leading-tight">Bob</p>
              <p className="text-xs text-white/80">Beverage Bot</p>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col bg-cream">
            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-3 py-4" role="log" aria-live="polite" aria-relevant="additions">
              {messages.map((message) =>
                message.from === "user" ? (
                  <UserBubble key={message.id} message={message} />
                ) : (
                  <BobBubble key={message.id} message={message} />
                ),
              )}
              {typing ? (
                <>
                  <TypingBubble />
                  <span className="sr-only">Bob is typing</span>
                </>
              ) : null}
              <div ref={endRef} />
            </div>

            {chips.length > 0 ? (
              <div className="flex flex-wrap gap-2 px-3 pb-3">
                {chips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink hover:border-forest hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:opacity-50"
                    disabled={typing}
                    onClick={() => send(chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <form
            className="border-t border-line bg-white px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:pb-3"
            onSubmit={(event) => {
              event.preventDefault();
              send();
            }}
          >
            {attachment ? (
              <div className="mb-3 flex items-center gap-3 rounded-2xl border border-line bg-cream p-2">
                <img src={attachment.url} alt="" className="h-14 w-14 rounded-xl object-cover" />
                <p className="min-w-0 flex-1 truncate text-sm text-ink">{attachment.name}</p>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                  onClick={removeAttachment}
                  aria-label="Remove photo"
                >
                  <CloseIcon />
                </button>
              </div>
            ) : null}

            <div className="flex items-center gap-2">
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                tabIndex={-1}
                className="sr-only"
                onChange={onFile}
              />
              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-forest hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                onClick={() => fileRef.current?.click()}
                aria-label="Attach a photo"
              >
                <ImageIcon />
              </button>
              <label htmlFor="bob-message" className="sr-only">
                Message Bob
              </label>
              <input
                ref={inputRef}
                id="bob-message"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Describe it or add a photo"
                autoComplete="off"
                className="h-11 min-w-0 flex-1 rounded-full border border-line bg-cream px-4 text-base text-ink outline-none placeholder:text-stone focus:border-forest"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-white hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:opacity-40"
                disabled={typing || (!draft.trim() && !attachment)}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] leading-4 text-stone" role={fileError ? "alert" : undefined}>
              {fileError || "Answers follow the lists on this site. Photos stay on your device."}
            </p>
          </form>
        </div>
      ) : (
        <div className="fixed z-40 bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 print:hidden sm:bottom-6 sm:left-6">
          <button
            ref={launcherRef}
            type="button"
            className="bob-pop relative flex items-center gap-3 rounded-full border border-line bg-white py-1.5 pr-5 pl-1.5 shadow-[0_12px_40px_rgba(33,5,87,0.18)] hover:border-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            aria-expanded={false}
            aria-haspopup="dialog"
            aria-label={showPrompt ? "Ask me if we take your container. Open chat with Bob" : "Open chat with Bob"}
            onClick={() => setOpen(true)}
          >
            {showPrompt ? (
              <span className="bob-pop absolute bottom-[calc(100%+0.6rem)] left-0.5 w-[11.6rem] rounded-2xl rounded-bl-md border border-line bg-white px-3 py-2 text-left text-xs leading-snug font-medium text-ink shadow-[0_10px_28px_rgba(33,5,87,0.16)]">
                Ask me if we take your container
                <span
                  aria-hidden="true"
                  className="absolute -bottom-[7px] left-[1.05rem] h-3 w-3 rotate-45 border-r border-b border-line bg-white"
                />
              </span>
            ) : null}
            <span className="bob-head-bounce inline-flex">
              <BobAvatar size="lg" />
            </span>
            <span className="pr-1 text-left">
              <span className="block font-display text-lg leading-none text-ink">Bob</span>
              <span className="mt-1 block text-xs leading-none text-stone">Beverage Bot</span>
            </span>
          </button>
        </div>
      )}
    </>
  );
}

function UserBubble({ message }: { message: Message }) {
  return (
    <div className="list-in flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-forest p-2 text-white">
        {message.imageUrl ? (
          <img src={message.imageUrl} alt="Photo sent to Bob" className="max-h-48 w-full rounded-xl object-cover" />
        ) : null}
        {message.text ? (
          <p className={`px-1.5 text-sm leading-6 break-words ${message.imageUrl ? "pt-2 pb-1" : "py-1"}`}>{message.text}</p>
        ) : null}
      </div>
    </div>
  );
}

function BobBubble({ message }: { message: Message }) {
  return (
    <div className="list-in flex items-end gap-2">
      <BobAvatar size="sm" />
      <div className="min-w-0 max-w-[calc(100%-2.5rem)] rounded-2xl rounded-bl-md border border-line bg-white px-3.5 py-3 shadow-sm">
        {message.answer ? <AnswerCard answer={message.answer} /> : <p className="text-sm leading-6 whitespace-pre-line text-ink">{message.text}</p>}
      </div>
    </div>
  );
}

function AnswerCard({ answer }: { answer: BobAnswer }) {
  if (answer.verdict === "info" && !answer.title) {
    return <p className="text-sm leading-6 whitespace-pre-line text-ink">{answer.body}</p>;
  }

  return (
    <div>
      {answer.verdict === "yes" ? <Verdict className="bg-lime text-white">Yes, we take it</Verdict> : null}
      {answer.verdict === "no" ? <Verdict className="bg-no text-white">No, we don’t</Verdict> : null}
      {answer.verdict === "unsure" ? <Verdict className="bg-cream text-ink">Not sure</Verdict> : null}
      {answer.title ? <p className="mt-2 font-display text-lg leading-snug text-ink">{answer.title}</p> : null}
      <p className="mt-1 text-sm leading-6 text-stone">{answer.body}</p>
    </div>
  );
}

function Verdict({ className, children }: { className: string; children: string }) {
  return <p className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase ${className}`}>{children}</p>;
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2" aria-hidden="true">
      <BobAvatar size="sm" />
      <div className="flex h-10 items-center gap-1 rounded-2xl rounded-bl-md border border-line bg-white px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-stone motion-safe:animate-bounce" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone motion-safe:animate-bounce [animation-delay:120ms]" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone motion-safe:animate-bounce [animation-delay:240ms]" />
      </div>
    </div>
  );
}

function BobAvatar({ size, dotClassName = "border-white" }: { size: "sm" | "md" | "lg"; dotClassName?: string }) {
  const dimension = size === "lg" ? "h-11 w-11" : size === "md" ? "h-10 w-10" : "h-8 w-8";
  const dot = size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3";

  return (
    <span className="relative inline-flex shrink-0">
      <span className={`inline-flex overflow-hidden rounded-full ${dimension}`}>
        <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
          <rect width="48" height="48" fill="#008ece" />
          <circle cx="24" cy="9" r="2.3" fill="#93d41d" />
          <path d="M24 11.2v3.6" stroke="#ebf9ff" strokeWidth="2" strokeLinecap="round" />
          <rect x="10" y="15" width="28" height="24" rx="10" fill="#ebf9ff" />
          <circle cx="18.5" cy="25.5" r="2.2" fill="#210557" />
          <circle cx="29.5" cy="25.5" r="2.2" fill="#210557" />
          <path d="M18 32c1.7 2.1 3.5 3 6 3s4.3-.9 6-3" fill="none" stroke="#210557" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`absolute right-0 bottom-0 rounded-full border-2 bg-lime ${dot} ${dotClassName}`} />
    </span>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10" r="1.4" fill="currentColor" />
      <path d="m7 16 3.2-3.2a1 1 0 0 1 1.4 0L16 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path d="M5 12h12M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
