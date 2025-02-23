import { Link } from "react-router";

export default function Logo({ children }) {
  return (
    <Link href="/" className="logo">
      <img src="/images/logo.svg" alt="Aqar's logo" />
      <span className="logo-text ">{children}</span>
    </Link>
  );
}
