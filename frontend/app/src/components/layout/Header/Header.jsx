import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../slices/authSlice";
import { persistor } from "../../../store";
import { Logo, AuthButton } from "../../ui";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const isUserPage = location.pathname === "/user";

  const handleSignOut = async () => {
    dispatch(logout());
    await persistor.purge();
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />

        <div className="header__actions">
          {!isAuthenticated && <AuthButton label={"Sign In"} />}

          {isAuthenticated && (
            <AuthButton label={user?.userName || "User"} isUser={true} />
          )}

          {isAuthenticated && (
            <AuthButton
              label={"Sign Out"}
              isSignOut={true}
              onClick={handleSignOut}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
