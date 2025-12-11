import { Header, Footer } from "..";

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
