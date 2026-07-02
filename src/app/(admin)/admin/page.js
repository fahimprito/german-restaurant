import DashboardCards from "@/components/admin/DashboardCards";
import PrimaryButton from "@/components/ui/primaryButton";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-[28px] rounded-[32px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.78)] px-6 py-8 shadow-[var(--shadow-card)] backdrop-blur-sm sm:px-8">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,106,0.45)] bg-[rgba(255,255,255,0.55)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
          Admin Dashboard
        </p>
        <h1 className="font-[var(--font-playfair)] text-3xl leading-tight text-[var(--color-primary-dark)] sm:text-4xl">
          Restaurant menu control center
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(44,44,44,0.82)] sm:text-lg">
          Version 1 keeps the restaurant content static and the food menu fully
          editable through local storage. The structure is prepared so we can
          swap storage for a future Laravel API without rebuilding the UI.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <PrimaryButton asChild>
            <Link href="/admin/menu">Manage food menu</Link>
          </PrimaryButton>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(31,75,67,0.18)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)] transition hover:bg-white"
          >
            View website
          </Link>
        </div>
      </header>

      <DashboardCards />
    </div>
  );
}
