import { useEffect } from "react";

/**
 * Custom hook to add/remove CSS classes to the main element
 * @param {string} className - The CSS class name to add to the main element
 */
const usePageClass = (className) => {
  useEffect(() => {
    // Find the main element in the DOM
    const mainElement = document.querySelector(".main");

    // Add the specified class if the element exists
    if (mainElement) {
      mainElement.classList.add(className);
    }

    // Cleanup function: remove the class when component unmounts or className changes
    return () => {
      if (mainElement) {
        mainElement.classList.remove(className);
      }
    };
  }, [className]);
};

export default usePageClass;
