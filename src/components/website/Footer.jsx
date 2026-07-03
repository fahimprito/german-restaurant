import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/#highlights", label: "Culinary Highlights" },
  { href: "/#menu", label: "Food Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-(--color-primary-dark) text-white">
      <div className="mx-auto w-full container px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt="Schwarzwald Stube logo"
              width={120}
              height={120}
            />
            <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(255,255,255,0.72)]">
              Historic German hospitality, refined flavors, and a table that
              honors tradition with grace.
            </p>
          </div>

          <div>
            <p className="font-(--font-playfair) text-2xl">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(255,255,255,0.72)]">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-(--color-gold)">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-(--font-playfair) text-2xl">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-[rgba(255,255,255,0.72)]">
              <p>14 Lichtentaler Avenue, 76530 Baden-Baden</p>
              <p>+49 (0) 7221 123456</p>
              <p>info@schwarzwaldstube-restaurant.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[rgba(255,255,255,0.6)] sm:flex-row sm:items-center sm:justify-between">
          <p>Since 1928 | Shared memories, timeless flavors.</p>
          <p>
            Copyright {new Date().getFullYear()} Schwarzwald Stube. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
