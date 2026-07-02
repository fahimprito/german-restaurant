"use client";

import { LayoutDashboard, Soup, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/menu", label: "Food Menu", icon: Soup },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-[rgba(31,75,67,0.08)] bg-[rgba(255,255,255,0.58)] px-5 py-6 backdrop-blur-xl lg:min-h-screen lg:w-80 lg:border-b-0 lg:border-r lg:px-6">
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

      <div className="mt-8 space-y-2">
        {items.map(({ href, label, icon: Icon }) => {
          const isActive =
            pathname === href || (href !== "/admin" && pathname.startsWith(href));

          return (
            <Link
              key={href}
              href={href}
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
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(31,75,67,0.14)] px-4 py-2 text-sm text-[var(--color-primary)] transition hover:bg-white"
      >
        <Store size={16} />
        Back to website
      </Link>
    </aside>
  );
}
