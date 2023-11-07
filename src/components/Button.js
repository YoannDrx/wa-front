import Link from "next/link";
import { Button as BB } from "react-daisyui";

export default function Button({ href = "#", className='', children, type, ...props }) {
  if (type === "submit") {
    return (
      <BB type="submit" {...props} className={`rounded-none font-light ${className}`} shape="square" wide={true}>
        {children}
      </BB>
    );
  }

  return (
    <Link href={href}>
      <BB {...props} className={`rounded-none font-light ${className}`} shape="square" wide={true}>
        {children}
      </BB>
    </Link>
  );
}
