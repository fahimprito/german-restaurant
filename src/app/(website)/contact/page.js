import ContactPage from "@/components/website/Contact";

export const metadata = {
  title: "Contact | Schwarzwald Stube",
  description:
    "Visit Schwarzwald Stube in Baden-Baden, Germany. Find our address, opening hours, reservation phone number, and get in touch with our team.",
};

export default function ContactRoute() {
  return (
    <div className="pt-[62px]">
      <ContactPage />
    </div>
  );
}
