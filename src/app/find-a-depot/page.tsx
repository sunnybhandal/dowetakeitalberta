import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find A Depot",
};

export default function FindADepotPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">Find A Depot</h1>
      </div>
    </section>
  );
}
