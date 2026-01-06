import { Link } from "react-router-dom";

/**
 * Logo component that renders a clickable logo linking to the home page
 * @returns {JSX.Element} A Link element containing the logo image and hidden text
 */
function Logo() {
  return (
    // Link wrapper that navigates to home page when clicked
    <Link className="header__logo" to="/">
      {/* Logo image */}
      <img src="/images/argentBankLogo.png" alt="Argent Bank logo" />

      {/* Screen reader only text for accessibility */}
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  );
}

export default Logo;
