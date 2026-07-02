import About from "@/components/website/About";

export const metadata = {
  title: "About | Schwarzwald Stube",
  description:
    "Learn the heritage, philosophy, and culinary identity behind Schwarzwald Stube.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="mx-auto w-full container px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="rounded-[28px] rounded-[32px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.78)] px-6 py-8 shadow-[var(--shadow-card)] backdrop-blur-sm sm:px-8 sm:py-10">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,106,0.45)] bg-[rgba(255,255,255,0.55)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            About Schwarzwald Stube
          </p>
          <h1 className="font-[var(--font-playfair)] text-4xl leading-tight text-[var(--color-primary-dark)] sm:text-5xl">
            Nearly a century of German hospitality
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(44,44,44,0.82)] sm:text-lg">
            Discover the heritage, philosophy, and enduring warmth that define
            our Gasthof & Restaurant in the heart of Baden-Baden.
          </p>
        </div>
      </section>
      <About />
    </div>
  );
}
