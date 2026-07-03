import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const secondaryButtonClassName =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(201,168,106,0.35)] bg-[rgba(201,168,106,0.06)] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-gold)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(201,168,106,0.55)] hover:bg-[rgba(201,168,106,0.12)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

export default function SecondaryButton({
  asChild = false,
  className,
  style,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(secondaryButtonClassName, className)}
      style={{ color: "var(--color-gold)", ...style }}
      {...props}
    />
  );
}

export { secondaryButtonClassName };
