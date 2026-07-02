import Link from "next/link";

const colorClasses = {
  primary: "border-primary bg-primary text-white hover:bg-wa-navy hover:border-wa-navy",
  secondary: "border-secondary bg-secondary text-wa-deep hover:border-primary hover:bg-white",
  accent: "border-accent bg-accent text-white hover:bg-white hover:text-accent",
  error: "border-error bg-error text-white hover:bg-white hover:text-error",
  ghost: "border-transparent bg-transparent text-primary hover:border-primary hover:bg-light-blue",
  neutral: "border-neutral bg-neutral text-white hover:bg-white hover:text-neutral",
};

const sizeClasses = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-sm",
  lg: "min-h-14 px-7 py-4 text-base",
};

export default function Button({ href, className = "", children, type = "button", color = "primary", size = "md", ...props }) {
  const buttonClassName = [
    "btn inline-flex items-center justify-center rounded-[2px] border font-bold normal-case tracking-normal shadow-[0_10px_22px_rgba(17,50,72,0.12)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-60",
    colorClasses[color] || colorClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!href || type === "submit") {
    return (
      <button type={type} {...props} className={buttonClassName}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} {...props} className={buttonClassName}>
      {children}
    </Link>
  );
}
