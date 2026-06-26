import Link from "next/link";

const colorClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  error: "btn-error",
  ghost: "btn-ghost",
  neutral: "btn-neutral",
};

export default function Button({ href, className = "", children, type = "button", color = "primary", ...props }) {
  const buttonClassName = ["btn rounded-none font-light", colorClasses[color] || "", className].filter(Boolean).join(" ");

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
