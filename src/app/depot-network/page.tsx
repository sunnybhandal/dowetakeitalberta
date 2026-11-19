import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depot Network",
  description:
    "Alberta’s locally owned bottle depots are part of more than 160 communities, supporting local jobs, charities, and neighbours.",
};

const stories = [
  {
    title: "Jasper Wildfire Relief",
    detail: "2024",
    body: "A province-wide effort involving bottle depots, radio stations, and donors raised over $973,000 before government matching, supporting wildfire-affected communities.",
    href: "https://www.abda.ca/albertadayofcaring?utm_source=chatgpt.com",
  },
  {
    title: "Calgary Food Bank",
    detail: "2024",
    body: "Thirty Calgary-area depots joined a city-wide bottle drive. Beddington Heights Bottle Depot owner Karim Dossa helped promote the initiative.",
    href: "https://www.abda.ca/in-the-news/a-city-wide-bottle-drive-helps-support-the-calgary-food-bank?utm_source=chatgpt.com",
  },
  {
    title: "Olds Bottle Depot",
    detail: "Community Support",
    body: "Since 1987, the organization operating Olds Bottle Depot has directed its profits toward programs and services supporting local residents, including people with disabilities.",
    href: "https://www.abda.ca/in-the-news/olds-50th-anniversary-showcases-vital-community-programs?utm_source=chatgpt.com",
  },
] as const;

export default function DepotNetworkPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">The Depot Network</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            More Than Recycling. We’re Part of Your Community.
          </h1>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
            <p>
              Across Alberta, in more than 160 communities, you’ll find over 200 locally owned and operated bottle depots. From our largest cities to our smallest rural towns, these depots are run by independent business owners, families, and community organizations who do much more than collect bottles and cans.
            </p>
            <p>
              They’re your neighbours. They’re local employers. They’re the people sponsoring youth sports teams, helping schools raise money, supporting local charities, and stepping up when their communities need them most.
            </p>
            <p>
              For many depot owners, this isn’t just a business. It’s something they’ve spent years, sometimes generations, building. They’ve watched their communities grow, gotten to know the families who visit their depots, and helped turn everyday recycling into something much bigger.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Small Businesses. Big Community Impact.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
            <p>
              Every year, Albertans raise more than $30 million for charities, schools, sports teams, and community causes through their local bottle depots.
            </p>
            <p>
              Behind those donations are depot owners and employees who help make it all possible. Whether it’s providing trailers for a school bottle drive, helping a hockey team raise money for a tournament, or collecting donated containers for a local family in need, depots have become an important part of community fundraising across Alberta.
            </p>
            <p>
              For decades, bottle drives have helped Albertans come together for a common cause. What might seem like a few bags of empty bottles can help send a child to camp, purchase equipment for a sports team, or support someone going through a difficult time.
            </p>
            <p>And that’s something worth celebrating.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            When Alberta Needs Help, Depots Step Up.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
            <p>
              In July 2024, when devastating wildfires forced families from their homes in Jasper and other northern Alberta communities, bottle depots across the province joined the Alberta Day of Caring fundraising effort.
            </p>
            <p>
              Working alongside Alberta radio stations and generous Albertans, the initiative raised more than $973,000 in cash and beverage container donations. With matching contributions from the provincial and federal governments, that effort represented over $2.9 million in relief funding for those affected by the wildfires.
            </p>
            <p>It was a powerful reminder of what can happen when local businesses and communities work together.</p>
            <p>
              And while events like Jasper make headlines, similar acts of generosity happen at depots across Alberta every day, often without recognition.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">The People Behind the Counter</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
            <p>Behind every bottle depot is a story.</p>
            <p>
              Some are family businesses passed from one generation to the next. Others are entrepreneurs who built their businesses from the ground up. Some depots are operated by community organizations that use their work to support local programs and create meaningful employment opportunities.
            </p>
            <p>
              Different owners. Different communities. But a shared commitment to keeping Alberta clean and giving back to the places they call home.
            </p>
            <p>
              Together, Alberta’s depots support approximately 1,200 local jobs while helping recycle billions of beverage containers.
            </p>
            <p>
              The next time you visit your local bottle depot, remember that you’re doing more than returning your empties. You’re also supporting a local business and the people who help keep your community moving.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">Proudly Local. Proudly Albertan.</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
            <p>
              From Calgary and Edmonton to the smallest towns across the province, Alberta’s independent depot operators are proof that small businesses can make a big difference.
            </p>
          </div>
          <p className="mt-10 max-w-4xl font-display text-3xl leading-tight text-ink sm:text-4xl">
            Over 200 depots. More than 160 communities. Thousands of people making a difference, one container at a time.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">In the community</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">Community stories</h2>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <li key={story.title} className="flex flex-col rounded-xl border border-line bg-white p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">{story.detail}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug text-ink">{story.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-stone">{story.body}</p>
                <p className="mt-6 text-sm font-medium text-ink">Alberta Bottle Depot Association</p>
                <a
                  href={story.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-fit text-sm font-medium text-forest underline decoration-forest/40 underline-offset-4 hover:decoration-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  Read the story
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-base leading-7 text-stone sm:text-lg sm:leading-8">
            Another example is{" "}
            <a
              href="https://www.abda.ca/cansforkids?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest underline decoration-forest/40 underline-offset-4 hover:decoration-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              Alberta Cans for Kids
            </a>
            , which helps turn donated beverage containers into support for children’s health services, including families staying at Ronald McDonald House Alberta.
          </p>
        </div>
      </section>
    </>
  );
}
