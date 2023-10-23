import { Button as BB } from "react-daisyui";

export default function Button({ ...props }) {
  return <BB {...props} className="rounded-none font-light" shape="square" wide={true} />;
}
