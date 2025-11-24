import { Link } from "react-router-dom";

function AuthButton() {
  return (
    <Link className="header__action" to="/sign-in">
      <i className="fa fa-user-circle"></i>

      <span>Sign In</span>
    </Link>
  );
}

export default AuthButton;
