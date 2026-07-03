"use client";

import Sidebar from "@/components/admin/Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4efe4] text-[var(--color-ink)]">
      <div className="mx-auto flex min-h-screen flex-col lg:flex-row">
        <div className="sticky top-0 z-40 border-b border-[rgba(31,75,67,0.08)] bg-[rgba(255,255,255,0.78)] px-5 py-4 shadow-[var(--shadow-card)] backdrop-blur-sm lg:hidden">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Open admin navigation"
              onClick={() => setIsSidebarOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-[rgba(31,75,67,0.14)] bg-white p-3 text-[var(--color-primary-dark)] transition hover:bg-[rgba(31,75,67,0.05)]"
            >
              <Menu size={20} />
            </button>
            <div>
              <p className="font-[var(--font-playfair)] text-xl text-[var(--color-primary-dark)]">
                Schwarzwald Stube
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-[rgba(44,44,44,0.56)]">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex-1 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">{children}</div>
      </div>
    </div>
  );
}
