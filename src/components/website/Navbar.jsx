"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PrimaryButton from "@/components/ui/primaryButton";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/#highlights", label: "Highlights" },
  { href: "/#menu", label: "Menu" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isElevated = isScrolled || isOpen;
  const navTextClass = isElevated
    ? "text-[var(--color-gold)]"
    : "text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]";
  const brandSubtextClass = isElevated
    ? "text-[rgba(255,255,255,0.88)]"
    : "text-[rgba(255,255,255,0.88)] [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]";
  const reserveButtonClass = isElevated
    ? "border-white/30 bg-white/10 text-white hover:bg-white/18"
    : "border-white/40 bg-black/20 text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.45)] hover:bg-black/30";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isElevated
          ? "border-b border-white/10 bg-[rgba(23,59,53,0.88)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full container items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Schwarzwald Stube logo"
            width={54}
            height={54}
          />
          <div className="hidden sm:block">
            <p className="font-[var(--font-playfair)] text-lg text-white">
              Schwarzwald Stube
            </p>
            <p
              className={`text-xs uppercase tracking-[0.28em] ${brandSubtextClass}`}
            >
              Gasthof & Restaurant
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm uppercase tracking-[0.2em] transition hover:text-white ${navTextClass}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+4907221123456"
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${reserveButtonClass}`}
          >
            <Phone size={16} />
            Reserve
          </a>
          <PrimaryButton asChild className="px-5 py-2.5">
            <Link href="/admin">Admin</Link>
          </PrimaryButton>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex rounded-full border border-white/15 p-2 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto w-full container border-t border-white/10 px-5 py-4 sm:px-8 lg:px-10 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] text-white/85 transition hover:bg-white/6"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="rounded-2xl bg-[var(--color-gold)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-dark)]"
              onClick={() => setIsOpen(false)}
            >
              Admin Panel
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
