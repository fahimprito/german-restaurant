"use client";

import { useRestaurant } from "@/context/RestaurantContext";
import { ChefHat } from "lucide-react";
import Image from "next/image";

export default function Menu() {
  const { menuItems, isHydrated } = useRestaurant();

  return (
    <section id="menu" className="bg-[var(--color-primary-dark)] py-20 text-white sm:py-24">
      <div className="mx-auto w-full container px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Food Menu
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl">
              Fine German cuisine, presented with warmth
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.76)] sm:text-lg">
              This section updates directly from the shared menu context. Any
              edit made in the admin panel appears here automatically.
            </p>
          </div>
          <a
            href="/admin/menu"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-[var(--color-gold)] transition hover:text-white"
          >
            <ChefHat size={16} />
            Edit menu in admin
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {!isHydrated ? (
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-8 text-white/70">
              Loading menu...
            </div>
          ) : (
            menuItems.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.06)] shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {item.featured ? (
                      <span className="rounded-full bg-[rgba(201,168,106,0.18)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                        Featured
                      </span>
                    ) : null}
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                        item.available
                          ? "bg-[rgba(80,180,120,0.18)] text-[#bde2c8]"
                          : "bg-[rgba(255,255,255,0.12)] text-white/60"
                      }`}
                    >
                      {item.available ? "Available" : "Unavailable"}
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-[var(--font-playfair)] text-3xl leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-lg font-semibold text-[var(--color-gold)]">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[rgba(255,255,255,0.74)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
