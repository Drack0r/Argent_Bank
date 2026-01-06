import { Header, Footer } from "..";

/**
 * Layout component that provides the main application structure.
 * Wraps the application content with a consistent header, main content area, and footer.
 *
 * @param {React.ReactNode} children - The content to be rendered within the main section
 * @returns {JSX.Element} The layout structure with header, main content, and footer
 */
function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
