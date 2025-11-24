import { useLocation } from "react-router-dom";
import { Logo, AuthButton } from "../../ui";

function Header() {
  const location = useLocation();
  const isUserPage = location.pathname === "/user";

  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />

        <div className="header__actions">
          {!isUserPage && <AuthButton label={"Sign In"} />}

          {isUserPage && <AuthButton label={"Tony"} isUser={true} />}

          {isUserPage && <AuthButton label={"Sign Out"} isSignOut={true} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
