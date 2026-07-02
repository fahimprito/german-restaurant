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
      <div className="section-shell">
        <div className="section-copy">
          <p className="eyebrow">Our Sourcing & Ingredients</p>
          <h2 className="section-title">
            True elegance begins with the finest raw materials
          </h2>
          <p className="section-lead">
            We bridge the gap between local sustainability and authentic German
            imports, combining premium sourcing with an uncompromising culinary
            standard.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {ingredientCards.map(({ title, items, icon: Icon }) => (
            <article key={title} className="surface-card rounded-[32px] p-8">
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
