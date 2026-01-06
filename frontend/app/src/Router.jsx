import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import ProtectedRoute from "./components/layout/ProtectedRoute/ProtectedRoute";
import { HomePage, SignInPage, UserPage, NotFoundPage } from "./pages";

/**
 * Main Router component that defines all application routes
 * @returns {JSX.Element} The router configuration wrapped in a layout
 */
function Router() {
  return (
    <Layout>
      <Routes>
        {/* Home page route - publicly accessible */}
        <Route path="/" element={<HomePage />} />

        {/* Sign-in page route - publicly accessible */}
        <Route path="/sign-in" element={<SignInPage />} />

        {/* User profile page - protected route requiring authentication */}
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default Router;
