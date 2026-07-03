"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SecondaryButton from "../ui/secondaryButton";
import PrimaryButton from "../ui/primaryButton";
import CornerFrame from "../ui/cornerFrame";
import Ornament from "../ui/ornamentIcon";


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
          className={`flex max-w-4xl flex-col items-center transition-all duration-1200 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div
            className={`relative mb-8 transition-all delay-100 duration-1400 ease-out ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
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
            className={`mb-6 w-48 text-(--color-gold) transition-all delay-300 duration-1000 ease-out sm:w-56 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
          />

          <p
            className={`mb-5 text-xs uppercase tracking-[0.5em] text-[rgba(255,255,255,0.6)] transition-all delay-400 duration-1000 ease-out sm:text-sm ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            Est. 1928 &nbsp;&middot;&nbsp; Baden-Baden, Germany
          </p>

          <h1
            className={`font-(--font-playfair) text-5xl leading-none tracking-wide text-white transition-all delay-500 duration-1200 ease-out sm:text-6xl md:text-7xl lg:text-8xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
          >
            Schwarzwald
            <br />
            <span className="italic">Stube</span>
          </h1>

          <p
            className={`mt-5 text-base uppercase tracking-[0.4em] text-(--color-gold) transition-all delay-600 duration-1000 ease-out sm:text-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            Gasthof &amp; Restaurant
          </p>

          <Ornament
            className={`mt-6 w-48 text-(--color-gold) transition-all delay-700 duration-1000 ease-out sm:w-56 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
          />

          <p
            className={`mt-8 max-w-xl text-base leading-[1.9] text-[rgba(255,255,255,0.72)] transition-all delay-800 duration-1000 ease-out sm:text-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            Fine German cuisine rooted in nearly a century of Black Forest tradition.
            An intimate atmosphere of heritage, warmth, and refined hospitality
            awaits you.
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all delay-900 duration-1000 ease-out sm:gap-5 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
          >
            <PrimaryButton asChild>
              <a href="#menu">Explore Menu</a>
            </PrimaryButton>

            <SecondaryButton asChild>
              <Link href="/contact">Reserve a Table</Link>
            </SecondaryButton>
          </div>
        </div>
      </div>

    </section>
  );
}




