import { Link } from "react-router-dom";

function Button({ className, isButton = false, href, children }) {
  if (isButton) {
    return <button className={className}>{children}</button>;
  }

  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}

export default Button;
