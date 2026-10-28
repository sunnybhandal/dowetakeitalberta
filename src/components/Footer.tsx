import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-[11px] leading-none text-stone min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:px-8 sm:text-xs">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav aria-label="Related" className="flex items-center gap-2">
          <a href={site.url} className="hover:text-forest">
            trailbottledepot.ca
          </a>
          <span aria-hidden="true">|</span>
          <a href={site.sisterHref} className="hover:text-forest">
            {site.sisterName}
          </a>
        </nav>
      </div>
    </footer>
  );
}
