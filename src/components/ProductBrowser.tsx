"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
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

          <CategorySections items={list.items} />
        </div>
      </div>
    </section>
  );
}

function CategorySections({ items }: { items: Product[] }) {
  return (
    <div className="mt-10 flex flex-col max-lg:divide-y max-lg:divide-line lg:flex-row lg:flex-wrap lg:items-stretch lg:overflow-hidden">
      {items.map((item) => {
        const cards = item.photos?.length || 1;

        return (
          <section
            key={item.id}
            aria-labelledby={`category-${item.id}`}
            className="max-lg:py-10 max-lg:first:pt-0 lg:w-fit lg:max-w-full lg:shrink-0 lg:-mt-px lg:-ml-px lg:border-t lg:border-l lg:border-line lg:p-5"
            style={{ "--cards": cards } as CSSProperties}
          >
            <h3 id={`category-${item.id}`} className="font-display text-[clamp(1rem,5.2vw,1.5rem)] leading-tight whitespace-nowrap text-ink sm:text-3xl">
              {item.name}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:w-[calc(var(--cards)*12.5rem+(var(--cards)-1)*1rem)] lg:max-w-full lg:grid-cols-[repeat(var(--cards),minmax(0,1fr))]">
              {item.photos?.map((photo) => (
                <li key={photo.src}>
                  <figure className="overflow-hidden rounded-xl border border-line bg-white">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={1024}
                      height={1024}
                      className="aspect-square w-full object-cover"
                      sizes="(min-width: 1024px) 12.5rem, (min-width: 640px) 30vw, 45vw"
                    />
                    <figcaption className="border-t border-line px-3 py-2.5 text-sm font-medium text-ink">{photo.name}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
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
