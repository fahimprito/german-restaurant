import { ChefHat, Flame, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

const highlightCards = [
  {
    title: "Masterful classics",
    description:
      "Time-honored recipes elevated with polished technique, from schnitzel to slow-braised specialties.",
    image:
      "/images/culinary/2Vs63JonHoE4CshlmPwzIhq_wu_6YfqywmM_CKxQDA5ceVrAOa1Rua5iS134jDN3ehsoBmZmMjA6nHo8QvJbJQen5CTeFue1SdegA2lsp2xCBmuAl2SYxc-IQ6FxdMp_BzSoWOgOH5aunFa38Y27WMh1gqNyWOdoxxyC_C7P3722x0zcryZ-iKqq6vTAZsuT.jpg",
    icon: UtensilsCrossed,
  },
  {
    title: "Seasonal refinement",
    description:
      "Our menu moves with the seasons, pairing regional produce with German culinary identity.",
    image:
      "/images/culinary/X3T_8NI6oeMkOUNtXF_kOj2K2X-Whm8Umdz8kczMzwoU0ETj_NJ0AHJ2DQYLsu8qv5n_20ojLyrP90gZPdPSd5dbGakXIJRZUrgVOEV7piQlmfPuKMIEG2EJND4qrTCH-hcEz4eyqVtNNFiQJL_Bzf8kNYI5MbCqcxYoYzHzud8VtvJ1GuAk5ev_wT433-Zm.jpg",
    icon: ChefHat,
  },
  {
    title: "Cooked from scratch",
    description:
      "Every plate leaves the kitchen with the texture, balance, and warmth of handcrafted hospitality.",
    image:
      "/images/culinary/4WKZfW9qrwN53CYDHT63ATyWlk1MLzU3xlnBcqdZzgWWfLIlCs-Z9FdfznFmPPOicsqskyKFvUP5WgQRr4dg-R3x1Oah4U1Pw_H9gvbF2AZa69YZM7M2GfOSR_Ze92UXSaNJmtY6yFV_heAKxJ4AHs4K2I09FAStBrbG8IvUeXfWMS9pMirS6n6y7wLiJIMn.jpg",
    icon: Flame,
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-[rgba(31,75,67,0.04)] py-20 sm:py-24">
      <div className="section-shell">
        <div className="section-copy">
          <p className="eyebrow">From Our Kitchen to Your Table</p>
          <h2 className="section-title">A curated journey through Germany</h2>
          <p className="section-lead">
            Our menu is a curated journey through Germany&apos;s rich culinary
            landscape, blending time-honored recipes with modern culinary
            artistry. Every dish is prepared from scratch by our master chefs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {highlightCards.map(({ title, description, image, icon: Icon }) => (
            <article key={title} className="surface-card overflow-hidden">
              <div className="relative h-64">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-full bg-[rgba(31,75,67,0.08)] p-3 text-[var(--color-primary)]">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(44,44,44,0.78)]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
