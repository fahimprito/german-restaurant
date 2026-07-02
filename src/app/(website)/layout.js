import Footer from "@/components/website/Footer";
import Navbar from "@/components/website/Navbar";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-(--color-cream) text-(--color-ink)">
        {children}
      </main>
      <Footer />
    </>
  );
}
