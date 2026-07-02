import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const secondaryButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-white/32 bg-white/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-white/16 disabled:pointer-events-none disabled:opacity-50";

export default function SecondaryButton({
  asChild = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(secondaryButtonClassName, className)}
      {...props}
    />
  );
}

export { secondaryButtonClassName };
