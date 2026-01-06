/**
 * NotFoundPage component - displays a 404 error page
 * @returns {JSX.Element} A React component showing error message and description
 */
function NotFoundPage() {
  return (
    <>
      {/* Main error heading with error class for styling */}
      <h1 className="error">Error 404</h1>

      {/* Descriptive message explaining the error to the user */}
      <p>Page not found. The page you are looking for does not exist.</p>
    </>
  );
}

export default NotFoundPage;
