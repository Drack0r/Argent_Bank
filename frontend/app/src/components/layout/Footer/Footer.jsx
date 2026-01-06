import { getCurrentYear } from "../../../utils";

/**
 * Footer component that displays copyright information
 * @returns {JSX.Element} Footer element with current year and company name
 */
function Footer() {
  return (
    <footer className="footer">
      {/* Display copyright text with current year */}
      <p className="footer__text">Copyright {getCurrentYear()} Argent Bank</p>
    </footer>
  );
}

export default Footer;
