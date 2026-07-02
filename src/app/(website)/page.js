import Contact from "@/components/website/Contact";
import Hero from "@/components/website/Hero";
import Highlights from "@/components/website/Highlights";
import Ingredients from "@/components/website/Ingredients";
import Menu from "@/components/website/Menu";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Highlights />
      <Ingredients />
      <Contact />
    </>
  );
}
