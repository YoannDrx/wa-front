import Link from "next/link";
import { Button as BB } from "react-daisyui";

export default function Button({ href = "#", className, children, ...props }) {
  return (
    <Link href={href}>
      <BB {...props} className={`rounded-none font-light ${className}`} shape="square" wide={true}>
        {children}
      </BB>
    </Link>
  );
}
