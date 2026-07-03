"use client";

import {
  ShieldCheck,
  Sparkles,
  Wine,
  Clock,
  MapPin,
  Award,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SecondaryButton from "../ui/secondaryButton";
import PrimaryButton from "../ui/primaryButton";
import Link from "next/link";

/* ── Ornamental divider ── */
function SectionDivider({ className = "", dark = false }) {
  const color = dark ? "rgba(201,168,106,0.55)" : "rgba(201,168,106,0.55)";
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span
        className="h-px w-12 sm:w-16"
        style={{
          background: `linear-gradient(to right, transparent, ${color})`,
        }}
      />
      <svg
        viewBox="0 0 48 18"
        className="h-4 w-16 text-(--color-gold)"
        fill="none"
        aria-hidden="true"
      >
        <path d="M1 9 H17" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
        <path d="M31 9 H47" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
        <path d="M18 9 C20 5.5 22 4 24 4 C26 4 28 5.5 30 9" stroke="currentColor" strokeWidth="0.9" opacity="0.8" />
        <path d="M18 9 C20 12.5 22 14 24 14 C26 14 28 12.5 30 9" stroke="currentColor" strokeWidth="0.9" opacity="0.8" />
        <circle cx="24" cy="9" r="1.8" fill="currentColor" opacity="0.65" />
      </svg>
      <span
        className="h-px w-12 sm:w-16"
        style={{
          background: `linear-gradient(to left, transparent, ${color})`,
        }}
      />
    </div>
  );
}

