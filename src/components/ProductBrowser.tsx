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
      <div className="sticky top-[var(--header-height)] z-40 border-b border-line bg-cream/95 backdrop-blur-md">
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
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">{list.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-stone sm:text-lg">{list.intro}</p>

          <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {list.items.map((item) => (
              <li key={item.id}>
                <article className="flex h-full flex-row items-stretch overflow-hidden rounded-xl border border-line bg-white sm:flex-col">
                  <div className="flex w-28 shrink-0 items-center justify-center bg-cream px-1.5 py-2 sm:h-44 sm:w-auto sm:px-4 [&_svg]:h-20 [&_svg]:w-auto sm:[&_svg]:h-36 sm:[&_svg]:w-full">
                    <ProductArt id={item.id} />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center border-l border-line px-3 py-2.5 sm:border-t sm:border-l-0 sm:p-5">
                    <h3 className="font-display text-base leading-snug text-ink sm:text-xl">{item.name}</h3>
                    <p className="mt-1 text-[13px] leading-5 text-stone sm:mt-2 sm:text-[15px] sm:leading-6">{item.description}</p>
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
      ? "border-no bg-no text-white"
      : "border-lime bg-lime text-white";

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
