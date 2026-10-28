import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed mb-6 mr-3 bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary-dark transition duration-300"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
