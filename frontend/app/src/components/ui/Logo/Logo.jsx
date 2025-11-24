import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="header__logo" to="/">
      <img src="/images/argentBankLogo.png" alt="Argent Bank Logo" />

      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  );
}

export default Logo;
