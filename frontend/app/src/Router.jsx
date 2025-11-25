import { Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, UserPage, NotFoundPage } from "./pages";
import { Layout } from "./components/layout";
import usePageMeta from "./hooks/usePageMeta";

function Router() {
  usePageMeta();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default Router;
