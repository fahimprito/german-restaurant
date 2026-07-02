"use client";

import { useRestaurant } from "@/context/RestaurantContext";
import { Star, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ── Ornamental divider ── */
function SectionDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-12 bg-[linear-gradient(to_right,transparent,rgba(201,168,106,0.55))] sm:w-16" />
      <svg
        viewBox="0 0 48 18"
        className="h-4 w-16 text-[var(--color-gold)]"
        fill="none"
        aria-hidden="true"
      >
        <path d="M1 9 H17" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
        <path d="M31 9 H47" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
        <path d="M18 9 C20 5.5 22 4 24 4 C26 4 28 5.5 30 9" stroke="currentColor" strokeWidth="0.9" opacity="0.8" />
        <path d="M18 9 C20 12.5 22 14 24 14 C26 14 28 12.5 30 9" stroke="currentColor" strokeWidth="0.9" opacity="0.8" />
        <circle cx="24" cy="9" r="1.8" fill="currentColor" opacity="0.65" />
      </svg>
      <span className="h-px w-12 bg-[linear-gradient(to_left,transparent,rgba(201,168,106,0.55))] sm:w-16" />
    </div>
  );
}

/* ── Format price: "EUR 18" → "€18" ── */
function formatPrice(price) {
  if (!price) return "";
  return price.replace(/EUR\s*/i, "\u20AC");
}

/* ── Menu Card ── */
function MenuCard({ item, index, isVisible }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[24px] border border-[rgba(31,75,67,0.08)] bg-white transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(23,59,53,0.14)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 130}ms` : "0ms",
        boxShadow: "0 8px 32px rgba(23, 59, 53, 0.06), 0 1px 3px rgba(23, 59, 53, 0.04)",
      }}
    >
      {/* ── Image area ── */}
      <div className="relative h-64 overflow-hidden sm:h-72">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,24,21,0.05)_0%,rgba(10,24,21,0.15)_60%,rgba(10,24,21,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,106,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top-left corner ornament */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          {item.featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(201,168,106,0.55)] bg-[rgba(10,24,21,0.65)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold)] shadow-[0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <Star size={10} className="fill-[var(--color-gold)]" />
              Chef&apos;s Selection
            </span>
          )}
        </div>

        {/* Price tag floating on bottom-right */}
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(10,24,21,0.6)] px-4 py-2 font-[var(--font-playfair)] text-xl font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Category pill floating on bottom-left */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(10,24,21,0.5)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[rgba(255,255,255,0.8)] backdrop-blur-xl">
            <Sparkles size={10} className="text-[var(--color-gold)]" />
            {item.category}
          </span>
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        {/* Gold accent line at top */}
        <div className="absolute left-6 right-6 top-0 h-[2px] bg-[linear-gradient(to_right,var(--color-gold),rgba(201,168,106,0.2),transparent)] sm:left-7 sm:right-7" />

        {/* Dish name */}
        <h3 className="font-[var(--font-playfair)] text-[1.4rem] leading-tight tracking-wide text-[var(--color-primary-dark)] sm:text-2xl">
          {item.name}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-[0.85rem] leading-[1.85] text-[rgba(44,44,44,0.6)]">
          {item.description}
        </p>

        {/* Bottom decorative detail */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-[linear-gradient(to_right,rgba(201,168,106,0.25),transparent)]" />
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 text-[var(--color-gold)] opacity-40"
            fill="none"
            aria-hidden="true"
          >
            <path d="M8 1 L15 8 L8 15 L1 8Z" stroke="currentColor" strokeWidth="1" />
            <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5" />
          </svg>
          <span className="h-px flex-1 bg-[linear-gradient(to_left,rgba(201,168,106,0.25),transparent)]" />
        </div>
      </div>

      {/* Hover border glow (gold) */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] border-2 border-[var(--color-gold)] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.18]" />
    </article>
  );
}

/* ── Main Menu Section ── */
export default function Menu() {
  const { menuItems, isHydrated } = useRestaurant();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const availableItems = menuItems.filter((item) => item.available);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "linear-gradient(180deg, #efe5d3 0%, #f7f3ea 16%, #fbf8f1 50%, #f7f3ea 84%, #f6efe0 100%)",
      }}
    >
      {/* Background textures */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.1),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(31,75,67,0.04),transparent_50%)]" />
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[rgba(201,168,106,0.04)] blur-[120px]" />
      <div className="absolute -left-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[rgba(31,75,67,0.03)] blur-[100px]" />

      {/* Top decorative border */}
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(201,168,106,0.35),transparent)]" />

      <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
        {/* ── Section Header ── */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <SectionDivider className="mb-6 justify-center opacity-80" />

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-gold)]">
            Curated Selection
          </p>

          <h2 className="font-[var(--font-playfair)] text-4xl leading-tight text-[var(--color-primary-dark)] sm:text-5xl lg:text-[3.5rem]">
            Our Signature
            <br />
            <span className="italic text-[var(--color-primary)]">
              German Menu
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-[1.85] text-[rgba(44,44,44,0.6)] sm:text-lg">
            Fine dishes rooted in nearly a century of Black Forest tradition,
            prepared with imported German ingredients and local seasonal produce.
          </p>
        </div>

        {/* ── Menu Grid ── */}
        <div className="mt-16 sm:mt-20">
          {!isHydrated ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[420px] animate-pulse rounded-[24px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.5)]"
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {availableItems.map((item, index) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Bottom flourish ── */}
        <div
          className={`mx-auto mt-16 max-w-md text-center transition-all delay-700 duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <SectionDivider className="mb-5 justify-center opacity-60" />
          <p className="text-sm italic leading-7 text-[rgba(44,44,44,0.4)]">
            &ldquo;Exceptional dining begins with authentic recipes, premium
            ingredients, and passionate craftsmanship.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
