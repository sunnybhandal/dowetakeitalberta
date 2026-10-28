"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/find-a-depot", label: "Find A Depot" },
  { href: "/depot-network", label: "Depot Network" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] border-b border-line/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
        <Link href="/" className="font-display text-lg leading-none tracking-tight text-ink sm:text-[1.65rem]">
          Do we Take it?
          <span className="px-1.5 font-sans font-normal text-stone/70">|</span>
          Alberta
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-x-3.5 text-[13px] font-medium sm:gap-x-6 sm:text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-forest" : "text-stone hover:text-forest"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
