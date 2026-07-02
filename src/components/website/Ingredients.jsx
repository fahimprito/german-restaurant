"use client";

import { Leaf, PackageOpen, Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ──────────────────────────────────────────────
   Section ornament
   ────────────────────────────────────────────── */
function SectionDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-[rgba(201,168,106,0.4)]" />
      <svg viewBox="0 0 16 16" className="h-3 w-3 text-[var(--color-gold)]" fill="none" aria-hidden="true">
        <path d="M8 1 L15 8 L8 15 L1 8Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.4" />
      </svg>
      <span className="h-px w-8 bg-[rgba(201,168,106,0.4)]" />
    </div>
  );
}

const ingredientCards = [
  {
    title: "Authentic Imports",
    description:
      "Premium ingredients sourced directly from trusted German suppliers, preserving the true taste of the Black Forest.",
    items: [
      "German artisan spices",
      "Specialized Black Forest flour",
      "Premium cured meats",
      "Boutique regional suppliers",
    ],
    icon: PackageOpen,
    image:
      "/images/culinary/k1JHjraFskWox_fysLVQLTaTVVYJUNaEvYjHHwtqH4ig-AxEtY7X6mLJeWJgGK2N0ZdY5QsnrOBj7AYtGGPMsvCg1UBKXTK3_pxY99ZMjFwhwDod736NctoRx_zuHc-pdBhaFfVgD9IGSzSeNx3DGDMgbfxFQfjgsbgKQGE6suJslpaKK3XoHoLNAqybTezi.jpg",
  },
  {
    title: "Farm-to-Table Produce",
    description:
      "Fresh, seasonal ingredients from local farms, ensuring every dish reflects the vibrancy of nature.",
    items: [
      "Organic seasonal vegetables",
      "Hand-picked fresh herbs",
      "Local artisan farms",
      "Daily harvested ingredients",
    ],
    icon: Leaf,
    image:
      "/images/culinary/kIbPGqC5XXOe-Hz2t5-7Vh9aHwDMBgIpFOEefADedmK_vV1LarDycAp7_bO0GObiswrpBoPs7qqxd3lAZhcCVAuO7c-l04VVkmB-rnZvjpJ0B6itqSlDVlgpLvxVIP88JBYfWFuy5OxU3DadR4SwTLbQmw4qCkwCA8YL7_rZ7sbJXAfZfraqIEto-jc_HWL4.jpg",
  },
];

export default function Ingredients() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-primary-dark)] py-24 sm:py-32"
    >
      {/* Background textures */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(31,75,67,0.5),transparent_60%)]" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Atmospheric glow */}
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[rgba(201,168,106,0.06)] blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[rgba(31,75,67,0.3)] blur-[100px]" />

      <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
        {/* Section header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <SectionDivider className="mb-6 justify-center" />

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-gold)]">
            Our Sourcing &amp; Ingredients
          </p>

          <h2 className="font-[var(--font-playfair)] text-4xl leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
            True Elegance Begins
            <br />
            <span className="italic text-[rgba(201,168,106,0.85)]">with the Finest</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-[1.85] text-[rgba(255,255,255,0.55)] sm:text-lg">
            We bridge local sustainability with authentic German imports —
            combining premium sourcing with an uncompromising culinary standard.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:mt-20 lg:grid-cols-2">
          {ingredientCards.map(({ title, description, items, icon: Icon, image }, index) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-3xl border border-[rgba(201,168,106,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm transition-all duration-700 hover:border-[rgba(201,168,106,0.2)] hover:bg-[rgba(255,255,255,0.05)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              style={{ transitionDelay: isVisible ? `${300 + index * 200}ms` : "0ms" }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image side */}
                <div className="relative h-56 overflow-hidden md:h-auto md:w-2/5">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_50%,rgba(23,59,53,0.8)_100%)] md:bg-[linear-gradient(to_right,transparent_30%,rgba(23,59,53,0.9)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,59,53,0.5),transparent)] md:bg-transparent" />

                  {/* Floating icon */}
                  <div className="absolute bottom-4 left-4 md:bottom-auto md:left-auto md:right-4 md:top-4">
                    <span className="inline-flex rounded-full border border-[rgba(201,168,106,0.3)] bg-[rgba(15,40,35,0.6)] p-3 text-[var(--color-gold)] backdrop-blur-md">
                      <Icon size={20} />
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 p-7 sm:p-8">
                  <h3 className="font-[var(--font-playfair)] text-2xl tracking-wide text-white sm:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.85] text-[rgba(255,255,255,0.5)]">
                    {description}
                  </p>

                  {/* Items list */}
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-[rgba(255,255,255,0.7)]"
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(201,168,106,0.12)]">
                          <Check size={11} className="text-[var(--color-gold)]" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Accent line */}
                  <div className="mt-6 h-px w-full bg-[linear-gradient(to_right,rgba(201,168,106,0.2),transparent)]" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom flourish */}
        <div
          className={`mx-auto mt-16 max-w-md text-center transition-all delay-700 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
        >
          <p className="text-sm italic leading-7 text-[rgba(255,255,255,0.35)]">
            &ldquo;Every exceptional dish begins long before it reaches the kitchen —
            it begins with the integrity of its ingredients.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
