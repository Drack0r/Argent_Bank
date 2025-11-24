import { getCurrentYear } from "../../../utils";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Copyright {getCurrentYear()} Argent Bank</p>
    </footer>
  );
}

export default Footer;