/* ── Scroll reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const philosophyCards = [
  {
    title: "Authenticity",
    description:
      "We strictly honor traditional cooking methods and recipes passed down through generations of Black Forest culinary masters.",
    icon: ShieldCheck,
  },
  {
    title: "Gemütlichkeit",
    subtitle: "German Hospitality",
    description:
      "Dining should feel warm and welcoming. Every guest who enters our doors becomes part of the Schwarzwald Stube family.",
    icon: Sparkles,
  },
  {
    title: "Quality",
    description:
      "We use premium German beers, regional wines, carefully selected meats, and seasonal ingredients sourced from trusted local farms.",
    icon: Wine,
  },
];

const milestones = [
  { year: "1928", label: "Founded in Baden-Baden" },
  { year: "1956", label: "First regional culinary award" },
  { year: "1987", label: "Historic renovation complete" },
  { year: "2024", label: "Nearly a century of tradition" },
];

export default function About() {
  const [heroRef, heroVisible] = useReveal(0.1);
  const [storyRef, storyVisible] = useReveal(0.12);
  const [philRef, philVisible] = useReveal(0.1);
  const [timelineRef, timelineVisible] = useReveal(0.15);
  const [ctaRef, ctaVisible] = useReveal(0.2);

  return (
    <div className="overflow-hidden">
      {/* ═══════════════════════════════════════════
          SECTION 1 — Cinematic hero banner
          ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden sm:min-h-[75vh]"
      >
        {/* Background image */}
        <Image
          src="/images/culinary/JcuWM5ERR90_KD9pktdPgiwg0D58UTm4-Ce9Pev6UZW0BD2CNlUTtrcgAlWX7SipTs3mTrk6pkPSca4urkuKB3RzVnwsCpatphiFuv39o5XfRv-TaLykxamS4g-IxSjr4t1YDkAYE3YNmHq5u9IKjV1Falsjx6eAs1G7VO5AzA5irogIgle7V_Z30N1rnysA.jpg"
          alt="Schwarzwald Stube interior dining atmosphere"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,24,21,0.7)_0%,rgba(10,24,21,0.5)_40%,rgba(10,24,21,0.65)_70%,rgba(10,24,21,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.08),transparent_70%)]" />

        {/* Content */}
        <div
          className={`relative z-10 mx-auto w-full container px-5 py-32 text-center sm:px-8 lg:px-10 transition-all duration-1200 ease-out ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <SectionDivider className="mb-6 justify-center" />

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.5em] text-[rgba(255,255,255,0.55)]">
            Est. 1928 &nbsp;&middot;&nbsp; Baden-Baden, Germany
          </p>

          <h1 className="mx-auto max-w-3xl font-(--font-playfair) text-4xl leading-[1.15] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            A Table Shaped
            <br />
            <span className="italic text-(--color-gold)">by Heritage</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-[1.9] text-[rgba(255,255,255,0.65)] sm:text-lg">
            Discover the heritage, philosophy, and enduring warmth that define
            our Gasthof &amp; Restaurant in the heart of Baden-Baden.
          </p>
        </div>

        {/* Decorative curved section bridge */}
        <div className="absolute inset-x-0 -bottom-px z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120 V80 Q360 0 720 60 Q1080 120 1440 40 V120 Z"
              fill="#f7f3ea"
              opacity="0.4"
            />
            <path
              d="M0 120 V90 Q360 20 720 70 Q1080 120 1440 55 V120 Z"
              fill="#f7f3ea"
            />
          </svg>
          {/* Centered ornament on the curve */}
          <div className="absolute left-1/2 bottom-10 -translate-x-1/2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,168,106,0.35)] bg-(--color-cream) shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-(--color-gold)" fill="none">
                <path d="M8 1 L15 8 L8 15 L1 8Z" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — Our Story (split layout)
          ═══════════════════════════════════════════ */}
      <section
        ref={storyRef}
        className="relative py-24 sm:py-32"
        style={{
          background:
            "linear-gradient(180deg, #f7f3ea 0%, #fbf8f1 30%, #fbf8f1 70%, #f7f3ea 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,75,67,0.03),transparent_60%)]" />

        <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Image collage */}
            <div
              className={`relative transition-all duration-1000 delay-100 ${storyVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
                }`}
            >
              {/* Main image */}
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(23,59,53,0.12)]">
                <div className="relative h-100 sm:h-125">
                  <Image
                    src="/images/culinary/4WKZfW9qrwN53CYDHT63ATyWlk1MLzU3xlnBcqdZzgWWfLIlCs-Z9FdfznFmPPOicsqskyKFvUP5WgQRr4dg-R3x1Oah4U1Pw_H9gvbF2AZa69YZM7M2GfOSR_Ze92UXSaNJmtY6yFV_heAKxJ4AHs4K2I09FAStBrbG8IvUeXfWMS9pMirS6n6y7wLiJIMn.jpg"
                    alt="Traditional German cuisine crafted by hand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(10,24,21,0.4)_100%)]" />
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 z-10 rounded-2xl border border-[rgba(201,168,106,0.25)] bg-(--color-primary-dark) px-6 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:-right-8">
                <p className="font-(--font-playfair) text-3xl text-white sm:text-4xl">
                  96<span className="text-(--color-gold)">+</span>
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[rgba(255,255,255,0.6)]">
                  Years of Heritage
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-[28px] border-l-2 border-t-2 border-[rgba(201,168,106,0.25)] sm:-left-5 sm:-top-5" />
            </div>

            {/* Right — Story text */}
            <div
              className={`transition-all duration-1000 delay-300 ${storyVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
                }`}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-(--color-gold)">
                Our Heritage
              </p>

              <h2 className="font-(--font-playfair) text-3xl leading-tight text-(--color-primary-dark) sm:text-4xl lg:text-[2.75rem]">
                Where Tradition Meets
                <br />
                <span className="italic text-(--color-primary)">
                  Timeless Elegance
                </span>
              </h2>

              <div className="mt-7 space-y-5 text-[0.95rem] leading-[1.9] text-[rgba(44,44,44,0.72)]">
                <p>
                  Founded in 1928, Schwarzwald Stube began as a vision to bring
                  the authentic, comforting flavors of the German countryside to
                  discerning diners. For nearly a century, our Inn &amp;
                  Restaurant has stood as a beacon of hospitality.
                </p>
                <p>
                  Nestled in an atmosphere that balances rustic warmth with
                  refined elegance, we offer an escape into the heart of Fine
                  German Cuisine. Our culinary philosophy is rooted in the deep
                  traditions of the Black Forest region — where hearty,
                  time-honored recipes meet contemporary sophistication.
                </p>
                <p>
                  From perfectly crisp artisanal schnitzels and rich
                  slow-simmered stews to our legendary house-baked desserts,
                  every dish tells a story of passion, precision, and heritage.
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: Clock, label: "Since", value: "1928" },
                  { icon: MapPin, label: "Location", value: "Baden-Baden" },
                  { icon: Award, label: "Style", value: "Fine Dining" },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-(--color-border) bg-[rgba(255,255,255,0.6)] px-4 py-3.5"
                  >
                    <Icon
                      size={16}
                      className="mb-2 text-(--color-gold)"
                    />
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[rgba(44,44,44,0.45)]">
                      {label}
                    </p>
                    <p className="mt-0.5 font-(--font-playfair) text-lg text-(--color-primary-dark)">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — Philosophy (dark section)
          ═══════════════════════════════════════════ */}
      <section
        ref={philRef}
        className="relative overflow-hidden bg-(--color-primary-dark) py-24 sm:py-32"
      >
        {/* Background textures */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(31,75,67,0.4),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -right-32 top-1/3 h-100 w-100 rounded-full bg-[rgba(201,168,106,0.05)] blur-[120px]" />

        <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div
            className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${philVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            <SectionDivider className="mb-6 justify-center" dark />

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-(--color-gold)">
              What We Stand For
            </p>

            <h2 className="font-(--font-playfair) text-4xl leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Our Guiding
              <br />
              <span className="italic text-[rgba(201,168,106,0.85)]">
                Philosophy
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-[1.85] text-[rgba(255,255,255,0.5)] sm:text-lg">
              Three pillars that have defined Schwarzwald Stube for nearly a
              century.
            </p>
          </div>

          {/* Philosophy cards */}
          <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-3">
            {philosophyCards.map(
              ({ title, subtitle, description, icon: Icon }, index) => (
                <article
                  key={title}
                  className={`group relative overflow-hidden rounded-3xl border border-[rgba(201,168,106,0.1)] bg-[rgba(255,255,255,0.03)] p-7 backdrop-blur-sm transition-all duration-700 hover:border-[rgba(201,168,106,0.25)] hover:bg-[rgba(255,255,255,0.06)] sm:p-8 ${philVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                    }`}
                  style={{
                    transitionDelay: philVisible
                      ? `${300 + index * 180}ms`
                      : "0ms",
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-2xl border border-[rgba(201,168,106,0.2)] bg-[rgba(201,168,106,0.08)] p-4 text-(--color-gold)">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-(--font-playfair) text-2xl tracking-wide text-white">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-(--color-gold) opacity-70">
                      {subtitle}
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-[1.85] text-[rgba(255,255,255,0.5)]">
                    {description}
                  </p>

                  {/* Accent line */}
                  <div className="mt-6 h-px w-12 bg-[linear-gradient(to_right,var(--color-gold),transparent)] transition-all duration-500 group-hover:w-full" />

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[rgba(201,168,106,0.06)] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — Timeline
          ═══════════════════════════════════════════ */}
      <section
        ref={timelineRef}
        className="relative py-24 sm:py-32"
        style={{
          background:
            "linear-gradient(180deg, #f7f3ea 0%, #fbf8f1 40%, #fbf8f1 60%, #f7f3ea 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.06),transparent_60%)]" />

        <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
          <div
            className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${timelineVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            <SectionDivider className="mb-6 justify-center opacity-80" />

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-(--color-gold)">
              Our Journey
            </p>

            <h2 className="font-(--font-playfair) text-4xl leading-tight text-(--color-primary-dark) sm:text-5xl">
              Milestones Through
              <br />
              <span className="italic text-(--color-primary)">
                the Decades
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-16 max-w-3xl sm:mt-20">
            {/* Center line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[linear-gradient(180deg,transparent,rgba(201,168,106,0.3),rgba(201,168,106,0.3),transparent)] sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-10 sm:space-y-14">
              {milestones.map(({ year, label }, index) => (
                <div
                  key={year}
                  className={`relative flex items-center gap-6 sm:gap-0 transition-all duration-700 ${timelineVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                    } ${index % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse"
                    }`}
                  style={{
                    transitionDelay: timelineVisible
                      ? `${300 + index * 200}ms`
                      : "0ms",
                  }}
                >
                  {/* Dot */}
                  <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-1/2">
                    <span className="h-3 w-3 rounded-full border-2 border-(--color-gold) bg-(--color-cream)" />
                    <span className="absolute h-6 w-6 rounded-full bg-[rgba(201,168,106,0.15)]" />
                  </div>

                  {/* Content card */}
                  <div className="ml-12 sm:ml-0 sm:w-[calc(50%-32px)]">
                    <div
                      className={`rounded-2xl border border-(--color-border) bg-[rgba(255,255,255,0.7)] p-5 shadow-[0_4px_20px_rgba(23,59,53,0.05)] backdrop-blur-sm ${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                        }`}
                    >
                      <p className="font-(--font-playfair) text-2xl text-(--color-gold) sm:text-3xl">
                        {year}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-[rgba(44,44,44,0.7)]">
                        {label}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block sm:w-[calc(50%-32px)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — Closing CTA
          ═══════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden bg-(--color-primary-dark) py-24 sm:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.06),transparent_60%)]" />
        <div className="absolute -left-32 bottom-0 h-75 w-75 rounded-full bg-[rgba(201,168,106,0.04)] blur-[100px]" />

        <div
          className={`relative mx-auto w-full container px-5 text-center sm:px-8 lg:px-10 transition-all duration-1000 ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <Utensils
            size={32}
            className="mx-auto mb-6 text-(--color-gold) opacity-60"
          />

          <h2 className="mx-auto max-w-2xl font-(--font-playfair) text-3xl leading-[1.3] text-white sm:text-4xl lg:text-5xl">
            Whether you are joining us for a celebratory feast, an intimate
            dinner, or a relaxed evening of exceptional food — we invite you to
            experience the timeless charm of{" "}
            <span className="italic text-(--color-gold)">
              Schwarzwald Stube
            </span>
            .
          </h2>

          <SectionDivider className="mt-8 justify-center" />

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[rgba(255,255,255,0.4)]">
            Since 1928 &nbsp;&middot;&nbsp; Shared memories, timeless flavors
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton asChild>
              <Link href="/#menu">Explore Our Menu</Link>
            </PrimaryButton>
            <SecondaryButton asChild>
              <Link href="/contact">Reserve a Table</Link>
            </SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
