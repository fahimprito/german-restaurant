import DashboardCards from "@/components/admin/DashboardCards";
import PrimaryButton from "@/components/ui/primaryButton";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <header className="surface-card rounded-[32px] px-6 py-8 sm:px-8">
        <p className="eyebrow">Admin Dashboard</p>
        <h1 className="section-title text-3xl sm:text-4xl">
          Restaurant menu control center
        </h1>
        <p className="section-lead max-w-3xl">
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
