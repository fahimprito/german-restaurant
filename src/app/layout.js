import { Inter, Playfair_Display } from "next/font/google";
import { RestaurantProvider } from "@/context/RestaurantContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Schwarzwald Stube | Gasthof & Restaurant",
  description:
    "Premium German restaurant website with a public dining experience and local admin menu management.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-(--color-cream) text-(--color-ink) antialiased">
        <RestaurantProvider>{children}</RestaurantProvider>
      </body>
    </html>
  );
}
