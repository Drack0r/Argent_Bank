import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageMeta = () => {
  const location = useLocation();

  useEffect(() => {
    const bodyElement = document.body;

    // Configuration par page
    const pageConfig = {
      "/": {
        bodyClass: "page-home",
        title: "Argent Bank - Home Page",
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

    const config = pageConfig[location.pathname] || {
      bodyClass: "page-notfound",
      title: "Argent Bank - Page Not Found",
    };

    // Supprime toutes les classes de page
    bodyElement.className = bodyElement.className
      .split(" ")
      .filter((cls) => !cls.startsWith("page-") && cls !== "bg-dark")
      .join(" ");

    // Ajoute les nouvelles classes
    bodyElement.classList.add(...config.bodyClass.split(" "));

    // Met à jour le titre
    document.title = config.title;

    return () => {
      // Cleanup
      bodyElement.className = bodyElement.className
        .split(" ")
        .filter((cls) => !cls.startsWith("page-") && cls !== "bg-dark")
        .join(" ");
    };
  }, [location.pathname]);
};

export default usePageMeta;
