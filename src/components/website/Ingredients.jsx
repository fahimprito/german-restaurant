import { Leaf, PackageOpen } from "lucide-react";

const ingredientCards = [
  {
    title: "Authentic Imports",
    items: [
      "German spices",
      "Specialized flour",
      "Premium cured meats",
      "Boutique suppliers",
    ],
    icon: PackageOpen,
  },
  {
    title: "Farm-to-Table Produce",
    items: [
      "Organic vegetables",
      "Seasonal herbs",
      "Local farms",
      "Fresh ingredients",
    ],
    icon: Leaf,
  },
];

export default function Ingredients() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto w-full container px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,106,0.45)] bg-[rgba(255,255,255,0.55)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Our Sourcing & Ingredients
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl leading-tight text-[var(--color-primary-dark)] sm:text-5xl">
            True elegance begins with the finest raw materials
          </h2>
          <p className="mt-5 text-base leading-8 text-[rgba(44,44,44,0.82)] sm:text-lg">
            We bridge the gap between local sustainability and authentic German
            imports, combining premium sourcing with an uncompromising culinary
            standard.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {ingredientCards.map(({ title, items, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[28px] rounded-[32px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.78)] p-8 shadow-[var(--shadow-card)] backdrop-blur-sm"
            >
              <span className="inline-flex rounded-full bg-[rgba(31,75,67,0.08)] p-3 text-[var(--color-primary)]">
                <Icon size={18} />
              </span>
              <h3 className="mt-5 font-[var(--font-playfair)] text-3xl text-[var(--color-primary-dark)]">
                {title}
              </h3>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-[rgba(44,44,44,0.8)] sm:grid-cols-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[rgba(31,75,67,0.08)] bg-white/75 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
