import Image from "next/image";
import PrimaryButton from "@/components/ui/primaryButton";
import SecondaryButton from "@/components/ui/secondaryButton";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/culinary/JcuWM5ERR90_KD9pktdPgiwg0D58UTm4-Ce9Pev6UZW0BD2CNlUTtrcgAlWX7SipTs3mTrk6pkPSca4urkuKB3RzVnwsCpatphiFuv39o5XfRv-TaLykxamS4g-IxSjr4t1YDkAYE3YNmHq5u9IKjV1Falsjx6eAs1G7VO5AzA5irogIgle7V_Z30N1rnysA.jpg"
          alt="Elegant German dining atmosphere"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,24,21,0.86),rgba(10,24,21,0.58),rgba(10,24,21,0.8))]" />
      <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[rgba(201,168,106,0.18)] blur-3xl" />
      <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full container items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <Image
            src="/images/logo.png"
            alt="Schwarzwald Stube emblem"
            width={180}
            height={180}
            className="mb-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
          <p className="mb-4 text-sm uppercase tracking-[0.42em] text-[rgba(255,255,255,0.72)]">
            Since 1928
          </p>
          <h1 className="font-[var(--font-playfair)] text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            SCHWARZWALD STUBE
          </h1>
          <p className="mt-4 text-lg uppercase tracking-[0.34em] text-[var(--color-gold)]">
            Gasthof & Restaurant
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.82)] sm:text-xl">
            Fine German Cuisine Since 1928. Experience timeless flavors
            inspired by the heart of Germany in an atmosphere of heritage,
            warmth, and refined hospitality.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton asChild>
              <a href="#menu">View Menu</a>
            </PrimaryButton>
            <SecondaryButton asChild>
              <a href="#contact">Contact Us</a>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
