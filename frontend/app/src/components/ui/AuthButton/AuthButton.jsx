import { Link } from "react-router-dom";

/**
 * AuthButton component - Renders different authentication buttons based on user state
 * @param {boolean} isSignOut - If true, renders a sign out button
 * @param {boolean} isUser - If true, renders a user profile link
 * @param {string} label - Text to display in the button/link
 * @param {function} onClick - Click handler for sign out button
 */
function AuthButton({ isSignOut = false, isUser = false, label, onClick }) {
  // Render sign out button with click handler
  if (isSignOut) {
    return (
      <button className="header__action" onClick={onClick}>
        <i className="fa fa-sign-out"></i>
        <span>{label}</span>
      </button>
    );
  }

  // Render user profile link (navigates to user page)
  if (isUser) {
    return (
      <Link className="header__action" to="/user">
        <i className="fa fa-user-circle"></i>
        <span>{label}</span>
      </Link>
    );
  }

  // Default: render sign in link (navigates to sign-in page)
  return (
    <Link className="header__action" to="/sign-in">
      <i className="fa fa-user-circle"></i>
      <span>{label}</span>
    </Link>
  );
}

export default AuthButton;
