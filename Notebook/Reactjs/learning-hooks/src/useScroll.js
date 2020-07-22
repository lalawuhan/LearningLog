import React, { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollVertical, setScrollVertical] = useState();
  const handleVerticaScroll = () => {
    if (window.pageYOffset !== 0) {
      console.log("window:", window.pageYOffset);
      setScrollVertical(window.pageYOffset);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleVerticaScroll);
    return () => {
      window.removeEventListener("scroll", handleVerticaScroll);
    };
  });
  return scrollVertical;
};

export default useScroll;
