"use client";

import { LayoutDashboard, Soup, Store, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/menu", label: "Food Menu", icon: Soup },
];

export default function Sidebar({ isOpen = false, onClose = () => {} }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          aria-label="Close admin navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-[rgba(13,26,24,0.45)] lg:hidden"
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[88vw] max-w-80 border-r border-[rgba(31,75,67,0.08)] bg-[rgba(255,255,255,0.94)] px-5 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-300 lg:static lg:min-h-screen lg:w-80 lg:translate-x-0 lg:border-b-0 lg:bg-[rgba(255,255,255,0.58)] lg:px-6 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Schwarzwald Stube logo"
              width={58}
              height={58}
            />
            <div>
              <p className="font-[var(--font-playfair)] text-xl text-[var(--color-primary-dark)]">
                Schwarzwald Stube
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-[rgba(44,44,44,0.52)]">
                Admin Panel
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close admin navigation"
            onClick={onClose}
            className="inline-flex rounded-full border border-[rgba(31,75,67,0.14)] p-2 text-[var(--color-primary-dark)] transition hover:bg-white lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-8 space-y-2">
          {items.map(({ href, label, icon: Icon }) => {
            const isActive =
              pathname === href || (href !== "/admin" && pathname.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-[22px] px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[var(--color-primary-dark)] text-white shadow-[var(--shadow-card)]"
                    : "text-[var(--color-primary-dark)] hover:bg-white"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/"
          onClick={onClose}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(31,75,67,0.14)] px-4 py-2 text-sm text-[var(--color-primary)] transition hover:bg-white"
        >
          <Store size={16} />
          Back to website
        </Link>
      </aside>
    </>
  );
}
