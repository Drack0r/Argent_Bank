import { Link } from "react-router-dom";

function Button({
  className,
  isButton = false,
  href,
  children,
  buttonType,
  disabled,
}) {
  if (isButton) {
    return (
      <button type={buttonType} className={className} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <Link className={className} to={href} disabled={disabled}>
      {children}
    </Link>
  );
}

export default Button;
