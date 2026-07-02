"use client";

import { ChefHat, Flame, UtensilsCrossed, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function SectionDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-12 bg-[linear-gradient(to_right,transparent,rgba(201,168,106,0.55))] sm:w-16" />
      <svg viewBox="0 0 48 18" className="h-4 w-16 text-[var(--color-gold)]" fill="none" aria-hidden="true">
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

const highlightCards = [
  {
    title: "Masterful Classics",
    subtitle: "Heritage Recipes",
    description:
      "Time-honored recipes elevated with polished technique, from golden schnitzel to slow-braised Black Forest specialties.",
    image:
      "/images/culinary/2Vs63JonHoE4CshlmPwzIhq_wu_6YfqywmM_CKxQDA5ceVrAOa1Rua5iS134jDN3ehsoBmZmMjA6nHo8QvJbJQen5CTeFue1SdegA2lsp2xCBmuAl2SYxc-IQ6FxdMp_BzSoWOgOH5aunFa38Y27WMh1gqNyWOdoxxyC_C7P3722x0zcryZ-iKqq6vTAZsuT.jpg",
    icon: UtensilsCrossed,
  },
  {
    title: "Seasonal Refinement",
    subtitle: "Nature's Calendar",
    description:
      "Our menu moves with the seasons, pairing the finest regional produce with authentic German culinary identity.",
    image:
      "/images/culinary/X3T_8NI6oeMkOUNtXF_kOj2K2X-Whm8Umdz8kczMzwoU0ETj_NJ0AHJ2DQYLsu8qv5n_20ojLyrP90gZPdPSd5dbGakXIJRZUrgVOEV7piQlmfPuKMIEG2EJND4qrTCH-hcEz4eyqVtNNFiQJL_Bzf8kNYI5MbCqcxYoYzHzud8VtvJ1GuAk5ev_wT433-Zm.jpg",
    icon: ChefHat,
  },
  {
    title: "Crafted by Hand",
    subtitle: "Artisan Kitchen",
    description:
      "Every plate leaves the kitchen with the texture, balance, and warmth of handcrafted German hospitality.",
    image:
      "/images/culinary/4WKZfW9qrwN53CYDHT63ATyWlk1MLzU3xlnBcqdZzgWWfLIlCs-Z9FdfznFmPPOicsqskyKFvUP5WgQRr4dg-R3x1Oah4U1Pw_H9gvbF2AZa69YZM7M2GfOSR_Ze92UXSaNJmtY6yFV_heAKxJ4AHs4K2I09FAStBrbG8IvUeXfWMS9pMirS6n6y7wLiJIMn.jpg",
    icon: Flame,
  },
];

export default function Highlights() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f6efe0_0%,#fbf8f1_22%,transparent_100%)] py-32 sm:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,75,67,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,106,0.05),transparent_60%)]" />

      <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionDivider className="mb-6 justify-center opacity-80" />

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-gold)]">
            From Our Kitchen to Your Table
          </p>

          <h2 className="font-[var(--font-playfair)] text-4xl leading-tight text-[var(--color-primary-dark)] sm:text-5xl lg:text-[3.5rem]">
            A Curated Journey
            <br />
            <span className="italic text-[var(--color-primary)]">Through Germany</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-[1.85] text-[rgba(44,44,44,0.7)] sm:text-lg">
            Our menu blends time-honored recipes with modern culinary artistry.
            Every dish is prepared from scratch by our master chefs.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:mt-20 lg:grid-cols-3">
          {highlightCards.map(({ title, subtitle, description, image, icon: Icon }, index) => (
            <article
              key={title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_8px_40px_rgba(23,59,53,0.06)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(23,59,53,0.12)] ${
                visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: visibleCards.has(index) ? `${index * 150}ms` : "0ms" }}
            >
              <div className="relative h-60 overflow-hidden sm:h-64">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,59,53,0.6)_0%,transparent_60%)]" />

                <div className="absolute bottom-4 left-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(15,40,35,0.7)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] backdrop-blur-md">
                    <Icon size={13} />
                    {subtitle}
                  </span>
                </div>
              </div>

              <div className="relative p-6 sm:p-7">
                <div className="absolute left-6 top-0 h-px w-12 bg-[linear-gradient(to_right,var(--color-gold),transparent)] sm:left-7" />

                <h3 className="font-[var(--font-playfair)] text-2xl tracking-wide text-[var(--color-primary-dark)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-[1.85] text-[rgba(44,44,44,0.7)]">
                  {description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                  Discover
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

