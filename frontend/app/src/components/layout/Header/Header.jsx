import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* Navigation */}
      <nav className="header__nav">
        {/* Logo */}
        <Link className="header__logo" to="/">
          <img
            className="header__logo-image"
            src="/images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div className="header__actions"></div>
        {/* AuthButton */}
        <Link className="header__nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          <span>Sign In</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
