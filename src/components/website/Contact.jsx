"use client";

import { Clock3, Mail, MapPin, Phone, Send, ArrowRight, Utensils } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../ui/primaryButton";

/* ──────────────────────────────────────────────
   Section ornament — elegant wide flourish
   ────────────────────────────────────────────── */
function SectionDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 320 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-52 sm:w-64"
        aria-hidden="true"
      >
        <path
          d="M0 12 H60 Q68 12 72 8 Q76 4 84 4 Q92 4 96 8 Q100 12 108 12"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        <circle cx="52" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
        <path
          d="M320 12 H260 Q252 12 248 8 Q244 4 236 4 Q228 4 224 8 Q220 12 212 12"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        <circle cx="268" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
        <path d="M148 12 L160 4 L172 12 L160 20Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
        <circle cx="160" cy="12" r="2.5" fill="currentColor" opacity="0.3" />
        <circle cx="160" cy="12" r="1" fill="currentColor" opacity="0.5" />
        <line x1="108" y1="12" x2="148" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="172" y1="12" x2="212" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  );
}

const hours = [
  { label: "Monday – Thursday", value: "4:00 PM – 10:00 PM" },
  { label: "Friday – Saturday", value: "12:00 PM – 11:00 PM" },
  { label: "Sunday", value: "12:00 PM – 9:00 PM" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["14 Lichtentaler Avenue", "76530 Baden-Baden, Germany"],
  },
  {
    icon: Phone,
    title: "Reservations",
    lines: ["+49 (0) 7221 123456"],
    href: "tel:+4907221123456",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@schwarzwaldstube-restaurant.com"],
    href: "mailto:info@schwarzwaldstube-restaurant.com",
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMapVisible(true);
      },
      { threshold: 0.1 }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
    setTimeout(() => setFormStatus("idle"), 4000);
  };

  return (
    <div ref={sectionRef}>
      {/* ═══════════════════════════════════════════════
          PAGE HEADER — Inline elegant heading
          ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-14">
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(31,75,67,0.06),transparent_55%)]" />

        <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">

            <h1
              className={`font-[var(--font-playfair)] text-4xl leading-[1.15] text-[var(--color-primary-dark)] transition-all delay-100 duration-1000 sm:text-5xl lg:text-6xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
            >
              We&rsquo;d Love to
              <br />
              <span className="italic text-[var(--color-primary)]">Hear from You</span>
            </h1>

            <p
              className={`mx-auto mt-5 max-w-lg text-base leading-[1.85] text-[rgba(44,44,44,0.6)] transition-all delay-200 duration-1000 sm:text-lg ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
            >
              Whether you&rsquo;re planning an intimate dinner, a private event,
              or simply wish to learn more — we&rsquo;re here for you.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT INFO STRIP — Horizontal cards
          ═══════════════════════════════════════════════ */}
      <section className="relative pb-6">
        <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {contactInfo.map(({ icon: Icon, title, lines, href }, index) => {
              const Wrapper = href ? "a" : "div";
              const wrapperProps = href
                ? { href, className: "group block" }
                : {};

              return (
                <Wrapper key={title} {...wrapperProps}>
                  <div
                    className={`flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_4px_20px_rgba(23,59,53,0.04)] transition-all duration-700 hover:border-[rgba(201,168,106,0.3)] hover:shadow-[0_12px_40px_rgba(23,59,53,0.08)] sm:p-6 ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                      }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${400 + index * 150}ms`
                        : "0ms",
                    }}
                  >
                    <span className="inline-flex shrink-0 rounded-xl bg-[rgba(31,75,67,0.07)] p-3 text-[var(--color-primary)]">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-[var(--font-playfair)] text-lg text-[var(--color-primary-dark)]">
                        {title}
                      </h3>
                      <div className="mt-1.5 space-y-0.5 text-sm leading-6 text-[rgba(44,44,44,0.65)]">
                        {lines.map((line) => (
                          <p key={line} className="truncate">{line}</p>
                        ))}
                      </div>
                      {href && (
                        <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                          Contact
                          <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      )}
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MAIN CONTENT — Form + Opening Hours
          ═══════════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,168,106,0.04),transparent_60%)]" />

        <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* ── Left column: Contact form ── */}
            <div
              className={`transition-all delay-300 duration-1000 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
                }`}
            >
              <div className="rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-[0_20px_60px_rgba(23,59,53,0.06)] sm:p-10">
                {/* Form header */}
                <div className="mb-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
                    Send a Message
                  </p>
                  <h2 className="font-[var(--font-playfair)] text-3xl leading-tight text-[var(--color-primary-dark)] sm:text-4xl">
                    Reserve Your{" "}
                    <span className="italic text-[var(--color-primary)]">
                      Experience
                    </span>
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[rgba(44,44,44,0.55)]">
                    Fill out the form below and our team will respond within 24
                    hours.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-first-name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]"
                      >
                        First Name
                      </label>
                      <input
                        id="contact-first-name"
                        type="text"
                        required
                        placeholder="Johann"
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition-all duration-300 placeholder:text-[rgba(44,44,44,0.35)] focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(201,168,106,0.15)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-last-name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]"
                      >
                        Last Name
                      </label>
                      <input
                        id="contact-last-name"
                        type="text"
                        required
                        placeholder="Müller"
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition-all duration-300 placeholder:text-[rgba(44,44,44,0.35)] focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(201,168,106,0.15)]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="johann@example.com"
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition-all duration-300 placeholder:text-[rgba(44,44,44,0.35)] focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(201,168,106,0.15)]"
                    />
                  </div>

                  {/* Phone & Guests */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]"
                      >
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+49 123 456 789"
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition-all duration-300 placeholder:text-[rgba(44,44,44,0.35)] focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(201,168,106,0.15)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-guests"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]"
                      >
                        Number of Guests
                      </label>
                      <select
                        id="contact-guests"
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition-all duration-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(201,168,106,0.15)]"
                      >
                        <option value="">Select</option>
                        <option value="1-2">1 – 2 guests</option>
                        <option value="3-4">3 – 4 guests</option>
                        <option value="5-8">5 – 8 guests</option>
                        <option value="9+">9+ guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition-all duration-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(201,168,106,0.15)]"
                    >
                      <option value="">Choose a topic</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="private-event">Private Event</option>
                      <option value="catering">Catering Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Tell us about your visit or inquiry..."
                      className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3.5 text-sm leading-7 text-[var(--color-ink)] outline-none transition-all duration-300 placeholder:text-[rgba(44,44,44,0.35)] focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(201,168,106,0.15)]"
                    />
                  </div>

                  {/* Submit */}
                  <PrimaryButton
                    type="submit"
                    disabled={formStatus !== "idle"}
                    className="w-full rounded-xl px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] cursor-pointer disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    <span className="flex items-center gap-2.5">
                      {formStatus === "idle" && (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                      {formStatus === "sending" && "Sending..."}
                      {formStatus === "sent" && "Message Sent!"}
                    </span>
                  </PrimaryButton>
                </form>

                {/* Trust note */}
                <p className="mt-5 text-center text-xs leading-5 text-[rgba(44,44,44,0.4)]">
                  Your data will be used solely for responding to your inquiry.
                  We respect your privacy.
                </p>
              </div>
            </div>

            {/* ── Right column: Hours + Quick CTA ── */}
            <div className="flex flex-col gap-6">
              {/* Opening Hours card */}
              <div
                className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary-dark)] p-7 shadow-[0_12px_40px_rgba(23,59,53,0.12)] transition-all delay-500 duration-700 sm:p-8 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                  }`}
              >
                <div className="flex items-center gap-3 text-[var(--color-gold)]">
                  <Clock3 size={20} />
                  <h3 className="font-[var(--font-playfair)] text-2xl text-white">
                    Opening Hours
                  </h3>
                </div>

                <div className="mt-6 space-y-4">
                  {hours.map((entry) => (
                    <div
                      key={entry.label}
                      className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-[rgba(255,255,255,0.6)]">
                        {entry.label}
                      </span>
                      <span className="text-sm font-medium text-[var(--color-gold)]">
                        {entry.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-[rgba(201,168,106,0.08)] px-5 py-3.5">
                  <p className="text-xs leading-5 text-[rgba(255,255,255,0.5)]">
                    <span className="font-medium text-[var(--color-gold)]">
                      Reservations recommended
                    </span>{" "}
                    for Friday &amp; Saturday evenings and Sunday brunch.
                  </p>
                </div>
              </div>

              {/* Quick reservation CTA card */}
              <div
                className={`rounded-2xl border border-[rgba(201,168,106,0.2)] bg-[linear-gradient(145deg,rgba(201,168,106,0.06),rgba(201,168,106,0.02))] p-7 transition-all delay-600 duration-700 sm:p-8 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                  }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  Prefer to Call?
                </p>
                <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                  Reserve by Phone
                </h3>
                <p className="mt-2 text-sm leading-7 text-[rgba(44,44,44,0.55)]">
                  Our team is available during opening hours to assist you with
                  reservations and special requests.
                </p>
                <PrimaryButton asChild className="mt-5 px-6 py-3 tracking-[0.12em]">
                  <a href="tel:+4907221123456">
                    <Phone size={15} />
                    +49 (0) 7221 123456</a>
                </PrimaryButton>
              </div>

              {/* Atmosphere quote */}
              <div
                className={`relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-7 transition-all delay-700 duration-700 sm:p-8 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                  }`}
              >
                <div className="absolute -right-4 -top-4 text-[120px] font-[var(--font-playfair)] leading-none text-[rgba(201,168,106,0.07)]">
                  &ldquo;
                </div>
                <p className="relative text-base italic leading-[1.9] text-[rgba(44,44,44,0.7)]">
                  Warm service, historic character, and a dining room inspired by
                  the quiet sophistication of the Black Forest.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-[var(--color-gold)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    Schwarzwald Stube
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MAP SECTION — Real Google Maps embed
          ═══════════════════════════════════════════════ */}
      <section
        ref={mapRef}
        className="relative overflow-hidden bg-[var(--color-primary-dark)] py-16 sm:py-24"
      >
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.06),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto w-full container px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-16">
            <SectionDivider className="mb-6 text-[var(--color-gold)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-gold)]">
              Find Us
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Nestled in the Heart of{" "}
              <span className="italic text-[rgba(201,168,106,0.85)]">
                Baden-Baden
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.85] text-[rgba(255,255,255,0.45)]">
              Located on the historic Lichtentaler Avenue, our restaurant is
              surrounded by the natural beauty of the Black Forest region.
            </p>
          </div>

          {/* Map + Info grid */}
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Google Maps embed */}
            <div
              className={`overflow-hidden rounded-2xl border border-[rgba(201,168,106,0.15)] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-1000 ${mapVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.0867129532234!2d8.357109581614605!3d48.537045037590325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479730fd4f18d989%3A0xb258667e3652cdc0!2sRestaurant%20Schwarzwaldstube!5e1!3m2!1sen!2sbd!4v1783062264981!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Restaurant Schwarzwaldstube location on Google Maps"
                className="h-full w-full"
              />
            </div>

            {/* Side info panel */}
            <div
              className={`flex flex-col gap-5 transition-all delay-200 duration-1000 ${mapVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
            >
              {/* Address card */}
              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-[rgba(201,168,106,0.12)] bg-[rgba(255,255,255,0.04)] p-6 sm:p-7">
                <div>
                  <div className="inline-flex rounded-full border border-[rgba(201,168,106,0.25)] bg-[rgba(201,168,106,0.08)] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                    Restaurant Location
                  </div>
                  <h3 className="mt-4 font-[var(--font-playfair)] text-2xl text-white sm:text-3xl">
                    14 Lichtentaler Avenue
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[rgba(255,255,255,0.45)]">
                    76530 Baden-Baden, Germany
                    <br />
                    Black Forest Region
                  </p>
                </div>

                <div className="mt-6 rounded-xl bg-[rgba(255,255,255,0.04)] px-5 py-3">
                  <p className="text-xs text-[rgba(255,255,255,0.4)]">
                    <span className="font-medium text-[var(--color-gold)]">
                      GPS
                    </span>{" "}
                    48.5370° N, 8.3571° E
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3">
                <PrimaryButton asChild className="px-7 py-3.5 tracking-[0.12em] rounded-xl">
                  <a
                    href="https://maps.app.goo.gl/C9CRMMfpTxEr5Jhy5"
                    target="_blank"
                    rel="noopener noreferrer">
                    <MapPin size={16} />
                    Get Directions
                  </a>
                </PrimaryButton>
                <a
                  href="tel:+4907221123456"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                >
                  <Phone size={16} />
                  Call to Reserve
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

