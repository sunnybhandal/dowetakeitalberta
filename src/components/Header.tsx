import Image from "next/image";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-5 sm:h-20 sm:px-8">
        <a href="#top" aria-label="Trail Bottle Depot home">
          <Image
            src="/images/trail-bottle-logo.png"
            alt=""
            width={191}
            height={96}
            priority
            className="h-10 w-auto min-[380px]:h-11 sm:h-14"
          />
        </a>
        <a
          href={site.phoneHref}
          className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-forest bg-forest px-3 text-[13px] font-medium text-white transition-colors hover:bg-white hover:text-forest min-[380px]:gap-2 min-[380px]:px-4 min-[380px]:text-sm"
        >
          <PhoneIcon />
          {site.phone}
        </a>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M8.2 4.8h2.1l1.2 3-1.5 1a12 12 0 0 0 5.2 5.2l1-1.5 3 1.2v2.1c0 .8-.6 1.5-1.4 1.6A14.5 14.5 0 0 1 4.6 6.2c.1-.8.8-1.4 1.6-1.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
