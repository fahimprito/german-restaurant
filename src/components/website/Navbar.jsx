"use client";

import { Menu, Phone, X, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import PrimaryButton from "@/components/ui/primaryButton";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/#highlights", label: "Highlights" },
  { href: "/#menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";
  const isDesktopTransparent = isHomePage && !isScrolled && !isOpen;

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[rgba(201,168,106,0.12)] bg-[var(--color-primary-dark)] shadow-[0_4px_30px_rgba(0,0,0,0.24)] transition-all duration-500 ${isDesktopTransparent
        ? "lg:border-transparent lg:bg-transparent lg:shadow-none"
        : ""
        }`}
    >
      <div className="mx-auto flex w-full container items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
        {/* ── Brand ── */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="Schwarzwald Stube logo"
              width={50}
              height={50}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-[var(--font-playfair)] text-lg leading-tight tracking-wide text-white transition-colors duration-300 group-hover:text-[var(--color-gold)]">
              Schwarzwald Stube
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.35em] text-[rgba(201,168,106,0.7)]">
              Gasthof &amp; Restaurant
            </p>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-gold)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:text-white"
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        {/* ── Desktop right actions ── */}
        <div className="hidden items-center gap-3 lg:flex">
          <PrimaryButton asChild className="gap-2 px-5 py-2.5 text-xs tracking-[0.15em]">
            <a href="tel:+4907221123456">
              <Phone size={13} />
              Reserve
            </a>
          </PrimaryButton>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          aria-label="Toggle navigation"
          className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${isOpen
            ? "border-[rgba(201,168,106,0.4)] bg-[rgba(201,168,106,0.1)] text-[var(--color-gold)]"
            : "border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] text-white"
            }`}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className={`absolute transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}>
            <X size={18} />
          </span>
          <span className={`absolute transition-all duration-300 ${isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"}`}>
            <Menu size={18} />
          </span>
        </button>
      </div>

      {/* ── Mobile menu (full-screen overlay) ── */}
      <div
        className={`fixed inset-0 top-[calc(var(--nav-height,62px))] z-40 transition-all duration-500 lg:hidden ${isOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
          }`}
        style={{ "--nav-height": "62px" }}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[rgb(10,24,21)] transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={closeMenu}
        />

        {/* Content */}
        <div className={`relative flex h-full flex-col px-8 py-8 transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}>
          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group/link flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300 hover:bg-[rgba(201,168,106,0.06)]"
                onClick={closeMenu}
                style={{ transitionDelay: isOpen ? `${index * 60}ms` : "0ms" }}
              >
                <span className="h-px w-6 bg-[rgba(201,168,106,0.3)] transition-all duration-300 group-hover/link:w-10 group-hover/link:bg-[var(--color-gold)]" />
                <span className="font-[var(--font-playfair)] text-2xl tracking-wide text-[var(--color-gold)] transition-colors duration-300 group-hover/link:text-white">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-[rgba(201,168,106,0.12)]" />

          {/* Info section */}
          <div className="flex flex-col gap-4 px-4">
            <div className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.55)]">
              <Clock size={16} className="mt-0.5 shrink-0 text-[var(--color-gold)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[rgba(201,168,106,0.6)]">Opening Hours</p>
                <p className="mt-1 text-[rgba(255,255,255,0.7)]">Tue – Sun: 11:30 – 22:00</p>
                <p className="text-[rgba(255,255,255,0.45)]">Closed on Mondays</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.55)]">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-gold)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[rgba(201,168,106,0.6)]">Location</p>
                <p className="mt-1 text-[rgba(255,255,255,0.7)]">Baden-Baden, Germany</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto flex flex-col gap-3 px-4 pb-6">
            <PrimaryButton asChild className="gap-2.5 px-6 py-3.5 tracking-[0.12em]">
              <a href="tel:+4907221123456" onClick={closeMenu}>
                <Phone size={16} />
                Reserve a Table
              </a>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}







