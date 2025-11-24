import { useEffect } from "react";

const usePageClass = (className) => {
  useEffect(() => {
    const mainElement = document.querySelector(".main");

    if (mainElement) {
      mainElement.classList.add(className);
    }

    return () => {
      if (mainElement) {
        mainElement.classList.remove(className);
      }
    };
  }, [className]);
};

export default usePageClass;
