import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
};

const base =
  "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium " +
  "transition-all duration-300 ease-smooth focus-visible:outline-none";

const variants = {
  primary:
    "bg-brass text-ink hover:bg-brass-bright hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "border border-ink-border text-paper hover:border-brass/60 hover:bg-ink-elevated hover:-translate-y-0.5 active:translate-y-0",
};

export default function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon}
    </a>
  );
}
