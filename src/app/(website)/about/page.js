import About from "@/components/website/About";

export const metadata = {
  title: "About | Schwarzwald Stube",
  description:
    "Learn the heritage, philosophy, and culinary identity behind Schwarzwald Stube.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="section-shell py-10 sm:py-14">
        <div className="surface-card rounded-[32px] px-6 py-8 sm:px-8 sm:py-10">
          <p className="eyebrow">About Schwarzwald Stube</p>
          <h1 className="section-title text-4xl sm:text-5xl">
            Nearly a century of German hospitality
          </h1>
          <p className="section-lead max-w-3xl">
            Discover the heritage, philosophy, and enduring warmth that define
            our Gasthof & Restaurant in the heart of Baden-Baden.
          </p>
        </div>
      </section>
      <About />
    </div>
  );
}
