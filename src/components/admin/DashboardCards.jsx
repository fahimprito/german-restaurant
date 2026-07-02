"use client";

import { useRestaurant } from "@/context/RestaurantContext";
import { Star, Store, Utensils } from "lucide-react";

const cards = [
  {
    key: "total",
    title: "Total Foods",
    icon: Utensils,
    getValue: (stats) => stats.totalFoods,
  },
  {
    key: "featured",
    title: "Featured Foods",
    icon: Star,
    getValue: (stats) => stats.featuredFoods,
  },
  {
    key: "available",
    title: "Available Foods",
    icon: Store,
    getValue: (stats) => stats.availableFoods,
  },
];

export default function DashboardCards() {
  const { stats, isHydrated } = useRestaurant();

  return (
    <section className="grid gap-5 md:grid-cols-3">
      {cards.map(({ key, title, icon: Icon, getValue }) => (
        <article
          key={key}
          className="rounded-[28px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.78)] p-6 shadow-[var(--shadow-card)] backdrop-blur-sm"
        >
          <span className="inline-flex rounded-full bg-[rgba(31,75,67,0.08)] p-3 text-[var(--color-primary)]">
            <Icon size={18} />
          </span>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[rgba(44,44,44,0.56)]">
            {title}
          </p>
          <p className="mt-2 font-[var(--font-playfair)] text-5xl text-[var(--color-primary-dark)]">
            {isHydrated ? getValue(stats) : "--"}
          </p>
          <p className="mt-3 text-sm leading-7 text-[rgba(44,44,44,0.72)]">
            Shared with the public menu through the same context-powered data
            layer.
          </p>
        </article>
      ))}
    </section>
  );
}
