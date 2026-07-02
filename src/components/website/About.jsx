import { ShieldCheck, Sparkles, Wine } from "lucide-react";

const philosophyCards = [
  {
    title: "Authenticity",
    description:
      "We strictly honor traditional cooking methods and recipes passed down through generations.",
    icon: ShieldCheck,
  },
  {
    title: "Hospitality (Gemutlichkeit)",
    description:
      "Dining should feel warm and welcoming. Every guest should feel like family.",
    icon: Sparkles,
  },
  {
    title: "Quality",
    description:
      "We use premium German beers, regional wines, carefully selected meats, and seasonal ingredients.",
    icon: Wine,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-copy">
          <p className="eyebrow">Welcome to Schwarzwald Stube</p>
          <h2 className="section-title">A table shaped by heritage</h2>

          <div className="mt-8 space-y-7 text-base leading-8 text-[rgba(44,44,44,0.84)]">
            <div>
              <h3 className="font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                Our Heritage
              </h3>
              <p className="mt-3">
                Founded in 1928, Schwarzwald Stube began as a vision to bring
                the authentic, comforting flavors of the German countryside to
                discerning diners.
              </p>
              <p className="mt-3">
                For nearly a century, our Inn & Restaurant has stood as a
                beacon of hospitality, preserving traditional culinary arts
                while welcoming generations of guests to our table.
              </p>
            </div>

            <div>
              <h3 className="font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                The Experience
              </h3>
              <p className="mt-3">
                Nestled in an atmosphere that balances rustic warmth with
                refined elegance, Schwarzwald Stube offers an escape into the
                heart of Fine German Cuisine.
              </p>
              <p className="mt-3">
                Our culinary philosophy is rooted in the deep traditions of the
                Black Forest region where hearty, time-honored recipes meet
                contemporary sophistication.
              </p>
              <p className="mt-3">
                From perfectly crisp artisanal schnitzels and rich
                slow-simmered stews to our legendary house-baked desserts, every
                dish tells a story of passion, precision, and heritage.
              </p>
              <p className="mt-3">
                We source the finest seasonal ingredients to ensure every bite
                honors the authentic flavors of Germany.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="surface-card rounded-[32px] p-7">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Our Philosophy
            </p>
            <div className="mt-5 space-y-4">
              {philosophyCards.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-[24px] border border-[rgba(31,75,67,0.1)] bg-white/75 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[rgba(31,75,67,0.1)] p-3 text-[var(--color-primary)]">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-[var(--font-playfair)] text-xl text-[var(--color-primary-dark)]">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[rgba(44,44,44,0.78)]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[var(--color-primary-dark)] p-7 text-white shadow-[var(--shadow-soft)]">
            <p className="font-[var(--font-playfair)] text-2xl">
              Whether you are joining us for a celebratory feast, an intimate
              family dinner, or a relaxed evening of exceptional food and
              drink, we invite you to experience the timeless charm and flavor
              of Schwarzwald Stube.
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.26em] text-[var(--color-gold)]">
              Since 1928 | Shared memories, timeless flavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
