import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute component that restricts access to authenticated users only
 * @param {React.ReactNode} children - Child components to render if authenticated
 * @returns {JSX.Element} Loading state, redirect, or children components
 */
function ProtectedRoute({ children }) {
  // Get authentication state from Redux store
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  // Show loading message while authentication is being verified
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Redirect to sign-in page if user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  // Render children components if user is authenticated
  return children;
}

export default ProtectedRoute;
