import { Logo, AuthButton } from "../../ui";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />

        <div className="header__actions">
          <AuthButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
