import { cn } from "@/lib/utils";
import { cloneElement, isValidElement } from "react";

const primaryButtonClassName =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(135deg,var(--color-gold),#ddbf88)] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_20px_40px_rgba(201,168,106,0.3)] disabled:pointer-events-none disabled:opacity-50";

const overlayClassName =
  "absolute inset-0 -translate-x-full bg-[linear-gradient(135deg,#ddbf88,var(--color-gold))] transition-transform duration-500 group-hover:translate-x-0";

const contentClassName = "relative z-10 inline-flex items-center gap-2";

export default function PrimaryButton({
  asChild = false,
  className,
  children,
  ...props
}) {
  if (asChild) {
    if (!isValidElement(children)) {
      throw new Error("PrimaryButton with asChild expects a single React element child.");
    }

    return cloneElement(children, {
      ...props,
      className: cn(primaryButtonClassName, className, children.props.className),
      children: (
        <>
          <span className={contentClassName}>{children.props.children}</span>
          <span className={overlayClassName} />
        </>
      ),
    });
  }

  return (
    <button className={cn(primaryButtonClassName, className)} {...props}>
      <span className={contentClassName}>{children}</span>
      <span className={overlayClassName} />
    </button>
  );
}

export { primaryButtonClassName };
