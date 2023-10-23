import { Button as BB } from "react-daisyui";

export default function Button({ className, ...props }) {
  return <BB {...props} className={`rounded-none font-light ${className}`} shape="square" wide={true} />;
}
