"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SecondaryButton from "../ui/secondaryButton";
import PrimaryButton from "../ui/primaryButton";

function Ornament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="70" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="130" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <path
        d="M80 8 C85 2, 90 2, 95 8 C100 14, 105 14, 110 8 C105 2, 100 2, 95 8 C90 14, 85 14, 80 8Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        opacity="0.6"
      />
      <circle cx="75" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="125" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
      <path d="M88 8 L95 4 L102 8 L95 12Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.35" />
      <path d="M98 8 L105 4 L112 8 L105 12Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.35" />
    </svg>
  );
}

function CornerFrame({ position = "top-left" }) {
  const rotations = {
    "top-left": "",
    "top-right": "scale(-1,1)",
    "bottom-left": "scale(1,-1)",
    "bottom-right": "scale(-1,-1)",
  };

  const positions = {
    "top-left": "top-6 left-6 sm:top-10 sm:left-10",
    "top-right": "top-6 right-6 sm:top-10 sm:right-10",
    "bottom-left": "bottom-6 left-6 sm:bottom-10 sm:left-10",
    "bottom-right": "bottom-6 right-6 sm:bottom-10 sm:right-10",
  };

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute h-12 w-12 text-[var(--color-gold)] opacity-30 sm:h-16 sm:w-16 ${positions[position]}`}
      style={{ transform: rotations[position] }}
      aria-hidden="true"
    >
      <path d="M0 40 L0 4 C0 1.8 1.8 0 4 0 L40 0" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M0 24 L0 8 C0 3.6 3.6 0 8 0 L24 0" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <circle cx="4" cy="4" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function SectionBridge() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
      <div className="mx-auto flex w-fit flex-col items-center">
        <div className="relative flex items-center justify-center px-10">
          <span className="h-px w-20 bg-[linear-gradient(to_right,transparent,rgba(201,168,106,0.85))] sm:w-28" />
          <div className="mx-4 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(201,168,106,0.28)] bg-[linear-gradient(180deg,rgba(18,46,41,0.96),rgba(18,46,41,0.82))] shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[var(--color-gold)]"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.8" opacity="0.28" />
              <path d="M20 6 L30 20 L20 34 L10 20 Z" stroke="currentColor" strokeWidth="1" opacity="0.88" />
              <path d="M20 12 L25 20 L20 28 L15 20 Z" fill="currentColor" opacity="0.22" />
              <circle cx="20" cy="20" r="2.2" fill="currentColor" opacity="0.72" />
            </svg>
          </div>
          <span className="h-px w-20 bg-[linear-gradient(to_left,transparent,rgba(201,168,106,0.85))] sm:w-28" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/culinary/3BET8DNCNTQ_yGIENFsqkPIsbUedOIZ9YqsoUFTCWc7IGHhj45p_odwLlrVEvtGVCDHMii_lvu7m9ZEX0hsVfmIDci6CqBV-pijSwTTIT077qxWLOySKvc2T1oJoSn7WFq2EBQqcrVdQKy6rnU-n5MyqgCAMOJk8ix8Mt81E5e4VEZp1RS7mH8lKQIT_irnl.jpg"
          alt="Elegant German dining atmosphere at Schwarzwald Stube"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,24,21,0.78)_0%,rgba(10,24,21,0.62)_40%,rgba(10,24,21,0.7)_70%,rgba(10,24,21,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.1)_0%,transparent_70%)]" />
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[rgba(201,168,106,0.08)] blur-[120px]" />
      <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-[rgba(31,75,67,0.15)] blur-[100px]" />
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[rgba(201,168,106,0.06)] blur-[80px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(10,24,21,0.4)_100%)]" />

      <CornerFrame position="top-left" />
      <CornerFrame position="top-right" />
      <CornerFrame position="bottom-left" />
      <CornerFrame position="bottom-right" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <div
          className={`flex max-w-4xl flex-col items-center transition-all duration-[1200ms] ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div
            className={`relative mb-8 transition-all delay-100 duration-[1400ms] ease-out ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
          >
            <div className="absolute inset-0 rounded-full bg-[rgba(201,168,106,0.12)] blur-3xl" />
            <Image
              src="/images/logo.png"
              alt="Schwarzwald Stube emblem"
              width={200}
              height={200}
              className="relative drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>

          <Ornament
            className={`mb-6 w-48 text-[var(--color-gold)] transition-all delay-300 duration-[1000ms] ease-out sm:w-56 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
          />

          <p
            className={`mb-5 text-xs uppercase tracking-[0.5em] text-[rgba(255,255,255,0.6)] transition-all delay-[400ms] duration-[1000ms] ease-out sm:text-sm ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            Est. 1928 &nbsp;&middot;&nbsp; Baden-Baden, Germany
          </p>

          <h1
            className={`font-[var(--font-playfair)] text-5xl leading-[1.0] tracking-wide text-white transition-all delay-500 duration-[1200ms] ease-out sm:text-6xl md:text-7xl lg:text-8xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
          >
            Schwarzwald
            <br />
            <span className="italic">Stube</span>
          </h1>

          <p
            className={`mt-5 text-base uppercase tracking-[0.4em] text-[var(--color-gold)] transition-all delay-[600ms] duration-[1000ms] ease-out sm:text-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            Gasthof &amp; Restaurant
          </p>

          <Ornament
            className={`mt-6 w-48 text-[var(--color-gold)] transition-all delay-700 duration-[1000ms] ease-out sm:w-56 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
          />

          <p
            className={`mt-8 max-w-xl text-base leading-[1.9] text-[rgba(255,255,255,0.72)] transition-all delay-[800ms] duration-[1000ms] ease-out sm:text-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            Fine German cuisine rooted in nearly a century of Black Forest tradition.
            An intimate atmosphere of heritage, warmth, and refined hospitality
            awaits you.
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all delay-[900ms] duration-[1000ms] ease-out sm:gap-5 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
          >
            {/* <a
              href="#menu"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(135deg,var(--color-gold),#ddbf88)] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_20px_40px_rgba(201,168,106,0.3)]"
            >
              <span className="relative z-10">Explore Menu</span>
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(135deg,#ddbf88,var(--color-gold))] transition-transform duration-500 group-hover:translate-x-0" />
            </a> */}
            <PrimaryButton asChild>
              <a href="#menu">Explore Menu</a>
            </PrimaryButton>
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,106,0.35)] bg-[rgba(201,168,106,0.06)] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-gold)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(201,168,106,0.55)] hover:bg-[rgba(201,168,106,0.12)]"
              style={{ color: "var(--color-gold)" }}
            >
              Reserve a Table
            </a> */}
            <SecondaryButton asChild>
              <Link href="/contact">Reserve a Table</Link>
            </SecondaryButton>
          </div>
        </div>
      </div>

      {/* <SectionBridge /> */}
      {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--color-cream),transparent)]" /> */}
    </section>
  );
}




