import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-amber text-navy-deep hover:bg-amber-deep focus-visible:outline-amber",
  secondary:
    "border border-steel-muted bg-transparent text-charcoal hover:border-navy hover:text-navy focus-visible:outline-navy",
  ghost:
    "bg-transparent text-white hover:text-amber focus-visible:outline-amber",
} as const;

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 font-display text-sm font-semibold tracking-[0.08em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
