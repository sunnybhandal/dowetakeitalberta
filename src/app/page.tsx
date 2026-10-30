import { ProductBrowser } from "@/components/ProductBrowser";

const prepSteps = [
  {
    key: "empty",
    title: "Empty it",
    body: "Pour out any pop, milk, juice, or other drink left inside.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M8 4.5h8l1 3.5c1.2.6 2 1.8 2 3.2V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6.8c0-1.4.8-2.6 2-3.2L8 4.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 4.5h6M8.5 10.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "rinse",
    title: "Rinse it",
    body: "A quick rinse is enough. No garbage inside or smeared on the outside.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 3.5c2.2 3 3.5 5.2 3.5 7.4a3.5 3.5 0 1 1-7 0C8.5 8.7 9.8 6.5 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 16.5c1.4 1 2.8 1.5 4.2 1.5 2.2 0 3.4-1.2 5-1.2 1.2 0 2.4.4 3.8 1.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.5 20c1.4 1 2.8 1.5 4.2 1.5 2.2 0 3.4-1.2 5-1.2 1 .0 2.1.3 3.3 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "alberta",
    title: "Bought in Alberta",
    body: "We refund containers purchased in Alberta. Out-of-province empties are not refundable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: "safe",
    title: "Safe to handle",
    body: "Please don’t bring broken glass or containers that aren’t safe to handle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 3.5 5 6.2v5.3c0 4.2 2.8 7.2 7 8.9 4.2-1.7 7-4.7 7-8.9V6.2L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="m8.8 12 2.1 2.1 4.3-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            Alberta Recycling Standards
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-ink min-[410px]:text-5xl sm:text-6xl">
            Do we take it?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone sm:text-lg">
            Choose Yes or No. You’ll see a picture, the name, and a short note when you need one.
          </p>
          <ul className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <li className="rounded-full border border-line bg-cream px-4 py-2 text-center text-sm font-medium text-ink">
              10¢ up to 1 litre
            </li>
            <li className="rounded-full border border-line bg-cream px-4 py-2 text-center text-sm font-medium text-ink">
              25¢ over 1 litre
            </li>
          </ul>
        </div>
      </section>

      <ProductBrowser />

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">Before you come in</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            A few things that make the return easy
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {prepSteps.map((step) => (
              <li key={step.key} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime text-white">
                  {step.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl leading-snug text-forest">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-stone">{step.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
