import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook that manages page-specific metadata and body classes based on the current route.
 * Updates document title and body className when the route changes.
 */
const usePageMeta = () => {
  const location = useLocation();

  useEffect(() => {
    const bodyElement = document.body;

    // Configuration object mapping routes to their specific metadata
    const pageConfig = {
      "/": {
        bodyClass: "page-home",
        title: "Argent Bank - Home Page",
        preloadImage: "/images/bank-tree.webp", // Preload hero background image
      },
      "/sign-in": {
        bodyClass: "page-signin",
        title: "Argent Bank - Sign In",
      },
      "/user": {
        bodyClass: "page-user",
        title: "Argent Bank - Profile",
      },
    };

    // Get configuration for current route or fallback to 404 config
    const config = pageConfig[location.pathname] || {
      bodyClass: "page-notfound",
      title: "Argent Bank - Page Not Found",
    };

    // Remove existing page-specific classes and bg-dark class from body
    // Filter out any classes that start with 'page-' or are 'bg-dark'
    bodyElement.className = bodyElement.className
      .split(" ")
      .filter((cls) => !cls.startsWith("page-") && cls !== "bg-dark")
      .join(" ");

    // Add the new page-specific class(es) to body element
    bodyElement.classList.add(...config.bodyClass.split(" "));

    // Update the document title for the current page
    document.title = config.title;

    // Handle preload links - remove existing ones first
    const existingPreloadLinks = document.querySelectorAll(
      'link[rel="preload"][data-page-specific="true"]'
    );
    existingPreloadLinks.forEach((link) => link.remove());

    // Add preload link if specified for current page
    if (config.preloadImage) {
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.href = config.preloadImage;
      preloadLink.as = "image";
      preloadLink.setAttribute("data-page-specific", "true"); // Mark for easy removal
      document.head.appendChild(preloadLink);
    }

    // Cleanup function: remove page-specific classes and preload links when component unmounts or pathname changes
    return () => {
      // Remove page classes
      bodyElement.className = bodyElement.className
        .split(" ")
        .filter((cls) => !cls.startsWith("page-") && cls !== "bg-dark")
        .join(" ");

      // Remove preload links
      const preloadLinks = document.querySelectorAll(
        'link[rel="preload"][data-page-specific="true"]'
      );
      preloadLinks.forEach((link) => link.remove());
    };
  }, [location.pathname]);
};

export default usePageMeta;
