import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

function ButtonScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-1 right-1 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="bg-sky-500 p-1 md:p-2 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        onClick={scrollToTop}
      >
        <ChevronUpIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default ButtonScrollUp;