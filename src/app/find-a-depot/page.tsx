import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Depot",
};

export default function FindADepotPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">Depots</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">Find a Depot</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-stone sm:text-lg">
          There are over 200 Alberta bottle depots. The map shows which one is near you.
        </p>
        <a
          href="https://www.albertadepot.ca/find-a-depot"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-lime px-6 text-base font-medium text-white transition-colors hover:bg-ink"
        >
          Open the depot map
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
