import About from "@/components/website/About";

export const metadata = {
  title: "About | Schwarzwald Stube",
  description:
    "Learn the heritage, philosophy, and culinary identity behind Schwarzwald Stube — a historic German restaurant since 1928.",
};

export default function AboutPage() {
  return (
    <div className="pt-[62px]">
      <About />
    </div>
  );
}
