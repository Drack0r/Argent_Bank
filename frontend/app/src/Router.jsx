import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import ProtectedRoute from "./components/layout/ProtectedRoute/ProtectedRoute";
import { HomePage, SignInPage, UserPage, NotFoundPage } from "./pages";

function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default Router;
