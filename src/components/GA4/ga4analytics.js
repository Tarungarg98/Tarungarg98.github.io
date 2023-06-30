import { useEffect } from "react";
import ReactGA from "react-ga4";

const useGAEvent = (category, label) => {
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      ReactGA.event("click", {
        category,
        label,
        // location: window.location.pathname + window.location.search,
      });

      // Perform your routing logic here
      window.location.href = event.target.href;
    };

    const elements = document.querySelectorAll(`a[href="${label}"]`);
    elements.forEach((element) => {
      element.addEventListener("click", handleClick);
    });

    const open_navigation_button = document.querySelector("open_navigation");
    open_navigation_button.addEventListener("click", handleClick);
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
      open_navigation_button.removeEventListener("click", handleClick);
    };
  }, [category, label]);
};

export default useGAEvent;
