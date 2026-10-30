import { site } from "@/lib/site";

const icons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  X: XIcon,
} as const;

export function Footer() {
  return (
    <footer className="overflow-x-hidden bg-[#008ECE] text-white">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <img src="/images/depot-logo-rev.png" alt="Depot" width={160} height={35} className="depot-logo" />
          <ul className="flex items-center gap-3">
            {site.socials.map((social) => {
              const Icon = icons[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:text-lime"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer-copy mt-8 space-y-2 text-sm leading-6 sm:text-base">
          <p>
            Have feedback or Depot-related concerns?{" "}
            <a href={site.contactHref} className="underline decoration-white/50 underline-offset-4 hover:decoration-white">
              Contact Us
            </a>
          </p>
          <p>
            Looking for ABDA? Visit us at{" "}
            <a
              href={site.abdaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/50 underline-offset-4 hover:decoration-white"
            >
              ABDA.ca
            </a>
          </p>
        </div>

        <hr className="mt-8 border-white/30" />
        <p className="mt-4 text-right text-sm">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.2 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M14.2 3.5c.4 2.4 1.7 4 4 4.4v2.4c-1.4 0-2.7-.4-4-1.2v6.2a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3.5h2.6Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M14.7 4h2.6l-5.7 6.5L18.5 20h-4.3l-3.4-4.4L7 20H4.4l6.1-7L4.2 4h4.4l3 4L14.7 4Zm-.9 14.4h1.4L8.3 5.5H6.8l7 12.9Z" />
    </svg>
  );
}
