import { Link } from "react-router-dom";

/**
 * A versatile Button component that can render either as a button element or a Link component
 * @param {string} buttonType - The type attribute for button element (default: "button")
 * @param {boolean} isButton - Determines whether to render as button or Link (default: false)
 * @param {string} className - CSS classes to apply
 * @param {string} href - URL for Link navigation (used when isButton is false)
 * @param {React.ReactNode} children - Content to display inside the button/link
 * @param {function} onClick - Click handler for button element
 * @param {object} props - Additional props to spread to the rendered element
 */
function Button({
  buttonType = "button",
  isButton = false,
  className,
  href,
  children,
  onClick,
  ...props
}) {
  // Render as button element when isButton is true
  if (isButton) {
    return (
      <button
        type={buttonType}
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Default: render as Link component for navigation
  return (
    <Link className={className} to={href} {...props}>
      {children}
    </Link>
  );
}

export default Button;
