"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Do we take it?" },
  { href: "/find-a-depot", label: "Find a Depot" },
  { href: "/depot-network", label: "Depot Network" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="min-w-0 shrink-0" onClick={() => setOpen(false)}>
          <img src="/images/depot-logo.png" alt="Depot" width={160} height={35} className="depot-logo" />
        </Link>

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

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-[21px] w-8">
            <span
              className={`absolute top-0 left-0 h-[3px] w-8 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                open ? "translate-y-[9px] rotate-45" : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`absolute top-[9px] left-0 h-[3px] w-8 rounded-full bg-current transition-[opacity,transform] duration-300 ease-in-out ${
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute top-[18px] left-0 h-[3px] w-8 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                open ? "-translate-y-[9px] -rotate-45" : "translate-y-0 rotate-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`absolute top-full right-0 left-0 z-50 grid overflow-hidden bg-cream shadow-[0_16px_32px_rgba(33,5,87,0.12)] transition-[grid-template-rows] duration-[350ms] ease-out md:hidden ${
          open ? "grid-rows-[1fr] border-t border-line" : "pointer-events-none grid-rows-[0fr] border-t border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className={`flex flex-col gap-1 px-5 py-6 transition-opacity duration-[350ms] ease-out ${
              open ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Mobile"
            aria-hidden={!open}
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block w-full rounded-xl px-3 py-3 text-left text-lg font-medium transition-colors ${
                    active ? "bg-white text-forest" : "text-ink hover:bg-line"
                  }`}
                  tabIndex={open ? undefined : -1}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
