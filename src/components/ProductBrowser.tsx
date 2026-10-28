"use client";

import { useState } from "react";
import { ProductArt } from "@/components/ProductArt";
import { acceptedProducts, declinedProducts, type Product } from "@/lib/products";

type Choice = "yes" | "no";

const lists: Record<Choice, { title: string; intro: string; items: Product[] }> = {
  yes: {
    title: "We take these",
    intro: "Empty beverage containers purchased in Alberta. Bring them in for your deposit.",
    items: acceptedProducts,
  },
  no: {
    title: "We don’t take these",
    intro: "These are not refundable here. If something you have isn’t on either list, ask us at the counter.",
    items: declinedProducts,
  },
};

export function ProductBrowser() {
  const [choice, setChoice] = useState<Choice>("yes");
  const list = lists[choice];

  function select(next: Choice) {
    setChoice(next);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }
    event.preventDefault();
    const next: Choice = choice === "yes" ? "no" : "yes";
    select(next);
    document.getElementById(next === "yes" ? "tab-yes" : "tab-no")?.focus();
  }

  return (
    <section id="containers" className="scroll-mt-24 border-t border-line bg-cream">
      <div className="sticky top-[4.5rem] z-40 border-b border-line bg-cream/95 backdrop-blur-md sm:top-20">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <div
            role="tablist"
            aria-label="Accepted and not accepted containers"
            className="grid grid-cols-2 gap-2 rounded-full border border-line bg-white p-1.5 sm:max-w-xl"
            onKeyDown={onKeyDown}
          >
            <Tab
              id="tab-yes"
              selected={choice === "yes"}
              onSelect={() => select("yes")}
              label="Yes"
              detail="We take it"
            />
            <Tab
              id="tab-no"
              selected={choice === "no"}
              onSelect={() => select("no")}
              label="No"
              detail="We don’t"
              tone="ink"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <div key={choice} className="list-in" role="tabpanel" id="product-panel" aria-labelledby={choice === "yes" ? "tab-yes" : "tab-no"}>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            {list.items.length} {list.items.length === 1 ? "item" : "items"}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">{list.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-stone sm:text-lg">{list.intro}</p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {list.items.map((item) => (
              <li key={item.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
                  <div className="flex h-44 items-center justify-center bg-cream px-4">
                    <ProductArt id={item.id} />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-line p-5">
                    <h3 className="font-display text-xl leading-snug text-ink">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone sm:text-[15px]">{item.description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Tab({
  id,
  selected,
  onSelect,
  label,
  detail,
  tone = "forest",
}: {
  id: string;
  selected: boolean;
  onSelect: () => void;
  label: string;
  detail: string;
  tone?: "forest" | "ink";
}) {
  const selectedClass =
    tone === "ink"
      ? "border-ink bg-ink text-white"
      : "border-forest bg-forest text-white";

  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls="product-panel"
      tabIndex={selected ? 0 : -1}
      onClick={onSelect}
      className={`flex h-16 flex-col items-center justify-center rounded-full border text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
        selected ? selectedClass : "border-transparent text-ink hover:text-forest"
      }`}
    >
      <span className="font-display text-2xl leading-none">{label}</span>
      <span className={`mt-1 text-xs font-medium ${selected ? "text-white/85" : "text-stone"}`}>
        {detail}
      </span>
    </button>
  );
}
