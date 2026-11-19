"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useBobChat } from "@/components/BobChatProvider";

const links = [
  { href: "/", label: "Do we take it?" },
  { href: "/find-a-depot", label: "Find a Depot" },
  { href: "/depot-network", label: "Depot Network" },
];

export function Header() {
  const pathname = usePathname();
  const { open: chatOpen, setOpen: setChatOpen } = useBobChat();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 639px)").matches;
    document.body.style.overflow = menuOpen || (chatOpen && smallScreen) ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, chatOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="min-w-0 shrink-0" onClick={() => setMenuOpen(false)}>
          <img src="/images/depot-logo.png" alt="Depot" width={160} height={35} className="depot-logo" />
        </Link>

        <div className="flex shrink-0 items-center gap-1 md:gap-6">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Primary">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={active ? "text-forest" : "text-ink hover:text-forest"}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center text-ink md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-[21px] w-8">
                <span
                  className={`absolute top-0 left-0 h-[3px] w-8 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                    menuOpen ? "translate-y-[9px] rotate-45" : "translate-y-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute top-[9px] left-0 h-[3px] w-8 rounded-full bg-current transition-[opacity,transform] duration-300 ease-in-out ${
                    menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  }`}
                />
                <span
                  className={`absolute top-[18px] left-0 h-[3px] w-8 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                    menuOpen ? "-translate-y-[9px] -rotate-45" : "translate-y-0 rotate-0"
                  }`}
                />
              </span>
            </button>

            <button
              type="button"
              data-bob-launch
              className={`hidden h-12 w-12 items-center justify-center rounded-full print:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:inline-flex ${
                chatOpen ? "bg-forest text-white" : "text-forest hover:bg-cream"
              }`}
              aria-expanded={chatOpen}
              aria-haspopup="dialog"
              aria-label={chatOpen ? "Close chat with Bob" : "Open chat with Bob"}
              onClick={() => {
                setMenuOpen(false);
                setChatOpen((value) => !value);
              }}
            >
              <ChatIcon inverted={chatOpen} />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`absolute top-full right-0 left-0 z-50 grid overflow-hidden bg-cream shadow-[0_16px_32px_rgba(33,5,87,0.12)] transition-[grid-template-rows] duration-[350ms] ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] border-t border-line" : "pointer-events-none grid-rows-[0fr] border-t border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className={`flex flex-col gap-1 px-5 py-6 transition-opacity duration-[350ms] ease-out ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Mobile"
            aria-hidden={!menuOpen}
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full rounded-xl px-3 py-3 text-left text-lg font-medium transition-colors ${
                    active ? "bg-white text-forest" : "text-ink hover:bg-line"
                  }`}
                  tabIndex={menuOpen ? undefined : -1}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              data-bob-launch
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-lg font-medium transition-colors ${
                chatOpen ? "bg-white text-forest" : "text-ink hover:bg-line"
              }`}
              aria-expanded={chatOpen}
              aria-haspopup="dialog"
              tabIndex={menuOpen ? undefined : -1}
              onClick={() => {
                setMenuOpen(false);
                setChatOpen(true);
              }}
            >
              Ask us if we take it
              <span className="inline-flex text-forest">
                <ChatIcon />
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function ChatIcon({ inverted = false }: { inverted?: boolean }) {
  const dot = inverted ? "fill-forest" : "fill-white";

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.6 3.8H6.4A2.4 2.4 0 0 0 4 6.2v11.2L7.6 14.4h11a2.4 2.4 0 0 0 2.4-2.4V6.2a2.4 2.4 0 0 0-2.4-2.4Z"
      />
      <circle cx="8.6" cy="9.3" r="1.2" className={dot} />
      <circle cx="12.2" cy="9.3" r="1.2" className={dot} />
      <circle cx="15.8" cy="9.3" r="1.2" className={dot} />
    </svg>
  );
}
