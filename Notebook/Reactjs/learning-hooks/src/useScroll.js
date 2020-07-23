import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollVertical, setScrollVertical] = useState(0);
  const handleVerticaScroll = () => {
    setScrollVertical(window.pageYOffset);
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
