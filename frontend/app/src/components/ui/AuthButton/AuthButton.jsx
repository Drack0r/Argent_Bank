import { Link } from "react-router-dom";

function AuthButton({ label, isSignOut = false, isUser = false, onClick }) {
  if (isSignOut) {
    return (
      <button className="header__action" onClick={onClick}>
        <i className="fa fa-sign-out"></i>

        <span>{label}</span>
      </button>
    );
  }

  if (isUser) {
    return (
      <Link className="header__action" to="/user">
        <i className="fa fa-user-circle"></i>

        <span>{label}</span>
      </Link>
    );
  }

  return (
    <Link className="header__action" to="/sign-in">
      <i className="fa fa-user-circle"></i>

      <span>{label}</span>
    </Link>
  );
}

export default AuthButton;
