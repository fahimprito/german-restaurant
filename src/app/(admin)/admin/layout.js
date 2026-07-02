import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f4efe4] text-[var(--color-ink)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">{children}</div>
      </div>
    </div>
  );
}
