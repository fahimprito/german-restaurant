import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const primaryButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold),#ddbf88)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-dark)] transition duration-300 hover:-translate-y-px hover:shadow-[0_16px_30px_rgba(201,168,106,0.26)] disabled:pointer-events-none disabled:opacity-50";

export default function PrimaryButton({
  asChild = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(primaryButtonClassName, className)}
      {...props}
    />
  );
}

export { primaryButtonClassName };
