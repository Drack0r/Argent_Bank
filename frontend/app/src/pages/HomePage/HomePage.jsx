import usePageMeta from "../../hooks/usePageMeta";
import { Hero, Features } from "../../components/sections/";

/**
 * HomePage component that renders the main landing page
 * Contains the hero section and features section
 */
function HomePage() {
  usePageMeta();
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Features section */}
      <Features />
    </>
  );
}

export default HomePage;
