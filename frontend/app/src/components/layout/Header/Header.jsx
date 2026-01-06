import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../slices/authSlice";
import { persistor } from "../../../store";
import { Logo, AuthButton } from "../../ui";

/**
 * Header component that displays the main navigation bar
 * Handles user authentication state and sign out functionality
 */
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Get authentication state and user data from Redux store
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  /**
   * Handles user sign out process
   * Dispatches logout action, purges persisted data, and redirects to home
   */
  const handleSignOut = async () => {
    dispatch(logout());
    await persistor.purge();
    navigate("/");
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />

        <div className="header__actions">
          {/* Show Sign In button when user is not authenticated */}
          {!isAuthenticated && <AuthButton label={"Sign In"} />}

          {/* Show username when user is authenticated */}
          {isAuthenticated && (
            <AuthButton label={user?.userName || "User"} isUser={true} />
          )}

          {/* Show Sign Out button when user is authenticated */}
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
