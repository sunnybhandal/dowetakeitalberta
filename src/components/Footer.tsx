import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-5 text-[11px] leading-none text-stone sm:px-8 sm:text-xs">
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
