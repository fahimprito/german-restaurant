import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const hours = [
  { label: "Monday - Thursday", value: "4:00 PM - 10:00 PM" },
  { label: "Friday - Saturday", value: "12:00 PM - 11:00 PM" },
  { label: "Sunday", value: "12:00 PM - 9:00 PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="surface-card rounded-[32px] p-8">
          <p className="eyebrow">Find Us</p>
          <h2 className="section-title">An address worth lingering over</h2>

          <div className="mt-8 space-y-6 text-sm leading-7 text-[rgba(44,44,44,0.8)]">
            <div className="flex gap-4">
              <span className="mt-1 rounded-full bg-[rgba(31,75,67,0.08)] p-3 text-[var(--color-primary)]">
                <MapPin size={18} />
              </span>
              <div>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                  Schwarzwald Stube
                </h3>
                <p>14 Lichtentaler Avenue</p>
                <p>76530 Baden-Baden</p>
                <p>Germany</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 rounded-full bg-[rgba(31,75,67,0.08)] p-3 text-[var(--color-primary)]">
                <Clock3 size={18} />
              </span>
              <div>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                  Opening Hours
                </h3>
                <div className="mt-3 space-y-2">
                  {hours.map((entry) => (
                    <p key={entry.label} className="flex flex-col sm:flex-row sm:gap-3">
                      <span className="font-medium text-[var(--color-primary-dark)]">
                        {entry.label}
                      </span>
                      <span>{entry.value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 rounded-full bg-[rgba(31,75,67,0.08)] p-3 text-[var(--color-primary)]">
                <Phone size={18} />
              </span>
              <div>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                  Reservations
                </h3>
                <p>+49 (0) 7221 123456</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 rounded-full bg-[rgba(31,75,67,0.08)] p-3 text-[var(--color-primary)]">
                <Mail size={18} />
              </span>
              <div>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                  Email
                </h3>
                <p>info@schwarzwaldstube-restaurant.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="surface-card relative overflow-hidden rounded-[32px] p-3">
          <div className="flex h-full min-h-[420px] flex-col justify-between rounded-[24px] border border-dashed border-[rgba(31,75,67,0.18)] bg-[linear-gradient(160deg,rgba(31,75,67,0.14),rgba(201,168,106,0.14))] p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-primary)]">
                Google Maps Placeholder
              </p>
              <h3 className="mt-4 font-[var(--font-playfair)] text-4xl text-[var(--color-primary-dark)]">
                Future map integration area
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(44,44,44,0.76)]">
                This section is intentionally prepared for a live map embed in a
                future iteration while keeping the current version backend-free
                and lightweight.
              </p>
            </div>

            <div className="rounded-[24px] bg-white/75 p-5 shadow-[var(--shadow-card)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-primary)]">
                Signature atmosphere
              </p>
              <p className="mt-3 text-base leading-7 text-[rgba(44,44,44,0.8)]">
                Warm service, historic character, and a dining room inspired by
                the quiet sophistication of the Black Forest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
